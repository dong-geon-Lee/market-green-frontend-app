import styled from "styled-components";
import { Laptops, Mobile, Tablets } from "../../responsive.js";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 12.8rem 0;
`;

export const Group = styled.div`
  border: 1px solid #e9ecef;
  padding: 2rem 4rem;
  width: 40%;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.2);

  ${Laptops({
    width: "43%",
  })}

  ${Tablets({
    width: "54%",
  })}

  ${Mobile({
    width: "60%",
  })}
`;

export const Form = styled.form``;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 1rem 0;
`;

export const InputBox = styled.div`
  padding: 1.8rem 1.2rem;
  border-radius: 0.3rem;
`;

export const Input = styled.input`
  padding: 1.6rem;
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f59f00;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

export const Button = styled.button`
  background-color: #4ba87d;
  color: #f1f3f5;
  padding: 1.6rem 2rem;
  font-style: inherit;
  font-size: 2rem;
  border: none;
  border-radius: 0.5rem;
  display: inline-block;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
