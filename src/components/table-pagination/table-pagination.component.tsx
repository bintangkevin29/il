import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { setPage } from "../../redux/slices/user-interface.slice";
import "./table-pagination.style.scss";

interface TablePaginationProps {
  length: number;
}

const TablePagination: React.FC<TablePaginationProps> = ({ length }) => {
  const { page } = useAppSelector((state) => state.table.value);
  const dispatch = useDispatch();
  return length > 1 ? (
    <div className="pagination">
      {Array(length)
        .fill(length)
        .map((dt, i) => {
          return (
            <div
              key={`${dt}-${i}`}
              onClick={() => dispatch(setPage(i + 1))}
              className={`pagination__item ${
                page === i + 1 ? "pagination__item--active" : ""
              }`}
            >
              {i + 1}
            </div>
          );
        })}
    </div>
  ) : (
    <></>
  );
};

export default TablePagination;
