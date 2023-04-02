import React from "react";
import * as S from "./styles";

const Hero = () => {
  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  return (
    <S.Container id="hero">
      <S.Wrapper>
        <S.InfoBox>
          <S.Title>Freshen the Air in Your House</S.Title>
          <S.Text>
            정원 만들기의 꿈을 실현할 수 있도록 도와드립니다. 세상을 바꿀 수
            있는 작은 것부터 시작합시다.
          </S.Text>
          <S.BtnBox>
            <S.Atag href="#products">
              <S.Button>Start find plant</S.Button>
            </S.Atag>
            <S.Atag href="#information">
              <S.Button>Learn more</S.Button>
            </S.Atag>
          </S.BtnBox>
        </S.InfoBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default Hero;
