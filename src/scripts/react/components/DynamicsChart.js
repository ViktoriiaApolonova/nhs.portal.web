import React, { Component } from "react";
import { format } from "date-fns";
import { uk } from "date-fns/esm/locale";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area
} from "recharts";

import ChartTooltip from "./ChartTooltip";

const DynamicsChart = ({ data, dataKey, units }) => (
  <ResponsiveContainer width="100%" aspect={2}>
    <AreaChart data={data}>
      <CartesianGrid stroke="#e8e8e8" />
      <XAxis
        dataKey="period_name"
        interval="preserveStartEnd"
        tickFormatter={date => format(date, "d")}
        tick={{ fontSize: 12 }}
      />
      <YAxis scale="linear" width={80} tick={{ fontSize: 12 }} />
      <Tooltip
        content={
          <ChartTooltip
            units={units}
            labelFormatter={l => format(l, "d MMMM", { locale: uk })}
            formatter={v => v.toLocaleString("uk-UA")}
          />
        }
        cursor={{ stroke: "#4880ed" }}
      />
      <Area
        type="natural"
        dataKey={dataKey}
        stroke="#4862ed"
        strokeWidth={2}
        fill="#4293f3"
        fillOpacity={0.9}
        dot
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default DynamicsChart;
