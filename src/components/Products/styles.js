import styled from "styled-components";
import { Desktops, Laptops, Mobile, Tablets } from "../../responsive";

export const Container = styled.div`
  max-width: 140rem;
  padding: 9.6rem 3.2rem;
  margin: 0 auto;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 4.8rem;
  text-align: center;
  letter-spacing: 1px;
  color: #7ed56f;

  ${Tablets({
    marginBottom: "1rem",
  })}

  ${Mobile({
    marginBottom: "2rem",
  })}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.2rem;

  & .rec {
    & .rec-arrow {
      opacity: 0.5;
      margin-bottom: 13rem;
      color: #333;
    }
  }

  & .rec.rec-arrow-left:hover:enabled,
  .rec.rec-arrow-right:hover:enabled {
    opacity: 0.6;
    background-color: #7ed56f;
    box-shadow: 0 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 3.2rem 6.4rem;
  width: 100%;

  ${Desktops({
    marginLeft: "4.8rem",
  })}

  ${Laptops({
    marginLeft: "3.6rem",
  })}

  ${Tablets({
    justifyContent: "center",
    marginLeft: "0rem",
  })}

  ${Mobile({
    justifyContent: "center",
    marginLeft: "0rem",
  })}

  & select {
    border: none;
    border-radius: 6px;
    background-color: #ececec;
    padding: 1.2rem 1.2rem;
    cursor: pointer;
    font-family: inherit;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.5;

    ${Tablets({
      textAlign: "center",
    })}

    &:last-of-type {
      ${Tablets({
        marginLeft: "2rem",
      })}

      ${Mobile({
        marginLeft: "2rem",
      })}

      margin-left: 1.4rem;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 0.9;
      font-weight: 500;
    }

    ${Mobile({
      textAlign: "center",
    })}
  }
`;
