import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // hide legend for a clean look
    },
    title: {
      display: false, // we’ll use a custom title instead
    },
    tooltip: {
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      bodyColor: "#ddd",
      borderRadius: 6,
      padding: 8,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#555", font: { size: 12 } },
    },
    y: {
      grid: { color: "#f0f0f0" },
      ticks: { color: "#777", font: { size: 12 } },
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div className="vertical-graph-container">
      <p className="vertical-graph-title">Holdings</p>
      <div className="vertical-graph-wrapper">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
