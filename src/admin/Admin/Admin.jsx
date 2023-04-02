import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Admin = () => {
  return (
    <S.Container>
      <S.Title>관리자 페이지</S.Title>
      <Link to="/productForm">상품 등록하기</Link>
    </S.Container>
  );
};

export default Admin;
