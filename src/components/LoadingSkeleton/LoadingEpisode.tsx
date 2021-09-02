import Skeleton from "react-loading-skeleton";
import { Container } from "./styles";

const LoadingEpisode = () => {
  const { innerWidth } = window;

  const cardsPerRow = Math.floor(innerWidth / 290);

  return (
    <Container>
      <div className="row">
        <Skeleton circle width="7rem" height="7rem" />
      </div>
      <div className="row">
        <Skeleton width="30%" height="5rem" />
      </div>
      <div className="row">
        <Skeleton width="30%" />
      </div>
      <div className="row">
        <Skeleton width="30%" />
      </div>
      <div className="row">
        <Skeleton width="30%" height="3rem" />
      </div>
      <div className="row margin-large">
        {Array.from({ length: cardsPerRow }, (_, i) => i).map((i) => {
          return <Skeleton width="24rem" height="28rem" />;
        })}
      </div>

      <div className="row margin-large">
        {Array.from({ length: cardsPerRow }, (_, i) => i).map((i) => {
          return <Skeleton width="24rem" height="28rem" />;
        })}
      </div>
    </Container>
  );
};

export default LoadingEpisode;
