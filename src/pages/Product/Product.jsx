import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  deleteReview,
  getProduct,
  reviewReset,
} from "../../redux-toolkit/productSlice";
import moment from "moment";
import SubStarRating from "../../components/SubStarRating/SubStarRating";
import StarRating from "../../components/StarRating/StarRating";
import Spinner from "../../components/Spinner/Spinner";
import * as S from "./styles";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productData = useSelector((state) => state.product);
  const { product, message } = productData;
  const isLoading = useSelector((state) => state.spinner.isLoading);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AddCartHandler = () => {
    navigate(`/cart/${id}?quantity=${quantity}`);
  };

  useEffect(() => {
    if (id || product?._id) {
      dispatch(getProduct(id));
    }

    if (message) {
      setTimeout(() => {
        dispatch(reviewReset());
      }, 4000);
    }
  }, [dispatch, id, product?._id, product?.img, message]);

  const isStockNum = [...Array(product?.inStock).keys()];

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addReview({ id, rating, comment }));
    setRating("");
    setComment("");
  };

  const totalRating =
    product?.reviews?.reduce((acc, item) => item?.rating + acc, 0) /
      product?.reviews?.length || 0.0;
  const totalReview = product?.reviews?.length || 0;

  return (
    <S.Container>
      <S.Wrapper>
        {isLoading && <Spinner />}
        <S.Left>
          <S.ImgBox>
            <S.Image
              src={`${process.env.REACT_APP_BASEURL}/${product?.img}`}
              alt="take your image"
            />
          </S.ImgBox>

          <S.ReviewGroup>
            <S.ReviewText>
              Reviews <S.Strong>({totalReview})</S.Strong>
            </S.ReviewText>
            {product?.reviews?.map((review) => (
              <S.Review key={review._id}>
                <S.ReviewBox>
                  <S.ReviewInfo>
                    <S.ReviewUser>{review.name}</S.ReviewUser>
                    <S.Button
                      onClick={() =>
                        dispatch(
                          deleteReview({
                            id: review._id,
                            numReviews: product.numReviews,
                            rating: product.rating,
                          })
                        )
                      }
                    >
                      x
                    </S.Button>
                  </S.ReviewInfo>
                  <StarRating value={review.rating} />
                  <S.ReviewDate>
                    {moment(review.createdAt).calendar()}
                  </S.ReviewDate>
                  <S.ReviewTextZone>
                    <S.ReviewTest>{review.comment}</S.ReviewTest>
                  </S.ReviewTextZone>
                </S.ReviewBox>
              </S.Review>
            ))}
          </S.ReviewGroup>
        </S.Left>
        <S.ProductGroup>
          <S.InfoBox>
            <S.Title>{product?.title}</S.Title>
            <S.Desc>{product?.desc}</S.Desc>
          </S.InfoBox>

          <S.TableBox>
            <S.PriceBox>
              <S.Price>가격</S.Price>
              <S.Price>{product?.price}원</S.Price>
            </S.PriceBox>
            {product?.inStock > 0 ? (
              <S.StockBox>
                <S.Stock>재고</S.Stock>
                <S.Stock>In Stock</S.Stock>
              </S.StockBox>
            ) : (
              <S.StockBox>
                <S.Stock>unavailable</S.Stock>
              </S.StockBox>
            )}

            <S.RatingBox>
              <S.Rating>평점</S.Rating>
              <SubStarRating
                value={product?.rating?.toFixed(1)}
                totalRating={totalRating}
              />
            </S.RatingBox>
            <S.QuantityBox>
              <S.CartText>수량</S.CartText>
              <S.Select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {isStockNum.map((x) => (
                  <S.Option key={x + 1} value={x + 1}>
                    {x + 1}
                  </S.Option>
                ))}
              </S.Select>
            </S.QuantityBox>
            <S.OrderBtn onClick={AddCartHandler}>장바구니에 담기</S.OrderBtn>
          </S.TableBox>

          <S.CommentBox onSubmit={submitHandler}>
            <S.CommentTitle>Write a customer review</S.CommentTitle>
            <S.SelectInfo>
              <S.CommentRating>Rating</S.CommentRating>
              <S.CommentSelect
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <S.Option value="">Select...</S.Option>
                <S.Option value="1">1-Poor</S.Option>
                <S.Option value="2">2-Fair</S.Option>
                <S.Option value="3">3-good</S.Option>
                <S.Option value="4">4-Very good</S.Option>
                <S.Option value="5">5-Excellent</S.Option>
              </S.CommentSelect>
            </S.SelectInfo>
            <S.CommentInfo>
              {message && <S.MessageResult>{message}</S.MessageResult>}
              <S.CommentText>Comment</S.CommentText>
              <S.TextArea
                rows="10"
                cols="10"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              >
                {comment}
              </S.TextArea>
            </S.CommentInfo>
            <S.SubmitButton type="submit">제출하기</S.SubmitButton>
          </S.CommentBox>
        </S.ProductGroup>
      </S.Wrapper>
    </S.Container>
  );
};

export default Product;
