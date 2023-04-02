import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12.8rem 0;
  height: 100%;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
  height: 25rem;
  border: 1px solid #e9ecef;
  padding: 2rem 4rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.2);
`;

export const PaymentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  background-color: #4ba87d;
  color: #f1f3f5;
  padding: 1.6rem 2rem;
  font-style: inherit;
  font-size: 2rem;
  border-radius: 5px;
`;

export const Input = styled.input``;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1rem;
`;
