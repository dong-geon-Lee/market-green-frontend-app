import styled from "styled-components";
import { Mobile } from "../../responsive.js";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://images.unsplash.com/photo-1530487834809-19eca6fc2de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3.2rem;
  row-gap: 3.6rem;
  width: 60rem;

  ${Mobile({
    display: "flex",
    flexDirection: "column",
  })}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  ${Mobile({
    width: "100%",
    alignItems: "center",
  })}

  & .imgInput {
    border: ${(props) =>
      props.inValidImg ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidImg ? "#fddddd" : "#fff")};
  }

  & .imgInput:focus {
    background-color: ${(props) => (props.inValidImg ? "#fbe8d2" : "#e5dbff")};
    border-color: ${(props) => (props.inValidImg ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .titleInput {
    border: ${(props) =>
      props.inValidTitle ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidTitle ? "#fddddd" : "#fff")};
  }

  & .titleInput:focus {
    background-color: ${(props) =>
      props.inValidTitle ? "#fbe8d2" : "#e5dbff"};
    border-color: ${(props) => (props.inValidTitle ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .descInput {
    border: ${(props) =>
      props.inValidDesc ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidDesc ? "#fddddd" : "#fff")};
  }

  & .descInput:focus {
    background-color: ${(props) => (props.inValidDesc ? "#fbe8d2" : "#e5dbff")};
    border-color: ${(props) => (props.inValidDesc ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .priceInput {
    border: ${(props) =>
      props.inValidPrice ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidPrice ? "#fddddd" : "#fff")};
  }

  & .priceInput:focus {
    background-color: ${(props) =>
      props.inValidPrice ? "#fbe8d2" : "#e5dbff"};
    border-color: ${(props) => (props.inValidPrice ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .inStockInput {
    border: ${(props) =>
      props.inValidInStock ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidInStock ? "#fddddd" : "#fff")};
  }

  & .inStockInput:focus {
    background-color: ${(props) =>
      props.inValidInStock ? "#fbe8d2" : "#e5dbff"};
    border-color: ${(props) => (props.inValidInStock ? "#ff8800" : "#240370")};
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

  ${Mobile({
    width: "65%",
    textAlign: "left",
  })}
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.6rem;
  font-family: inherit;
  border: 1px solid #9f9f9f;
  border-radius: 9px;

  ${Mobile({
    width: "65%",
    alignItems: "center",
  })}
`;

export const Button = styled.button`
  display: block;
  grid-column: 1 / 2;
  padding: 1.6rem;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: inherit;
  margin: 1.2rem 0;
  color: #fff;
  background-color: #fa5252;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  border-radius: 9px;
  width: 100%;

  ${Mobile({
    width: "65%",
    margin: "2.4rem auto 0rem auto",
  })}

  &:nth-of-type(2) {
    ${Mobile({
      marginTop: "0rem",
    })}
  }

  &:hover {
    background-color: #f03e3e;
  }

  & + button {
    grid-row: 4 / 5;
    grid-column: 2 / 3;
    background-color: #4ba87d;

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
  }
`;

export const Message = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #f03e3e;
  margin-top: 0.3rem;
`;

export const MessageResult = styled(Message)`
  font-size: 1.4rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  margin-top: -3rem;
`;
