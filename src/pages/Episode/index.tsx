import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODE_BY_ID } from "graphQL/queries";

import Container from "styles/shared/Container";

interface EpisodeType {
  name: string;
  id: string;
  air_data: string;
  characters: Array<any>;
}

const Episode = () => {
  const [episode, setEpisode] = useState<EpisodeType>();
  const { pathname } = window.location;
  const epId = pathname.split("/")[2];
  const { loading, data } = useQuery(GET_EPISODE_BY_ID(epId));

  useEffect(() => {
    if (data?.episode) {
      setEpisode(data.episode);
    }
  }, [data]);

  return episode?.name ? (
    <Container backgroundColor="rebeccapurple">{episode.name}</Container>
  ) : null;
};

export default Episode;
