import { blue, pink } from "@material-ui/core/colors";
import React from "react";
import { Bar } from "react-chartjs-2";

const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
  labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  datasets: [
    {
      type: "line",
      label: "もらったお金",
      borderColor: pink[400],
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: "bar",
      label: "レシート数",
      backgroundColor: blue[300],
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => {
  const data = genData();

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export { LineChart };
