import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../redux-toolkit/productSlice";
import { offSpinner, onSpinner } from "../../redux-toolkit/spinnerSlice";
import Spinner from "../../components/Spinner/Spinner";
import * as S from "./styles";

const ProductForm = () => {
  const isLoading = useSelector((state) => state.spinner.isLoading);
  const [userData, setUserData] = useState({
    img: "",
    title: "",
    desc: "",
    price: "",
    categories: "",
    inStock: "",
  });

  const { img, title, desc, price, inStock } = userData;

  const [imgTouched, setImgTouched] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descTouched, setDescTouched] = useState(false);
  const [priceTouched, setPriceTouched] = useState(false);
  const [inStockTouched, setInStockTouched] = useState(false);

  const imgIsValid = img !== "";
  const titleIsValid = title.trim() !== "";
  const descIsValid = desc.trim() !== "";
  const priceIsValid = price.trim() !== "";
  const inStockIsValid = inStock.trim() !== "" && inStock > 1;

  const imgInputIsInvalid = !img && imgTouched;
  const titleInputIsInvalid = !title && titleTouched;
  const descInputIsInvalid = !desc && descTouched;
  const priceInputIsInvalid = !price && priceTouched;
  const inStockInputIsInvalid = !inStock && inStockTouched;

  let formIsValid = false;

  if (
    imgIsValid &&
    titleIsValid &&
    descIsValid &&
    priceIsValid &&
    inStockIsValid
  ) {
    formIsValid = true;
  }

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const imgInputBlurHandler = () => {
    setImgTouched(true);
  };

  const titleInputBlurHandler = () => {
    setTitleTouched(true);
  };

  const descInputBlurHandler = () => {
    setDescTouched(true);
  };

  const priceInputBlurHandler = () => {
    setPriceTouched(true);
  };

  const inStockInputBlurHandler = () => {
    setInStockTouched(true);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("inStock", inStock);

    dispatch(setProduct(formData));
    dispatch(onSpinner(true));

    setTimeout(() => {
      dispatch(offSpinner(false));
      navigate(-2);
    }, 1500);

    setUserData({
      title: "",
      desc: "",
      price: "",
      inStock: "",
    });
  };

  const handleImage = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      img: e.target.files[0],
    }));
  };

  return (
    <S.Container>
      <S.Wrapper>
        {isLoading && <Spinner />}
        <S.Form onSubmit={onSubmit} encType="multipart/form-data">
          <S.Box inValidImg={imgInputIsInvalid}>
            <S.Label>이미지</S.Label>
            <S.Input
              type="file"
              name="img"
              accept=".png, .jpg, .jpeg"
              onChange={handleImage}
              onBlur={imgInputBlurHandler}
              className="imgInput"
            />
            {imgInputIsInvalid && <S.Message>이미지를 선택하세요</S.Message>}
          </S.Box>

          <S.Box inValidTitle={titleInputIsInvalid}>
            <S.Label>상품명</S.Label>
            <S.Input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              onBlur={titleInputBlurHandler}
              placeholder="Add title"
              className="titleInput"
            />
            {titleInputIsInvalid && <S.Message>상품명을 입력하세요</S.Message>}
          </S.Box>

          <S.Box inValidDesc={descInputIsInvalid}>
            <S.Label>설명</S.Label>
            <S.Input
              type="text"
              name="desc"
              value={desc}
              onChange={onChange}
              onBlur={descInputBlurHandler}
              placeholder="Add desc"
              className="descInput"
            />
            {descInputIsInvalid && <S.Message>설명을 입력하세요</S.Message>}
          </S.Box>

          <S.Box inValidPrice={priceInputIsInvalid}>
            <S.Label>가격</S.Label>
            <S.Input
              type="number"
              name="price"
              value={price}
              onChange={onChange}
              onBlur={priceInputBlurHandler}
              placeholder="Add price"
              className="priceInput"
            />
            {priceInputIsInvalid && <S.Message>가격을 입력하세요</S.Message>}
          </S.Box>

          <S.Box inValidInStock={inStockInputIsInvalid}>
            <S.Label>재고</S.Label>
            <S.Input
              type="number"
              name="inStock"
              value={inStock}
              onChange={onChange}
              onBlur={inStockInputBlurHandler}
              placeholder="Add inStock"
              className="inStockInput"
              min={0}
              max={5}
            />
            {inStockInputIsInvalid ? (
              <S.Message>재고를 입력하세요</S.Message>
            ) : (
              inStock &&
              !inStockIsValid && (
                <S.Message>재고는 2개 이상 입력하세요</S.Message>
              )
            )}
          </S.Box>

          <S.Button type="button" onClick={() => navigate(-1)}>
            뒤로가기
          </S.Button>
          <S.Button type="submit" disabled={!formIsValid}>
            등록하기
          </S.Button>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default ProductForm;
