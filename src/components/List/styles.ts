import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding: 4rem;
  background: ${(props) => props.theme.pallete.secondary};
  color: ${(props) => props.theme.pallete.base};

  h1 {
    margin: 0 0 4rem 2rem;
  }

  .cards-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  @media (max-width: 414px) {
    padding: 4rem 2rem;

    .cards-wrapper {
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Card = styled(motion.div)`
  width: 44rem;
  min-width: 28rem;
  max-width: 80vw;
  height: 10rem;
  background: ${(props) => props.theme.pallete.primary};
  border-radius: 1.4rem;
  padding: 1.5rem;
  box-shadow: 0 3px 18px -3px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div.ep-number {
    width: 7rem;
    height: 7rem;
    background: ${(props) => props.theme.pallete.base};
    color: ${(props) => props.theme.pallete.light};
    margin-right: 1.5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin-top: -4px;
      margin-left: -2px;
      font-size: 2rem;
      font-weight: bold;
    }
  }

  div.content {
    div.header {
      display: flex;

      > p {
        margin-right: 1rem;
        font-size: 1.8rem;
        font-weight: normal;

        max-height: 5rem;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  p {
    font-size: 1.4rem;
  }

  &:hover {
    filter: saturate(120%);
    transform: scale(1.025) !important;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  max-width: 28rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: ${(props) => props.theme.pallete.base + "66"};

    border: 1px solid #fff6;
    text-align: center;
    font-size: 1.8rem;
    color: ${(props) => props.theme.pallete.light};
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
      filter: saturate(120%) brightness(150%);
    }
  }
`;
