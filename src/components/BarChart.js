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
import { omit, randomColor } from "../utils";

import { useStoreState } from "easy-peasy";

export const BarChart = () => {
  const data = useStoreState((state) => state.data);
  const chartData = Object.values(data);
  const bars = Object.keys(
    omit(Object.values(data)[0], ["id", "name", "date"])
  );

  return (
    <ResponsiveContainer width="95%" height={350} minWidth={300}>
      <ReBarChart width={600} height={275} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        {bars.map((bar) => (
          <Bar dataKey={bar} fill={randomColor()}></Bar>
        ))}
      </ReBarChart>
    </ResponsiveContainer>
  );
};
