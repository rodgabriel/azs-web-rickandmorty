import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface IEpsContext {
  saveFavoriteEps: (episodes: any) => void;
  saveSeenEps: (episodes: any) => void;
  favoriteEps: Array<any>;
  seenEps: Array<any>;
}

const EpsContext = createContext<IEpsContext | undefined>({} as IEpsContext);

export const EpsContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const favoriteEpsFromStorage = localStorage.getItem("rickandmorty:likedeps");
  const seenEpsFromStorage = localStorage.getItem("rickandmorty:seeneps");

  const [favoriteEps, setFavoriteEps] = useState<Array<string>>(
    JSON.parse(favoriteEpsFromStorage as string) || []
  );
  const [seenEps, setSeenEps] = useState<Array<string>>(
    JSON.parse(seenEpsFromStorage as string) || []
  );

  useEffect(() => {
    localStorage.setItem("rickandmorty:likedeps", JSON.stringify(favoriteEps));
  }, [favoriteEps]);

  useEffect(() => {
    localStorage.setItem("rickandmorty:seeneps", JSON.stringify(seenEps));
  }, [seenEps]);

  const saveFavoriteEps = (episode: string) => {
    if (favoriteEps.includes(episode)) {
      const newFaveEps = favoriteEps.filter((ep) => ep !== episode);
      return setFavoriteEps(newFaveEps);
    }
    setFavoriteEps((eps) => [...eps, episode]);
  };

  const saveSeenEps = (episode: string) => {
    if (seenEps.includes(episode)) {
      const newSeenEps = seenEps.filter((ep) => ep !== episode);
      return setSeenEps(newSeenEps);
    }
    setSeenEps((eps) => [...eps, episode]);
  };

  return (
    <EpsContext.Provider
      value={{ saveFavoriteEps, saveSeenEps, favoriteEps, seenEps }}
    >
      {children}
    </EpsContext.Provider>
  );
};

export function useEpsContext() {
  const context = useContext(EpsContext);

  if (typeof context === "undefined") {
    throw new Error("useEpsContext must be within a EpsContext.");
  }

  return context;
}
