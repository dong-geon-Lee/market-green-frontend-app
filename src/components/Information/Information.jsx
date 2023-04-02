import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Information = () => {
  const navigate = useNavigate();

  const notFoundLink = () => {
    navigate("/notFound");
  };

  return (
    <S.Container id="information">
      <S.MainText>Promotion</S.MainText>
      <S.Wrapper>
        <S.Content />
        <S.InformationBox>
          <S.Title>Get More plants</S.Title>
          <S.Div onClick={() => notFoundLink()}>
            <S.Button>More Information</S.Button>
          </S.Div>
        </S.InformationBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default Information;
