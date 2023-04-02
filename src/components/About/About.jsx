import React from "react";
import * as S from "./styles";
import * as A from "../../assets/@index";

const About = () => {
  return (
    <S.Container id="about">
      <S.Wrapper>
        <S.Title>당신이 선택한 식물로 집안을 아름답게 꾸며보세요!</S.Title>
        <S.Section>
          <S.Left>
            <S.AboutBox>
              <S.SubHeading>"여러분의 정원사 마켓그린입니다"</S.SubHeading>
              <S.Text>
                당신을 위한 다양한 제품이 준비되어 있습니다. 마켓 그린에는 수백
                종의 희귀하고 친환경적인 식물이 있습니다. 우리는 당신이 기쁨과
                평화를 느끼기를 바랍니다!
              </S.Text>
              <S.Text>- 마켓그린</S.Text>
            </S.AboutBox>
          </S.Left>
          <S.Right>
            <S.ImageBox>
              <S.Image src={A.image1} alt="image1" />
              <S.Image src={A.image2} alt="image2" />
              <S.Image src={A.image3} alt="image3" />
              <S.Image src={A.image4} alt="image4" />
            </S.ImageBox>
          </S.Right>
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
};

export default About;
