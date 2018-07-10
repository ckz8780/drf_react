import React from "react";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";

const App = () => (
  <React.Fragment>
    <DataProvider endpoint="api/lead/" 
                  render={data => <Table data={data} />} />
    <Form endpoint="api/lead/" />
  </React.Fragment>
);

export default App;