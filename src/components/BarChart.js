import React from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import { useStoreState } from "easy-peasy";

export const BarChart = () => {
  const data = useStoreState((state) => state.data);
  const chartData = Object.values(data);

  return (
    <ResponsiveContainer width="95%" height={350} minWidth={300}>
      <ReBarChart width={600} height={275} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="val1" fill="#8884d8" />
        <Bar dataKey="val2" fill="#82ca9d" />
        <Bar dataKey="val3" fill="gray" />
      </ReBarChart>
    </ResponsiveContainer>
  );
};
