import React from "react";
import "./App.scss";
import Button from "./components/button/button.component";
import Table from "./components/table/table.component";

const App: React.FC = () => (
  <div className="app">
    <div className="app__inner">
      <h1 className="app__header">User Dashboard</h1>
      <div className="app__add-button">
        <Button theme="primary">Add User</Button>
      </div>
      <div className="app__table-container">
        <Table />
      </div>
    </div>
  </div>
);

export default App;
