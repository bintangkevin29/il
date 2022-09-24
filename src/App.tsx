/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import "./App.scss";
import AddModal from "./components/add-modal/add-modal.component";
import Button from "./components/button/button.component";
import Heading from "./components/heading/heading.component";
import Table from "./components/table/table.component";
import { useUserData } from "./lib/custom-hook";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { userData } = useUserData();

  return (
    <>
      <div className="app">
        <div className="app__inner">
          <Heading align="center">User Dashboard</Heading>
          <div className="app__add-button">
            <Button theme="primary" onClick={() => setShowModal(true)}>
              Add User
            </Button>
          </div>
          <div className="app__table-container">
            <Table tableData={userData} />
          </div>
        </div>
      </div>
      <AddModal show={showModal} setShow={setShowModal} />
    </>
  );
};

export default App;
