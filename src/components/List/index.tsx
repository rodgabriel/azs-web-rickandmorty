import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DocumentNode, QueryHookOptions, useQuery } from "@apollo/client";
import { GET_ALL_EPISODES, GET_EPISODES_BY_IDS } from "graphQL/queries";

// helpers
import padNumber from "helpers/padNumber";
import formatDate from "helpers/formatDate";

// icons
import Calendar from "assets/icons/calendar.png";
import Person from "assets/icons/user.png";

// components
import Pagination from "./Pagination";
import Filter from "./Filter";
import { Container, Card } from "./styles";
import SeenLiked from "components/SeenLiked";
import { useEpsContext } from "context/useContext";

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
  const [allEpisodes, setAllEpisodes] = useState<Array<Episode>>([]);
  const [showAllEpisodes, setShowAllEpisodes] = useState(true);
  const [showLikedEpisodes, setShowLikedEpisodes] = useState(false);
  const [showSeenEpisodes, setShowSeenEpisodes] = useState(false);
  const [paginationInfo, setPaginationInfo] = useState<TPagination>({
    current: 1,
    count: 0,
    pages: 0,
    prev: null,
    next: null,
  });
  const { favoriteEps, seenEps } = useEpsContext();

  const [searchTerm, setSearchTerm] = useState("");

  const determineQuery = (): DocumentNode => {
    if (showAllEpisodes) {
      return GET_ALL_EPISODES;
    }

    return GET_EPISODES_BY_IDS;
  };

  const determineVariables = (): QueryHookOptions => {
    if (showLikedEpisodes) {
      return {
        variables: {
          ids: favoriteEps.join(","),
        },
      };
    }

    if (showSeenEpisodes) {
      return {
        variables: {
          ids: seenEps.join(","),
        },
      };
    }

    return {
      variables: {
        page: searchTerm ? 0 : paginationInfo.current,
        filter: searchTerm,
      },
    };
  };

  const { loading, data } = useQuery(determineQuery(), determineVariables());

  const onFilterTodos = () => {
    setShowAllEpisodes(true);
    setShowLikedEpisodes(false);
    setShowSeenEpisodes(false);
  };

  const onFilterLikedEpisodes = () => {
    setShowAllEpisodes(false);
    setShowLikedEpisodes(true);
    setShowSeenEpisodes(false);
  };
  const onFilterSeenEpisodes = () => {
    setShowAllEpisodes(false);
    setShowLikedEpisodes(false);
    setShowSeenEpisodes(true);
  };

  useEffect(() => {
    if (showLikedEpisodes || showSeenEpisodes) {
      if (data?.episodesByIds) {
        setAllEpisodes(data.episodesByIds);
      }
    } else {
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
    }
  }, [data, showLikedEpisodes, showSeenEpisodes]);

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
      <div className="filtragem">
        <p>Filtrar por: </p>
        <button
          className={showAllEpisodes ? "active" : ""}
          onClick={onFilterTodos}
        >
          Todos
        </button>
        <button
          className={showLikedEpisodes ? "active" : ""}
          onClick={onFilterLikedEpisodes}
        >
          Favoritos
        </button>
        <button
          className={showSeenEpisodes ? "active" : ""}
          onClick={onFilterSeenEpisodes}
        >
          Vistos
        </button>
      </div>
      <motion.div
        className="cards-wrapper"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {allEpisodes.map((episode) => {
          return (
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
                  <p>{formatDate(episode.air_date, "2-digit")}</p>
                </div>
              </div>
              <div className="list actions">
                <SeenLiked episodeId={episode.id} colorMode="dark" />
              </div>
            </Card>
          );
        })}
      </motion.div>
      {showAllEpisodes && (
        <Pagination
          pagination={paginationInfo}
          setPaginationInfo={setPaginationInfo}
        />
      )}
    </Container>
  );
};

export default List;
