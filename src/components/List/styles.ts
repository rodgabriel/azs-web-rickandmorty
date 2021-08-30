import styled from "styled-components";

export const Card = styled.div`
  width: 60rem;
  height: 10rem;
  background: #22db58;
  border-radius: 1.4rem;
  padding: 1rem 2.4rem;
  margin: 2rem 0;
  box-shadow: 0 3px 18px rgba(5, 255, 5, 0.4);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  color: black;

  div.header {
    display: flex;

    > p {
      margin-right: 1rem;
      font-size: 2.4rem;
      font-weight: bold;
    }
  }

  &:hover {
    filter: saturate(120%);
    transform: scale(1.025);
  }
`;
