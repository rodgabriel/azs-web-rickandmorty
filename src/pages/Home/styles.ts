import styled from "styled-components";
import Container from "styles/shared/Container";

export const Wrapper = styled(Container)`
  min-height: 100vh;
  height: auto;
  padding: 4rem;
  position: relative;
`;

interface ImgLogoProps {
  margin?: string;
}

export const ImgLogo = styled.img<ImgLogoProps>`
  width: 80vw;
  max-width: 50rem;
  margin: ${(props) => props.margin || "1rem 0"};
`;
interface ImgHeroProps {
  margin?: string;
}

export const ImgHero = styled.img<ImgHeroProps>`
  width: 80vw;
  max-width: 50rem;
  margin: ${(props) => props.margin || "1rem 0"};
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(6px 6px 18px #3a9c0593);

  @media (max-width: 1024px) {
    display: none;
  }
`;
