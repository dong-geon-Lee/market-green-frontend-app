import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteStorage } from "../../redux-toolkit/cartSlice";
import { PayPalButton } from "react-paypal-button-v2";
import {
  getOrderDetails,
  orderPayReset,
  payOrder,
} from "../../redux-toolkit/orderSlice.js";
import axios from "axios";
import * as S from "./styles";
import * as A from "../../assets/@index";

const OrderScreen = () => {
  const { id: orderId } = useParams();
  const [, setSdkReady] = useState(false);
  const orderInfo = useSelector((state) => state.order);
  const { orderDetails } = orderInfo;
  const orderPay = useSelector((state) => state.order);
  const { successPay } = orderPay;

  const dispatch = useDispatch();

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get(
        `${process.env.REACT_APP_BASEURL}/api/paypal`
      );

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!orderDetails || successPay) {
      dispatch(orderPayReset());
      dispatch(getOrderDetails({ id: orderId }));
    } else if (!orderDetails.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
        dispatch(orderPayReset());
      } else {
        setSdkReady(true);
        dispatch(orderPayReset());
      }
    }
  }, [dispatch, orderId, successPay]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder({ orderId, paymentResult }));
    alert("결제 완료 ");
    setTimeout(() => {
      localStorage.setItem("paymentResult", JSON.stringify(paymentResult));
      dispatch(deleteStorage());
      localStorage.removeItem("cartItems");
      window.location.href = "/";
    }, 3000);
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
                <S.Span>{orderDetails.user?.name}</S.Span>
              </S.Div>
              <S.Div>
                <S.Label>
                  <S.Strong>이메일:</S.Strong>
                </S.Label>
                <S.Span>{orderDetails.user?.email}</S.Span>
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
                <S.Span>{orderDetails.shippingAddress?.city}</S.Span>
              </S.Div>
              <S.Div>
                <S.Label>
                  <S.Strong>결제: </S.Strong>
                </S.Label>
                <S.Span>{orderDetails.paymentMethod}</S.Span>
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
                  <S.Strong>도로명주소:</S.Strong>
                </S.Label>
                <S.Span>{orderDetails.shippingAddress?.postalCode}</S.Span>
              </S.Div>
              <S.Div>
                <S.Label>
                  <S.Strong>상세주소:</S.Strong>
                </S.Label>
                <S.Span>{orderDetails.shippingAddress?.address}</S.Span>
              </S.Div>
            </S.Info>
          </S.OrderBox>
        </S.OrderGroup>

        <S.ProductGroup>
          {orderDetails?.orderItems?.map((item) => (
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
                    <S.Price>{item.price}</S.Price>
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
            <S.TotalSpan>+ {orderDetails.itemsPrice} 원</S.TotalSpan>
          </S.TotalBox>

          <S.TotalBox>
            <S.TotalLabel>Shipping</S.TotalLabel>
            <S.TotalSpan>+ {orderDetails.shippingPrice} 원</S.TotalSpan>
          </S.TotalBox>

          <S.TotalBox>
            <S.TotalLabel>Discount</S.TotalLabel>
            <S.TotalSpan>- {orderDetails.taxPrice} 원</S.TotalSpan>
          </S.TotalBox>

          <S.TotalBox>
            <S.TotalLabel>Total</S.TotalLabel>
            <S.TotalSpan>{orderDetails.totalPrice} 원</S.TotalSpan>
          </S.TotalBox>
        </S.Div>

        <PayPalButton
          amount={orderDetails.totalPrice}
          onSuccess={successPaymentHandler}
        />
      </S.TotalGroup>
    </S.Container>
  );
};

export default OrderScreen;
