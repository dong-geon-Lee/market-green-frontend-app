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
            <S.Image src={items[index].image} alt={items[index].id} />
          </S.ImageBox>
        ))}
        {/* <S.ImageBox className="item2">
          <S.Image src={plantsData[1].image} alt={plantsData[1].id} />
        </S.ImageBox>
        <S.ImageBox className="item3">
          <S.Image src={plantsData[2].image} alt={plantsData[2].id} />
        </S.ImageBox>
        <S.ImageBox className="item4">
          <S.Image src={plantsData[3].image} alt={plantsData[3].id} />
        </S.ImageBox>
        <S.ImageBox className="item5">
          <S.Image src={plantsData[4].image} alt={plantsData[4].id} />
        </S.ImageBox>
        <S.ImageBox className="item6">
          <S.Image src={plantsData[5].image} alt={plantsData[5].id} />
        </S.ImageBox>
        <S.ImageBox className="item7">
          <S.Image src={plantsData[6].image} alt={plantsData[6].id} />
        </S.ImageBox>
        <S.ImageBox className="item8">
          <S.Image src={plantsData[7].image} alt={plantsData[7].id} />
        </S.ImageBox>
        <S.ImageBox className="item9">
          <S.Image src={plantsData[8].image} alt={plantsData[8].id} />
        </S.ImageBox>
        <S.ImageBox className="item10">
          <S.Image src={plantsData[9].image} alt={plantsData[9].id} />
        </S.ImageBox>
        <S.ImageBox className="item11">
          <S.Image src={plantsData[10].image} alt={plantsData[10].id} />
        </S.ImageBox>
        <S.ImageBox className="item12">
          <S.Image src={plantsData[11].image} alt={plantsData[11].id} />
        </S.ImageBox>
        <S.ImageBox className="item13">
          <S.Image src={plantsData[12].image} alt={plantsData[11].id} />
        </S.ImageBox> */}
        <S.ImageBox className="item14">
          <S.Image src={plantsData[11].image} alt={plantsData[11].id} />
        </S.ImageBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default Gallery;
