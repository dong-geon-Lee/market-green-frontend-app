import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux-toolkit/productSlice";
import ProductItems from "../ProductItems/ProductItems";
import Carousel from "react-elastic-carousel";
import * as S from "./styles";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const filterOptionList = [
  { value: "all", name: "평점" },
  { value: "good", name: "별4개 이상" },
  { value: "bad", name: "별4개 미만" },
];

const highOptionList = [
  { value: "all", name: "가격" },
  { value: "high", name: "높은 가격순" },
  { value: "low", name: "낮은 가격순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList?.map((data, idx) => (
        <option key={idx} value={data.value}>
          {data.name}
        </option>
      ))}
    </select>
  );
};

const Products = () => {
  const { products } = useSelector((state) => state.product);
  const productList = useSelector((state) => state.product?.products);

  const [filter, setFilter] = useState("all");
  const [price, setPrice] = useState("all");

  const getProductList = useMemo(() => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.rating) >= 4;
      } else {
        return parseInt(item.rating) < 4;
      }
    };

    const comparePrice = (a, b) => {
      if (price === "high") {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    };

    const copyList = products && productList?.slice();
    const filteredList =
      filter === "all"
        ? copyList
        : copyList.filter((data) => filterCallBack(data));
    const sortedList = filteredList?.sort(comparePrice);
    return sortedList;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (products || productList) dispatch(getProducts());
  }, [dispatch, filter, price, products, productList]);

  return (
    <S.Container id="products">
      <S.Title>Product</S.Title>
      <S.SelectBox>
        <ControlMenu
          value={filter}
          onChange={setFilter}
          optionList={filterOptionList}
        />
        <ControlMenu
          value={price}
          onChange={setPrice}
          optionList={highOptionList}
        />
      </S.SelectBox>
      <S.Wrapper>
        <Carousel breakPoints={breakPoints}>
          {getProductList?.map((data) => (
            <ProductItems key={data._id} {...data} />
          ))}
        </Carousel>
      </S.Wrapper>
    </S.Container>
  );
};

export default Products;
