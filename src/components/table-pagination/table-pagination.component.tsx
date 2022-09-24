import React from "react";
import "./table-pagination.style.scss";

const TablePagination: React.FC = () => {
  return (
    <div className="pagination">
      <div className="pagination__item pagination__item--active">1</div>
      <div className="pagination__item">1</div>
      <div className="pagination__item">1</div>
      <div className="pagination__item">1</div>
      <div className="pagination__item">1</div>
    </div>
  );
};

export default TablePagination;
