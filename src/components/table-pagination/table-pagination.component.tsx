import React from "react";
import "./table-pagination.style.scss";

interface TablePaginationProps {
  length: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  length,
  page,
  setPage,
}) => {
  return (
    <div className="pagination">
      {Array(length)
        .fill(length)
        .map((dt, i) => {
          return (
            <div
              key={`${dt}-${i}`}
              onClick={() => setPage(i + 1)}
              className={`pagination__item ${
                page === i + 1 ? "pagination__item--active" : ""
              }`}
            >
              {i + 1}
            </div>
          );
        })}
    </div>
  );
};

export default TablePagination;
