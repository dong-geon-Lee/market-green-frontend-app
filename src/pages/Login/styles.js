import styled from "styled-components";
import { Laptops, Mobile } from "../../responsive";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://images.unsplash.com/photo-1534054950205-cb5a7f00180a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  ${Laptops({
    backgroundPosition: "revert",
  })}

  ${Mobile({
    backgroundPosition: "revert",
    backgroundSize: "200% 100%",
    backgroundRepeat: "no-repeat",
  })}
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 0.6rem;
  width: 40rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.6rem;
  transition: all 0.3s ease;

  & .emailInput {
    border: ${(props) =>
      props.inValidEmail ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidEmail ? "#fddddd" : "#fff")};
  }

  & .emailInput:focus {
    background-color: ${(props) =>
      props.inValidEmail ? "#fbe8d2" : "#f4fce3"};
    border-color: ${(props) => (props.inValidEmail ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .passwordInput {
    border: ${(props) =>
      props.inValidPassword ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) =>
      props.inValidPassword ? "#fddddd" : "#fff"};
  }

  & .passwordInput:focus {
    background-color: ${(props) =>
      props.inValidPassword ? "#fbe8d2" : "#f4fce3"};
    border-color: ${(props) => (props.inValidPassword ? "#ff8800" : "#240370")};
    outline: none;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
  color: #4ba87d;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit;
  border: 1px solid #9f9f9f;
  border-radius: 9px;
`;

export const Button = styled.button`
  display: block;
  grid-column: 1 / -1;
  padding: 1.6rem;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  font-family: inherit;
  margin: 3.6rem 0 1.8rem 0;
  color: #fff;
  background-color: #4ba87d;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  border-radius: 9px;

  &:hover,
  &:active {
    border-color: #2b8a3e;
    background-color: #2b8a3e;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    cursor: not-allowed;
    background-color: #ccc;
    border-color: #ccc;
    color: #292929;
  }
`;

export const Message = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #f03e3e;
`;

export const MessageResult = styled(Message)`
  font-size: 1.4rem;
  letter-spacing: 1.5px;
  font-weight: 700;
`;

export const Strong = styled.strong``;
