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
  background: #f9fff9;
  color: ${(props) => props.theme.pallete.base};

  h1 {
    margin: 2rem 0 2rem 2rem;

    @media (max-width: 414px) {
      margin: 0 0 4rem;
    }
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

const colors: { [key: string]: string } = {
  0: "#FAC9F566",
  1: "#FAC94566",
  2: "#EF6CBA66",
  3: "#9F74F366",
  4: "#5F9EEC66",
  5: "#5FDF9C66",
};

interface CardProps {
  index: string;
}

export const Card = styled(motion.div)<CardProps>`
  width: 44rem;
  min-width: 28rem;
  max-width: 80vw;
  height: 12rem;
  background: white;
  border-bottom: 6px solid
    ${(props) => {
      return Number(props.index[props.index.length - 1]) >= 6
        ? colors[String(Number(props.index[props.index.length - 1]) - 4)]
        : colors[props.index[props.index.length - 1]];
    }};
  border-radius: 0.4rem;
  padding: 1.5rem;
  box-shadow: 0 3px 18px -3px rgba(0, 0, 0, 0.25);
  transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  div.content {
    display: flex;
    flex-direction: column;
    position: relative;

    div.header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 0.8rem;

      .ep-number {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: ${(props) => props.theme.pallete.base};
        color: ${(props) => props.theme.pallete.light};
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
      }

      .title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 3rem;
        flex: 1;
        cursor: pointer;

        p {
          margin-top: 0;
          font-size: 1.8rem;
          font-weight: bold;
        }
      }

      &:hover {
        text-decoration: underline;
      }
    }

    .personagens,
    .data-exibicao {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: row;

      > p {
        display: flex;
        align-items: center;
      }

      > img {
        margin-left: 0.4rem;
        margin-right: 1.2rem;
        width: 2rem;
      }
    }
  }

  .list.actions {
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
  }

  p {
    font-size: 1.4rem;
  }

  &:hover {
    filter: saturate(120%);
    transform: scale(1.015) !important;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  width: fit-content;
  max-width: 28rem;
  margin: 4rem 2rem;
  align-self: flex-end;

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

    &.active {
      background: ${(props) => props.theme.pallete.base + "88"};
    }

    &:hover,
    &.active:hover {
      filter: saturate(120%) brightness(150%);
    }
  }
`;

export const FilterWrapper = styled.div`
  width: 60rem;
  min-width: 28rem;
  max-width: 60vw;

  margin: 0 2rem 4rem;
  position: relative;

  > input {
    font-size: 1.8rem;
    letter-spacing: 0.15rem;
    padding: 1.6rem 6rem 1.6rem 1rem;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.pallete.base};
    background: #fff0;
    // box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    color: ${(props) => props.theme.pallete.base};
  }
  .search-wrapper {
    position: absolute;
    right: 14px;
    top: 7px;
    cursor: pointer;
    border-radius: 50%;
    width: 4.2rem;
    height: 4.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;
    opacity: 0.7;

    > img {
      width: 2.4rem;
    }

    &:hover {
      background: ${(props) => props.theme.pallete.base + "33"};
      opacity: 1;
    }

    &:active {
      background: ${(props) => props.theme.pallete.base + "66"};
      opacity: 1;
    }
  }

  @media (max-width: 414px) {
    margin: 0 0 4rem;
  }
`;
