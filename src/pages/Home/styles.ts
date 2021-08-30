import styled from "styled-components";

export const Container = styled.main`
  background: ${(props) => props.theme.pallete.primary};
  min-height: 100vh;
  height: auto;

  display: flex;
  flex-direction: column;
`;

interface ImageProps {
  margin?: string;
}

export const Image = styled.img`
  width: 80vw;
  max-width: 60rem;
  margin: ${(props: ImageProps) => props.margin || "1rem 0"};
`;
