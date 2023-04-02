import React from "react";
import * as S from "./styles";
import * as A from "../../assets/@index";

const SubStarRating = ({ totalRating }) => {
  return (
    <S.RatingBox>
      <S.Rating>
        {totalRating >= 1 ? (
          <FaStar />
        ) : totalRating >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
        {totalRating >= 2 ? (
          <FaStar />
        ) : totalRating >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
        {totalRating >= 3 ? (
          <FaStar />
        ) : totalRating >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
        {totalRating >= 4 ? (
          <FaStar />
        ) : totalRating >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
        {totalRating >= 5 ? (
          <FaStar />
        ) : totalRating >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </S.Rating>
      <S.ReviewNum>({totalRating?.toFixed(1)})</S.ReviewNum>
    </S.RatingBox>
  );
};

export default SubStarRating;
