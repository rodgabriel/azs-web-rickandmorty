import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODE_BY_ID } from "graphQL/queries";
import formatDate from "helpers/formatDate";

import { Container, CharacterCard, BackgroundImg } from "./styles";

// icons
import DeadIcon from "assets/icons/dead.png";
import AliveIcon from "assets/icons/smile.png";
import QuestionIcon from "assets/icons/question.png";
import CalendarIcon from "assets/icons/calendar.png";
import MonsterIcon from "assets/icons/monster.png";
import SeenLiked from "components/SeenLiked";
import LoadingEpisode from "components/LoadingSkeleton/LoadingEpisode";
import { Link } from "react-router-dom";

interface EpisodeType {
  name: string;
  id: string;
  air_date: string;
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

  const status: { [key: string]: string } = {
    Alive: "Vivo",
    Dead: "Morto",
    unknown: "Desconhecido",
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingEpisode />
      ) : episode?.name ? (
        <>
          <div className="back-arrow">
            <Link to="/#episodes-list" data-cy="back-home">
              <button>&#8592;</button>
            </Link>
          </div>
          <div className="episode-header">
            <div className="ep-number">
              <strong>{episode.id}</strong>
            </div>
            <div className="episode actions">
              <SeenLiked episodeId={episode.id} colorMode="light" />
            </div>
          </div>
          <div className="content">
            <h1>{episode.name}</h1>
            <div className="date-info">
              <p>Data de exibição:</p>
              <div className="data">
                <img src={CalendarIcon} alt="" />
                <p>{formatDate(episode.air_date, "long")}</p>
              </div>
            </div>

            <div className="characters-container">
              <h2>Personagens:</h2>
              <div className="characters-card-wrapper">
                {episode.characters.map((character) => (
                  <CharacterCard index={character.id}>
                    <BackgroundImg src={character.image} alt="" />

                    <div className="content">
                      <p className="char-name">{character.name}</p>
                      <div className="char-species">
                        <img src={MonsterIcon} alt="" />
                        <p>
                          {character.species === "Human"
                            ? "Humano"
                            : character.species}
                        </p>
                      </div>
                      <div className="char-status">
                        <img
                          src={
                            character.status === "Alive"
                              ? AliveIcon
                              : character.status === "Dead"
                              ? DeadIcon
                              : QuestionIcon
                          }
                          alt=""
                        />
                        <p>{status[character.status]}</p>
                      </div>
                    </div>
                  </CharacterCard>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </Container>
  );
};

export default Episode;
