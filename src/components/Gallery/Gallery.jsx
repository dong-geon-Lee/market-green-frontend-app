import React from "react";
import { plantsData } from "../../data/productDummy";
import * as S from "./styles";

const Gallery = () => {
  return (
    <S.Container id="gallery">
      <S.Title>Gallery</S.Title>
      <S.Wrapper>
        {plantsData.map((items, index) => (
          <S.ImageBox className={`item${index + 1}`}>
            <S.Image src={items.image} alt={items.id} />
          </S.ImageBox>
        ))}
        <S.ImageBox className="item14">
          <S.Image src={plantsData[11]?.image} alt={plantsData[11]?.id} />
        </S.ImageBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default Gallery;
