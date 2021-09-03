import Skeleton from "react-loading-skeleton";
import { Container } from "./styles";

const LoadingList = () => {
  const { innerWidth } = window;

  const cardsPerRow = innerWidth < 720 ? 1 : innerWidth < 1024 ? 2 : 3;

  const getPercentage = (value: number): string => {
    const percentage = Math.floor((1 / value) * 100 - 5);
    return `${percentage}%`;
  };

  return (
    <Container>
      <div className="row">
        {Array.from({ length: cardsPerRow }, (_, i) => i).map(() => {
          return <Skeleton width={getPercentage(cardsPerRow)} height="12rem" />;
        })}
      </div>
      <div className="row">
        {Array.from({ length: cardsPerRow }, (_, i) => i).map(() => {
          return <Skeleton width={getPercentage(cardsPerRow)} height="12rem" />;
        })}
      </div>
      <div className="row">
        {Array.from({ length: cardsPerRow }, (_, i) => i).map(() => {
          return <Skeleton width={getPercentage(cardsPerRow)} height="12rem" />;
        })}
      </div>
    </Container>
  );
};

export default LoadingList;
