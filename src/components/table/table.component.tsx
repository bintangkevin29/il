import React from "react";
import Button from "../button/button.component";
import TablePagination from "../table-pagination/table-pagination.component";
import "./table.scss";

const Table: React.FC = () => (
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
        <tr>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
          <td>
            <Button theme="danger">TEST</Button>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="table__pagination">
      <TablePagination />
    </div>
  </div>
);

export default Table;
