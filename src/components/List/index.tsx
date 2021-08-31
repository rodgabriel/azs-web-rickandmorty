import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "graphQL/queries";

// helpers
import padNumber from "helpers/padNumber";

// components
import Pagination from "./pagination";
import { Container, Card } from "./styles";

interface Props {
  title?: string;
}

type Episode = {
  name: string;
  id: string;
  air_date: string;
  characters: Array<any>;
};

export type TPagination = {
  current: number;
  pages: number;
  prev: number | null;
  next: number | null;
  count: number;
};

const initial = {
  opacity: 0,
  scale: 0.975,
  y: 150,
};

const animate = {
  opacity: 1,
  scale: 1,
  y: 0,
};

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const List = ({ title }: Props) => {
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "numeric",
      year: "numeric",
    });
  };

  const [allEpisodes, setAllEpisodes] = useState<Array<Episode>>([]);
  const [paginationInfo, setPaginationInfo] = useState<TPagination>({
    current: 1,
    count: 0,
    pages: 0,
    prev: null,
    next: null,
  });

  const { loading, data } = useQuery(GET_ALL_EPISODES, {
    variables: { page: paginationInfo.current },
  });

  useEffect(() => {
    if (data?.episodes) {
      setAllEpisodes(data.episodes.results);
    }
    if (data?.episodes.info) {
      setPaginationInfo({
        ...data.episodes.info,
        current: data.episodes.info.next
          ? data.episodes.info.next - 1
          : data.episodes.info.pages,
      });
    }
  }, [data]);

  console.log(data?.episodes?.info);

  return (
    <Container
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
    >
      <h1>{title}</h1>
      <motion.div
        className="cards-wrapper"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {allEpisodes.map((episode) => (
          <Link to={`/episode/${episode.id}`}>
            <Card variants={child}>
              <div className="ep-number">
                <p>{padNumber(episode.id)}</p>
              </div>
              <div className="content">
                <div className="header">
                  <p>{episode.name}</p>
                </div>

                <p>{episode.characters.length} personagens presentes</p>

                <p>{formatDate(episode.air_date)}</p>
              </div>
            </Card>
          </Link>
        ))}
      </motion.div>
      <Pagination
        pagination={paginationInfo}
        setPaginationInfo={setPaginationInfo}
      />
    </Container>
  );
};

export default List;
