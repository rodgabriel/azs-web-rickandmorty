import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
  query {
    episodes {
      results {
        name
        id
      }
    }
  }
`;
