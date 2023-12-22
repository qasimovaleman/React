import React from "react";
import Table from "../../components/table";
import "./index.css";

const HomePage = ({users}) => {
  return (
  <Table users={users}/>
  );
};

export default HomePage;
