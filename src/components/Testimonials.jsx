import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { userData } from "../data/productDummy";
import { Mobile, Tablets } from "../responsive";

export const Container = styled.div`
  max-width: 100rem;
  padding: 25rem 3.2rem 15rem 3.2rem;
  margin: 0 auto;

  ${Mobile({
    padding: "10rem 3.2rem 10rem 3.2rem",
  })}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  ${Mobile({
    flexDirection: "column",
    padding: "1.6rem 3.2rem",
  })}
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 4.8rem;
  text-align: center;
  letter-spacing: 1px;
  color: #7ed56f;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: beige;
  padding: 2rem 2rem;
  border-radius: 0.9rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & .rec .rec-arrow-left {
    ${Mobile({ marginLeft: "2rem" })}
  }

  & .rec .rec-arrow-right {
    ${Mobile({ marginRight: "2rem" })}
  }

  & .rec-carousel-wrapper {
    width: 74rem;
    margin: 2rem 0 0 0;

    ${Mobile({
      maxWidth: "45rem",
      height: "45rem",
    })}

    .ilevYi {
      margin-top: 2rem;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 4.2rem;
  padding: 2rem 2rem;

  ${Mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  })}
`;

export const UserImage = styled.div`
  width: 22rem;
  height: 18rem;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const UserTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const UserJob = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: gray;

  ${Tablets({ fontSize: "1.8rem", fontWeight: "600" })}
`;

export const UserText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.7;
  letter-spacing: 0.5px;
  color: gray;

  ${Tablets({ fontSize: "1.5rem", fontWeight: "500" })}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SlideBox = styled.div`
  background-color: orange;
  padding: 2rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  &:last-of-type {
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 0rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <Wrapper>
        <Title>Customer Reviews</Title>
        <Content>
          <SlideBox></SlideBox>
          <UserBox>
            <Carousel>
              {userData.map((data) => (
                <UserInfo key={data.id}>
                  <UserImage>
                    <Image src={data.avatar} alt="pic1"></Image>
                  </UserImage>
                  <User>
                    <UserTitle>{data.name}</UserTitle>
                    <UserJob>{data.designation}</UserJob>
                    <UserText>{data.message}</UserText>
                  </User>
                </UserInfo>
              ))}
            </Carousel>
          </UserBox>
          <SlideBox />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
