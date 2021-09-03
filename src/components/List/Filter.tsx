import { Dispatch, SetStateAction } from "react";

import SearchIcon from "assets/icons/magnifying-glass.png";

import { FilterWrapper } from "./styles";

interface Props {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Filter = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <FilterWrapper>
      <input
        data-cy="search-episode"
        type="text"
        placeholder="Pesquisar episódio por nome"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="search-wrapper">
        <img src={SearchIcon} alt="Search Icon" />
      </div>
    </FilterWrapper>
  );
};

export default Filter;
