import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../../redux-toolkit/cartSlice";
import * as S from "./styles";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("Paypal");
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <S.Container>
      <S.Wrapper onSubmit={submitHandler}>
        <S.Title>결제방법</S.Title>
        <S.PaymentBox>
          <S.Input
            type="radio"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            checked
          />
          <S.Label>PaPal Checkout</S.Label>
        </S.PaymentBox>
        <S.Button type="submit">Continue</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Payment;
