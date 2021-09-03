import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DocumentNode, QueryHookOptions, useQuery } from "@apollo/client";
import { GET_ALL_EPISODES, GET_EPISODES_BY_IDS } from "graphQL/queries";
import { useEpsContext } from "context/useContext";

// helpers
import padNumber from "helpers/padNumber";
import formatDate from "helpers/formatDate";

// icons
import Calendar from "assets/icons/calendar.png";
import Person from "assets/icons/user.png";

// components
import LoadingList from "components/LoadingSkeleton/LoadingList";
import Pagination from "./Pagination";
import Filter from "./Filter";
import { Container, Card } from "./styles";
import SeenLiked from "components/SeenLiked";

interface Props {
  title?: string;
  listRef: React.RefObject<HTMLDivElement>;
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

const List = ({ title, listRef }: Props) => {
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
    <Container ref={listRef} id="episodes-list">
      <h1>{title}</h1>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="filtragem">
        <p>Filtrar por: </p>
        <button
          data-cy="filter-all"
          className={showAllEpisodes ? "active" : ""}
          onClick={onFilterTodos}
        >
          Todos
        </button>
        <button
          data-cy="filter-liked"
          className={showLikedEpisodes ? "active" : ""}
          onClick={onFilterLikedEpisodes}
        >
          Favoritos
        </button>
        <button
          data-cy="filter-seen"
          className={showSeenEpisodes ? "active" : ""}
          onClick={onFilterSeenEpisodes}
        >
          Vistos
        </button>
      </div>
      {loading ? (
        <LoadingList />
      ) : (
        <div className="cards-wrapper">
          {allEpisodes.map((episode) => {
            return (
              <Card index={episode.id}>
                <div className="content">
                  <Link to={`/episode/${episode.id}`} data-cy="link-episode">
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
        </div>
      )}
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
