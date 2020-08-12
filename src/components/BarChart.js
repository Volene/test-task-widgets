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
//recharts/v/2.0.0-beta.6

import { useStoreState } from "easy-peasy";

export const BarChart = () => {
  const chartData = useStoreState((state) => state.data);
  const normData = Object.values(chartData);

  return (
    <ResponsiveContainer width="95%" height={350} minWidth={300}>
      <ReBarChart width={600} height={275} data={normData}>
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
