import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux-toolkit/cartSlice";
import * as S from "./styles";

const CartItems = ({ product, title, price, img, qty }) => {
  const dispatch = useDispatch();

  const removeItemCart = (product) => {
    dispatch(removeFromCart(product));
  };

  let prices = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  let total = (price * qty)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <S.Wrapper>
      <S.ProductGroup>
        <S.OrderBtn onClick={() => removeItemCart(product)}>x</S.OrderBtn>
        <S.ImgBox>
          <S.Image src={`${process.env.REACT_APP_BASEURL}/${img}`} alt="make" />
        </S.ImgBox>

        <S.InfoBox>
          <S.TitleBox>
            <S.Title>product</S.Title>
            <S.Title>{title}</S.Title>
          </S.TitleBox>
          <S.StockBox>
            <S.Stock>Quantity</S.Stock>
            <S.Stock>{qty}</S.Stock>
          </S.StockBox>
          <S.PriceBox>
            <S.Price>Price</S.Price>
            <S.Price>{prices}</S.Price>
          </S.PriceBox>
          <S.PriceBox>
            <S.Price>Total</S.Price>
            <S.Price>{total}</S.Price>
          </S.PriceBox>
        </S.InfoBox>
      </S.ProductGroup>
    </S.Wrapper>
  );
};

export default CartItems;
