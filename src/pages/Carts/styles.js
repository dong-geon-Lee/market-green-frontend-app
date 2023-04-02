import styled from "styled-components";
import { Laptops, Mobile, Tablets } from "../../responsive";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 9.6rem 3.2rem;
  margin: 4rem 0;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 3.2rem 3.2rem;
`;

export const TotalBox = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid #eee;
  width: 100%;
  align-items: center;
  padding: 1rem 0;
`;

export const TotalCartItem = styled.div`
  padding: 3.2rem;
  margin: 0 auto 1.6rem auto;
  background-color: #c5f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  border-radius: 9px;
`;

export const CartButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartLink = styled(Link)`
  display: inline-block;
  width: 50%;
  padding: 2.4rem;
  margin: 2.4rem 4rem;
  cursor: pointer;
  background-color: #212529;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 9px;

  &:hover {
    background-color: grey;
    transform: scale(1.02);
    font-weight: 800;
  }

  ${Laptops({
    width: "44%",
    margin: "2.4rem 2rem",
  })}

  ${Tablets({
    width: "43%",
    margin: "2.4rem 2rem",
  })}

  ${Mobile({
    width: "45%",
    margin: "2.4rem 2rem",
  })}
`;

export const Button = styled.button`
  display: inline-block;
  width: 50%;
  padding: 2.4rem;
  margin: 2.4rem 4rem;
  cursor: pointer;
  background-color: #2f9e44;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 9px;
  border: none;

  &:hover {
    background-color: green;
    transform: scale(1.02);
    font-weight: 800;
  }

  ${Laptops({
    width: "44%",
    margin: "2.4rem 2rem",
  })}

  ${Tablets({
    width: "43%",
    margin: "2.4rem 2rem",
  })}

  ${Mobile({
    width: "45%",
    margin: "2.4rem 2rem",
  })}
`;

export const TotalText = styled.p`
  display: inline-block;
  font-size: 2.6rem;
  font-weight: 700;
  margin-left: 1rem;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin-bottom: 0.6rem;
  color: #ff6b6b;
`;

export const Total = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.5;
  color: blue;
`;

export const Title = styled.h1``;
