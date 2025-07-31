// import React from "react";
// import {
//     Chart as ChartJS,
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";
// import { Bar, Line } from "react-chartjs-2";

// const options = {
//     responsive: true,
//    maintainAspectRatio: false, // Allow chart to resize freely

//     plugins: {
//         legend: {
//             display: false, // Hide legend if not needed
//         },
//     },
//     elements: {
//         line: {
//             tension: 0.4, // Smooth curve
//         },
//         point: {
//             radius: 5, // Point size
//             hoverRadius: 7,
//             backgroundColor: "#00BFFF", // Highlight point on hover
//         },
//     },
//     scales: {
//         x: {
//             grid: {
//                 display: false, // Remove x-axis grid
//             },
//             ticks: {
//                 color: "#6b7280", // Tailwind gray-500 for x-axis
//             },
//         },
//         y: {
//             grid: {
//                 display: false, // Remove y-axis grid
//             },
//             ticks: {
//                 color: "#6b7280", // Tailwind gray-500 for y-axis
//             },
//         },
//     },
// };

// const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//         {
//             label: "Power Consumption",
//             data: [20, 30, 25, 40, 35, 50],
//             borderColor: "#00BFFF", // Line color
//             backgroundColor: "rgba(0, 191, 255, 0.2)", // Optional shadow
//         },
//     ],
// };
// const CurrentPowerCard=({className})=> {
//     return (
//         <div className={`relative p-6 m-2 rounded-2xl shadow-lg ${className}`}>
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 rounded-2xl"></div>
//             <h4 className="text-white font-bold relative z-10">
//                 Current Power Consumption
//             </h4>

//             {/* Gradient Background Container */}
//             <div className="relative h-64 mt-4">
//                 <div className="relative h-full">
//                     <Bar data={data} options={options} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// // ✅ Register required components
// ChartJS.register(
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     Title,
//     Tooltip,
//     Legend
// );

// export default CurrentPowerCard;
import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    BarElement, // ✅ Register BarElement
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// ✅ Register required components globally before using them
ChartJS.register(
    LineElement,
    BarElement, // ✅ Fix missing registration
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

// Chart options
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
            backgroundColor: "#FFFFFF", // Highlight point on hover
        },
    },
    scales: {
        x: {
            grid: {
                display: false, // Remove x-axis grid
            },
            ticks: {
                color: "#6fffff", // Tailwind gray-500 for x-axis
            },
        },
        y: {
            grid: {
                display: false, // Remove y-axis grid
            },
            ticks: {
                color: "#6fffff", // Tailwind gray-500 for y-axis
            },
        },
    },
};

// Chart data
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Power Consumption",
            data: [20, 30, 25, 40, 35, 50],
            borderColor: "#fffFFF",
            backgroundColor: "rgba(220,220 ,220, 22)",
        },
    ],
};

// Current Power Card Component
const CurrentPowerCard = ({ className = "" }) => {
    return (
        <div className={`relative p-6 m-2 rounded-2xl shadow-lg ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 rounded-2xl"></div>
            <h4 className="text-white font-bold relative z-10">
                Current Power Consumption
            </h4>

            {/* Gradient Background Container */}
            <div className="relative h-64 mt-4">
                <div className="relative h-full">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default CurrentPowerCard;
