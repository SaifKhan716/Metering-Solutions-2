// // import { useState } from "react";

// // const RecentAndHistoricalData = () => {
// //   const [activeTab, setActiveTab] = useState("recent");
// //   const [expandedIndex, setExpandedIndex] = useState(null);

// //   // Static deduction data
// //   const deductions = [
// //     {
// //       date: "22-03-2025",
// //       total: -28.64,
// //       details: {
// //         generatorCommon: 0,
// //         gridCommon: 0,
// //         generatorRoom: 0,
// //         gridRoom: 19.70,
// //         otherCharges: 8.94,
// //         credited: 0.0,
// //       },
// //       usage: "1.79 Units",
// //       startTime: "21-03-2025 - 12:00 AM",
// //       endTime: "22-03-2025 - 12:00 AM",
// //     },
// //     {
// //       date: "21-03-2025",
// //       total: -28.31,
// //       details: {
// //         generatorCommon: 0,
// //         gridCommon: 0,
// //         generatorRoom: 0,
// //         gridRoom: 19.50,
// //         otherCharges: 8.81,
// //         credited: 0.0,
// //       },
// //       usage: "1.75 Units",
// //       startTime: "20-03-2025 - 12:00 AM",
// //       endTime: "21-03-2025 - 12:00 AM",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen from-blue-300 to-white p-4">
// //       <div className=" mx-auto bg-white rounded-lg shadow-md">
// //         {/* Header */}
// //         <div className="p-4 bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
// //           <button onClick={""}>&larr;</button>
// //           <h2 className="text-lg font-semibold">Deduction History</h2>
// //           <div></div>
// //         </div>

// //         {/* Tabs */}
// //         <div className="flex border-b">
// //           <button
// //             className={`flex-1 py-2 ${activeTab === "recent" ? "border-b-2 border-black font-semibold" : ""}`}
// //             onClick={() => setActiveTab("recent")}
// //           >
// //             Recent
// //           </button>
// //           <button
// //             className={`flex-1 py-2 ${activeTab === "historical" ? "border-b-2 border-black font-semibold" : ""}`}
// //             onClick={() => setActiveTab("historical")}
// //           >
// //             Historical
// //           </button>
// //         </div>

// //         {/* Deduction List */}
// //         <div className="p-4 space-y-4">
// //           {deductions.map((item, index) => (
// //             <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
// //               <div className="flex justify-between items-center">
// //                 <p className="text-gray-700 font-medium">{item.date}</p>
// //                 <button onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
// //                   {expandedIndex === index ? "▲" : "▼"}
// //                 </button>
// //               </div>
// //               <p className="text-xl font-semibold text-red-600">₹{item.total.toFixed(2)}</p>

// //               {expandedIndex === index && (
// //                 <div className="mt-3 text-gray-700 text-sm">
// //                   <p><strong>Common Area Charges:</strong></p>
// //                   <p>Generator: ₹{item.details.generatorCommon.toFixed(2)}</p>
// //                   <p>Grid: ₹{item.details.gridCommon.toFixed(2)}</p>
// //                   <p><strong>Room Charges:</strong></p>
// //                   <p>Generator: ₹{item.details.generatorRoom.toFixed(2)}</p>
// //                   <p>Grid: ₹{item.details.gridRoom.toFixed(2)} ({item.usage})</p>
// //                   <p><strong>Other Charges:</strong> ₹{item.details.otherCharges.toFixed(2)}</p>
// //                   <p><strong>Amount Credited:</strong> ₹{item.details.credited.toFixed(2)}</p>
// //                   <p className="mt-2 text-xs text-gray-500">Start: {item.startTime} | End: {item.endTime}</p>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RecentAndHistoricalData;

// import React,{ useState } from "react";

// const RecentAndHistoricalData = () => {
//   const [activeTab, setActiveTab] = useState("recent");
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const deductions = [
//     {
//       date: "22-03-2025",
//       total: -28.64,
//       details: {
//         generatorCommon: 0,
//         gridCommon: 0,
//         generatorRoom: 0,
//         gridRoom: 19.70,
//         otherCharges: 8.94,
//         credited: 0.0,
//       },
//       usage: "1.79 Units",
//       startTime: "21-03-2025 - 12:00 AM",
//       endTime: "22-03-2025 - 12:00 AM",
//     },
//   ];

//   return (
//     <div className="min-h-screen p-4">
//       <div className="mx-auto bg-white rounded-lg shadow-md">
//         {/* Header */}
//         <div className="p-4 bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
//           <h2 className="text-lg font-semibold">Deduction History</h2>
//         </div>

//         {/* Tabs */}
//         <div className="flex border-b">
//           <button
//             className={`flex-1 py-2 ${activeTab === "recent" ? "border-b-2 border-black font-semibold" : ""}`}
//             onClick={() => setActiveTab("recent")}
//           >
//             Recent
//           </button>
//           <button
//             className={`flex-1 py-2 ${activeTab === "historical" ? "border-b-2 border-black font-semibold" : ""}`}
//             onClick={() => setActiveTab("historical")}
//           >
//             Historical
//           </button>
//         </div>

//         {/* Deduction List */}
//         <div className="p-4 space-y-4">
//           {deductions.map((item, index) => (
//             <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//               <div className="flex justify-between items-center">
//                 <p className="text-gray-700 font-medium">{item.date}</p>
//                 <button onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
//                   {expandedIndex === index ? "▲" : "▼"}
//                 </button>
//               </div>
//               <p className="text-xl font-semibold text-red-600">₹{item.total.toFixed(2)}</p>

//               {expandedIndex === index && (
//                 <div className="mt-3 text-gray-700 text-sm">
//                   <p><strong>Grid Room:</strong> ₹{item.details.gridRoom.toFixed(2)} ({item.usage})</p>
//                   <p><strong>Other Charges:</strong> ₹{item.details.otherCharges.toFixed(2)}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentAndHistoricalData;

// import React, { useState } from "react";

// const Chat = () => {
//   const [activeTab, setActiveTab] = useState("recent");
//   const [tabIndex, setTabIndex] = useState(null);

//   // Recent deductions
//   const recentDeductions = [
//     {
//       date: "22-03-2025",
//       total: -28.64,
//       details: {
//         generatorCommon: 0,
//         gridCommon: 0,
//         generatorRoom: 0,
//         gridRoom: 19.70,
//         otherCharges: 8.94,
//         credited: 0.0,
//       },
//       usage: "1.79 Units",
//       startTime: "21-03-2025 - 12:00 AM",
//       endTime: "22-03-2025 - 12:00 AM",
//     },
//   ];

//   // Historical deductions
//   const historicalDeductions = [
//     {
//       date: "15-03-2025",
//       total: -30.25,
//       details: {
//         generatorCommon: 0,
//         gridCommon: 0,
//         generatorRoom: 0,
//         gridRoom: 20.00,
//         otherCharges: 10.25,
//         credited: 0.0,
//       },
//       usage: "1.85 Units",
//       startTime: "14-03-2025 - 12:00 AM",
//       endTime: "15-03-2025 - 12:00 AM",
//     },
//     {
//       date: "10-03-2025",
//       total: -27.89,
//       details: {
//         generatorCommon: 0,
//         gridCommon: 0,
//         generatorRoom: 0,
//         gridRoom: 18.90,
//         otherCharges: 8.99,
//         credited: 0.0,
//       },
//       usage: "1.70 Units",
//       startTime: "09-03-2025 - 12:00 AM",
//       endTime: "10-03-2025 - 12:00 AM",
//     },
//   ];

//   return (
//     <div className="min-h-screen from-cyan-300 to-white p-4">
//       <div className="max-h-screen bg-white rounded-lg shadow-md">
//         {/* Header */}
//         <div className="p-4 max-h-screen bg-cyan-600 text-white rounded-t-lg flex justify-between items-center">
//           <button onClick={""}>&larr;</button>
//           <h2 className="text-lg font-semibold">Deduction History</h2>
//           <div></div>
//         </div>

//         {/* Tabs */}
//         <div className="flex border-b">
//           <button
//             className={`flex-1 py-2 ${activeTab === "recent" ? "border-b-2 border-black font-semibold" : ""}`}
//             onClick={() => setActiveTab("recent")}
//           >
//             Recent
//           </button>
//           <button
//             className={`flex-1 py-2 ${activeTab === "historical" ? "border-b-2 border-black font-semibold" : ""}`}
//             onClick={() => setActiveTab("historical")}
//           >
//             Historical
//           </button>
//         </div>

//         {/* Deduction List */}
//         <div className="p-4 space-y-4">
//           {activeTab === "recent" &&
//             recentDeductions.map((item, index) => (
//               <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                 <div className="flex justify-between items-center">
//                   <p className="text-gray-700 font-medium">{item.date}</p>
//                   <button onClick={() => setTabIndex(tabIndex === index ? null : index)}>
//                     {tabIndex === index ? "▲" : "▼"}
//                   </button>
//                 </div>
//                 <p className="text-xl font-semibold text-red-600">₹{item.total.toFixed(2)}</p>

//                 {tabIndex === index && (
//                   <div className="mt-3 text-gray-700 text-sm">
//                     <p><strong>Common Area Charges:</strong></p>
//                     <p>Generator: ₹{item.details.generatorCommon.toFixed(2)}</p>
//                     <p>Grid: ₹{item.details.gridCommon.toFixed(2)}</p>
//                     <p><strong>Room Charges:</strong></p>
//                     <p>Generator: ₹{item.details.generatorRoom.toFixed(2)}</p>
//                     <p>Grid: ₹{item.details.gridRoom.toFixed(2)} ({item.usage})</p>
//                     <p><strong>Other Charges:</strong> ₹{item.details.otherCharges.toFixed(2)}</p>
//                     <p><strong>Amount Credited:</strong> ₹{item.details.credited.toFixed(2)}</p>
//                     <p className="mt-2 text-xs text-gray-500">Start: {item.startTime} | End: {item.endTime}</p>
//                   </div>
//                 )}
//               </div>
//             ))}

//           {activeTab === "historical" &&
//             historicalDeductions.map((item, index) => (
//               <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                 <div className="flex justify-between items-center">
//                   <p className="text-gray-700 font-medium">{item.date}</p>
//                   <button onClick={() => setTabIndex(tabIndex === index ? null : index)}>
//                     {tabIndex === index ? "▲" : "▼"}
//                   </button>
//                 </div>
//                 <p className="text-xl font-semibold text-red-600">₹{item.total.toFixed(2)}</p>

//                 {tabIndex === index && (
//                   <div className="mt-3 text-gray-700 text-sm">
//                     <p><strong>Common Area Charges:</strong></p>
//                     <p>Generator: ₹{item.details.generatorCommon.toFixed(2)}</p>
//                     <p>Grid: ₹{item.details.gridCommon.toFixed(2)}</p>
//                     <p><strong>Room Charges:</strong></p>
//                     <p>Generator: ₹{item.details.generatorRoom.toFixed(2)}</p>
//                     <p>Grid: ₹{item.details.gridRoom.toFixed(2)} ({item.usage})</p>
//                     <p><strong>Other Charges:</strong> ₹{item.details.otherCharges.toFixed(2)}</p>
//                     <p><strong>Amount Credited:</strong> ₹{item.details.credited.toFixed(2)}</p>
//                     <p className="mt-2 text-xs text-gray-500">Start: {item.startTime} | End: {item.endTime}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;


import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { setBreadcrumbs, setHeaderTitle } from "../../redux/slice/headerSlice";
const Chat = () => {
  const [activeTab, setActiveTab] = useState("recent");
  const [tabIndex, setTabIndex] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle("User Dashboard"));
    dispatch(setBreadcrumbs([ { label: "Deduction History" }, { label: "Energy Consumption" }]));
  }, []);

  // Recent deductions
  const recentDeductions = [
    {
      date: "22-03-2025",
      total: -28.64,
      details: {
        generatorCommon: 0,
        gridCommon: 0,
        generatorRoom: 0,
        gridRoom: 19.70,
        otherCharges: 8.94,
        credited: 0.0,
      },
      usage: "1.79 Units",
      startTime: "21-03-2025 - 12:00 AM",
      endTime: "22-03-2025 - 12:00 AM",
    },
  ];

  // Historical deductions
  const historicalDeductions = [
    {
      date: "15-03-2025",
      total: -30.25,
      details: {
        generatorCommon: 0,
        gridCommon: 0,
        generatorRoom: 0,
        gridRoom: 20.00,
        otherCharges: 10.25,
        credited: 0.0,
      },
      usage: "1.85 Units",
      startTime: "14-03-2025 - 12:00 AM",
      endTime: "15-03-2025 - 12:00 AM",
    },
    {
      date: "10-03-2025",
      total: -27.89,
      details: {
        generatorCommon: 0,
        gridCommon: 0,
        generatorRoom: 0,
        gridRoom: 18.90,
        otherCharges: 8.99,
        credited: 0.0,
      },
      usage: "1.70 Units",
      startTime: "09-03-2025 - 12:00 AM",
      endTime: "10-03-2025 - 12:00 AM",
    },
  ];

  return (
    <div className="min-h-screen from-cyan-300 to-white">
    <Header/>
      <div className="min-h-screen p-4 bg-white rounded-lg shadow-md">
        {/* Header */}
        {/* <div className="p-4 max-h-screen bg-cyan-600 text-white rounded-t-lg flex items-center">
          
          <h2 className="text-lg font-semibold mr-2">Deduction History</h2>
          <FaGreaterThan className="text-sm mr-2" />
          <button onClick={() => {}} className="font-semibold text-lg gap-2">Energy Consumption</button>
          <div></div>
        </div> */}

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-2 cursor-pointer ${activeTab === "recent" ? "border-b-2 border-black font-semibold" : ""}`}
            onClick={() => setActiveTab("recent")}
          >
            Recent
          </button>
          <button
            className={`flex-1 py-2 cursor-pointer ${activeTab === "historical" ? "border-b-2 border-black font-semibold" : ""}`}
            onClick={() => setActiveTab("historical")}
          >
            Historical
          </button>
        </div>

        {/* Deduction List */}
        <div className="p-4 space-y-4">
          {activeTab === "recent" &&
            recentDeductions.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-medium">{item.date}</p>
                  <button
                    className="text-blue-500 font-medium"
                    onClick={() => setTabIndex(tabIndex === index ? null : index)}
                  >
                    {tabIndex === index ? "Hide Details" : "View Details"}
                  </button>
                </div>
                <p className="text-xl font-semibold text-red-600">₹{item.total.toFixed(2)}</p>

                {tabIndex === index && (
                  <div className="mt-3 text-gray-700 text-sm">
                    <p><strong>Common Area Charges:</strong></p>
                    <p>Generator: ₹{item.details.generatorCommon.toFixed(2)}</p>
                    <p>Grid: ₹{item.details.gridCommon.toFixed(2)}</p>
                    <p><strong>Room Charges:</strong></p>
                    <p>Generator: ₹{item.details.generatorRoom.toFixed(2)}</p>
                    <p>Grid: ₹{item.details.gridRoom.toFixed(2)} ({item.usage})</p>
                    <p><strong>Other Charges:</strong> ₹{item.details.otherCharges.toFixed(2)}</p>
                    <p><strong>Amount Credited:</strong> ₹{item.details.credited.toFixed(2)}</p>
                    <p className="mt-2 text-xs text-gray-500">Start: {item.startTime} | End: {item.endTime}</p>
                  </div>
                )}
              </div>
            ))}

          {activeTab === "historical" &&
            historicalDeductions.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-medium">{item.date}</p>
                  <button
                    className="text-blue-500 font-medium"
                    onClick={() => setTabIndex(tabIndex === index ? null : index)}
                  >
                    {tabIndex === index ? "Hide Details" : "View Details"}
                  </button>
                </div>
                <p className="text-xl font-semibold text-red-600">₹{item.total.toFixed(2)}</p>

                {tabIndex === index && (
                  <div className="mt-3 text-gray-700 text-sm">
                    <p><strong>Common Area Charges:</strong></p>
                    <p>Generator: ₹{item.details.generatorCommon.toFixed(2)}</p>
                    <p>Grid: ₹{item.details.gridCommon.toFixed(2)}</p>
                    <p><strong>Room Charges:</strong></p>
                    <p>Generator: ₹{item.details.generatorRoom.toFixed(2)}</p>
                    <p>Grid: ₹{item.details.gridRoom.toFixed(2)} ({item.usage})</p>
                    <p><strong>Other Charges:</strong> ₹{item.details.otherCharges.toFixed(2)}</p>
                    <p><strong>Amount Credited:</strong> ₹{item.details.credited.toFixed(2)}</p>
                    <p className="mt-2 text-xs text-gray-500">Start: {item.startTime} | End: {item.endTime}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;

