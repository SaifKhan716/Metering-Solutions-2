

import React from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
// // Register Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
/////////////////////////
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allow chart to resize freely

  plugins: {
    legend: {
      display: false, // Hide legend if not needed
    },
  },
  elements: {
    line: {
      tension: 0.4, // Smooth curve
    },
    point: {
      radius: 5, // Point size
      hoverRadius: 7,
      backgroundColor: "#00BFFF", // Highlight point on hover
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Remove x-axis grid
      },
      ticks: {
        color: "#6b7280", // Tailwind gray-500 for x-axis
      },
    },
    y: {
      grid: {
        display: false, // Remove y-axis grid
      },
      ticks: {
        color: "#6b7280", // Tailwind gray-500 for y-axis
      },
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Power Consumption",
      data: [20, 30, 25, 40, 35, 50],
      borderColor: "#00BFFF", // Line color
      backgroundColor: "rgba(0, 191, 255, 0.2)", // Optional shadow
    },
  ],
};
const EnergyConsumption = ({ className }) => {
  
  const balance = 283.62;
  const lastDeduction = -28.64;
  const deductionDate = "2025-03-22";
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* User Greeting */}

      {/* Balance & Deduction Section */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="p-4 flex justify-between bg-gray-100 rounded-lg items-center">
        <div>
          <h3 className="text-gray-600 text-sm">Current Balance</h3>
          <p className="text-2xl font-bold">$ {balance}</p>   
          </div>

       
          <Link  className="cursor-pointer" to='/energyConsumption/recentHistoricalData'><SlArrowRight /></Link>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-gray-600 text-sm">Last Deduction</h3>
          <p className="text-2xl font-bold text-red-500">$ {lastDeduction}</p>
          <p className="text-gray-500 text-xs">{deductionDate}</p>
        </div>
      </div>

      {/* Usage History Graph */}
      {/* <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Usage History</h3>
        <div className="h-64">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div> */}

      <div className={`relative p-6 m-2 rounded-2xl shadow-lg ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 rounded-2xl"></div>
        <div className="flex justify-between">
        <h4 className="text-white font-bold relative z-10">
          Current Power Consumption
        </h4>
        <div>
        <select 
         className="bg-white text-black font-bold p-2 rounded-md outline-none cursor-pointer"
      value={""}
      onChange={""}
        >
          <option value="today">Today</option>
          <option value="last7days">Last 7 days</option>
          <option value="last30days">Last 30 days</option>
        </select>

        <input type="datetime-local" value={""} onChange={""}/>
        </div>
        </div>

        {/* Gradient Background Container */}
        <div className="relative h-74 mt-4">
          <div className="relative h-74">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
     
    </div>
  );
};

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default EnergyConsumption;
