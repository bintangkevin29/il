import React, { useState } from "react";
import { useUserData } from "../../lib/custom-hook";
import Button from "../button/button.component";
import TablePagination from "../table-pagination/table-pagination.component";
import "./table.scss";

interface TableProps {
  tableData: UserData[];
}

const Table: React.FC<TableProps> = ({ tableData = [] }) => {
  const [page, setPage] = useState(1);
  const { getPaginatedUserData } = useUserData();
  const { currentPageData, maxPage, startIndex } = getPaginatedUserData({
    page,
    length: 2,
  });
  return (
    <div className="table">
      <table className="table__table">
        <thead>
          <tr>
            <td>No</td>
            <td>Nama</td>
            <td>Pekerjaan</td>
            <td>Alamat</td>
            <td>Tanggal Lahir</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((dt, i) => (
            <tr>
              <td>{i + startIndex}</td>
              <td>{dt.nama}</td>
              <td>{dt.pekerjaan}</td>
              <td>{dt.alamat}</td>
              <td>{dt.tanggalLahir}</td>
              <td>
                <Button theme="danger">TEST</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table__pagination">
        <TablePagination page={page} setPage={setPage} length={maxPage} />
      </div>
    </div>
  );
};

export default Table;
