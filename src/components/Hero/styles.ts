import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url("background.jpg") no-repeat;
  background-position: center;
  background-size: 100%;

  position: relative;

  .down-arrow {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 0.6s infinite alternate;

    button {
      background: transparent;
      border: none;
      cursor: pointer;

      img {
        filter: invert();
      }
    }
  }

  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-15px);
    }
  }

  @media (max-width: 1600px) {
    background-size: 120%;
  }

  @media (max-width: 1024px) {
    background-size: 150%;
  }

  @media (max-width: 960px) {
    background-size: 175%;
  }
`;

interface ImgLogoProps {
  margin?: string;
}

export const ImgLogo = styled.img<ImgLogoProps>`
  width: 80vw;
  height: auto;
  max-width: 90rem;
  margin: ${(props) => props.margin || "1rem auto"};
  animation: showUp 3s;

  @keyframes showUp {
    0% {
      transform: translateY(100px) scale(0.5);
      opacity: 0;
    }

    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
`;
