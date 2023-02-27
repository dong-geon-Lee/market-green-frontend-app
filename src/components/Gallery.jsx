import React from "react";
import styled from "styled-components";
import { plantsData } from "../data/productDummy";
import { Mobile } from "../responsive";

export const Container = styled.div`
  max-width: 130rem;
  padding: 20rem 3.2rem;
  margin: 0 auto;

  & h1 {
    font-size: 3.6rem;
    font-weight: 800;
    margin-bottom: 4.8rem;
    text-align: center;
    letter-spacing: 1px;
    color: #7ed56f;
  }

  ${Mobile({
    padding: "10rem 3.2rem",
  })}
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

const Gallery = () => {
  return (
    <Container id="gallery">
      <h1>Gallery</h1>
      <Wrapper>
        <ImageBox className="item1">
          <Image src={plantsData[0].image} alt={plantsData[0].id}></Image>
        </ImageBox>
        <ImageBox className="item2">
          <Image src={plantsData[1].image} alt={plantsData[1].id}></Image>
        </ImageBox>
        <ImageBox className="item3">
          <Image src={plantsData[2].image} alt={plantsData[2].id}></Image>
        </ImageBox>
        <ImageBox className="item4">
          <Image src={plantsData[3].image} alt={plantsData[3].id}></Image>
        </ImageBox>
        <ImageBox className="item5">
          <Image src={plantsData[4].image} alt={plantsData[4].id}></Image>
        </ImageBox>
        <ImageBox className="item6">
          <Image
            src="https://user-images.githubusercontent.com/69576865/221578826-24d711d0-a2f2-432e-8b9b-e089ea414200.jpg"
            alt={plantsData[5].id}
          ></Image>
        </ImageBox>
        <ImageBox className="item7">
          <Image src={plantsData[6].image} alt={plantsData[6].id}></Image>
        </ImageBox>
        <ImageBox className="item8">
          <Image src={plantsData[7].image} alt={plantsData[7].id}></Image>
        </ImageBox>
        <ImageBox className="item9">
          <Image src={plantsData[8].image} alt={plantsData[8].id}></Image>
        </ImageBox>
        <ImageBox className="item10">
          <Image src={plantsData[9].image} alt={plantsData[9].id}></Image>
        </ImageBox>
        <ImageBox className="item11">
          <Image src={plantsData[10].image} alt={plantsData[10].id}></Image>
        </ImageBox>
        <ImageBox className="item12">
          <Image src={plantsData[11].image} alt={plantsData[11].id}></Image>
        </ImageBox>
        <ImageBox className="item13">
          <Image src={plantsData[12].image} alt={plantsData[11].id}></Image>
        </ImageBox>
        <ImageBox className="item14">
          <Image
            src="https://user-images.githubusercontent.com/69576865/221578758-5b9a537e-d94d-4044-a28c-3a5a98d3c90d.jpg"
            alt={plantsData[11].id}
          ></Image>
        </ImageBox>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
