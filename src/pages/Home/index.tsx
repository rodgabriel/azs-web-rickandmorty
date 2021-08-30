import { useEffect, useState } from "react";
import { Wrapper, ImgLogo, ImgHero } from "./styles";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_EPISODES } from "graphQL/queries";

import Logo from "assets/images/logo.png";
import Hero from "assets/images/hero.png";
import List from "components/List";

const Home = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const { loading, data } = useQuery(GET_ALL_EPISODES);

  useEffect(() => {
    if (data?.episodes) {
      setAllEpisodes(data.episodes.results);
    }
  }, [data]);

  return (
    <Wrapper flexDirection="column" backgroundColor="#1E003E">
      <ImgLogo src={Logo} margin="1rem auto" />
      <Wrapper flexDirection="column">
        <h1>Episódios</h1>
        {/* <ImgHero src={Hero} /> */}
        <List items={allEpisodes} loading={loading} />
      </Wrapper>
    </Wrapper>
  );
};

export default Home;
