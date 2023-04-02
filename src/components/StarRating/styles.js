import styled from "styled-components";

export const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Rating = styled.div`
  font-size: 2rem;
  font-weight: 700;

  & svg {
    fill: #ebb450;
  }
`;

export const Star = styled(Rating)`
  font-size: 1.2rem;
  padding: 0.8rem 0rem;
  font-size: 1.2rem;
`;

export const ReviewNum = styled(Rating)`
  padding: 1.2rem 1.6rem 1.2rem 0;
  margin-left: 1rem;
`;
