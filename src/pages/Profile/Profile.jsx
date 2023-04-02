import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, tryAuth } from "../../redux-toolkit/userSlice";
import * as S from "./styles";

const Profile = () => {
  const { _id, name, email } = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(tryAuth());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteUser({ id: _id }));
    alert("회원탈퇴 완료");
    navigate("/");
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Form onSubmit={onSubmit}>
          <S.Box>
            <S.Label>Name</S.Label>
            <S.UserText>{name}</S.UserText>
          </S.Box>

          <S.Box>
            <S.Label>E-mail</S.Label>
            <S.UserText>{email}</S.UserText>
          </S.Box>

          <S.BtnBox>
            <S.LinkBox>
              <Link to="/profileEdit">프로필 변경</Link>
            </S.LinkBox>
            <S.LinkBox>
              <Link to="/paymentResult">결제 내역</Link>
            </S.LinkBox>
            <S.Button type="submit">회원 탈퇴</S.Button>
          </S.BtnBox>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Profile;
