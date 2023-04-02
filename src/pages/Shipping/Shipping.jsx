import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addShippingInfo } from "../../redux-toolkit/cartSlice.js";
import * as S from "./styles";

const Shipping = () => {
  const shipping = useSelector((state) => state.cart?.shippingAddress);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shippingData, setShippingData] = useState({
    address: shipping.address,
    city: shipping.city,
    postalCode: shipping.postalCode,
    country: shipping.country,
  });

  const { address, city, postalCode, country } = shippingData;

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addShippingInfo({ address, city, postalCode, country }));

    navigate("/payment");
  };

  const onChange = (e) => {
    setShippingData(() => ({
      ...shippingData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Group>
          <S.Title>Delivery Address</S.Title>

          <S.Form onSubmit={submitHandler}>
            <S.InputBox>
              <S.Input
                type="text"
                name="address"
                value={address || ""}
                onChange={onChange}
                placeholder="Enter address"
              />
            </S.InputBox>

            <S.InputBox>
              <S.Input
                type="text"
                name="postalCode"
                value={postalCode || ""}
                onChange={onChange}
                placeholder="Enter postal code"
              />
            </S.InputBox>

            <S.InputBox>
              <S.Input
                type="text"
                name="city"
                value={city || ""}
                onChange={onChange}
                placeholder="Enter city"
              />
            </S.InputBox>

            <S.InputBox>
              <S.Input
                type="text"
                name="country"
                value={country || ""}
                onChange={onChange}
                placeholder="Enter country"
              />
            </S.InputBox>

            <S.InputBox>
              <S.Button type="submit">Continue</S.Button>
            </S.InputBox>
          </S.Form>
        </S.Group>
      </S.Wrapper>
    </S.Container>
  );
};

export default Shipping;
