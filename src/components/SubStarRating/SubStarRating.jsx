import React from "react";
import * as S from "./styles";
import * as A from "../../assets/@index";

const SubStarRating = ({ totalRating }) => {
  const startValues = [1, 2, 3, 4, 5];

  return (
    <S.RatingBox>
      <S.Rating>
        {startValues.map((starValue) => {
          const icon =
            totalRating >= starValue ? (
              <A.FaStar />
            ) : totalRating >= starValue - 0.5 ? (
              <A.FaStarHalfAlt />
            ) : (
              <A.FaRegStar />
            );
          return icon;
        })}
      </S.Rating>
      <S.ReviewNum>({totalRating?.toFixed(1)})</S.ReviewNum>
    </S.RatingBox>
  );
};

export default SubStarRating;
