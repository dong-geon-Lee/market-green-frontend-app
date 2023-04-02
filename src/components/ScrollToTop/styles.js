import styled, { keyframes } from "styled-components";

export const iconScale = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  & svg {
    position: fixed;
    bottom: 5%;
    right: 3%;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid #333;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    animation: ${iconScale} 2s 1s infinite;
  }
`;
