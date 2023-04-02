import styled from "styled-components";
import { Laptops, Mobile, Tablets } from "../../responsive.js";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 130rem;
  margin: 0 auto;
  gap: 4.8rem;
  padding: 0 2.4rem;

  ${Laptops({
    display: "flex",
    gap: "4rem",
  })}
`;

export const Left = styled.div`
  flex: 1;
  margin-top: 4.8rem;
`;

export const ImgBox = styled.div`
  height: 70rem;

  ${Laptops({
    height: "51rem",
  })}

  ${Tablets({
    height: "41rem",
  })}

  ${Mobile({
    height: "31rem",
  })}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductGroup = styled.div`
  flex: 1;
  margin-top: 4.8rem;
  display: flex;
  flex-direction: column;
`;

export const InfoBox = styled.div`
  line-height: 1.6;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  width: 75%;

  ${Tablets({
    width: "90%",
  })}

  ${Mobile({
    width: "100%",
  })}
`;

export const TableBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: none;
  margin-top: 3.6rem;
  width: 60%;

  ${Laptops({
    width: "65%",
  })}

  ${Tablets({
    width: "75%",
  })}

  ${Mobile({
    width: "88%",
    margin: "5rem 0",
  })}
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #343a40;
  padding: 1.2rem 1.6rem;

  ${Tablets({
    fontSize: "1.8rem",
  })}

  ${Mobile({
    fontSize: "1.6rem",
  })}
`;

export const Stock = styled.p`
  font-size: 2rem;
  padding: 1.2rem 1.6rem;
  font-weight: 700;
  color: #343a40;

  ${Tablets({
    fontSize: "1.8rem",
  })}

  ${Mobile({
    fontSize: "1.6rem",
  })}
`;

export const CartBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

export const CartBtn = styled.button`
  border: 1px solid grey;
  padding: 0.8rem 1rem;
  background-color: transparent;
  cursor: pointer;
  color: #4ba87d;
  font-size: 2rem;
  border-radius: 4px;
`;

export const QuantityBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 1.2rem 1.6rem;
`;

export const CartText = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;

  ${Tablets({
    fontSize: "1.8rem",
  })}

  ${Mobile({
    fontSize: "1.6rem",
  })}
`;

export const OrderBtnBox = styled.div`
  display: flex;
`;

export const OrderBtn = styled.button`
  display: inline-block;
  width: 100%;
  border: none;
  background-color: #c3fae8;
  padding: 2rem 1.4rem;
  letter-spacing: 1px;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  color: #1971c2;
  cursor: pointer;
  text-align: center;

  & + button {
    background-color: #8ce99a;
    color: #343a40;
  }

  &:hover {
    background-color: #96f2d7;
  }
`;

export const Select = styled.select`
  font-family: inherit;
  border: none;
  outline: none;
  font-size: inherit;
  padding: 0.4rem 3rem 0.4rem 1rem;
  background-color: #eee;
`;

export const StockBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const RatingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Rating = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 1.2rem 1.6rem;

  ${Tablets({
    fontSize: "1.8rem",
  })}

  ${Mobile({
    fontSize: "1.6rem",
  })}

  & svg {
    fill: #ebb450;
  }
`;

export const SubWrapper = styled.div`
  display: flex;
  max-width: 130rem;
  margin: 0 auto;
  gap: 4.8rem;
  padding: 0 2.4rem;
`;

export const ReviewGroup = styled.div`
  margin: 12.8rem 0;
`;

export const Review = styled.div`
  margin-bottom: 3.2rem;
`;

export const ReviewText = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 1px;

  & strong {
    font-size: 2rem;
    color: #37b24d;
  }
`;

export const ReviewDate = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const ReviewUser = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.4px;
`;

export const ReviewBox = styled.div`
  background-color: #eee;
  padding: 1.6rem 1.6rem;

  ${Mobile({
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    height: "20rem",
    marginTop: "2rem",
  })}
`;

export const ReviewTest = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.4px;
`;

export const ReviewTextZone = styled.div`
  background-color: #cff4fc;
  padding: 1.2rem 1.4rem;
  display: flex;
  align-items: center;
`;

export const Star = styled(Rating)`
  font-size: 1.2rem;
  padding: 0.8rem 0rem;
  font-size: 1.2rem;
`;

export const CommentBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  justify-content: center;
`;

export const SelectInfo = styled.div`
  margin-bottom: 3.6rem;
`;

export const CommentTitle = styled(ReviewText)`
  margin-bottom: 2rem;
  font-weight: 800;

  ${Laptops({
    marginTop: "10rem",
  })}

  ${Tablets({
    fontSize: "1.4rem",
    marginTop: "7rem",
  })}

  ${Mobile({
    fontSize: "1.2rem",
    marginTop: "0rem",
  })}
`;

export const CommentRating = styled(ReviewTest)`
  margin-bottom: 1.6rem;
`;

export const CommentSelect = styled.select`
  width: 80%;
  background-color: #eee;
  outline: none;
  padding: 1.2rem;
  border: none;
  cursor: pointer;
`;

export const CommentText = styled(ReviewTest)`
  margin-bottom: 1.6rem;
`;

export const TextArea = styled.textarea`
  width: 80%;
  background-color: #eee;
  border: none;
  outline: none;
  padding: 1rem;
  margin-bottom: 2rem;

  ${Tablets({
    height: "15rem",
  })};

  ${Mobile({
    height: "10rem",
  })};
`;

export const CommentInfo = styled.div``;

export const SubmitButton = styled(OrderBtn)`
  width: 80%;

  ${Tablets({
    marginBottom: "1.8rem",
  })}

  ${Mobile({
    marginBottom: "3rem",
  })}
`;

export const Button = styled(OrderBtn)`
  display: flex;
  justify-content: center;
  padding: 0.8rem 1rem;
  cursor: pointer;
  width: 5%;

  ${Laptops({
    padding: "1rem 1.4rem",
    fontSize: "1.6rem",
  })}
  ${Tablets({
    padding: "1rem 1.2rem",
  })}
    ${Mobile({
    fontSize: "1.4rem",
  })};
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #f03e3e;
  margin-top: 0.3rem;
`;

export const MessageResult = styled(Message)`
  font-size: 1.4rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  margin: -2rem 0 1.5rem 0;
`;

export const Strong = styled.strong``;

export const Option = styled.option``;
