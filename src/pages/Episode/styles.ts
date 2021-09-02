import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;

  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .back-arrow {
    margin-bottom: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transition: 0.3s all ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      font-size: 3.5rem;
      font-weight: bold;
      margin-top: -10px;
      border: none;
      background: transparent;
      color: ${(props) => props.theme.pallete.light};
      cursor: pointer;
    }

    &:hover {
      background: #eee6;
      cursor: pointer;
    }
  }

  .episode-header {
    display: flex;
    .ep-number {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      background: #ffffff;
      color: ${(props) => props.theme.pallete.base};

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 2rem;

      > strong {
        font-size: 5rem;
        font-weight: bold;
        margin-top: -5px;
      }
    }

    .episode.actions {
      margin: 2rem 0 0 -1.5rem;
    }
  }

  > .content {
    margin-top: 4rem;
    margin-left: 0.5rem;

    h1 {
      font-size: 4rem;
    }

    .date-info {
      margin: 2rem 0;

      .data {
        margin: 1rem 0;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          filter: invert();
          width: 2.4rem;
          margin-right: 1rem;
        }

        p {
          margin: 0.5rem 0;
        }
      }
    }

    .characters-container {
      .characters-card-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem;
        margin: 4rem 0;
      }
    }
  }
`;

interface CardProps {
  index: string;
}

const colors: { [key: string]: string } = {
  0: "#FAC9F566",
  1: "#FAC94566",
  2: "#EF6CBA66",
  3: "#9F74F366",
  4: "#5F9EEC66",
  5: "#5FDF9C66",
};

export const CharacterCard = styled.div<CardProps>`
  width: 24rem;
  height: 28rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.pallete.light};
  color: ${(props) => props.theme.pallete.base};
  position: relative;
  display: flex;
  flex-direction: column;

  > .content {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 1rem 2rem;
    flex: 1;

    background: ${(props) => {
      return Number(props.index[props.index.length - 1]) >= 6
        ? colors[String(Number(props.index[props.index.length - 1]) - 4)]
        : colors[props.index[props.index.length - 1]];
    }};

    .char-name {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .char-species {
      margin-bottom: 1rem;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 2.2rem;
        margin-right: 1rem;
      }
    }

    .char-status {
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 2.2rem;
        margin-right: 1.1rem;
        filter: invert(51%) sepia(53%) saturate(1486%) hue-rotate(348deg)
          brightness(99%) contrast(93%);
      }
    }
  }
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  z-index: 1;
`;
