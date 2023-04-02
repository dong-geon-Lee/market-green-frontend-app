import React from "react";
import { userData } from "../../data/productDummy";
import Carousel from "react-elastic-carousel";
import * as S from "./styles";

const Testimonials = () => {
  return (
    <S.Container id="testimonials">
      <S.Wrapper>
        <S.Title>Customer Reviews</S.Title>
        <S.Content>
          <S.SlideBox></S.SlideBox>
          <S.UserBox>
            <Carousel>
              {userData.map((data) => (
                <S.UserInfo key={data.id}>
                  <S.UserImage>
                    <S.Image src={data.avatar} alt="pic1"></S.Image>
                  </S.UserImage>
                  <S.User>
                    <S.UserTitle>{data.name}</S.UserTitle>
                    <S.UserJob>{data.designation}</S.UserJob>
                    <S.UserText>{data.message}</S.UserText>
                  </S.User>
                </S.UserInfo>
              ))}
            </Carousel>
          </S.UserBox>
          <S.SlideBox />
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default Testimonials;
