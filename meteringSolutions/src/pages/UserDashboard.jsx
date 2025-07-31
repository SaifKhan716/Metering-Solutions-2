// import React from 'react'
// import { useState, useEffect } from "react";
// import { FaPlug, FaHistory, FaCog } from "react-icons/fa";
// import { MdOutlineBolt, MdOutlineLock } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";
// import { useSelector } from "react-redux";

// import { selectPowerCharts } from '../redux/slice/currentPowerChartSlice';
// import CurrentPowerChart from '../components/meter/CurrentPowerChart';

// function UserDashboard() {
//   const charts = useSelector(selectPowerCharts);
//   const [activeTab, setActiveTab] = useState("Daily");

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setHeaderTitle("UserDashboard"));
//     dispatch(
//       setBreadcrumbs([
//         { label: "Home", link: "" },  // Updated label for clarity
//         { label: "UserDashboard" },
//       ])
//     );
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header */}
//       <Header />
//       <header className="bg-white shadow-md p-4 flex justify-between items-center">
//         {/* <h1 className="text-xl font-bold flex items-center">
//           ⚡ Smart Meter Dashboard
//         </h1> */}
//         {/* <div className="flex items-center space-x-4">
//           <span className="text-sm text-gray-700">John Doe</span>
//           <img
//             src="https://via.placeholder.com/32"
//             alt="Profile"
//             className="w-8 h-8 rounded-full"
//           />
//         </div> */}
//       </header>

//       {/* Main Content */}
//       <div className="p-6 max-w-7xl mx-auto">
//         {/* Top Cards */}
// <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//   <Card
//     title="Current Consumption"
//     value="245.8 kWh"
//     icon={<FaPlug />}
//     subText="↑ 2.3% from last month"
//   />
//   <Card
//     title="Remaining Balance"
//     value="$128.50"
//     icon={<MdOutlineBolt />}
//     subText="Estimated 18 days left"
//   />
//   <Card
//     title="Power Statistics"
//     content={
//       <div className="text-sm space-y-1">
//         <div>Voltage <span className="font-bold">220V</span></div>
//         <div>Current <span className="font-bold">10.2A</span></div>
//         <div>Power Factor <span className="font-bold">0.92</span></div>
//       </div>
//     }
//   />
//   <Card
//     title="Billing Information"
//     value="$175.20"
//     icon={<MdOutlineLock />}
//     subText="Due on Mar 25, 2025"
//   />
// </div>

//         {/* Actions */}
//         <div className="flex space-x-4 mb-6">
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
//             <span>Recharge</span>
//           </button>
//           <button className="bg-gray-200 px-6 py-2 rounded-lg flex items-center space-x-2">
//             <FaHistory />
//             <span>Usage History</span>
//           </button>
//           <button className="bg-gray-200 px-6 py-2 rounded-lg flex items-center space-x-2">
//             <FaCog />
//             <span>Settings</span>
//           </button>
//         </div>

//         {/* Usage Trends */}
//         <div className="bg-white rounded-lg shadow p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-bold">Usage Trends</h2>
//             <div className="flex space-x-2">
//               {["Daily", "Weekly", "Monthly"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-4 py-1 rounded-md ${
//                     activeTab === tab
//                       ? "bg-cyan-600 text-white"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
//             {/* <p className="text-gray-400">No data available</p> */}
//             {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"> */}
//             {charts.map((chart) => (
//                 <CurrentPowerChart
//                     key={chart.id}
//                     title={chart.title}
//                     labels={chart.labels}
//                     dataPoints={chart.dataPoints}
//                     barColor={chart.barColor}
//                     bgColor={chart.bgColor}
//                 />
//             ))}
//         {/* </div> */}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white text-center text-sm p-4 border-t">
//         © 2025 Smart Meter Dashboard. All rights reserved. |
//         <span className="text-blue-500 mx-1 cursor-pointer">Help</span> |
//         <span className="text-blue-500 mx-1 cursor-pointer">Privacy</span> |
//         <span className="text-blue-500 mx-1 cursor-pointer">Terms</span>
//       </footer>
//     </div>
//   );
// }

// const Card = ({ title, value, icon, subText, content }) => (
//     <div className="bg-white p-4 rounded-lg shadow">
//       <div className="flex items-center space-x-2 mb-2">
//         {icon && <span className="text-blue-500 text-lg">{icon}</span>}
//         <h2 className="text-sm text-gray-600">{title}</h2>
//       </div>
//       {content ? (
//         <div>{content}</div>
//       ) : (
//         <div className="text-2xl font-bold">{value}</div>
//       )}
//       {subText && <p className="text-xs text-green-500 mt-1">{subText}</p>}
//     </div>
//   );

//   export default UserDashboard;

//////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { selectChartsByDashboard } from "../redux/slice/currentPowerChartSlice";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";
// // import Card from "../components/shared/Card";
// import CurrentPowerChart from "../components/meter/CurrentPowerChart";
// import { FaPlug, FaHistory, FaCog } from "react-icons/fa";
// import { MdOutlineBolt, MdOutlineLock } from "react-icons/md";

// function UserDashboard() {
//   const dispatch = useDispatch();
//   const charts = useSelector(selectChartsByDashboard("user"));
//   const [activeTab, setActiveTab] = useState("Daily");

//   const [startDate, setStartDate] = useState("2025-04-01"); // Default to recent date
//   const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

//   useEffect(() => {
//     dispatch(setHeaderTitle("User Dashboard"));
//     dispatch(setBreadcrumbs([{ label: "Home" }, { label: "User Dashboard" }]));
//   }, []);

//   // Fake dynamic filtering: assume each label is a month in "2025-MM"
//   const filterChart = (chart) => {
//     const from = new Date(startDate);
//     const to = new Date(); // today's date

//     const filteredLabels = [];
//     const filteredDataPoints = [];

//     chart.labels.forEach((label, i) => {
//       const fakeDate = new Date(
//         `2025-${(i + 1).toString().padStart(2, "0")}-01`
//       );
//       if (fakeDate >= from && fakeDate <= to) {
//         filteredLabels.push(label);
//         filteredDataPoints.push(chart.dataPoints[i]);
//       }
//     });

//     return {
//       ...chart,
//       labels: filteredLabels,
//       dataPoints: filteredDataPoints,
//     };
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <div className="p-6 max-w-7xl mx-auto">
//         {/* Stats Cards */}

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <Card
//             title="Current Consumption"
//             value="245.8 kWh"
//             icon={<FaPlug />}
//             subText="↑ 2.3% from last month"
//           />
//           <Card
//             title="Remaining Balance"
//             value="$128.50"
//             icon={<MdOutlineBolt />}
//             subText="Estimated 18 days left"
//           />
//           <Card
//             title="Power Statistics"
//             content={
//               <div className="text-sm space-y-1">
//                 <div>
//                   Voltage <span className="font-bold">220V</span>
//                 </div>
//                 <div>
//                   Current <span className="font-bold">10.2A</span>
//                 </div>
//                 <div>
//                   Power Factor <span className="font-bold">0.92</span>
//                 </div>
//               </div>
//             }
//           />
//           <Card
//             title="Billing Information"
//             value="$175.20"
//             icon={<MdOutlineLock />}
//             subText="Due on Mar 25, 2025"
//           />
//         </div>

//         {/* Actions */}
//         <div className="flex space-x-4 mb-6">
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
//             Recharge
//           </button>
//           <button className="bg-gray-200 px-6 py-2 rounded-lg flex items-center space-x-2">
//             <FaHistory />
//             <span>Usage History</span>
//           </button>
//           <button className="bg-gray-200 px-6 py-2 rounded-lg flex items-center space-x-2">
//             <FaCog />
//             <span>Settings</span>
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow p-4 mb-4">
//           <div className="flex flex-wrap gap-4 items-center justify-between">
//             {/* <div>
//   <label className="block text-sm font-medium text-gray-700">From Date</label>
//   <input
//     type="date"
//     value={startDate}
//     max={today}
//     onChange={(e) => setStartDate(e.target.value)}
//     className="mt-1 px-4 py-2 border rounded-md"
//   />
// </div> */}

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 View
//               </label>
//               <div className="flex space-x-2 mt-1">
//                 {["Daily", "Weekly", "Monthly"].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-4 py-1 rounded-md ${
//                       activeTab === tab
//                         ? "bg-cyan-600 text-white"
//                         : "bg-gray-200"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filtered Charts */}
//         <div className="bg-white rounded-lg shadow p-4">
//           <h2 className="text-lg font-bold mb-4">Usage Trends</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             {charts.map((chart) => {
//               const filteredChart = filterChart(chart);
//               return <CurrentPowerChart key={chart.id} {...filteredChart}>
//               <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 From Date
//               </label>
//               <input
//                 type="date"
//                 value={startDate}
//                 max={today}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="mt-1 px-4 py-2 border rounded-md"
//               />
//             </div>
//               </CurrentPowerChart>;
//             })}
//           </div>
//         </div>
//       </div>

//       <footer className="bg-white text-center text-sm p-4 border-t">
//         © 2025 Smart Meter Dashboard. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// const Card = ({ title, value, icon, subText, content }) => (
//   <div className="bg-white p-4 rounded-lg shadow">
//     <div className="flex items-center space-x-2 mb-2">
//       {icon && <span className="text-blue-500 text-lg">{icon}</span>}
//       <h2 className="text-sm text-gray-600">{title}</h2>
//     </div>
//     {content ? (
//       <div>{content}</div>
//     ) : (
//       <div className="text-2xl font-bold">{value}</div>
//     )}
//     {subText && <p className="text-xs text-green-500 mt-1">{subText}</p>}
//   </div>
// );

// export default UserDashboard;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { selectChartsByDashboard } from "../redux/slice/currentPowerChartSlice";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";
// import CurrentPowerChart from "../components/meter/CurrentPowerChart";
// import { FaPlug, FaHistory, FaCog } from "react-icons/fa";
// import { MdOutlineBolt, MdOutlineLock } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { SlArrowRight } from "react-icons/sl";

// function UserDashboard() {
//   const dispatch = useDispatch();
//   const charts = useSelector(selectChartsByDashboard("user"));
//   const [activeTab, setActiveTab] = useState("Daily");

//   const [startDate, setStartDate] = useState("2025-04-01");
//   const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

//   useEffect(() => {
//     dispatch(setHeaderTitle("User Dashboard"));
//     dispatch(setBreadcrumbs([ { label: "User Dashboard" }]));
//   }, []);

//   const filterChart = (chart) => {
//     const from = new Date(startDate);
//     const to = new Date();

//     const filteredLabels = [];
//     const filteredDataPoints = [];

//     chart.labels.forEach((label, i) => {
//       const fakeDate = new Date(
//         `2025-${(i + 1).toString().padStart(2, "0")}-01`
//       );
//       if (fakeDate >= from && fakeDate <= to) {
//         filteredLabels.push(label);
//         filteredDataPoints.push(chart.dataPoints[i]);
//       }
//     });

//     return {
//       ...chart,
//       labels: filteredLabels,
//       dataPoints: filteredDataPoints,
//     };
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <div className="p-6 max-w-7xl mx-auto">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <Card
//             title="Current Consumption"
//             value="245.8 kWh"
//             icon={<FaPlug />}
//             subText="↑ 2.3% from last month"
//           />
//           <Card
//             title="Remaining Balance"
//             value="$128.50"
//             icon={<MdOutlineBolt />}
//             subText="Estimated 18 days left"
//           />
//           <Card
//             title="Power Statistics"
//             content={
//               <div className="text-sm space-y-1">
//                 <div>
//                   Voltage <span className="font-bold">220V</span>
//                 </div>
//                 <div>
//                   Current <span className="font-bold">10.2A</span>
//                 </div>
//                 <div>
//                   Power Factor <span className="font-bold">0.92</span>
//                 </div>
//               </div>
//             }
//           />
//           <Card
//             title="Billing Information"
//             value="$175.20"
//             icon={<MdOutlineLock />}
//             subText="Due on Mar 25, 2025"
//           />
//         </div>

//         {/* Actions */}
//         <div className="flex space-x-4 mb-6">
//           <button className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer text-white px-6 py-2 rounded-lg">
//             Recharge
//           </button>
//           <Link  className="cursor-pointer " to='/userdashboard/recenthistoricaldata'>
//           <button className="bg-cyan-600 justify-between  hover:bg-cyan-700 px-6 py-2 text-white cursor-pointer rounded-lg flex items-center space-x-2">
//             <FaHistory />
//             <span>Usage History</span>
//            <SlArrowRight className="h-4 " />
//           </button>
//           </Link>
//           <button className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer text-white px-6 py-2 rounded-lg flex items-center space-x-2">
//             <FaCog />
//             <span>Settings</span>
//           </button>
//         </div>

//         {/* Chart Section with Embedded Date Input */}
//         <div className="bg-white rounded-lg shadow p-4">
//           <div className="flex justify-between">
//             <h2 className="text-lg font-bold mb-4">Usage Trends</h2>

//             <div>
//               <label className="block text-xs text-gray-500">From Date</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 max={today}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="mt-1 px-2 py-1 border text-sm rounded-md"
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             {charts.map((chart) => {
//               const filteredChart = filterChart(chart);
//               return (
//                 <CurrentPowerChart
//                   key={chart.id}
//                   {...filteredChart}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* <footer className="bg-white text-center text-sm p-4 border-t">
//         © 2025 Smart Meter Dashboard. All rights reserved.
//       </footer> */}
//     </div>
//   ); 
// }

// const Card = ({ title, value, icon, subText, content }) => (
//   <div className="bg-white p-4 rounded-lg shadow">
//     <div className="flex items-center space-x-2 mb-2">
//       {icon && <span className="text-blue-500 text-lg">{icon}</span>}
//       <h2 className="text-sm text-gray-600">{title}</h2>
//     </div>
//     {content ? (
//       <div>{content}</div>
//     ) : (
//       <div className="text-2xl font-bold">{value}</div>
//     )}
//     {subText && <p className="text-xs text-green-500 mt-1">{subText}</p>}
//   </div>
// );

// export default UserDashboard;
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { selectChartsByDashboard } from "../redux/slice/currentPowerChartSlice";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";
// import CurrentPowerChart from "../components/meterManagement/CurrentPowerChart";
// import { Zap, History, Settings, Bolt, Lock, TrendingUp, Calendar, ArrowRight, CreditCard } from "lucide-react";
// // Note: Link component would be imported from your routing library

// function UserDashboard() {
//   const dispatch = useDispatch();
//   const charts = useSelector(selectChartsByDashboard("user"));
//   const [activeTab, setActiveTab] = useState("Daily");

//   const [startDate, setStartDate] = useState("2025-04-01");
//   const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

//   useEffect(() => {
//     dispatch(setHeaderTitle("User Dashboard"));
//     dispatch(setBreadcrumbs([{ label: "User Dashboard" }]));
//   }, []);

//   const filterChart = (chart) => {
//     const from = new Date(startDate);
//     const to = new Date();

//     const filteredLabels = [];
//     const filteredDataPoints = [];

//     chart.labels.forEach((label, i) => {
//       const fakeDate = new Date(
//         `2025-${(i + 1).toString().padStart(2, "0")}-01`
//       );
//       if (fakeDate >= from && fakeDate <= to) {
//         filteredLabels.push(label);
//         filteredDataPoints.push(chart.dataPoints[i]);
//       }
//     });

//     return {
//       ...chart,
//       labels: filteredLabels,
//       dataPoints: filteredDataPoints,
//     };
//   };

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-6 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
//           <p className="text-gray-600">Monitor your energy consumption and manage your account</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <StatsCard
//             title="Current Consumption"
//             value="245.8 kWh"
//             icon={<Zap className="h-6 w-6" />}
//             subText="↑ 2.3% from last month"
//             trend="up"
//             bgColor="bg-blue-50"
//             iconColor="text-blue-600"
//           />
//           <StatsCard
//             title="Remaining Balance"
//             value="$128.50"
//             icon={<CreditCard className="h-6 w-6" />}
//             subText="Estimated 18 days left"
//             trend="neutral"
//             bgColor="bg-green-50"
//             iconColor="text-green-600"
//           />
//           <StatsCard
//             title="Power Statistics"
//             icon={<Bolt className="h-6 w-6" />}
//             bgColor="bg-purple-50"
//             iconColor="text-purple-600"
//             content={
//               <div className="space-y-2">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Voltage</span>
//                   <span className="font-semibold text-gray-900">220V</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Current</span>
//                   <span className="font-semibold text-gray-900">10.2A</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Power Factor</span>
//                   <span className="font-semibold text-gray-900">0.92</span>
//                 </div>
//               </div>
//             }
//           />
//           <StatsCard
//             title="Next Bill Amount"
//             value="$175.20"
//             icon={<Lock className="h-6 w-6" />}
//             subText="Due on Mar 25, 2025"
//             trend="neutral"
//             bgColor="bg-orange-50"
//             iconColor="text-orange-600"
//           />
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
//           <div className="flex flex-wrap gap-4">
//             <ActionButton
//               icon={<CreditCard className="h-5 w-5" />}
//               label="Recharge Account"
//               variant="primary"
//             />
//             <a href="/userdashboard/recenthistoricaldata" className="inline-block">
//               <ActionButton
//                 icon={<History className="h-5 w-5" />}
//                 label="Usage History"
//                 rightIcon={<ArrowRight className="h-4 w-4" />}
//                 variant="secondary"
//               />
//             </a>
//             <ActionButton
//               icon={<Settings className="h-5 w-5" />}
//               label="Account Settings"
//               variant="secondary"
//             />
//             <ActionButton
//               icon={<TrendingUp className="h-5 w-5" />}
//               label="View Reports"
//               variant="secondary"
//             />
//           </div>
//         </div>

//         {/* Chart Section */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           <div className="p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage Trends</h2>
//                 <p className="text-gray-600">Track your energy consumption patterns over time</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     <Calendar className="h-4 w-4 inline mr-1" />
//                     From Date
//                   </label>
//                   <input
//                     type="date"
//                     value={startDate}
//                     max={today}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6">
//               {charts.map((chart) => {
//                 const filteredChart = filterChart(chart);
//                 return (
//                   <CurrentPowerChart
//                     key={chart.id}
//                     {...filteredChart}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const StatsCard = ({ title, value, icon, subText, content, trend, bgColor, iconColor }) => (
//   <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//     <div className="flex items-center justify-between mb-4">
//       <div className={`p-3 rounded-lg ${bgColor}`}>
//         <span className={iconColor}>{icon}</span>
//       </div>
//       {trend === "up" && (
//         <div className="flex items-center text-green-600 text-sm">
//           <TrendingUp className="h-4 w-4 mr-1" />
//           <span>+2.3%</span>
//         </div>
//       )}
//     </div>

//     <div className="mb-2">
//       <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
//       {content ? (
//         <div>{content}</div>
//       ) : (
//         <div className="text-2xl font-bold text-gray-900">{value}</div>
//       )}
//     </div>

//     {subText && (
//       <p className={`text-sm ${
//         trend === "up" ? "text-green-600" : 
//         trend === "down" ? "text-red-600" : 
//         "text-gray-500"
//       }`}>
//         {subText}
//       </p>
//     )}
//   </div>
// );

// const ActionButton = ({ icon, label, rightIcon, variant = "secondary", onClick }) => {
//   const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors";
//   const variantClasses = {
//     primary: "bg-blue-600 hover:bg-blue-700 text-white",
//     secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseClasses} ${variantClasses[variant]}`}
//     >
//       {icon}
//       <span>{label}</span>
//       {rightIcon}
//     </button>
//   );
// };

// export default UserDashboard;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// // Import from currentPowerChartSlice (keeping existing functionality)
// import { selectChartsByDashboard } from "../redux/slice/currentPowerChartSlice";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";

// // Import from the new userDashboard slice
// import {
//   selectDashboardData,
//   selectLoading,
//   selectError,
//   selectTotalEnergyConsumption,
//   selectTotalBalance,
//   selectActiveMeters,
//   setLoading,
//   setError,
//   updateFilterSettings,
//   resetFilterSettings
// } from "../redux/slice/userDashboardSlice";

// import Header from "../components/header/Header";
// import CurrentPowerChart from "../components/meterManagement/CurrentPowerChart";
// import { Zap, History, Settings, Bolt, Lock, TrendingUp, Calendar, ArrowRight, CreditCard } from "lucide-react";
// import { EGStatusDisplay } from "../components/userManagement/ED-DGstausDisplay";
// import { useNavigate } from "react-router-dom";

// function UserDashboard() {

//   const Navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Existing selectors
//   const charts = useSelector(selectChartsByDashboard);

//   // New selectors from userDashboard slice
//   const dashboardData = useSelector(selectDashboardData);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);
//   const totalEnergyConsumption = useSelector(selectTotalEnergyConsumption);
//   const totalBalance = useSelector(selectTotalBalance);
//   const activeMeters = useSelector(selectActiveMeters);

//   // Local state
//   const [activeTab, setActiveTab] = useState("Daily");
//   const [startDate, setStartDate] = useState("2025-04-01");
//   const today = new Date().toISOString().split("T")[0];

//   useEffect(() => {
//     dispatch(setHeaderTitle("User Dashboard"));
//     dispatch(setBreadcrumbs([{ label: "User Dashboard" }]));
//   }, [dispatch]);

//   // Update filter settings when startDate changes
//   useEffect(() => {
//     dispatch(updateFilterSettings({
//       dateRange: {
//         startDate: startDate,
//         endDate: today
//       }
//     }));
//   }, [startDate, today, dispatch]);





//   // Get real-time data from the first meter (or default values)
//   console.log("userDashbaord data ", dashboardData);
//   //const firstMeterData = dashboardData.summary.recentData;
//   const firstMeterData = dashboardData?.summary.recentData || null;
//   console.log("First meter data------------->", firstMeterData)

//   // Calculate current consumption from real data
//   const currentConsumption = firstMeterData ?
//     (Number(firstMeterData.cum_eb_kwh?.value) || 0) + (Number(firstMeterData.cum_dg_kwh?.value) || 0) :
//     245.8;

//   // Get balance from real data
//   const remainingBalance = Number(firstMeterData?.balance_amount?.value) || 128.50;

//   // Get power statistics from real data
//   const voltage = firstMeterData?.voltage_r?.value || 220;
//   const current = firstMeterData?.current_r?.value || 10.2;
//   const powerFactor = firstMeterData?.power_factor?.value || 0.92;

//   // Calculate next bill estimate (this could be more sophisticated)
//   const nextBillAmount = remainingBalance + (currentConsumption * 0.15); // Simple estimation

//   // Handle loading state
//   if (loading) {
//     return (
//       <div className="bg-blue-200/10 min-h-screen">
//         <Header />
//         <div className="p-6 max-w-7xl mx-auto">
//           <div className="flex items-center justify-center h-64">
//             <div className="text-lg text-gray-600">Loading dashboard data...</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Handle error state
//   if (error) {
//     return (
//       <div className="bg-blue-200/10 min-h-screen">
//         <Header />
//         <div className="p-6 max-w-7xl mx-auto">
//           <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//             <div className="text-red-800">
//               <strong>Error:</strong> {error}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-6 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
//           <p className="text-gray-600">
//             Monitor your energy consumption and manage your account
//             {activeMeters.length > 0 && (
//               <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
//                 {activeMeters.length} active meter{activeMeters.length > 1 ? 's' : ''}
//               </span>
//             )}
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <StatsCard
//             title="Current Consumption"
//             value={`${currentConsumption.toFixed(1)} kWh`}
//             icon={<Zap className="h-6 w-6" />}
//             subText="↑ 2.3% from last month"
//             trend="up"
//             bgColor="bg-blue-50"
//             iconColor="text-blue-600"
//           />
//           <StatsCard
//             title="Remaining Balance"
//             value={`₹${remainingBalance.toFixed(2)}`}
//             icon={<CreditCard className="h-6 w-6" />}
//             subText="Estimated 18 days left"
//             trend="neutral"
//             bgColor="bg-green-50"
//             iconColor="text-green-600"
//           />
//           <StatsCard
//             title="Power Statistics"
//             icon={<Bolt className="h-6 w-6" />}
//             bgColor="bg-purple-50"
//             iconColor="text-purple-600"
//             content={
//               <div className="space-y-2">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Voltage</span>
//                   <span className="font-semibold text-gray-900">{voltage}V</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Current</span>
//                   <span className="font-semibold text-gray-900">{current}A</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Frequency</span>
//                   <span className="font-semibold text-gray-900">{firstMeterData?.frequency?.value || 0} Hz</span>
//                 </div>
//               </div>
//             }
//           />
//           <StatsCard
//             title="Next Bill Amount"
//             value={`₹${nextBillAmount.toFixed(2)}`}
//             icon={<Lock className="h-6 w-6" />}
//             subText="Due on Mar 25, 2025"
//             trend="neutral"
//             bgColor="bg-orange-50"
//             iconColor="text-orange-600"
//           />
//         </div>

//         {/* {dashboardData.length > 0 && (
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//             <h3 className="text-lg font-medium text-gray-900 mb-4">Real-time Meter Data</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <div className="text-sm text-gray-600">Total EB Units</div>
//                 <div className="text-xl font-semibold text-gray-900">
//                   {firstMeterData?.cum_eb_kwh?.value || 0} <span className="text-md">KWH</span>
//                 </div>
//               </div>
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <div className="text-sm text-gray-600">Total DG Units</div>
//                 <div className="text-xl font-semibold text-gray-900">
//                   {firstMeterData?.cum_dg_kwh?.value || 0} <span className="text-md">KWH</span>
//                 </div>
//               </div>

//               <EGStatusDisplay status={firstMeterData?.eb_dg_status?.value} />

//               <div className="bg-gray-50 rounded-lg p-4">
//                 <div className="text-sm text-gray-600">Meter Status</div>
//                 <div className={`text-xl font-semibold ${firstMeterData?.relay_status?.status === 'ON' ? 'text-green-600' :
//                   firstMeterData?.relay_status?.status === 'OFF' ? 'text-red-600' : 'text-gray-600'
//                   }`}>
//                   {firstMeterData?.relay_status?.status || 'UNKNOWN'}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )} */}
//         {firstMeterData !== null && (
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
//             <h3 className="text-xl font-semibold text-gray-900 mb-6">Real-time Meter Data</h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//               {/* Total EB Units */}
//               <div className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200">
//                 <div className="text-sm text-gray-500 mb-1">Total EB Units</div>
//                 <div className="text-2xl font-bold text-gray-800">
//                   {firstMeterData?.cum_eb_kwh?.value || 0}
//                   <span className="text-sm text-gray-600 ml-1">kWh</span>
//                 </div>
//               </div>

//               {/* Total DG Units */}
//               <div className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200">
//                 <div className="text-sm text-gray-500 mb-1">Total DG Units</div>
//                 <div className="text-2xl font-bold text-gray-800">
//                   {firstMeterData?.cum_dg_kwh?.value || 0}
//                   <span className="text-sm text-gray-600 ml-1">kWh</span>
//                 </div>
//               </div>

//               {/* EG/DG Status (Custom component) */}
//               <EGStatusDisplay status={firstMeterData?.eb_dg_status?.value} />

//               {/* Meter Status */}
//               <div className={`bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200  ${firstMeterData?.relay_status?.status === 'OFF' ? 'bg-red-100 border border-red-300' : null}`}>
//                 <div className={`text-sm text-gray-500 mb-1`}>Meter Status</div>
//                 <div
//                   className={`text-2xl font-bold ${firstMeterData?.relay_status?.status === 'ON'
//                     ? 'text-green-600'
//                     : firstMeterData?.relay_status?.status === 'OFF'
//                       ? 'text-red-600'
//                       : 'text-gray-500'
//                     }`}
//                 >
//                   {firstMeterData?.relay_status?.status || 'UNKNOWN'}

//                 </div>
//                 <span className="text-gray-800 text-sm">{firstMeterData?.relay_status?.status === 'OFF' ? 'Contact to Admin' : null}</span>
//               </div>

//             </div>
//           </div>
//         )}
//         {/* Quick Actions */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
//           <div className="flex flex-wrap gap-4">
//             <ActionButton
//               icon={<CreditCard className="h-5 w-5" />}
//               label="Recharge Account"
//               variant="primary"
//               onClick={() => {
//                 Navigate('/rechage-meter');
//                 console.log('Recharge account clicked');
//               }}
//             />

//             <ActionButton
//               icon={<History className="h-5 w-5" />}
//               label="Usage History"
//               rightIcon={<ArrowRight className="h-4 w-4" />}
//               onClick={() => {
//                 Navigate('/usage-history');
//                 console.log('Account settings clicked');
//               }}
//               variant="secondary"
//             />
//             <ActionButton
//               icon={<Settings className="h-5 w-5" />}
//               label="Account Settings"
//               variant="secondary"
//               onClick={() => {
//                 Navigate('/account-setting');
//                 console.log('Account settings clicked');
//               }}
//             />
//             <ActionButton
//               icon={<TrendingUp className="h-5 w-5" />}
//               label="View Reports"
//               variant="secondary"
//               onClick={() => {
//                 Navigate('/reports');
//                 console.log('View reports clicked');
//               }}
//             />
//           </div>
//         </div>

//         {/* Chart Section */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           <div className="p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage Trends</h2>
//                 <p className="text-gray-600">Track your energy consumption patterns over time</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     <Calendar className="h-4 w-4 inline mr-1" />
//                     From Date
//                   </label>
//                   <input
//                     type="date"
//                     value={startDate}
//                     max={today}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Reset Filters
//                   </label>
//                   <button
//                     onClick={() => {
//                       dispatch(resetFilterSettings());
//                       setStartDate("2025-04-01");
//                     }}
//                     className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-md text-sm"
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6">
//               {
//                 <CurrentPowerChart
//                   {...}
//                 />
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const StatsCard = ({ title, value, icon, subText, content, trend, bgColor, iconColor }) => (
//   <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//     <div className="flex items-center justify-between mb-4">
//       <div className={`p-3 rounded-lg ${bgColor}`}>
//         <span className={iconColor}>{icon}</span>
//       </div>
//       {trend === "up" && (
//         <div className="flex items-center text-green-600 text-sm">
//           <TrendingUp className="h-4 w-4 mr-1" />
//           <span>+2.3%</span>
//         </div>
//       )}
//     </div>

//     <div className="mb-2">
//       <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
//       {content ? (
//         <div>{content}</div>
//       ) : (
//         <div className="text-2xl font-bold text-gray-900">{value}</div>
//       )}
//     </div>

//     {subText && (
//       <p className={`text-sm ${trend === "up" ? "text-green-600" :
//         trend === "down" ? "text-red-600" :
//           "text-gray-500"
//         }`}>
//         {subText}
//       </p>
//     )}
//   </div>
// );

// const ActionButton = ({ icon, label, rightIcon, variant = "secondary", onClick }) => {
//   const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors";
//   const variantClasses = {
//     primary: "bg-blue-600 hover:bg-blue-700 text-white",
//     secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseClasses} ${variantClasses[variant]}`}
//     >
//       {icon}
//       <span>{label}</span>
//       {rightIcon}
//     </button>
//   );
// };

// export default UserDashboard;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// // Import from currentPowerChartSlice (keeping existing functionality)
// import { selectChartsByDashboard } from "../redux/slice/currentPowerChartSlice";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";

// // Import from the new userDashboard slice
// import {
//   selectDashboardData,
//   selectLoading,
//   selectError,
//   selectTotalEnergyConsumption,
//   selectTotalBalance,
//   selectActiveMeters,
//   setLoading,
//   setError,
//   updateFilterSettings,
//   resetFilterSettings
// } from "../redux/slice/userDashboardSlice";

// import Header from "../components/header/Header";
// import CurrentPowerChart from "../components/meterManagement/CurrentPowerChart";
// import { Zap, History, Settings, Bolt, Lock, TrendingUp, Calendar, ArrowRight, CreditCard } from "lucide-react";
// import { EGStatusDisplay } from "../components/userManagement/ED-DGstausDisplay";
// import { useNavigate } from "react-router-dom";

// function UserDashboard() {

//   const Navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Existing selectors
//   const charts = useSelector(selectChartsByDashboard);

//   // New selectors from userDashboard slice
//   const dashboardData = useSelector(selectDashboardData);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);
//   const totalEnergyConsumption = useSelector(selectTotalEnergyConsumption);
//   const totalBalance = useSelector(selectTotalBalance);
//   const activeMeters = useSelector(selectActiveMeters);
//   const [fullchartData, setFullChartData] = useState({
//     className:"power consuption chart(7 days)",
//     title:"",
//     labels:[],
//     dataPoints:[],
//     barColor: "rgba(75, 192, 192, 0.6)", // Bar color
//     bgColor: "rgba(75, 192, 192, 1)", // Border color
//   })

//   // Local state
//   const [activeTab, setActiveTab] = useState("Daily");
//   const [startDate, setStartDate] = useState("2025-04-01");
//   const today = new Date().toISOString().split("T")[0];

//   useEffect(() => {
//     dispatch(setHeaderTitle("User Dashboard"));
//     dispatch(setBreadcrumbs([{ label: "User Dashboard" }]));
//   }, [dispatch]);

//   // Update filter settings when startDate changes
//   useEffect(() => {
//     dispatch(updateFilterSettings({
//       dateRange: {
//         startDate: startDate,
//         endDate: today
//       }
//     }));
//   }, [startDate, today, dispatch]);



//   // Get real-time data from the first meter (or default values)
//   console.log("full data --------->", { dashboard: dashboardData, chart: charts });
//   //const firstMeterData = dashboardData.summary.recentData;
//   const firstMeterData = dashboardData?.summary.recentData || null;
//   console.log("First meter data------------->", firstMeterData)

//   // Calculate current consumption from real data
//   const currentConsumption = firstMeterData ?
//     (Number(firstMeterData.cum_eb_kwh?.value) || 0) + (Number(firstMeterData.cum_dg_kwh?.value) || 0) :
//     245.8;

//   // Get balance from real data
//   const remainingBalance = Number(firstMeterData?.balance_amount?.value) || 128.50;

//   // Get power statistics from real data
//   const voltage = firstMeterData?.voltage_r?.value || 220;
//   const current = firstMeterData?.current_r?.value || 10.2;
//   const powerFactor = firstMeterData?.power_factor?.value || 0.92;

//   // Calculate next bill estimate (this could be more sophisticated)
//   const nextBillAmount = remainingBalance + (currentConsumption * 0.15); // Simple estimation

//   // Handle loading state
//   if (loading) {
//     return (
//       <div className="bg-blue-200/10 min-h-screen">
//         <Header />
//         <div className="p-6 max-w-7xl mx-auto">
//           <div className="flex items-center justify-center h-64">
//             <div className="text-lg text-gray-600">Loading dashboard data...</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Handle error state
//   if (error) {
//     return (
//       <div className="bg-blue-200/10 min-h-screen">
//         <Header />
//         <div className="p-6 max-w-7xl mx-auto">
//           <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//             <div className="text-red-800">
//               <strong>Error:</strong> {error}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   fullchartData = {...fullchartData, labels:charts.labelsData,
//     dataPoints:charts.chart}

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       <Header />
//       <div className="p-6 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
//           <p className="text-gray-600">
//             Monitor your energy consumption and manage your account
//             {activeMeters.length > 0 && (
//               <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
//                 {activeMeters.length} active meter{activeMeters.length > 1 ? 's' : ''}
//               </span>
//             )}
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <StatsCard
//             title="Current Consumption"
//             value={`${currentConsumption.toFixed(1)} kWh`}
//             icon={<Zap className="h-6 w-6" />}
//             subText="↑ 2.3% from last month"
//             trend="up"
//             bgColor="bg-blue-50"
//             iconColor="text-blue-600"
//           />
//           <StatsCard
//             title="Remaining Balance"
//             value={`₹${remainingBalance.toFixed(2)}`}
//             icon={<CreditCard className="h-6 w-6" />}
//             subText="Estimated 18 days left"
//             trend="neutral"
//             bgColor="bg-green-50"
//             iconColor="text-green-600"
//           />
//           <StatsCard
//             title="Power Statistics"
//             icon={<Bolt className="h-6 w-6" />}
//             bgColor="bg-purple-50"
//             iconColor="text-purple-600"
//             content={
//               <div className="space-y-2">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Voltage</span>
//                   <span className="font-semibold text-gray-900">{voltage}V</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Current</span>
//                   <span className="font-semibold text-gray-900">{current}A</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Frequency</span>
//                   <span className="font-semibold text-gray-900">{firstMeterData?.frequency?.value || 0} Hz</span>
//                 </div>
//               </div>
//             }
//           />
//           <StatsCard
//             title="Next Bill Amount"
//             value={`₹${nextBillAmount.toFixed(2)}`}
//             icon={<Lock className="h-6 w-6" />}
//             subText="Due on Mar 25, 2025"
//             trend="neutral"
//             bgColor="bg-orange-50"
//             iconColor="text-orange-600"
//           />
//         </div>

//         {firstMeterData !== null && (
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
//             <h3 className="text-xl font-semibold text-gray-900 mb-6">Real-time Meter Data</h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//               {/* Total EB Units */}
//               <div className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200">
//                 <div className="text-sm text-gray-500 mb-1">Total EB Units</div>
//                 <div className="text-2xl font-bold text-gray-800">
//                   {firstMeterData?.cum_eb_kwh?.value || 0}
//                   <span className="text-sm text-gray-600 ml-1">kWh</span>
//                 </div>
//               </div>

//               {/* Total DG Units */}
//               <div className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200">
//                 <div className="text-sm text-gray-500 mb-1">Total DG Units</div>
//                 <div className="text-2xl font-bold text-gray-800">
//                   {firstMeterData?.cum_dg_kwh?.value || 0}
//                   <span className="text-sm text-gray-600 ml-1">kWh</span>
//                 </div>
//               </div>

//               {/* EG/DG Status (Custom component) */}
//               <EGStatusDisplay status={firstMeterData?.eb_dg_status?.value} />

//               {/* Meter Status */}
//               <div className={`bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200  ${firstMeterData?.relay_status?.status === 'OFF' ? 'bg-red-100 border border-red-300' : null}`}>
//                 <div className={`text-sm text-gray-500 mb-1`}>Meter Status</div>
//                 <div
//                   className={`text-2xl font-bold ${firstMeterData?.relay_status?.status === 'ON'
//                     ? 'text-green-600'
//                     : firstMeterData?.relay_status?.status === 'OFF'
//                       ? 'text-red-600'
//                       : 'text-gray-500'
//                     }`}
//                 >
//                   {firstMeterData?.relay_status?.status || 'UNKNOWN'}

//                 </div>
//                 <span className="text-gray-800 text-sm">{firstMeterData?.relay_status?.status === 'OFF' ? 'Contact to Admin' : null}</span>
//               </div>

//             </div>
//           </div>
//         )}

//         {/* Quick Actions */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
//           <div className="flex flex-wrap gap-4">
//             <ActionButton
//               icon={<CreditCard className="h-5 w-5" />}
//               label="Recharge Account"
//               variant="primary"
//               onClick={() => {
//                 Navigate('/rechage-meter');
//                 console.log('Recharge account clicked');
//               }}
//             />

//             <ActionButton
//               icon={<History className="h-5 w-5" />}
//               label="Usage History"
//               rightIcon={<ArrowRight className="h-4 w-4" />}
//               onClick={() => {
//                 Navigate('/usage-history');
//                 console.log('Account settings clicked');
//               }}
//               variant="secondary"
//             />
//             <ActionButton
//               icon={<Settings className="h-5 w-5" />}
//               label="Account Settings"
//               variant="secondary"
//               onClick={() => {
//                 Navigate('/account-setting');
//                 console.log('Account settings clicked');
//               }}
//             />
//             <ActionButton
//               icon={<TrendingUp className="h-5 w-5" />}
//               label="View Reports"
//               variant="secondary"
//               onClick={() => {
//                 Navigate('/reports');
//                 console.log('View reports clicked');
//               }}
//             />
//           </div>
//         </div>

//         {/* Chart Section */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           <div className="p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage Trends</h2>
//                 <p className="text-gray-600">Track your energy consumption patterns over time</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     <Calendar className="h-4 w-4 inline mr-1" />
//                     From Date
//                   </label>
//                   <input
//                     type="date"
//                     value={startDate}
//                     max={today}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Reset Filters
//                   </label>
//                   <button
//                     onClick={() => {
//                       dispatch(resetFilterSettings());
//                       setStartDate("2025-04-01");
//                     }}
//                     className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-md text-sm"
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6">
//               {charts && charts.length > 0 ? (
//                 <CurrentPowerChart
//                   fullchartData = {fullchartData}
//                 />
//               ) : (
//                 <div className="flex items-center justify-center h-64 text-gray-500">
//                   <div className="text-center">
//                     <TrendingUp className="h-12 w-12 mx-auto mb-4 text-gray-300" />
//                     <p>No chart data available</p>
//                     <p className="text-sm">Please check your meter configuration or try refreshing the page.</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const StatsCard = ({ title, value, icon, subText, content, trend, bgColor, iconColor }) => (
//   <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//     <div className="flex items-center justify-between mb-4">
//       <div className={`p-3 rounded-lg ${bgColor}`}>
//         <span className={iconColor}>{icon}</span>
//       </div>
//       {trend === "up" && (
//         <div className="flex items-center text-green-600 text-sm">
//           <TrendingUp className="h-4 w-4 mr-1" />
//           <span>+2.3%</span>
//         </div>
//       )}
//     </div>

//     <div className="mb-2">
//       <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
//       {content ? (
//         <div>{content}</div>
//       ) : (
//         <div className="text-2xl font-bold text-gray-900">{value}</div>
//       )}
//     </div>

//     {subText && (
//       <p className={`text-sm ${trend === "up" ? "text-green-600" :
//         trend === "down" ? "text-red-600" :
//           "text-gray-500"
//         }`}>
//         {subText}
//       </p>
//     )}
//   </div>
// );

// const ActionButton = ({ icon, label, rightIcon, variant = "secondary", onClick }) => {
//   const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors";
//   const variantClasses = {
//     primary: "bg-blue-600 hover:bg-blue-700 text-white",
//     secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseClasses} ${variantClasses[variant]}`}
//     >
//       {icon}
//       <span>{label}</span>
//       {rightIcon}
//     </button>
//   );
// };

// export default UserDashboard;

import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import from currentPowerChartSlice (keeping existing functionality)
import { selectChartsByDashboard } from "../redux/slice/currentPowerChartSlice";
import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";

// Import from the new userDashboard slice
import {
  selectDashboardData,
  selectLoading,
  selectError,
  selectTotalEnergyConsumption,
  selectTotalBalance,
  selectActiveMeters,
  setLoading,
  setError,
  updateFilterSettings,
  resetFilterSettings
} from "../redux/slice/userDashboardSlice";

import Header from "../components/header/Header";
import CurrentPowerChart from "../components/meterManagement/CurrentPowerChart";
import {
  Zap,
  History,
  Settings,
  Bolt,
  Lock,
  TrendingUp,
  Calendar,
  ArrowRight,
  CreditCard,
  RefreshCw,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { EGStatusDisplay } from "../components/userManagement/ED-DGstausDisplay";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Existing selectors
  const charts = useSelector(selectChartsByDashboard);

  // New selectors from userDashboard slice
  const dashboardData = useSelector(selectDashboardData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const totalEnergyConsumption = useSelector(selectTotalEnergyConsumption);
  const totalBalance = useSelector(selectTotalBalance);
  const activeMeters = useSelector(selectActiveMeters);

  // Local state
  const [activeTab, setActiveTab] = useState("Daily");
  const [startDate, setStartDate] = useState("2025-04-01");
  const [refreshing, setRefreshing] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    dispatch(setHeaderTitle("User Dashboard"));
    dispatch(setBreadcrumbs([{ label: "User Dashboard" }]));
  }, [dispatch]);

  // Update filter settings when startDate changes
  useEffect(() => {
    dispatch(updateFilterSettings({
      dateRange: {
        startDate: startDate,
        endDate: today
      }
    }));
  }, [startDate, today, dispatch]);

  // Memoized calculations to prevent unnecessary re-renders
  const firstMeterData = useMemo(() => {
    return dashboardData?.summary?.recentData || null;
  }, [dashboardData]);

  const chartData = useMemo(() => {
    return {
      className: "power consumption chart(7 days)",
      title: "",
      labels: charts?.labelsData || [],
      dataPoints: charts?.chart || [],
      barColor: "rgba(75, 192, 192, 0.6)",
      bgColor: "rgba(75, 192, 192, 1)",
    };
  }, [charts]);

  const calculatedMetrics = useMemo(() => {
    const currentConsumption = firstMeterData ?
      (Number(firstMeterData.cum_eb_kwh?.value) || 0) + (Number(firstMeterData.cum_dg_kwh?.value) || 0) :
      245.8;

    const remainingBalance = Number(firstMeterData?.balance_amount?.value) || 128.50;
    const voltage = firstMeterData?.voltage_r?.value || 220;
    const current = firstMeterData?.current_r?.value || 10.2;
    const powerFactor = firstMeterData?.power_factor?.value || 0.92;
    const frequency = firstMeterData?.frequency?.value || 50;

    // More sophisticated bill estimation
    const dailyAverage = currentConsumption / 30; // Assuming 30 days of data
    const daysRemaining = Math.floor(remainingBalance / (dailyAverage * 0.15));
    const nextBillAmount = remainingBalance + (currentConsumption * 0.15);

    return {
      currentConsumption,
      remainingBalance,
      voltage,
      current,
      powerFactor,
      frequency,
      daysRemaining,
      nextBillAmount,
      dailyAverage
    };
  }, [firstMeterData]);

  // Handle refresh functionality
  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      // Add your refresh logic here
      // For example: await dispatch(fetchDashboardData());
      setTimeout(() => setRefreshing(false), 2000); // Simulated delay
    } catch (err) {
      setRefreshing(false);
      console.error('Refresh failed:', err);
    }
  };

  // Handle loading state
  if (loading) {
    return (
      <div className="bg-blue-200/10 min-h-screen">
        <Header />
        <div className="p-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <div className="text-lg text-gray-600">Loading dashboard data...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="bg-blue-200/10 min-h-screen">
        <Header />
        <div className="p-6 max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div className="text-red-800">
                <strong>Error:</strong> {error}
              </div>
            </div>
            <button
              onClick={handleRefresh}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isRelayOff = firstMeterData?.relay_status?.status === 'OFF';

  return (
    <div className="bg-blue-200/10 min-h-screen">
      <Header />
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
              <p className="text-gray-600">
                Monitor your energy consumption and manage your account
                {activeMeters.length > 0 && (
                  <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    {activeMeters.length} active meter{activeMeters.length > 1 ? 's' : ''}
                  </span>
                )}
              </p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>

          {/* Alert for relay off status */}
          {isRelayOff && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <div>
                  <span className="font-semibold text-red-800">Meter is OFF</span>
                  <span className="text-red-700 ml-2">Please contact administrator for assistance</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Current Consumption"
            value={`${calculatedMetrics.currentConsumption.toFixed(1)} kWh`}
            icon={<Zap className="h-6 w-6" />}
            subText={`${calculatedMetrics.dailyAverage.toFixed(1)} kWh/day average`}
            trend="up"
            bgColor="bg-blue-50"
            iconColor="text-blue-600"
          />
          <StatsCard
            title="Remaining Balance"
            value={`₹${calculatedMetrics.remainingBalance.toFixed(2)}`}
            icon={<CreditCard className="h-6 w-6" />}
            subText={`Estimated ${calculatedMetrics.daysRemaining} days left`}
            trend="neutral"
            bgColor="bg-green-50"
            iconColor="text-green-600"
          />
          <StatsCard
            title="Power Quality"
            icon={<Bolt className="h-6 w-6" />}
            bgColor="bg-purple-50"
            iconColor="text-purple-600"
            content={
              <div className="space-y-2">
                <PowerQualityItem label="Voltage" value={`${calculatedMetrics.voltage}V`} isGood={calculatedMetrics.voltage >= 200 && calculatedMetrics.voltage <= 240} />
                <PowerQualityItem label="Current" value={`${calculatedMetrics.current}A`} isGood={true} />
                <PowerQualityItem label="Frequency" value={`${calculatedMetrics.frequency} Hz`} isGood={calculatedMetrics.frequency >= 49 && calculatedMetrics.frequency <= 51} />
                <PowerQualityItem label="Power Factor" value={calculatedMetrics.powerFactor.toFixed(2)} isGood={calculatedMetrics.powerFactor >= 0.9} />
              </div>
            }
          />
          <StatsCard
            title="Next Bill Estimate"
            value={`₹${calculatedMetrics.nextBillAmount.toFixed(2)}`}
            icon={<Lock className="h-6 w-6" />}
            subText="Due on Mar 25, 2025"
            trend="neutral"
            bgColor="bg-orange-50"
            iconColor="text-orange-600"
          />
        </div>

        {/* Real-time Meter Data */}
        {firstMeterData && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              Real-time Meter Data
              <span className="ml-2 h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <MeterDataCard
                title="Total EB Units"
                value={firstMeterData?.cum_eb_kwh?.value || 0}
                unit="kWh"
                bgColor="bg-blue-50"
              />
              <MeterDataCard
                title="Total DG Units"
                value={firstMeterData?.cum_dg_kwh?.value || 0}
                unit="kWh"
                bgColor="bg-purple-50"
              />
              <EGStatusDisplay status={firstMeterData?.eb_dg_status?.value} />
              <MeterDataCard
                title="Meter Status"
                value={firstMeterData?.relay_status?.status || 'UNKNOWN'}
                statusColor={
                  firstMeterData?.relay_status?.status === 'ON'
                    ? 'text-green-600'
                    : firstMeterData?.relay_status?.status === 'OFF'
                      ? 'text-red-600'
                      : 'text-gray-500'
                }
                bgColor={firstMeterData?.relay_status?.status === 'OFF' ? 'bg-red-50' : 'bg-gray-50'}
                borderColor={firstMeterData?.relay_status?.status === 'OFF' ? 'border-red-300' : 'border-gray-200'}
                subText={firstMeterData?.relay_status?.status === 'OFF' ? 'Contact Administrator' : null}
              />
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <ActionButton
              icon={<CreditCard className="h-5 w-5" />}
              label="Recharge Account"
              variant="primary"
              onClick={() => navigate('/rechage-meter')}
            />
            <ActionButton
              icon={<History className="h-5 w-5" />}
              label="Usage History"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              onClick={() => navigate('/usage-history')}
              variant="secondary"
            />
            <ActionButton
              icon={<Settings className="h-5 w-5" />}
              label="Account Settings"
              variant="secondary"
              onClick={() => navigate('/account-setting')}
            />
            <ActionButton
              icon={<TrendingUp className="h-5 w-5" />}
              label="View Reports"
              variant="secondary"
              onClick={() => navigate('/reports')}
            />
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage Trends</h2>
                <p className="text-gray-600">Track your energy consumption patterns over time</p>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    From Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    max={today}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reset Filters
                  </label>
                  <button
                    onClick={() => {
                      dispatch(resetFilterSettings());
                      setStartDate("2025-04-01");
                    }}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-md text-sm transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              {charts && (charts.labelsData?.length > 0 || charts.chart?.length > 0) ? (
                <CurrentPowerChart fullchartData={chartData} />
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-500">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium">No chart data available</p>
                    <p className="text-sm">Please check your meter configuration or try refreshing the page.</p>
                    <button
                      onClick={handleRefresh}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Refresh Data
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced components
const StatsCard = ({ title, value, icon, subText, content, trend, bgColor, iconColor }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg ${bgColor}`}>
        <span className={iconColor}>{icon}</span>
      </div>
      {trend === "up" && (
        <div className="flex items-center text-green-600 text-sm">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>+2.3%</span>
        </div>
      )}
    </div>

    <div className="mb-2">
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      {content ? (
        <div>{content}</div>
      ) : (
        <div className="text-2xl font-bold text-gray-900">{value}</div>
      )}
    </div>

    {subText && (
      <p className={`text-sm ${trend === "up" ? "text-green-600" :
          trend === "down" ? "text-red-600" :
            "text-gray-500"
        }`}>
        {subText}
      </p>
    )}
  </div>
);

const PowerQualityItem = ({ label, value, isGood }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm text-gray-600">{label}</span>
    <div className="flex items-center space-x-1">
      <span className="font-semibold text-gray-900">{value}</span>
      {isGood ? (
        <CheckCircle className="h-3 w-3 text-green-600" />
      ) : (
        <AlertTriangle className="h-3 w-3 text-yellow-600" />
      )}
    </div>
  </div>
);

const MeterDataCard = ({ title, value, unit, statusColor, bgColor = "bg-gray-50", borderColor = "border-gray-200", subText }) => (
  <div className={`${bgColor} rounded-lg p-5 shadow-sm border ${borderColor}`}>
    <div className="text-sm text-gray-500 mb-1">{title}</div>
    <div className={`text-2xl font-bold ${statusColor || 'text-gray-800'}`}>
      {value}
      {unit && <span className="text-sm text-gray-600 ml-1">{unit}</span>}
    </div>
    {subText && <span className="text-gray-800 text-sm">{subText}</span>}
  </div>
);

const ActionButton = ({ icon, label, rightIcon, variant = "secondary", onClick }) => {
  const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {icon}
      <span>{label}</span>
      {rightIcon}
    </button>
  );
};

export default UserDashboard;