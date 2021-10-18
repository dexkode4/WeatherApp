import { Box } from "@chakra-ui/react";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface IBarchartProps<T> {
  data: Array<T>;
  w?: string;
  h?: string;
}

export const Barchart = <T extends Object>({
  data,
  w = "100%",
  h = "100%",
}: IBarchartProps<T>) => {
  return (
    <Box minW={w} minH={h} data-testid="chart">
      <ResponsiveContainer width={w} height={h}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
