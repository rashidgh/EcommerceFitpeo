import React, { useState } from "react";
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
import { FaSortDown } from "react-icons/fa";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: Array.from({ length: 23 }, (_, i) => i + 5), // Labels from 5 to 27
  datasets: [
    {
      // label: "Activity",
      data: [
        4000, 9000, 4500, 4400, 6000, 6000, 5000, 5500, 4800, 2000, 7500, 7800,
        6000, 10500, 9000, 12500, 15000, 10500, 4500, 5500, 10500, 7000, 6000,
      ], // Example data
      backgroundColor: "#6F94FF",
      borderRadius: 20,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allow custom dimensions
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      // text: "Activity",
      color: "white",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "white",
        callback: function (value) {
          if (value === 0) return "0k";
          return `${value / 1000}k`;
        },
      },
      beginAtZero: true,
      max: 15000,
    },
  },
};

const Graph = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 430);
  return (
    <div className="bg-[#202028] rounded-md">
      <div className="p-6 flex justify-between">
        <p id="activity" className="text-2xl font-bold">
          Activity
        </p>
        <p className="px-4 text-[13px] py-2 bg-[#4C4D52] rounded-[25px] flex gap-1">
          Weekly
          <span>
            <FaSortDown />
          </span>
        </p>
      </div>
      <div
        id="graph"
        style={{
          padding: "20px",
          height: "32vh", // Reduced height
          width: !isLargeScreen ? "70vw" : "54vw", // Max width to limit the size
          borderRadius: "6px", // Apply border radius to the container
          overflow: "hidden", // Ensure that the chart stays within the border radius
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
