import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const NotFound = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Image src="../assets/page_ready.jpeg"></S.Image>
        <S.Button onClick={() => onClick()}>뒤로가기</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default NotFound;
