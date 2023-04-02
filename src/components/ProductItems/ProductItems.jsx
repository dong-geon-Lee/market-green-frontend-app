import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux-toolkit/productSlice";
import { offSpinner, onSpinner } from "../../redux-toolkit/spinnerSlice";
import Spinner from "../Spinner";
import StarRating from "../StarRating";
import * as S from "./styles";

const ProductItems = ({ _id, title, desc, price, img, inStock, rating }) => {
  const isLoading = useSelector((state) => state.spinner.isLoading);
  const adminUser = useSelector((state) => state.user.user?.isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = (id) => {
    navigate(`/product/${id}`);
  };

  let prices = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <S.Container>
      <S.Card>
        {isLoading && <Spinner />}
        <S.ImgBox onClick={() => onClick(_id)}>
          <S.Image src={`${process.env.REACT_APP_BASEURL}/${img}`} alt={img} />
        </S.ImgBox>

        <S.InfoBox>
          <S.Title>{title}</S.Title>
          <S.Text>{prices}원</S.Text>
          <StarRating value={rating} />
          <S.OptionBox>
            {adminUser && (
              <S.Button
                onClick={() => {
                  dispatch(deleteProduct({ id: _id }));
                  dispatch(onSpinner(true));

                  setTimeout(() => {
                    dispatch(offSpinner(false));
                  }, 1500);
                }}
              >
                삭제
              </S.Button>
            )}
            <S.Button onClick={() => onClick(_id)}>
              {adminUser ? "자세히" : "자세히 보기"}
            </S.Button>
            {adminUser && (
              <S.Button
                onClick={() =>
                  navigate("/productEdit", {
                    state: {
                      id: _id,
                      title,
                      desc,
                      price,
                      inStock,
                      img,
                    },
                  })
                }
              >
                수정
              </S.Button>
            )}
          </S.OptionBox>
        </S.InfoBox>
        {rating >= 4.5 ? <S.CardLabel>Best Product</S.CardLabel> : <></>}
      </S.Card>
    </S.Container>
  );
};

export default ProductItems;
