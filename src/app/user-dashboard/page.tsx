"use client"

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Check if window object is available (client side)
    if (typeof window !== "undefined") {
      setChartData({
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Sales $",
            data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgb(53, 162, 235, 0.4)",
          },
        ],
      });
      setChartOptions({
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Daily Revenue",
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      });
    }
  }, []);

  return (
    <>
      <div className="w-full mt-20 flex justify-center items-center relative p-4 rounded-lg bg-black">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;