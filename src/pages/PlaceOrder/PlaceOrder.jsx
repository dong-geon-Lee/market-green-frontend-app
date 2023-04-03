import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItemPrice,
  cartShippingPrice,
  cartTaxPrice,
  cartTotalPrice,
  deleteStorage,
} from "../../redux-toolkit/cartSlice";
import {
  createOrder,
  createOrderReset,
} from "../../redux-toolkit/orderSlice.js";
import * as S from "./styles";
import * as A from "../../assets/@index";

const PlaceOrder = () => {
  const user = useSelector((state) => state.user);
  const {
    user: { name, email },
  } = user;

  const cart = useSelector((state) => state.cart);
  const {
    cartItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = cart;

  const orderCreate = useSelector((state) => state.order);
  const { success, order } = orderCreate;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(cartItemPrice());
    dispatch(cartShippingPrice());
    dispatch(cartTaxPrice());
    dispatch(cartTotalPrice());

    if (success) {
      navigate(`/order/${order._id}`);
      dispatch(createOrderReset());
    }
  }, [navigate, success, dispatch, order]);

  const placeOrderHandler = (e) => {
    e.preventDefault();

    dispatch(deleteStorage());
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.OrderGroup>
          <S.OrderBox>
            <S.Circle>
              <A.FaUser />
            </S.Circle>

            <S.Info>
              <S.SubTitle>Customer</S.SubTitle>
              <S.Div>
                <S.Label>
                  <S.Strong>이름:</S.Strong>
                </S.Label>
                <S.Span>{name}</S.Span>
              </S.Div>
              <S.Div>
                <S.Label>
                  <S.Strong>이메일:</S.Strong>
                </S.Label>
                <S.Span>{email}</S.Span>
              </S.Div>
            </S.Info>
          </S.OrderBox>

          <S.OrderBox>
            <S.Circle>
              <A.FaTruck />
            </S.Circle>

            <S.Info>
              <S.SubTitle>Order information</S.SubTitle>
              <S.Div>
                <S.Label>
                  <S.Strong>지역:</S.Strong>
                </S.Label>
                <S.Span>{shippingAddress.city}</S.Span>
              </S.Div>
              <S.Div>
                <S.Label>
                  <S.Strong>결제: </S.Strong>
                </S.Label>
                <S.Span>{paymentMethod}</S.Span>
              </S.Div>
            </S.Info>
          </S.OrderBox>

          <S.OrderBox>
            <S.Circle>
              <A.FaMapMarker />
            </S.Circle>

            <S.Info>
              <S.SubTitle>Deliver to</S.SubTitle>
              <S.Div>
                <S.Label>
                  <S.Strong>도로명번호:</S.Strong>
                </S.Label>
                <S.Span>{shippingAddress.postalCode}</S.Span>
              </S.Div>
              <S.Div>
                <S.Label>
                  <S.Strong>상세주소:</S.Strong>
                </S.Label>
                <S.Span>{shippingAddress.address}</S.Span>
              </S.Div>
            </S.Info>
          </S.OrderBox>
        </S.OrderGroup>

        <S.ProductGroup>
          {cartItems.map((item) => (
            <S.CenterWrapper key={item.product}>
              <S.Center>
                <S.ImgBox>
                  <S.Image
                    src={`${process.env.REACT_APP_BASEURL}/${item.img}`}
                    alt="make"
                  />
                </S.ImgBox>

                <S.InfoListBox>
                  <S.TitleBox>
                    <S.TitleText>product</S.TitleText>
                    <S.Title>{item.title}</S.Title>
                  </S.TitleBox>
                  <S.StockBox>
                    <S.TitleText>Quantity</S.TitleText>
                    <S.Stock>{item.quantity}</S.Stock>
                  </S.StockBox>
                  <S.PriceBox>
                    <S.TitleText>Price</S.TitleText>
                    <S.Price>
                      {item.price
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </S.Price>
                  </S.PriceBox>
                </S.InfoListBox>
              </S.Center>
            </S.CenterWrapper>
          ))}
        </S.ProductGroup>
      </S.Wrapper>
      <S.TotalGroup>
        <S.Div>
          <S.TotalBox>
            <S.TotalLabel>Products</S.TotalLabel>
            <S.TotalSpan>
              +{" "}
              {new Intl.NumberFormat("Ko-KR", {
                maximumSignificantDigits: 3,
              }).format(itemsPrice)}{" "}
              원
            </S.TotalSpan>
          </S.TotalBox>

          <S.TotalBox>
            <S.TotalLabel>Shipping</S.TotalLabel>
            <S.TotalSpan>
              +{" "}
              {new Intl.NumberFormat("Ko-KR", {
                maximumSignificantDigits: 3,
              }).format(shippingPrice)}{" "}
              원
            </S.TotalSpan>
          </S.TotalBox>

          <S.TotalBox>
            <S.TotalLabel>Discount</S.TotalLabel>
            <S.TotalSpan>
              -{" "}
              {new Intl.NumberFormat("Ko-KR", {
                maximumSignificantDigits: 3,
              }).format(taxPrice)}{" "}
              원
            </S.TotalSpan>
          </S.TotalBox>

          <S.TotalBox>
            <S.TotalLabel>Total</S.TotalLabel>
            <S.TotalSpan>
              {new Intl.NumberFormat("Ko-KR", {
                maximumSignificantDigits: 3,
              }).format(totalPrice)}{" "}
              원
            </S.TotalSpan>
          </S.TotalBox>
        </S.Div>

        <S.Button onClick={placeOrderHandler}>주문하기</S.Button>
      </S.TotalGroup>
    </S.Container>
  );
};

export default PlaceOrder;
