import React, { useState, useEffect } from "react";
import * as S from "./styles";
import * as A from "../../assets/@index";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Container icon={S.iconScale}>
      {showScrollTopButton && <A.FaAngleDoubleUp onClick={scrollTop} />}
    </S.Container>
  );
};

export default ScrollToTop;
