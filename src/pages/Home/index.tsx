import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { useQuery, gql } from "@apollo/client";
import { AnimatePresence } from "framer-motion";
import { GET_ALL_EPISODES } from "graphQL/queries";

import List from "components/List";
import Hero from "components/Hero";

const Home = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});

  const { loading, data } = useQuery(GET_ALL_EPISODES);

  useEffect(() => {
    if (data?.episodes) {
      setAllEpisodes(data.episodes.results);
    }
    if (data?.info) {
      setPaginationInfo(data.info);
    }
  }, [data]);

  return (
    <>
      <Hero />
      <List
        title="Episódios"
        items={allEpisodes}
        loading={loading}
        paginationInfo={paginationInfo}
      />
    </>
  );
};

export default Home;
