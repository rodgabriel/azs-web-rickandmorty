import { useEffect, useRef } from "react";

// components
import List from "components/List";
import Hero from "components/Hero";

const Home = () => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const goToEpisodesList = () => {
    setTimeout(() => {
      listRef.current?.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    const { hash } = window.location;
    if (hash === "#episodes-list") {
      goToEpisodesList();
    }
  }, []);

  return (
    <>
      <Hero goToEpisodesList={goToEpisodesList} />
      <List title="Episódios" listRef={listRef} />
    </>
  );
};

export default Home;
