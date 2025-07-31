
// import React from "react";
// import { Line } from "react-chartjs-2";
// const MetricsCard = ({ title, value, change, isPositive, className, typeChart: ChartComponent,isGraph }) => {
//     const Value = (ChartComponent)=>{
//         if (ChartComponent === 'Line'){
//             return <Line data={{ labels: ['January', 'February', 'March', 'April', 'May', 'June'], datasets: [{ label: 'My First Dataset', data: [65, 59, 80, 81, 56, 55, 40], backgroundColor: 'rgba(75,192,192,0.4)', borderColor: 'rgba(75,192,192,1)', borderWidth: 1 }] }} />;
//         }
//     }
//     return (
//         <div
//             className={`bg-white px-4 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105 ${className}`}
//         >
//             {/* Title */}
//             <h4 className="text-xs font-semibold text-gray-500">{title}</h4>

//             {/* Value */}
//             <p className="text-lg font-bold text-gray-800 mt-1">{value}</p>

//             {/* Change Indicator */}
//             <p
//                 className={`text-xs mt-2 ${isPositive ? "text-green-500" : "text-red-500"
//                     }`}
//             >
//                 {isPositive ? `+${change}` : `${change}`} from last month
//             </p>
//             {
//                 isGraph && (
//                     < span >
//                         <Value/>
//                     </span>
//                 )
//             }

//         </div >
//     );
// };

import React from "react";
import { Line } from "react-chartjs-2";

const MetricsCard = ({
  title,
  value,
  change,
  isPositive,
  className,
  typeChart,
  isGraph,
}) => {
  // Function to Render the Chart Dynamically
  const renderChart = () => {
    if (typeChart === "Line") {
      return (
        <Line
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      );
    }
    return null; // Return nothing if typeChart is not Line
  };

  return (
    <div
      className={`bg-white px-4 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105 ${className}`}
    >
      {/* Title */}
      <h4 className="text-xs font-semibold text-gray-500">{title}</h4>

      {/* Value */}
      <p className="text-lg font-bold text-gray-800 mt-1">{value}</p>

      {/* Change Indicator */}
      <p
        className={`text-xs mt-2 ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {isPositive ? `+${change}` : `${change}`} from last month
      </p>

      {/* Conditional Chart Rendering */}
      {isGraph && (
        <span className="block mt-4">
          {renderChart()}
        </span>
      )}
    </div>
  );
};

export default MetricsCard;
