/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.scss";
import AddModal from "./components/add-modal/add-modal.component";
import Button from "./components/button/button.component";
import Heading from "./components/heading/heading.component";
import Table from "./components/table/table.component";
import { useUserData } from "./lib/custom-hook";
import { useAppDispatch } from "./redux/hooks";
import { showAdd } from "./redux/slices/user-interface.slice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userData } = useUserData();

  return (
    <>
      <div className="app">
        <div className="app__inner">
          <Heading align="center">User Dashboard</Heading>
          <div className="app__add-button">
            <Button
              theme="success"
              onClick={() => dispatch(showAdd())}
              size="lg"
            >
              Add User
            </Button>
          </div>
          <div className="app__table-container">
            <Table tableData={userData} />
          </div>
        </div>
      </div>
      <AddModal />
    </>
  );
};

export default App;
