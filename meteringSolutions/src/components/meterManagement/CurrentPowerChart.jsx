// // // src/components/CurrentPowerCard.jsx
// // import React from "react";
// // import {
// //     Chart as ChartJS,
// //     BarElement,
// //     CategoryScale,
// //     LinearScale,
// //     PointElement,
// //     Title,
// //     Tooltip,
// //     Legend,
// // } from "chart.js";
// // import { Bar } from "react-chartjs-2";

// // ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// // const options = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //         legend: {
// //             display: false,
// //         },
// //     },
// //     scales: {
// //         x: {
// //             ticks: {
// //                 color: "#6fffff",
// //             },
// //             grid: {
// //                 display: false,
// //             },
// //         },
// //         y: {
// //             ticks: {
// //                 color: "#6fffff",
// //             },
// //             grid: {
// //                 display: false,
// //             },
// //         },
// //     },
// // };

// // const CurrentPowerChart = ({
// //     className = "",
// //     title = "Power Chart",
// //     labels = [],
// //     dataPoints = [],
// //     barColor = "#ffffff",
// //     bgColor = "rgba(220, 220, 220, 0.8)",
// // }) => {
// //     const data = {
// //         labels,
// //         datasets: [
// //             {
// //                 label: title,
// //                 data: dataPoints,
// //                 borderColor: barColor,
// //                 backgroundColor: bgColor,
// //             },
// //         ],
// //     };

// //     return (
// //         <div className={`relative p-6 m-2 rounded-2xl shadow-lg ${className}`}>
// //             <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 rounded-2xl"></div>
// //             <h4 className="text-white font-bold relative z-10">{title}</h4>
// //             <div className="relative h-64 mt-4">
// //                 <Bar data={data} options={options} />
// //             </div>
// //         </div>
// //     );
// // };

// // export default CurrentPowerChart;
// // src/components/meter/CurrentPowerChart.jsx
// import React from "react";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: {
//       display: false,
//     },
//   },
//   scales: {
//     x: {
//       ticks: { color: "#374151" },
//       grid: { display: false },
//     },
//     y: {
//       ticks: { color: "#374151" },
//       grid: { display: false },
//     },
//   },
// };

// // Utility to format date from ISO to `DD MMM` (e.g., 15 Jul)
// const formatDate = (isoDate) => {
//   const date = new Date(isoDate);
//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//   });
// };

// /**
//  * Props:
//  * - fullchartData: {
//  *     className: string,
//  *     title: string,
//  *     barColor: string,
//  *     bgColor: string,
//  *     dataPoints: Array<{ date: string, totalKWh: string, totalDeduction: string, ... }>
//  *   }
//  * - selectedMetric: string (e.g., "totalDeduction", "totalKWh")
//  */
// const CurrentPowerChart = ({ fullchartData, selectedMetric = "totalDeduction" }) => {
//   const {
//     className = "",
//     title = "Power Chart",
//     dataPoints = [],
//     barColor = "rgba(59, 130, 246, 0.6)",
//     bgColor = "rgba(59, 130, 246, 1)",
//   } = fullchartData || {};

//   // Format labels and data
//   const labels = dataPoints.map((dp) => formatDate(dp.date));
//   const selectedData = dataPoints.map((dp) =>
//     dp[selectedMetric] !== undefined ? parseFloat(dp[selectedMetric]) : 0
//   );

//   const hasData = Array.isArray(selectedData) &&
//     selectedData.some((val) => typeof val === "number" && val !== 0);

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: title,
//         data: selectedData,
//         borderColor: bgColor,
//         backgroundColor: barColor,
//       },
//     ],
//   };

//   return (
//     <div
//       className={`bg-whitw w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] h-auto p-4 transition-all duration-300 ${className}`}
//     >
//       <h4 className="text-gray-700 font-bold">{title}</h4>

//       <div className="w-full aspect-[3/1] mt-6 h-[350px] flex items-center justify-center">
//         {hasData ? (
//           <Bar data={chartData} options={options} />
//         ) : (
//           <p className="text-gray-500 text-lg font-medium">Data Not Found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CurrentPowerChart;
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: { color: "#374151",    autoSkip: false, },
      grid: { display: false },
      // ticks: {
      //   autoSkip: false
      // }
    },
    y: {
      ticks: { color: "#374151" },
      grid: { display: false },
    },
  },
};

const CurrentPowerChart = ({
  className = "",
  title = "",
  labels = [],
  dataPoints = [],
  barColor = "rgba(75, 192, 192, 0.6)", // Bar color
  bgColor = "rgba(75, 192, 192, 1)", // Border color
}) => {
  const hasData = Array.isArray(dataPoints) && dataPoints.length > 0;

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: dataPoints,
        borderColor: barColor,
        backgroundColor: bgColor,
      },
    ],
  };

  console.log("=====data=======",data,hasData)
  

  return (


    <div
    className={`bg-slate-100/20 rounded-md shadow-xs w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] h-auto  p-4 hover:shadow-sm transition-all duration-300 ${className}`}
  >
    <h4 className="text-gray-700 font-bold">{title}</h4>

    <div className="w-full aspect-[2/1] mt-6 h-[350px] flex items-center justify-center">
      {hasData ? (
        <Bar data={data} options={options} />
      ) : (
        <p className="text-gray-500 text-lg font-medium">Data Not Found</p>
      )}
    </div>
  </div>
  );
};

export default CurrentPowerChart;
