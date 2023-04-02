import styled from "styled-components";
import { Laptops, Mobile, Tablets } from "../../responsive";

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;

  & p {
    margin-top: 1rem;
  }
`;

export const StockBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    margin-top: 1rem;
  }
`;

export const Stock = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #adb5bd;
  margin-bottom: 1rem;
  text-transform: uppercase;

  & + p {
    color: #212529;
    font-weight: 700;
  }

  ${Mobile({
    fontSize: "1.4rem",
  })}
`;

export const Image = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;

  & p {
    margin-top: 1rem;
  }
`;

export const InfoBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #adb5bd;
  margin-bottom: 1rem;
  text-transform: uppercase;

  & + p {
    color: #212529;
    font-weight: 700;
  }

  ${Mobile({
    fontSize: "1.4rem",
  })}
`;

export const Price = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #adb5bd;
  margin-bottom: 1rem;
  text-transform: uppercase;

  & + p {
    color: #212529;
    font-weight: 700;
  }

  ${Mobile({
    fontSize: "1.4rem",
  })}
`;

export const Container = styled.div`
  width: 100%;
  padding: 4.8rem 4.8rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 11rem 0 0rem 0;

  ${Tablets({
    alignItems: "center",
  })}

  ${Mobile({
    alignItems: "center",
  })}
`;

export const OrderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e5fee9;
  padding: 3.2rem;
  border-radius: 1rem;
  width: 100%;
  align-items: center;

  ${Tablets({
    flexDirection: "column",
    width: "80%",
  })}

  ${Mobile({
    flexDirection: "column",
    alignItems: "center",
    padding: "1.6rem",
    justifyContent: "center",
    width: "80%",
    marginBottom: "3.6rem",
  })}
`;

export const OrderBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & svg {
    fill: #2b8a3e;
    width: 3rem;
    height: 3rem;
  }

  ${Mobile({
    margin: "0 auto",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

export const Circle = styled.div`
  background-color: #b2f2bb;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.6rem;
`;

export const SubTitle = styled.h1`
  margin: 0rem 0rem 1.4rem 0rem;
  letter-spacing: 1px;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  margin-right: 0.4rem;
  letter-spacing: 0.5px;
`;

export const Span = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const Div = styled.div``;

export const Center = styled.div`
  display: flex;
  padding: 3rem;
  border-bottom: 1px solid black;
  width: 100%;

  ${Tablets({
    width: "100%",
    padding: "3rem",
    justifyContent: "center",
  })}

  ${Mobile({
    flexDirection: "column",
    marginBottom: "5.2rem",
    padding: "1rem",
  })}
`;

export const ProductGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem 1rem;
`;

export const TotalGroup = styled.div`
  background-color: #f1f3f5;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: auto;
  margin-top: 5rem;

  ${Tablets({
    margin: "5rem auto 3rem auto",
    width: "70%",
  })}

  ${Mobile({
    margin: "0 auto",
    width: "80%",
  })}
`;

export const TotalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid #000;
  }
`;

export const ImgBox = styled.div`
  width: 16vw;
  height: 17vh;

  ${Laptops({
    width: "25%",
    height: "15vh",
  })}

  ${Tablets({
    width: "35%",
    height: "15vh",
  })}

   ${Mobile({
    width: "100%",
    height: "25rem",
    marginBottom: ".6rem",
  })};
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  background-color: #4ba87d;
  color: #f1f3f5;
  padding: 1.6rem 2rem;
  font-style: inherit;
  font-size: 2rem;
  border-radius: 5px;

  &:hover {
    background-color: #099268;
  }
`;

export const TotalLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const TotalSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const InfoListBox = styled(InfoBox)`
  ${Tablets({
    width: "85%",
    justifyContent: "space-between",
  })}
`;

export const TitleText = styled(Title)`
  ${Tablets({
    marginBottom: "3rem",
  })};
`;

export const CenterWrapper = styled.div`
  width: 100%;

  ${Tablets({
    display: "flex",
    justifyContent: "center",
  })}
`;

export const Strong = styled.strong``;
