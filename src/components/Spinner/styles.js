import styled from "styled-components";

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContent = styled.img`
  width: 8.4rem;
  height: 8.4rem;
  border-radius: 50%;
`;
