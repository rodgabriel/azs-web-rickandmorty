import { useEpsContext } from "context/useContext";

import { Container } from "./styles";

// icons
import EyeOpen from "assets/icons/eye-open.png";
import EyeFull from "assets/icons/eye-full.png";
import HeartOpen from "assets/icons/heart-open.png";
import HeartFull from "assets/icons/heart-full.png";

interface Props {
  episodeId: string;
  colorMode: "light" | "dark";
}

const SeenLiked = ({ episodeId, colorMode }: Props) => {
  const { favoriteEps, saveFavoriteEps, seenEps, saveSeenEps } =
    useEpsContext();

  const onFaveEpClick = (episode: string) => {
    saveFavoriteEps(episode);
  };

  const onSeenEpClick = (episode: string) => {
    saveSeenEps(episode);
  };

  const liked = favoriteEps.includes(episodeId);
  const seen = seenEps.includes(episodeId);

  return (
    <Container colorMode={colorMode}>
      <button
        data-cy={`seen-${episodeId}`}
        className={`img-wrapper ${seen ? "seen" : ""}`}
        onClick={() => onSeenEpClick(episodeId)}
      >
        <img
          className="img-seen"
          src={seen ? EyeFull : EyeOpen}
          alt="Seen button"
        />
      </button>
      <button
        data-cy={`liked-${episodeId}`}
        className={`img-wrapper ${liked ? "liked" : ""}`}
        onClick={() => onFaveEpClick(episodeId)}
      >
        <img
          className="img-liked"
          src={liked ? HeartFull : HeartOpen}
          alt="Like button"
        />
      </button>
    </Container>
  );
};

export default SeenLiked;
