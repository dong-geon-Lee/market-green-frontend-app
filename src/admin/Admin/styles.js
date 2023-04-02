import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;

  & a {
    font-size: 2.6rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.5px;
    margin: 4.2rem 0;
    text-decoration: none;
    color: #0b7285;
    background-color: #f1f3f5;
    padding: 1.6rem 2rem;
    border-radius: 9px;

    &:hover {
      background-color: #4ba87d;
      color: black;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4.6rem;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 1px;
  color: #fd7e14;
`;
