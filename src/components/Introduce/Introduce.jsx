import React from "react";
import * as S from "./styles";
import * as A from "../../assets/@index";

const Introduce = () => {
  return (
    <S.Container id="intro">
      <S.Wrapper>
        <S.IntroBox>
          <S.Title>당신의 정원을 만들어보세요!</S.Title>
          <S.Text>
            "<S.Strong>마켓그린에서</S.Strong> 여러분의 식물을 얻으세요"
          </S.Text>
        </S.IntroBox>

        <S.ContentBox>
          <S.IconInfoBox>
            <A.FaBook />
            <S.TitleInfo>Infomation</S.TitleInfo>
            <S.TextInfo>
              다양한 희귀식물에 대한 교육 콘텐츠를 제공합니다.
            </S.TextInfo>
          </S.IconInfoBox>

          <S.IconInfoBox>
            <A.FaSeedling />
            <S.TitleInfo>Product</S.TitleInfo>
            <S.TextInfo>
              아름답고 예쁜 식물로 최고의 경험을 선사합니다.
            </S.TextInfo>
          </S.IconInfoBox>

          <S.IconInfoBox>
            <A.FaHandHoldingWater />
            <S.TitleInfo>Advice</S.TitleInfo>
            <S.TextInfo>
              식물을 키우는 데 필요한 전문가의 조언을 제공합니다.
            </S.TextInfo>
          </S.IconInfoBox>
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default Introduce;
