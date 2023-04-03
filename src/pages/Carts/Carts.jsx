import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, deleteStorage } from "../../redux-toolkit/cartSlice";
import CartItems from "../CartItems/CartItems";
import * as S from "./styles";

const Carts = () => {
  const cartLists = useSelector((state) => state.cart?.cartItems);
  const total = new Intl.NumberFormat("ko-KR", {
    maximumSignificantDigits: 3,
  }).format(
    cartLists?.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
  );

  const id = useParams();
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (id && location.search) {
      dispatch(addToCart({ id, quantity }));
    }
  }, [dispatch, id, quantity]);

  const onClickHandler = () => {
    if (user === null) {
      alert("로그인 해주세요");
      navigate("/login");

      localStorage.removeItem("cartItems");
      dispatch(deleteStorage());
    } else {
      navigate("/shipping");
    }
  };

  return (
    <S.Container>
      <S.Group>
        <S.TotalCartItem>
          <S.Title>장바구니 ({cartLists ? cartLists?.length : 0})</S.Title>
        </S.TotalCartItem>
        {cartLists.length === 0 ? (
          <>
            <S.Title>카트에 제품을 추가해주세요</S.Title>
            <S.CartButtonGroup>
              <S.CartLink to="/" style={{ width: "100%" }}>
                쇼핑하기
              </S.CartLink>
            </S.CartButtonGroup>
          </>
        ) : (
          <>
            {cartLists?.map((cart, index) => (
              <CartItems key={index} {...cart} qty={cart.quantity} />
            ))}
            <S.Wrapper>
              <S.TotalBox>
                <S.Total>TOTAL :</S.Total>
                <S.TotalText>{total}원</S.TotalText>
              </S.TotalBox>
            </S.Wrapper>
            <S.CartButtonGroup>
              <S.CartLink to="/">쇼핑하기</S.CartLink>
              <S.Button onClick={() => onClickHandler()}>결제하기</S.Button>
            </S.CartButtonGroup>
          </>
        )}
      </S.Group>
    </S.Container>
  );
};

export default Carts;
