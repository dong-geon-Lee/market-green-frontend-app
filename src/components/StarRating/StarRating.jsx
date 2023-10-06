import React from "react";
import * as S from "./styles";
import * as A from "../../assets/@index";

const StarRating = ({ value }) => {
  const startValues = [1, 2, 3, 4, 5];

  return (
    <S.RatingBox>
      <S.Rating>
        {startValues.map((starValue, index) => {
          const icon =
            value >= starValue ? (
              <A.FaStar key={index} />
            ) : value >= starValue - 0.5 ? (
              <A.FaStarHalfAlt key={index} />
            ) : (
              <A.FaRegStar key={index} />
            );
          return icon;
        })}
      </S.Rating>
      <S.ReviewNum>({value?.toFixed(1)})</S.ReviewNum>
    </S.RatingBox>
  );
};

export default StarRating;
