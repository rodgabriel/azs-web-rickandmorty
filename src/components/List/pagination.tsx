import { Dispatch, SetStateAction } from "react";
import { TPagination } from ".";
import { PaginationWrapper } from "./styles";

interface Props {
  pagination: TPagination;
  setPaginationInfo: Dispatch<SetStateAction<TPagination>>;
}

const Pagination = ({ pagination, setPaginationInfo }: Props) => {
  const onNumberClick = (num: number) => {
    setPaginationInfo((prevState: TPagination) => ({
      ...prevState,
      current: num,
    }));
  };
  return (
    <PaginationWrapper>
      {Array.from({ length: pagination.pages }, (v, k) => k).map(
        (i: number) => {
          return <div onClick={() => onNumberClick(i + 1)}>{i + 1}</div>;
        }
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
