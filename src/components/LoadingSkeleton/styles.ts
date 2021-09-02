import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;

  .row {
    width: 100%;

    margin: 2rem 0;

    > span {
      margin-right: 1rem;
    }

    &.margin-large {
      margin: 4rem 0;

      > span {
        margin: 0 2.5rem 0 0;
      }
    }
  }
`;
