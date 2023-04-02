import styled from "styled-components";
import { Mobile } from "../../responsive";

export const Container = styled.div`
  max-width: 130rem;
  padding: 20rem 3.2rem;
  margin: 0 auto;

  ${Mobile({
    padding: "10rem 3.2rem",
  })}
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 4.8rem;
  text-align: center;
  letter-spacing: 1px;
  color: #7ed56f;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 6vw);
  grid-gap: 1.5rem;
  padding: 1.5rem;

  ${Mobile({
    display: "flex",
    flexDirection: "column",
    gap: "6rem",
  })}

  & .item1 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;

    ${Mobile({
      display: "none",
    })}
  }

  & .item2 {
    grid-row: 6 / span 2;
    grid-column: 8 / span 1;

    ${Mobile({
      display: "none",
    })}
  }

  & .item3 {
    grid-row: 4 / span 1;
    grid-column: 5 / span 1;

    ${Mobile({
      display: "none",
    })}
  }

  & .item4 {
    grid-row: 1 / span 2;
    grid-column: 7 / span 2;

    ${Mobile({
      display: "none",
    })}
  }

  & .item5 {
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
  }

  & .item6 {
    grid-row: 4 / span 2;
    grid-column: 3 / span 2;

    ${Mobile({
      display: "none",
    })}
  }

  & .item7 {
    grid-row: 1 / span 2;
    grid-column: 6 / span 1;

    ${Mobile({
      display: "none",
    })}
  }

  & .item8 {
    grid-row: 3 / span 2;
    grid-column: 6 / span 2;

    ${Mobile({
      display: "none",
    })}
  }

  & .item9 {
    grid-row: 3 / span 3;
    grid-column: 8 / span 1;
  }

  & .item10 {
    grid-row: 6 / span 2;
    grid-column: 1 / span 1;
  }

  & .item11 {
    grid-row: 6 / span 2;
    grid-column: 2 / span 2;

    ${Mobile({
      display: "none",
    })}
  }

  & .item12 {
    grid-row: 6 / span 2;
    grid-column: 4 / span 1;
  }

  & .item13 {
    grid-row: 5 / span 3;
    grid-column: 5 / span 3;
  }

  & .item14 {
    grid-row: 1 / span 3;
    grid-column: 3 / span 3;
  }
`;

export const ImageBox = styled.figure`
  ${Mobile({
    padding: "0rem 6rem",
  })}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: conver;
`;
