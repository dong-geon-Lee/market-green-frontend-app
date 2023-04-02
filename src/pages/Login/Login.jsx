import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, reset } from "../../redux-toolkit/userSlice";
import { offSpinner, onSpinner } from "../../redux-toolkit/spinnerSlice";
import Spinner from "../../components/Spinner/Spinner";
import * as S from "./styles";

const Login = () => {
  const isLoading = useSelector((state) => state.spinner.isLoading);
  const { error, user, isSuccess } = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const emailIsValid = email.includes("@");
  const passwordIsValid = password.trim() !== "" && password.length > 3;

  const emailInputIsInvalid = !email && emailTouched;
  const passwordInputIsInvalid = !password && passwordTouched;

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const emailInputBlurHandler = () => {
    setEmailTouched(true);
  };

  const passwordInputBlurHandler = () => {
    setPasswordTouched(true);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(reset());
      }, 5000);
    }

    if (user && isSuccess) navigate("/");
  }, [dispatch, navigate, user, error]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };

    dispatch(loginUser(newUser));
    setUserData({
      email: "",
      password: "",
    });

    setEmailTouched(false);
    setPasswordTouched(false);
    dispatch(onSpinner(true));

    setTimeout(() => {
      dispatch(offSpinner(false));
    }, 1500);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {isLoading && <Spinner />}
        <S.Form onSubmit={onSubmit}>
          <S.Box inValidEmail={emailInputIsInvalid}>
            <S.Label>E-mail</S.Label>
            <S.Input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              onBlur={emailInputBlurHandler}
              placeholder="Enter email..."
              className="emailInput"
            />
          </S.Box>
          {emailInputIsInvalid ? (
            <S.Message>이메일을 작성해주세요</S.Message>
          ) : (
            email &&
            !emailIsValid && (
              <S.Message>
                이메일에 <S.Strong style={{ fontSize: "1.6rem" }}>'@'</S.Strong>
                을 포함시켜주세요
              </S.Message>
            )
          )}
          <S.Box inValidPassword={passwordInputIsInvalid}>
            <S.Label>Password</S.Label>
            <S.Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              onBlur={passwordInputBlurHandler}
              placeholder="Enter password..."
              className="passwordInput"
            />
          </S.Box>
          {passwordInputIsInvalid ? (
            <S.Message>비밀번호를 입력해주세요</S.Message>
          ) : (
            password &&
            !passwordIsValid && (
              <S.Message>비밀번호는 4자 이상 적어주세요</S.Message>
            )
          )}
          <S.Button type="submit" disabled={!formIsValid}>
            로그인
          </S.Button>
          {error && <S.MessageResult>{error}</S.MessageResult>}
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
