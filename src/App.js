import React from "react";
import { Table } from "./components/Table";
import { BarChart } from "./components/BarChart";
import { SumWidget } from "./components/SumWidget";
function App() {
  return (
    <div className="container1">
      <SumWidget></SumWidget>
      <Table />
      <BarChart />
    </div>
  );
}

export default App;
