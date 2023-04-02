import React from "react";
import * as S from "./styles";
import * as A from "../../assets/@index";

const Spinner = () => {
  return (
    <S.SpinnerContainer>
      <S.SpinnerContent src={A.image} alt="spinner" />
    </S.SpinnerContainer>
  );
};

export default Spinner;
