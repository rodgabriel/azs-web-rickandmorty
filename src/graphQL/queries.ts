import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
  query getAllEpisodes($page: Int, $filter: String) {
    episodes(page: $page, filter: { name: $filter }) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        name
        air_date
        characters {
          id
        }
      }
    }
  }
`;

export const GET_EPISODE_BY_ID = (id: string) => {
  return gql`
        query {
            episode (id: ${id}) {
                name
                id
                air_date
                characters {
                    id
                    name
                    species
                    status
                    image
                }
            }
        }
    `;
};
