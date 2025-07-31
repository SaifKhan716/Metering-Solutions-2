// // import React from 'react'

// // const AlertAndNotification = () => {
// //   return (
// //     <div className='flex item-center justify-center'>
// //       Alert and Notifications
// //     </div>
// //   )
// // }

// // export default AlertAndNotification

// // import React, { useState } from "react";

// // const AlertAndNotification = () => {
// //   const [alerts, setAlerts] = useState([
// //     { id: 1, type: "error", message: "Something went wrong!" },
// //     { id: 2, type: "success", message: "Data saved successfully!" },
// //     { id: 3, type: "warning", message: "You’re nearing your limit!" },
// //   ]);

// //   const [notifications, setNotifications] = useState([
// //     { id: 1, title: "New Message", body: "You have 3 unread messages." },
// //     { id: 2, title: "Update Available", body: "Version 2.0 is ready to install." },
// //   ]);

// //   const removeAlert = (id) => {
// //     setAlerts((prev) => prev.filter((a) => a.id !== id));
// //   };

// //   const removeNotification = (id) => {
// //     setNotifications((prev) => prev.filter((n) => n.id !== id));
// //   };

// //   const getAlertStyle = (type) => {
// //     switch (type) {
// //       case "error":
// //         return "bg-red-100 border-red-500 text-red-700";
// //       case "success":
// //         return "bg-green-100 border-green-500 text-green-700";
// //       case "warning":
// //         return "bg-yellow-100 border-yellow-500 text-yellow-700";
// //       default:
// //         return "bg-gray-100 border-gray-500 text-gray-700";
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-3xl mx-auto space-y-6">
// //       {/* Alerts Section */}
// //       <div>
// //         <h2 className="text-xl font-bold mb-2">Alerts</h2>
// //         <div className="space-y-3">
// //           {alerts.map((alert) => (
// //             <div
// //               key={alert.id}
// //               className={`border-l-4 p-4 rounded-md shadow-sm flex justify-between items-center ${getAlertStyle(
// //                 alert.type
// //               )}`}
// //             >
// //               <span>{alert.message}</span>
// //               <button
// //                 onClick={() => removeAlert(alert.id)}
// //                 className="ml-4 text-sm text-gray-500 hover:text-black"
// //               >
// //                 ✕
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Notifications Section */}
// //       <div>
// //         <h2 className="text-xl font-bold mb-2">Notifications</h2>
// //         <div className="space-y-3">
// //           {notifications.map((note) => (
// //             <div
// //               key={note.id}
// //               className="border p-4 rounded-md shadow-sm bg-white flex justify-between items-start"
// //             >
// //               <div>
// //                 <h4 className="font-semibold">{note.title}</h4>
// //                 <p className="text-sm text-gray-600">{note.body}</p>
// //               </div>
// //               <button
// //                 onClick={() => removeNotification(note.id)}
// //                 className="ml-4 text-sm text-gray-400 hover:text-black"
// //               >
// //                 ✕
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AlertAndNotification;


// // import React from 'react'

// // const Chat = () => {
// //   return (
// //     <div>
// //       Chat pages
// //     </div>
// //   )
// // }

// // export default Chat


// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";

// const AlertAndNotification = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setHeaderTitle("Alert And Notification"));
//     dispatch(
//       setBreadcrumbs([
//         // { label: "Home", link: "" },  // Updated label for clarity
//         { label: "Alert and Notification" },
//       ])
//     );
//   }, []);

//   return (
//     <div className="w-full h-full">
//       <Header />
//       {/* Page content goes here */}
//     </div>
//   );
// };

// export default AlertAndNotification;
























import React, { useState, useEffect } from "react";
import {
  Bell,
  AlertTriangle,
  Zap,
  TrendingUp,
  Battery,
  Clock,
  User,
  Hash,
  Calendar,
  ToggleLeft,
  ToggleRight,
  Filter,
  Search,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Shield,
  Activity,
  Wifi,
  AlertCircle,
  Gift,
  BarChart3,
  WifiOff,
  Magnet,
  ChevronLeft,
} from "lucide-react";

import { useDispatch } from "react-redux";
import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";

const AlertAndNotification = ({ userRole = "admin" }) => {
  const [userType, setUserType] = useState(userRole);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [notifications, setNotifications] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("users"); // 'users' or 'adminNotifications'
  const itemsPerPage = 6;



    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle("Notifiaction"));
    dispatch(
      setBreadcrumbs([
        // { label: "Home", link: "/home" },  // Updated label for clarity
        { label: "Notifications" ,link:"/alertandnotification"},
      ])
    );
  }, []);
  const mockAdminNotifications = [
    {
      _id: "ADM-1",
      alertType: "High Load Usage",
      message:
        "High load detected on Meter ID #MTR456 for User ID #USR789. Please reduce usage to avoid overload.",
      value: "6.2kW",
      mode: "Email",
      time: "2025-01-16T09:15:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-2",
      alertType: "Security Alert",
      message: "Unusual login attempt detected",
      value: "From IP: 192.168.1.100",
      mode: "Text",
      time: "2025-01-15T22:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-3",
      alertType: "Maintenance Required",
      message: "Meter MTR-004 needs firmware update",
      value: "MTR-004",
      mode: "Email",
      time: "2025-01-14T14:45:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-4",
      alertType: "Reverse Polarity",
      message:
        "Reverse current detected for Meter ID #MTR321 (User ID #USR654). Downlink sent to protect the system.",
      value: "Reverse Current",
      mode: "Text",
      time: "2025-01-16T11:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-5",
      alertType: "Magnetic Interference",
      message:
        "We detected possible magnetic interference on Meter ID #MTR888 (User ID #USR333). Please ensure the area is safe.",
      value: "Magnet detected",
      mode: "Email",
      time: "2025-01-16T10:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-6",
      alertType: "Current Imbalance",
      message:
        "Phase current imbalance noticed – please check wiring or load for Meter ID #MTR567.",
      value: "R:Y:B = 5A:12A:7A",
      mode: "Email",
      time: "2025-01-16T09:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-7",
      alertType: "Neutral Voltage Issue",
      message:
        "Voltage fluctuation detected – this may damage appliances (Meter ID #MTR678).",
      value: "Neutral = 18V",
      mode: "Text",
      time: "2025-01-16T08:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-8",
      alertType: "Meter Offline",
      message:
        "Meter #MTR123 (User ID #USR987) is offline or not responding for over 3 hours.",
      value: "Last seen: 05:30 AM",
      mode: "Email",
      time: "2025-01-16T08:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-9",
      alertType: "Garbage Uplink Data",
      message:
        "Meter #MTR456 (User #USR789) sent invalid data (01FFFFF) 3 times. Please verify.",
      value: "3x Invalid packets",
      mode: "Email",
      time: "2025-01-15T19:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-10",
      alertType: "No Usage Detected",
      message:
        "No usage detected today on Meter ID #MTR123 for User ID #USR456. May indicate no one is home or a device issue.",
      value: "0 Units",
      mode: "Text",
      time: "2025-01-15T21:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-11",
      alertType: "High Load vs Previous",
      message:
        "Today's load is 50% higher than any previous day for Meter ID #MTR890 (User ID #USR222).",
      value: "9.5kW today",
      mode: "Email",
      time: "2025-01-15T20:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-12",
      alertType: "Spike in Usage",
      message: "Unusual electricity usage detected today.",
      value: "3× Daily Avg",
      mode: "Text",
      time: "2025-01-15T18:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-13",
      alertType: "Meter Offline",
      message: "Meter #MTR456 is offline or not responding for over 3 hours.",
      value: "Last seen: 02:00 PM",
      mode: "Email",
      time: "2025-01-15T17:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-14",
      alertType: "Reverse Polarity",
      message:
        "Reverse current detected for Meter ID #MTR654 (User ID #USR100).",
      value: "Fault Detected",
      mode: "Text",
      time: "2025-01-15T16:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-15",
      alertType: "Current Imbalance",
      message: "Current imbalance detected on Meter MTR010",
      value: "R:5A G:12A B:7A",
      mode: "Email",
      time: "2025-01-15T15:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-16",
      alertType: "Garbage Uplink Data",
      message: "Meter MTR777 sent corrupt data pattern multiple times",
      value: "01FFFFF",
      mode: "Email",
      time: "2025-01-15T14:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-17",
      alertType: "Magnetic Interference",
      message: "Possible magnetic tampering detected – Meter ID #MTR987",
      value: "Magnet Triggered",
      mode: "Text",
      time: "2025-01-15T13:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-18",
      alertType: "Neutral Voltage Issue",
      message: "Voltage on neutral exceeded 15V threshold.",
      value: "Neutral = 16.5V",
      mode: "Email",
      time: "2025-01-15T12:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-19",
      alertType: "Spike in Usage",
      message: "Daily usage has doubled for Meter ID #MTR007.",
      value: "4 units → 10 units",
      mode: "Email",
      time: "2025-01-15T12:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-20",
      alertType: "Security Alert",
      message: "Multiple failed login attempts detected.",
      value: "5 attempts",
      mode: "Text",
      time: "2025-01-15T11:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-21",
      alertType: "Maintenance Required",
      message: "Low signal strength on Meter ID #MTR006",
      value: "RSSI = -105 dBm",
      mode: "Email",
      time: "2025-01-15T11:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-22",
      alertType: "System Alert",
      message: "Memory usage exceeded 80%",
      value: "81% RAM",
      mode: "Email",
      time: "2025-01-15T10:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-23",
      alertType: "Garbage Uplink Data",
      message: "Invalid data received multiple times from Meter MTR-300",
      value: "Repeated Code: XXFFF",
      mode: "Email",
      time: "2025-01-15T09:45:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-24",
      alertType: "Meter Offline",
      message: "No response from Meter ID #MTR110 for 5 hours",
      value: "Offline",
      mode: "Text",
      time: "2025-01-15T09:15:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-25",
      alertType: "Reverse Polarity",
      message:
        "Meter #MTR999 has reversed current. Please inspect immediately.",
      value: "Alert: Polarity Mismatch",
      mode: "Email",
      time: "2025-01-15T08:00:00Z",
      status: "enabled",
    },
  ];

  // Simulate API call to fetch notifications
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (userType === "admin" && !selectedUser && activeTab === "users") {
          // Fetch users list for admin
          setUsersList(mockAdminUsers);
        } else if (userType === "admin" && activeTab === "adminNotifications") {
          // For admin notifications tab, we don't need to fetch anything as we're using mock data
          setLoading(false);
          return;
        } else {
          // Fetch notifications for user or specific user for admin
          setNotifications(
            userType === "user"
              ? mockUserNotifications
              : selectedUser === "USR-12346"
              ? mockUserNotifications2
              : selectedUser === "USR-12347"
              ? mockUserNotifications3
              : mockUserNotifications
          );
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userType, selectedUser, activeTab]);


  const mockUserNotifications = {
    userId: "USR-12345",
    meterId: "MTR-001",
    status: "enabled",
    lastNotificationDate: "2025-01-15T14:30:00Z",
    userNotification: [
      {
        _id: "1",
        alertType: "Low Balance",
        message: "Your balance is low. Please recharge soon.",
        value: "₹10 (threshold)",
        mode: "Text",
        time: "2025-01-15T14:30:00Z",
        status: "enabled",
      },
      {
        _id: "2",
        alertType: "Balance Expired",
        message: "Your balance has expired. Emergency 2 units activated.",
        value: "₹0",
        mode: "Text",
        time: "2025-01-15T10:15:00Z",
        status: "enabled",
      },
      {
        _id: "3",
        alertType: "Recharge Successful",
        message: "Recharge of ₹100 successful. New balance: ₹150.",
        value: "₹100",
        mode: "Text",
        time: "2025-01-14T18:45:00Z",
        status: "enabled",
      },
      {
        _id: "4",
        alertType: "Recharge Failed",
        message: "Recharge failed. Please try again or check payment method.",
        value: "₹200 attempt",
        mode: "Text",
        time: "2025-01-14T17:30:00Z",
        status: "enabled",
      },
      {
        _id: "5",
        alertType: "High Load Usage",
        message: "High load detected on Meter ID #MTR001. Please reduce usage.",
        value: "6.5kW",
        mode: "Text",
        time: "2025-01-14T16:00:00Z",
        status: "enabled",
      },
      {
        _id: "6",
        alertType: "Spike in Usage",
        message: "Unusual electricity usage detected today.",
        value: "5× Avg",
        mode: "Text",
        time: "2025-01-14T15:00:00Z",
        status: "enabled",
      },
      {
        _id: "7",
        alertType: "Daily/Weekly Report",
        message: "You used 12 units today.",
        value: "12 units",
        mode: "Email",
        time: "2025-01-14T13:00:00Z",
        status: "enabled",
      },
      {
        _id: "8",
        alertType: "No Usage Detected",
        message: "No usage detected today on Meter ID #MTR001.",
        value: "0 Units",
        mode: "Text",
        time: "2025-01-14T12:00:00Z",
        status: "enabled",
      },
      {
        _id: "9",
        alertType: "Reminder to Recharge",
        message: "Hey! It’s been a while since your last recharge. Need help?",
        value: "7 days since last recharge",
        mode: "Text",
        time: "2025-01-13T10:00:00Z",
        status: "enabled",
      },
      {
        _id: "10",
        alertType: "Festival Offer",
        message: "Recharge ₹500 and get ₹50 bonus this Diwali!",
        value: "₹500 offer",
        mode: "Email",
        time: "2025-01-12T09:00:00Z",
        status: "enabled",
      },
      {
        _id: "11",
        alertType: "High Load vs Previous",
        message: "Today's load is 50% higher than any previous day.",
        value: "9.5kW today",
        mode: "Email",
        time: "2025-01-12T08:00:00Z",
        status: "enabled",
      },
      {
        _id: "12",
        alertType: "Low Balance",
        message: "Your balance is low. Please recharge soon.",
        value: "₹9",
        mode: "Text",
        time: "2025-01-12T07:00:00Z",
        status: "enabled",
      },
      {
        _id: "13",
        alertType: "Recharge Successful",
        message: "Recharge of ₹300 successful. New balance: ₹320.",
        value: "₹300",
        mode: "Text",
        time: "2025-01-11T20:00:00Z",
        status: "enabled",
      },
      {
        _id: "14",
        alertType: "Daily/Weekly Report",
        message: "You used 10 units today.",
        value: "10 units",
        mode: "Email",
        time: "2025-01-11T18:00:00Z",
        status: "enabled",
      },
      {
        _id: "15",
        alertType: "No Usage Detected",
        message: "No usage detected today on Meter ID #MTR001.",
        value: "0 Units",
        mode: "Text",
        time: "2025-01-11T17:00:00Z",
        status: "enabled",
      },
      {
        _id: "16",
        alertType: "Reminder to Recharge",
        message: "Still waiting for your recharge. Need help?",
        value: "Reminder #2",
        mode: "Text",
        time: "2025-01-11T15:30:00Z",
        status: "enabled",
      },
      {
        _id: "17",
        alertType: "Festival Offer",
        message: "Lohri Special – Recharge ₹1000 get ₹150 bonus!",
        value: "₹1000 offer",
        mode: "Email",
        time: "2025-01-11T14:00:00Z",
        status: "enabled",
      },
      {
        _id: "18",
        alertType: "High Load Usage",
        message: "High load detected on Meter ID #MTR001. Please reduce usage.",
        value: "7.1kW",
        mode: "Text",
        time: "2025-01-11T13:00:00Z",
        status: "enabled",
      },
      {
        _id: "19",
        alertType: "Recharge Failed",
        message: "Recharge failed due to payment timeout.",
        value: "₹150 attempt",
        mode: "Text",
        time: "2025-01-11T12:00:00Z",
        status: "enabled",
      },
      {
        _id: "20",
        alertType: "Low Balance",
        message: "Your balance is now below ₹5. Recharge immediately.",
        value: "₹4.50",
        mode: "Text",
        time: "2025-01-11T11:30:00Z",
        status: "enabled",
      },
      {
        _id: "21",
        alertType: "Recharge Successful",
        message: "Recharge of ₹250 successful. New balance: ₹270.",
        value: "₹250",
        mode: "Text",
        time: "2025-01-11T10:00:00Z",
        status: "enabled",
      },
      {
        _id: "22",
        alertType: "Spike in Usage",
        message: "Usage spike detected – today’s usage is 6× the average.",
        value: "15 units",
        mode: "Text",
        time: "2025-01-10T20:00:00Z",
        status: "enabled",
      },
      {
        _id: "23",
        alertType: "Daily/Weekly Report",
        message: "This week you used 85 units.",
        value: "85 units",
        mode: "Email",
        time: "2025-01-10T19:00:00Z",
        status: "enabled",
      },
      {
        _id: "24",
        alertType: "Festival Offer",
        message: "Republic Day: Recharge ₹750 and get ₹75 bonus!",
        value: "₹750 promo",
        mode: "Email",
        time: "2025-01-10T18:00:00Z",
        status: "enabled",
      },
      {
        _id: "25",
        alertType: "No Usage Detected",
        message:
          "0 usage detected for 2 days. Please verify if the meter is working.",
        value: "0 Units",
        mode: "Text",
        time: "2025-01-10T17:00:00Z",
        status: "enabled",
      },
      {
        _id: "26",
        alertType: "Reminder to Recharge",
        message: "Don’t forget to recharge and keep your power running!",
        value: "12 days since recharge",
        mode: "Text",
        time: "2025-01-10T15:00:00Z",
        status: "enabled",
      },
      {
        _id: "27",
        alertType: "Recharge Failed",
        message: "Recharge unsuccessful – bank declined the transaction.",
        value: "₹300 attempt",
        mode: "Text",
        time: "2025-01-10T14:00:00Z",
        status: "enabled",
      },
      {
        _id: "28",
        alertType: "Balance Expired",
        message: "Your emergency balance has expired.",
        value: "0.00 units left",
        mode: "Text",
        time: "2025-01-10T13:00:00Z",
        status: "enabled",
      },
      {
        _id: "29",
        alertType: "Recharge Successful",
        message: "Recharge of ₹120 successful.",
        value: "₹120",
        mode: "Text",
        time: "2025-01-10T12:00:00Z",
        status: "enabled",
      },
      {
        _id: "30",
        alertType: "Daily/Weekly Report",
        message: "Today’s usage: 7.4 units.",
        value: "7.4 units",
        mode: "Email",
        time: "2025-01-10T10:00:00Z",
        status: "enabled",
      },

      // Continue adding up to 50 — will provide next set in follow-up to keep format clean
    ],
  };



  const mockUserNotifications2 = {
    userId: "USR-12346",
    meterId: "MTR-002",
    status: "enabled",
    lastNotificationDate: "2025-01-14T18:45:00Z",
    userNotification: [
      {
        _id: "1",
        alertType: "Recharge Successful",
        message: "Recharge of ₹200 successful. New balance: ₹250.",
        value: "₹200",
        mode: "Text",
        time: "2025-01-14T18:45:00Z",
      },
      {
        _id: "2",
        alertType: "Low Balance",
        message: "Your balance is low. Please recharge soon.",
        value: "₹8",
        mode: "Text",
        time: "2025-01-14T16:00:00Z",
        status: "enabled",
      },
      {
        _id: "3",
        alertType: "Balance Expired",
        message: "Your balance has expired. Emergency 2 units activated.",
        value: "₹0",
        mode: "Text",
        time: "2025-01-14T15:00:00Z",
        status: "enabled",
      },
      {
        _id: "4",
        alertType: "Spike in Usage",
        message: "Unusual electricity usage detected today.",
        value: "4× Avg",
        mode: "Text",
        time: "2025-01-14T14:00:00Z",
        status: "enabled",
      },
      {
        _id: "5",
        alertType: "Recharge Failed",
        message: "Recharge failed. Please try again or check payment method.",
        value: "₹300 attempt",
        mode: "Text",
        time: "2025-01-14T13:30:00Z",
        status: "enabled",
      },
      {
        _id: "6",
        alertType: "Reminder to Recharge",
        message: "You haven’t recharged in a while. Need help?",
        value: "10 days since recharge",
        mode: "Text",
        time: "2025-01-14T12:45:00Z",
        status: "enabled",
      },
      {
        _id: "7",
        alertType: "No Usage Detected",
        message: "No usage detected today on Meter ID #MTR002.",
        value: "0 Units",
        mode: "Text",
        time: "2025-01-14T11:20:00Z",
        status: "enabled",
      },
      {
        _id: "8",
        alertType: "Daily/Weekly Report",
        message: "You used 14 units today.",
        value: "14 units",
        mode: "Email",
        time: "2025-01-14T10:00:00Z",
        status: "enabled",
      },
      {
        _id: "9",
        alertType: "High Load Usage",
        message: "High load detected on Meter ID #MTR002. Please reduce usage.",
        value: "6.8kW",
        mode: "Text",
        time: "2025-01-13T19:00:00Z",
        status: "enabled",
      },
      {
        _id: "10",
        alertType: "Recharge Successful",
        message: "Recharge of ₹150 successful. New balance: ₹160.",
        value: "₹150",
        mode: "Text",
        time: "2025-01-13T17:45:00Z",
        status: "enabled",
      },
      {
        _id: "11",
        alertType: "Festival Offer",
        message: "Recharge ₹500 and get ₹50 bonus this Diwali!",
        value: "₹500 offer",
        mode: "Email",
        time: "2025-01-13T12:00:00Z",
        status: "enabled",
      },
      {
        _id: "12",
        alertType: "High Load vs Previous",
        message: "Today's load is 50% higher than any previous day.",
        value: "9.2kW today",
        mode: "Email",
        time: "2025-01-13T10:00:00Z",
        status: "enabled",
      },
      {
        _id: "13",
        alertType: "Recharge Failed",
        message: "Recharge failed due to network timeout.",
        value: "₹200",
        mode: "Text",
        time: "2025-01-13T09:30:00Z",
        status: "enabled",
      },
      {
        _id: "14",
        alertType: "Recharge Successful",
        message: "Recharge of ₹100 successful. New balance: ₹120.",
        value: "₹100",
        mode: "Text",
        time: "2025-01-12T20:00:00Z",
        status: "enabled",
      },
      {
        _id: "15",
        alertType: "Reminder to Recharge",
        message: "Hey! Your power might run out soon. Recharge now.",
        value: "No recharge in 7 days",
        mode: "Text",
        time: "2025-01-12T10:00:00Z",
        status: "enabled",
      },
    ],
  };

 

  const mockUserNotifications3 = {
    userId: "USR-12347",
    meterId: "MTR-003",
    status: "disabled",
    lastNotificationDate: "2025-01-12T16:20:00Z",
    userNotification: [
      {
        _id: "1",
        alertType: "Meter Offline",
        message: "Meter is offline or not responding.",
        value: "Offline Duration",
        mode: "Email",
        time: "2025-01-12T16:20:00Z",
        status: "enabled",
      },
      {
        _id: "2",
        alertType: "Low Balance",
        message: "Your balance is low. Please recharge soon.",
        value: "₹6",
        mode: "Text",
        time: "2025-01-12T14:00:00Z",
        status: "enabled",
      },
      {
        _id: "3",
        alertType: "Recharge Failed",
        message: "Recharge failed due to payment gateway issue.",
        value: "₹300 attempt",
        mode: "Text",
        time: "2025-01-12T13:15:00Z",
        status: "enabled",
      },
      {
        _id: "4",
        alertType: "Festival Offer",
        message: "Recharge ₹1000 and get ₹150 bonus for Pongal!",
        value: "₹1000 promo",
        mode: "Email",
        time: "2025-01-12T12:00:00Z",
        status: "enabled",
      },
      {
        _id: "5",
        alertType: "Reminder to Recharge",
        message: "Recharge now to avoid service interruption.",
        value: "No recharge in 10 days",
        mode: "Text",
        time: "2025-01-12T10:00:00Z",
        status: "enabled",
      },
      {
        _id: "6",
        alertType: "Balance Expired",
        message: "Your balance has expired. Emergency 2 units activated.",
        value: "₹0",
        mode: "Text",
        time: "2025-01-11T18:00:00Z",
        status: "enabled",
      },
      {
        _id: "7",
        alertType: "Spike in Usage",
        message: "Unusual electricity usage detected today.",
        value: "6× Average",
        mode: "Text",
        time: "2025-01-11T15:30:00Z",
        status: "enabled",
      },
      {
        _id: "8",
        alertType: "Recharge Successful",
        message: "Recharge of ₹400 successful. New balance: ₹420.",
        value: "₹400",
        mode: "Text",
        time: "2025-01-11T13:00:00Z",
        status: "enabled",
      },
      {
        _id: "9",
        alertType: "High Load Usage",
        message: "High load detected. Please reduce usage.",
        value: "7.2kW",
        mode: "Text",
        time: "2025-01-10T21:00:00Z",
        status: "enabled",
      },
      {
        _id: "10",
        alertType: "No Usage Detected",
        message: "No usage detected today. Check if someone is home.",
        value: "0 Units",
        mode: "Text",
        time: "2025-01-10T20:00:00Z",
        status: "enabled",
      },
    ],
  };

  const mockAdminUsers = [
    {
      _id: "1",
      userId: "USR-12345",
      meterId: "MTR-001",
      lastNotificationDate: "2025-01-15T14:30:00Z",
      status: "enabled",
      notificationCount: 2,
    },
    {
      _id: "2",
      userId: "USR-12346",
      meterId: "MTR-002",
      lastNotificationDate: "2025-01-14T18:45:00Z",
      status: "enabled",
      notificationCount: 1,
    },
    {
      _id: "3",
      userId: "USR-12347",
      meterId: "MTR-003",
      lastNotificationDate: "2025-01-12T16:20:00Z",
      status: "disabled",
      notificationCount: 1,
    },
    {
      _id: "4",
      userId: "USR-12348",
      meterId: "MTR-004",
      lastNotificationDate: "2025-01-13T11:00:00Z",
      status: "enabled",
      notificationCount: 3,
    },
    {
      _id: "5",
      userId: "USR-12349",
      meterId: "MTR-005",
      lastNotificationDate: "2025-01-11T10:15:00Z",
      status: "enabled",
      notificationCount: 5,
    },
    {
      _id: "6",
      userId: "USR-12350",
      meterId: "MTR-006",
      lastNotificationDate: "2025-01-10T09:25:00Z",
      status: "disabled",
      notificationCount: 2,
    },
    {
      _id: "7",
      userId: "USR-12351",
      meterId: "MTR-007",
      lastNotificationDate: "2025-01-09T14:10:00Z",
      status: "enabled",
      notificationCount: 4,
    },
    {
      _id: "8",
      userId: "USR-12352",
      meterId: "MTR-008",
      lastNotificationDate: "2025-01-08T17:55:00Z",
      status: "enabled",
      notificationCount: 2,
    },
    {
      _id: "9",
      userId: "USR-12353",
      meterId: "MTR-009",
      lastNotificationDate: "2025-01-07T08:45:00Z",
      status: "enabled",
      notificationCount: 6,
    },
    {
      _id: "10",
      userId: "USR-12354",
      meterId: "MTR-010",
      lastNotificationDate: "2025-01-06T12:30:00Z",
      status: "disabled",
      notificationCount: 3,
    },
    {
      _id: "11",
      userId: "USR-12355",
      meterId: "MTR-011",
      lastNotificationDate: "2025-01-05T16:20:00Z",
      status: "enabled",
      notificationCount: 1,
    },
    {
      _id: "12",
      userId: "USR-12356",
      meterId: "MTR-012",
      lastNotificationDate: "2025-01-04T13:40:00Z",
      status: "enabled",
      notificationCount: 0,
    },
    {
      _id: "13",
      userId: "USR-12357",
      meterId: "MTR-013",
      lastNotificationDate: "2025-01-03T11:00:00Z",
      status: "enabled",
      notificationCount: 2,
    },
    {
      _id: "14",
      userId: "USR-12358",
      meterId: "MTR-014",
      lastNotificationDate: "2025-01-02T15:15:00Z",
      status: "disabled",
      notificationCount: 4,
    },
    {
      _id: "15",
      userId: "USR-12359",
      meterId: "MTR-015",
      lastNotificationDate: "2025-01-01T18:00:00Z",
      status: "enabled",
      notificationCount: 2,
    },
    {
      _id: "16",
      userId: "USR-12360",
      meterId: "MTR-016",
      lastNotificationDate: "2024-12-31T10:30:00Z",
      status: "enabled",
      notificationCount: 5,
    },
    {
      _id: "17",
      userId: "USR-12361",
      meterId: "MTR-017",
      lastNotificationDate: "2024-12-30T09:00:00Z",
      status: "enabled",
      notificationCount: 1,
    },
    {
      _id: "18",
      userId: "USR-12362",
      meterId: "MTR-018",
      lastNotificationDate: "2024-12-29T14:30:00Z",
      status: "disabled",
      notificationCount: 2,
    },
    {
      _id: "19",
      userId: "USR-12363",
      meterId: "MTR-019",
      lastNotificationDate: "2024-12-28T12:00:00Z",
      status: "enabled",
      notificationCount: 3,
    },
    {
      _id: "20",
      userId: "USR-12364",
      meterId: "MTR-020",
      lastNotificationDate: "2024-12-27T11:45:00Z",
      status: "enabled",
      notificationCount: 4,
    },
  ];

  const getAlertIcon = (alertType) => {
    const iconMap = {
      "Low Balance": <Battery className="h-5 w-5" />,
      "Balance Expired": <AlertTriangle className="h-5 w-5" />,
      "Recharge Successful": <CreditCard className="h-5 w-5" />,
      "Recharge Failed": <AlertCircle className="h-5 w-5" />,
      "High Load Usage": <Zap className="h-5 w-5" />,
      "Spike in Usage": <TrendingUp className="h-5 w-5" />,
      "Daily/Weekly Report": <BarChart3 className="h-5 w-5" />,
      "No Usage Detected": <Activity className="h-5 w-5" />,
      "Garbage Uplink Data": <AlertTriangle className="h-5 w-5" />,
      "Reverse Polarity": <Shield className="h-5 w-5" />,
      "Magnetic Interference": <Magnet className="h-5 w-5" />,
      "Current Imbalance": <Zap className="h-5 w-5" />,
      "Neutral Voltage Issue": <AlertTriangle className="h-5 w-5" />,
      "Meter Offline": <WifiOff className="h-5 w-5" />,
      "Reminder to Recharge": <Bell className="h-5 w-5" />,
      "Festival Offer": <Gift className="h-5 w-5" />,
      "High Load vs Previous": <TrendingUp className="h-5 w-5" />,
      "System Alert": <Activity className="h-5 w-5" />,
      "Security Alert": <Shield className="h-5 w-5" />,
      "Maintenance Required": <AlertTriangle className="h-5 w-5" />,
    };
    return iconMap[alertType] || <Bell className="h-5 w-5" />;
  };

  // Get colors for alert type
  const getAlertColors = (alertType) => {
    const colorMap = {
      "Low Balance": {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        border: "border-orange-200",
      },
      "Balance Expired": {
        bg: "bg-red-50",
        icon: "text-red-600",
        border: "border-red-200",
      },
      "Recharge Successful": {
        bg: "bg-green-50",
        icon: "text-green-600",
        border: "border-green-200",
      },
      "Recharge Failed": {
        bg: "bg-red-50",
        icon: "text-red-600",
        border: "border-red-200",
      },
      "High Load Usage": {
        bg: "bg-red-50",
        icon: "text-red-600",
        border: "border-red-200",
      },
      "Spike in Usage": {
        bg: "bg-yellow-50",
        icon: "text-yellow-600",
        border: "border-yellow-200",
      },
      "Daily/Weekly Report": {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        border: "border-blue-200",
      },
      "No Usage Detected": {
        bg: "bg-gray-50",
        icon: "text-gray-600",
        border: "border-gray-200",
      },
      "Garbage Uplink Data": {
        bg: "bg-red-50",
        icon: "text-red-600",
        border: "border-red-200",
      },
      "Reverse Polarity": {
        bg: "bg-red-50",
        icon: "text-red-600",
        border: "border-red-200",
      },
      "Magnetic Interference": {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        border: "border-orange-200",
      },
      "Current Imbalance": {
        bg: "bg-yellow-50",
        icon: "text-yellow-600",
        border: "border-yellow-200",
      },
      "Neutral Voltage Issue": {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        border: "border-orange-200",
      },
      "Meter Offline": {
        bg: "bg-gray-50",
        icon: "text-gray-600",
        border: "border-gray-200",
      },
      "Reminder to Recharge": {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        border: "border-blue-200",
      },
      "Festival Offer": {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        border: "border-purple-200",
      },
      "High Load vs Previous": {
        bg: "bg-red-50",
        icon: "text-red-600",
        border: "border-red-200",
      },
      "System Alert": {
        bg: "bg-red-50",
        icon: "text-red-600",
        border: "border-red-200",
      },
      "Security Alert": {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        border: "border-purple-200",
      },
      "Maintenance Required": {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        border: "border-orange-200",
      },
    };
    return (
      colorMap[alertType] || {
        bg: "bg-gray-50",
        icon: "text-gray-600",
        border: "border-gray-200",
      }
    );
  };

  const toggleGlobalNotificationStatus = async (newStatus) => {
    try {
      setNotifications((prev) => ({
        ...prev,
        status: newStatus,
      }));
    } catch (error) {
      console.error("Error updating notification status:", error);
    }
  };

  const toggleSingleNotificationStatus = async (notificationId, newStatus) => {
    try {
      setNotifications((prev) => ({
        ...prev,
        userNotification: prev.userNotification.map((notif) =>
          notif._id === notificationId ? { ...notif, status: newStatus } : notif
        ),
      }));
    } catch (error) {
      console.error("Error updating notification status:", error);
    }
  };

  const toggleUserStatus = async (userId, newStatus) => {
    try {
      setUsersList((prev) =>
        prev.map((user) =>
          user.userId === userId ? { ...user, status: newStatus } : user
        )
      );
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  const filteredNotifications =
    notifications?.userNotification?.filter((notification) => {
      const matchesSearch =
        searchTerm === "" ||
        notification.alertType
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        notification.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notifications.meterId.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    }) || [];

  const filteredUsers = usersList.filter((user) => {
    const matchesSearch =
      searchTerm === "" ||
      user.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.meterId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const filteredAdminNotifications = mockAdminNotifications.filter(
    (notification) => {
      const matchesSearch =
        searchTerm === "" ||
        notification.alertType
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        notification.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    }
  );

  const handleUserSelection = (userId) => {
    setSelectedUser(userId);
    setCurrentPage(1);
  };

  const handleBackToList = () => {
    setSelectedUser(null);
    setCurrentPage(1);
  };

  // Pagination logic
  const currentItems =
    userType === "user" || selectedUser
      ? filteredNotifications.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : activeTab === "adminNotifications"
      ? filteredAdminNotifications.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : filteredUsers.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );

  const totalPages = Math.ceil(
    (userType === "user" || selectedUser
      ? filteredNotifications.length
      : activeTab === "adminNotifications"
      ? filteredAdminNotifications.length
      : filteredUsers.length) / itemsPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-blue-200/10 min-h-screen p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Global Status Toggle with Search - For notification details view */}
        {(userType === "user" || selectedUser) && notifications?.status && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Notification Status
                  </h3>
                  <p className="text-sm text-gray-600">
                    {notifications.status === "enabled"
                      ? "All notifications are currently enabled"
                      : "Notifications are currently disabled"}
                  </p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() =>
                toggleGlobalNotificationStatus(
                  notifications.status === "enabled" ? "disabled" : "enabled"
                )
              }
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm ${
                notifications.status === "enabled"
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              {notifications.status === "enabled"
                ? "Disable All"
                : "Enable All"}
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[calc(75vh-48px)]"> */}

          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              {/* Search input moved here for admin view */}
              {userType === "admin" && !selectedUser && (
                <div className="relative w-full sm:w-64">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder={
                      activeTab === "adminNotifications"
                        ? "Search admin notifications..."
                        : "Search by user ID or meter ID..."
                    }
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              )}

              <div className="flex items-center gap-4 ">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {userType === "user"
                    ? "Your Notifications"
                    : selectedUser
                    ? `Notifications for ${selectedUser}`
                    : "Notification Management"}
                </h2>

                {/* Admin tabs - only shown when in admin view and no user selected */}
                {userType === "admin" && !selectedUser && (
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setActiveTab("users")}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        activeTab === "users"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Users
                    </button>
                    <button
                      onClick={() => setActiveTab("adminNotifications")}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        activeTab === "adminNotifications"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Admin Notifications
                    </button>
                  </div>
                )}
              </div>

              {selectedUser && (
                <button
                  onClick={handleBackToList}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to users
                </button>
              )}
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading data...</p>
              </div>
            ) : userType === "user" || selectedUser ? (
              <div className="space-y-4">
                {currentItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentItems.map((notification) => {
                      const colors = getAlertColors(notification.alertType);
                      return (
                        <div
                          key={notification._id}
                          className={`${colors.bg} ${colors.border} border rounded-lg p-4 transition-all hover:shadow-md`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                              <div className={`p-2 rounded-lg ${colors.bg}`}>
                                <span className={colors.icon}>
                                  {getAlertIcon(notification.alertType)}
                                </span>
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                                  <h3 className="font-semibold text-gray-900">
                                    {notification.alertType}
                                  </h3>
                                  <span className="text-sm text-gray-600">
                                    Meter: {notifications.meterId}
                                  </span>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      notification.mode.includes("Text")
                                        ? "text-blue-600 bg-blue-100"
                                        : "text-purple-600 bg-purple-100"
                                    }`}
                                  >
                                    {notification.mode}
                                  </span>
                                </div>

                                <p className="text-gray-700 mb-3">
                                  {notification.message}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                                  <div>
                                    <span className="font-medium text-gray-600">
                                      Value:
                                    </span>
                                    <div className="text-gray-900 font-semibold">
                                      {notification.value}
                                    </div>
                                  </div>
                                  <div>
                                    <span className="font-medium text-gray-600">
                                      Time:
                                    </span>
                                    <div className="text-gray-900">
                                      {new Date(
                                        notification.time
                                      ).toLocaleString()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No notifications found
                    </h3>
                    <p className="text-gray-600">
                      {searchTerm
                        ? "Try adjusting your search criteria"
                        : "You're all caught up!"}
                    </p>
                  </div>
                )}
              </div>
            ) : activeTab === "adminNotifications" ? (
              <div className="space-y-4">
                {currentItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentItems.map((notification) => {
                      const colors = getAlertColors(notification.alertType);
                      return (
                        <div
                          key={notification._id}
                          className={`${colors.bg} ${colors.border} border rounded-lg p-4 transition-all hover:shadow-md`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                              <div className={`p-2 rounded-lg ${colors.bg}`}>
                                <span className={colors.icon}>
                                  {getAlertIcon(notification.alertType)}
                                </span>
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                                  <h3 className="font-semibold text-gray-900">
                                    {notification.alertType}
                                  </h3>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      notification.mode.includes("Text")
                                        ? "text-blue-600 bg-blue-100"
                                        : "text-purple-600 bg-purple-100"
                                    }`}
                                  >
                                    {notification.mode}
                                  </span>
                                </div>

                                <p className="text-gray-700 mb-3">
                                  {notification.message}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                                  <div>
                                    <span className="font-medium text-gray-600">
                                      Value:
                                    </span>
                                    <div className="text-gray-900 font-semibold">
                                      {notification.value}
                                    </div>
                                  </div>
                                  <div>
                                    <span className="font-medium text-gray-600">
                                      Time:
                                    </span>
                                    <div className="text-gray-900">
                                      {new Date(
                                        notification.time
                                      ).toLocaleString()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No admin notifications found
                    </h3>
                    <p className="text-gray-600">
                      {searchTerm
                        ? "Try adjusting your search criteria"
                        : "No admin notifications available"}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {currentItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentItems.map((user) => (
                      <div
                        key={user._id}
                        className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => handleUserSelection(user.userId)}
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                          <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                            <div className="p-2 rounded-lg bg-gray-100">
                              <User className="h-5 w-5 text-gray-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {user.userId}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Meter: {user.meterId}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 w-full sm:w-auto">
                            <div className="text-left sm:text-right mb-3 sm:mb-0">
                              <div className="text-sm font-medium text-gray-900">
                                Last Notification:{" "}
                                {new Date(
                                  user.lastNotificationDate
                                ).toLocaleDateString()}
                              </div>
                              <div className="text-xs text-gray-500">
                                {user.notificationCount} notifications
                              </div>
                            </div>

                            <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-start">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleUserStatus(
                                    user.userId,
                                    user.status === "enabled"
                                      ? "disabled"
                                      : "enabled"
                                  );
                                }}
                                className={`px-3 py-1 rounded-md text-xs font-medium ${
                                  user.status === "enabled"
                                    ? "bg-red-100 hover:bg-red-200 text-red-600"
                                    : "bg-green-100 hover:bg-green-200 text-green-600"
                                }`}
                              >
                                {user.status === "enabled"
                                  ? "Disable"
                                  : "Enable"}
                              </button>
                              <ChevronRight className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No users notifications found
                    </h3>
                    <p className="text-gray-600">
                      {searchTerm
                        ? "Try adjusting your search criteria"
                        : "No users available"}
                    </p>
                  </div>
                )}
              </div>
            )}

           

            {/* Pagination */}
            {(filteredNotifications.length > itemsPerPage ||
              filteredUsers.length > itemsPerPage ||
              filteredAdminNotifications.length > itemsPerPage) && (
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-600">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(
                    currentPage * itemsPerPage,
                    userType === "user" || selectedUser
                      ? filteredNotifications.length
                      : activeTab === "adminNotifications"
                      ? filteredAdminNotifications.length
                      : filteredUsers.length
                  )}{" "}
                  of{" "}
                  {userType === "user" || selectedUser
                    ? filteredNotifications.length
                    : activeTab === "adminNotifications"
                    ? filteredAdminNotifications.length
                    : filteredUsers.length}{" "}
                  items
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md border ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Previous
                  </button>

                  {/* Always show first page */}
                  <button
                    onClick={() => goToPage(1)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === 1
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50 border"
                    }`}
                  >
                    1
                  </button>

                  {/* Always show second page */}
                  {totalPages >= 2 && (
                    <button
                      onClick={() => goToPage(2)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === 2
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50 border"
                      }`}
                    >
                      2
                    </button>
                  )}

                  {/* Show ellipsis if there are pages between 2 and n-1 */}
                  {totalPages > 4 && <span className="px-3 py-1">...</span>}

                  {/* Show second last page if it's not page 2 */}
                  {totalPages >= 4 && (
                    <button
                      onClick={() => goToPage(totalPages - 1)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages - 1
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50 border"
                      }`}
                    >
                      {totalPages - 1}
                    </button>
                  )}

                  {/* Show last page if it's not page 1 or 2 */}
                  {totalPages >= 3 && (
                    <button
                      onClick={() => goToPage(totalPages)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50 border"
                      }`}
                    >
                      {totalPages}
                    </button>
                  )}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md border ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertAndNotification;
