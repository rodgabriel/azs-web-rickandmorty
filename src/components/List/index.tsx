import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "graphQL/queries";

// helpers
import padNumber from "helpers/padNumber";

// icons
import EyeOpen from "assets/icons/eye-open.png";
// import EyeFull from "assets/icons/eye-full.png"
import HeartOpen from "assets/icons/heart-open.png";
// import HeartFull from "assets/icons/heart-full.png"
import Calendar from "assets/icons/calendar.png";
import Person from "assets/icons/user.png";

// components
import Pagination from "./Pagination";
import Filter from "./Filter";
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
      month: "2-digit",
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

  const [searchTerm, setSearchTerm] = useState("");

  const { loading, data } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: searchTerm ? 0 : paginationInfo.current,
      filter: searchTerm,
    },
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

  return (
    <Container
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.1,
        ease: "easeIn",
      }}
    >
      <h1>{title}</h1>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <motion.div
        className="cards-wrapper"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {allEpisodes.map((episode) => (
          <Card variants={child} index={episode.id}>
            <div className="content">
              <Link to={`/episode/${episode.id}`}>
                <div className="header">
                  <div className="ep-number">
                    <p>{padNumber(episode.id)}</p>
                  </div>
                  <div className="title">
                    <p>{episode.name}</p>
                  </div>
                </div>
              </Link>
              <div className="personagens">
                <img src={Person} alt="" />
                <p>{episode.characters.length} personagens</p>
              </div>

              <div className="data-exibicao">
                <img src={Calendar} alt="" />
                <p>{formatDate(episode.air_date)}</p>
              </div>
            </div>
            <div className="actions">
              <img src={EyeOpen} alt="Seen button" />
              <img src={HeartOpen} alt="Like button" />
            </div>
          </Card>
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
