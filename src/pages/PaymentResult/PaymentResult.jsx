import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../redux-toolkit/orderSlice";
import moment from "moment";
import * as S from "./styles";

const PaymentResult = () => {
  const order = useSelector((state) => state.order.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [order._id, dispatch]);

  return (
    <S.Container>
      <S.Wrapper>
        <h1>{order && order[0]?.user.name}님의 결제내역</h1>

        <table id="customers">
          <thead>
            <tr>
              <th>orderID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>

            {order.map((data) => (
              <tr key={data._id}>
                <td>{data._id}</td>
                <td>{data.orderItems[0].title}</td>
                <td>{data.user.name}</td>
                <td>
                  {data.paidAt
                    ? data.paidAt?.split("T")[0]
                    : moment().format()?.split("T")[0]}
                </td>
                <td>
                  {data.totalPrice
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </td>
                <td>
                  {data.paymentResult?.status ? (
                    "결제완료"
                  ) : (
                    <strong style={{ color: "blue" }}>결제 대기 중</strong>
                  )}
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </S.Wrapper>
    </S.Container>
  );
};

export default PaymentResult;
