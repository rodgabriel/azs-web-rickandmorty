import styled from "styled-components";

interface ContainerProps {
  position?: string;
  colorMode: "light" | "dark";
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  button.img-wrapper {
    width: 4rem;
    height: 4rem;
    background: ${(props) =>
      props.colorMode === "light" ? "#fff1" : "transparent"};
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: 0.2s all ease-in-out;
    border: none;

    > img {
      width: 2rem;
      cursor: pointer;

      ${(props) => {
        if (props.colorMode === "light") {
          return "filter: invert()";
        }
      }}
    }

    &.liked {
      background: ${(props) =>
        props.colorMode === "light" ? "#fff4" : "#3631"};

      > img {
        filter: invert(38%) sepia(81%) saturate(1638%) hue-rotate(313deg)
          brightness(90%) contrast(90%);
      }
    }

    &.seen {
      background: ${(props) =>
        props.colorMode === "light" ? "#fff4" : "#3631"};

      > img {
        filter: invert(47%) sepia(79%) saturate(3038%) hue-rotate(163deg)
          brightness(97%) contrast(104%);
      }
    }

    &:hover {
      background: ${(props) =>
        props.colorMode === "light" ? "#fff3" : "#3632"};
    }
  }
`;
