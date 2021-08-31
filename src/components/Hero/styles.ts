import styled from "styled-components";
import { motion } from "framer-motion";

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

export const ImgLogo = styled(motion.img)<ImgLogoProps>`
  width: 80vw;
  height: auto;
  max-width: 90rem;
  margin: ${(props) => props.margin || "1rem auto"};
`;
