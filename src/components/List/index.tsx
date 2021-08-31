import { motion } from "framer-motion";
import padNumber from "helpers/padNumber";
import { Link } from "react-router-dom";

import { Container, Card } from "./styles";

interface Props {
  title?: string;
  items: Array<Episode>;
  loading: boolean;
  paginationInfo: any;
}

type Episode = {
  name: string;
  id: string;
  air_date: string;
  characters: Array<any>;
};

const List = ({ title, loading, items, paginationInfo }: Props) => {
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "numeric",
      year: "numeric",
    });
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

  console.log(paginationInfo);

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
        {items.map((item) => (
          <Link to={`/episode/${item.id}`}>
            <Card variants={child}>
              <div className="ep-number">
                <p>{padNumber(item.id)}</p>
              </div>
              <div className="content">
                <div className="header">
                  <p>{item.name}</p>
                </div>

                <p>{item.characters.length} personagens presentes</p>

                <p>{formatDate(item.air_date)}</p>
              </div>
            </Card>
          </Link>
        ))}
      </motion.div>
    </Container>
  );
};

export default List;
