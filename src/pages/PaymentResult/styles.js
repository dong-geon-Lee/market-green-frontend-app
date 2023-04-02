import styled from "styled-components";
import { Mobile } from "../../responsive";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80");
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
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 2px;
    margin: 3rem 0;
    color: blue;
  }

  & #customers {
    width: 100%;
    border-collapse: collapse;

    ${Mobile({
      width: "48vw",
    })}

    & td,
    & th {
      font-family: inherit;
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.5;
      color: #000;
      border: 1px solid black;
      padding: 1.2rem 1.6rem;
      text-align: center;

      ${Mobile({
        padding: "1.2rem",
      })}
    }

    & td:nth-child(even) {
      background-color: #f2f2f2;
    }

    & td:nth-child(odd) {
      background-color: #fff;
    }

    & td:last-child {
      color: red;
    }

    & thead {
      background-color: #04aa6d;

      & td:hover {
        background-color: #ddd;
      }
    }
  }
`;

export const table = styled.table``;
