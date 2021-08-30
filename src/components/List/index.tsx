import { Link } from "react-router-dom";

import { Card } from "./styles";

interface Props {
  items: Array<Episode>;
  loading: boolean;
}

type Episode = {
  name: string;
  id: string;
  air_date: string;
  characters: Array<any>;
};

const List = ({ items }: Props) => {
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <>
      {items.map((item) => (
        <Link to={`/episode/${item.id}`}>
          <Card>
            <div className="header">
              <p>#{item.id}</p>
              <p>{item.name}</p>
            </div>

            <p>{formatDate(item.air_date)}</p>

            <p>{item.characters.length} personagens presentes</p>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default List;
