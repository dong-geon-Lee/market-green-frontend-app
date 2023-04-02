import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, reset } from "../../redux-toolkit/userSlice";
import { offSpinner, onSpinner } from "../../redux-toolkit/spinnerSlice";
import Spinner from "../../components/Spinner/Spinner";
import * as S from "./styles";

const Register = () => {
  const isLoading = useSelector((state) => state.spinner.isLoading);
  const { error, user } = useSelector((state) => state.user);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = userData;

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [password2Touched, setPassword2Touched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const emailIsValid = email.includes("@");
  const passwordIsValid = password.trim() !== "" && password.length > 3;
  const password2IsValid =
    password2.trim() !== "" && password2.length > 3 && password === password2;

  const nameInputIsInvalid = !name && nameTouched;
  const emailInputIsInvalid = !email && emailTouched;
  const passwordInputIsInvalid = !password && passwordTouched;
  const password2InputIsInvalid = !password2 && password2Touched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid && passwordIsValid && password2IsValid) {
    formIsValid = true;
  }

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const nameInputBlurHandler = () => {
    setNameTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEmailTouched(true);
  };

  const passwordInputBlurHandler = () => {
    setPasswordTouched(true);
  };

  const password2InputBlurHandler = () => {
    setPassword2Touched(true);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(reset());
      }, 5000);
    }

    if (user) {
      alert("회원가입 되었습니다");
      navigate("/login");
    }
  }, [dispatch, navigate, user, error]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    dispatch(registerUser(newUser));

    setUserData({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

    setNameTouched(false);
    setEmailTouched(false);
    setPasswordTouched(false);
    setPassword2Touched(false);

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
          <S.Box inValidName={nameInputIsInvalid}>
            <S.Label>Name</S.Label>
            <S.Input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              onBlur={nameInputBlurHandler}
              placeholder="Enter name..."
              className="nameInput"
            />
            {nameInputIsInvalid && <S.Message>이름을 입력하세요</S.Message>}
          </S.Box>
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
            {emailInputIsInvalid ? (
              <S.Message>이메일을 입력하세요</S.Message>
            ) : (
              email &&
              !emailIsValid && (
                <S.Message>
                  이메일에{" "}
                  <S.Strong style={{ fontSize: "1.6rem" }}>'@'</S.Strong>을
                  입력하세요
                </S.Message>
              )
            )}
          </S.Box>
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
            {passwordInputIsInvalid ? (
              <S.Message>비밀번호를 입력하세요</S.Message>
            ) : (
              password &&
              !passwordIsValid && (
                <S.Message>비밀번호는 4자 이상 입력하세요 </S.Message>
              )
            )}
          </S.Box>
          <S.Box inValidPassword2={password2InputIsInvalid}>
            <S.Label>Password Confirm</S.Label>
            <S.Input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              onBlur={password2InputBlurHandler}
              placeholder="Password Confirm..."
              className="password2Input"
            />
            {password2InputIsInvalid ? (
              <S.Message>비밀번호를 입력하세요</S.Message>
            ) : (
              passwordIsValid &&
              !password2IsValid && (
                <S.Message>비밀번호가 일치하지 않습니다</S.Message>
              )
            )}
          </S.Box>

          <S.Button type="submit" disabled={!formIsValid}>
            회원가입
          </S.Button>
          {error && <S.MessageResult>{error}</S.MessageResult>}
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Register;
