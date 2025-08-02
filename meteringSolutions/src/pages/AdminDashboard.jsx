import React, { useEffect, useState, useMemo, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../redux/thunks/adminDashboardThunks";
import { Link } from "react-router-dom";

import {
  Gauge,
  TrendingUp,
  Download,
  AlertTriangle,
  Zap,
  Bell,
  Calendar,
  Activity,
  Users,
  DollarSign,
  BarChart3,
  UserPlus,
  Search,
  Settings,
  Filter,
  RefreshCw,
  ChevronDown,
  Eye,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import MeterList from "../components/MeterList";
import CurrentPowerChart from "../components/meterManagement/CurrentPowerChart";
import {
  fetchAdminDailyConsumption,
  fetchFilteredChartData,
  fetchMeterListByAdmin,
} from "../redux/thunks/adminDashboardThunks";
import { selectUserId } from "../redux/slice/authSlice";
import {
  selectMeterList,
  selectLoading,
  selectDailyConsuption,
  selectError,
  selectFetchDashboardData,
} from "../redux/slice/adminDashboardSlice";
// import toast from 'react-hot-toast';
import { toast } from "react-toastify";

const Dashboard = () => {
  // const [startDate, setStartDate] = useState("2025-04-01");
  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today); // Add endDate state
  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState(23);
  const [lastRefreshTime, setLastRefreshTime] = useState(null);
  const [isRefreshingData, setIsRefreshingData] = useState(false);

  const [filters, setFilters] = useState({
    status: "all",
    type: "all",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const adminId = useSelector(selectUserId);
  const loading = useSelector(selectLoading);
  const fetchAdminMeters = useSelector(selectMeterList);

  const meters = fetchAdminMeters.filter((meter) => {
    const matchesStatus =
      filters.status === "all" || meter.status === filters.status;
    const matchesType = filters.type === "all" || meter.type === filters.type;
    const matchesSearch =
      meter.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meter.meterId?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesType && matchesSearch;
  });

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

  const initialAlerts = mockAdminNotifications.filter((alert) =>
    [
      "Reverse Polarity",
      "High Load Usage",
      "Balance Expired",
      "Magnetic Interference",
    ].includes(alert.alertType)
  );

  const [alerts, setAlerts] = useState(initialAlerts);

  console.log(useSelector((state) => state.adminDashboardData));
  const data = useSelector(selectFetchDashboardData);
  const error = useSelector(selectError);

  // Fetch initial data
  useEffect(() => {
    dispatch(fetchDashboardData(adminId));
    dispatch(fetchAdminDailyConsumption(adminId));
    dispatch(fetchMeterListByAdmin(adminId));
  }, [dispatch, adminId]);

  // In your Dashboard component
  useEffect(() => {
    if (startDate === today && endDate === today) {
      // Consistent parameter passing - always use object format
      dispatch(fetchFilteredChartData({ adminId }));
    } else {
      dispatch(
        fetchFilteredChartData({ adminId, from: startDate, to: endDate })
      );
    }
  }, [startDate, endDate, dispatch]); // Remove adminId from dependencies since it's constant

  const dailyConsumption = useSelector(selectDailyConsuption);

  const transformDailyData = (dailyConsumption) => {
    if (!dailyConsumption || !Array.isArray(dailyConsumption)) {
      return {
        lastSevenDayDayWiseAdminConsumption: [],
        lastSevenDayDayWiseUsers: [],
        lastSevenDayDayWiseTotalMeters: [],
        lastSevenDayDayWiseFaultyMeters: [],
        lastSevenDayDayWiseOfflineMeters: [],
        lastSevenDayDayWiseDueBalance: [],
        lastSevenDayDayWiseDueUsers: [],
        lastSevenDayDayWiseTotalRevenue: [],
      };
    }

    return {
      lastSevenDayDayWiseAdminConsumption: dailyConsumption.map(
        (item) => item.latestTotalConsumption || 0
      ),
      lastSevenDayDayWiseUsers: dailyConsumption.map(
        (item) => item.latestTotalUsers || 0
      ),
      lastSevenDayDayWiseTotalMeters: dailyConsumption.map(
        (item) => item.latestTotalMeters || 0
      ),
      lastSevenDayDayWiseFaultyMeters: dailyConsumption.map(
        (item) => item.latestTotalFaultyMeters || 0
      ),
      lastSevenDayDayWiseOfflineMeters: dailyConsumption.map(
        (item) => item.latestTotalOfflineMeters || 0
      ),
      lastSevenDayDayWiseDueBalance: dailyConsumption.map(
        (item) => item.dailyTotalDueBalance || 0 // here i need to correct the
      ),
      lastSevenDayDayWiseDueUsers: dailyConsumption.map(
        (item) => item.dailyTotalDueUsers || 0 // here i need to correct the
      ),
      lastSevenDayDayWiseTotalRevenue: dailyConsumption.map(
        (item) => item.latestTotalRevenue || 0
      ),
    };
  };

  console.log("=====-----========",data)
  // Usage in your component:
  const formattedData = transformDailyData(dailyConsumption);
  console.log("Formatted Data:", formattedData);
  console.log("=========testtstttss======", dailyConsumption);

  const labels =
    dailyConsumption?.map((item) => {
      const date = new Date(item.latestUpdatedAt);
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      });
    }) || [];

  const dataPoints =
    dailyConsumption?.map((item) => {
      // Use latestTotalConsumption instead of totalAdminConsumption
      // Also handle null/undefined cases by providing a default value (0 in this case)
      return parseFloat(item.latestTotalConsumption || 0);
    }) || [];

  console.log(labels, dataPoints);

  const chartData = [
    {
      id: "daily-consumption",
      title: "Admin Daily Consumption",
      labels:
        dailyConsumption?.map((item) => {
          const date = new Date(item.latestUpdatedAt);
          return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
          });
        }) || [],
      dataPoints:
        dailyConsumption?.map((item) => {
          return parseFloat(item.latestTotalConsumption || 0);
        }) || [],
      barColor: "rgba(75, 192, 192, 0.6)",
      bgColor: "rgba(75, 192, 192, 1)",
    },
  ];

  // console.log("==dailyConsumption==", dailyConsumption);

  console.log("==chartData1==", chartData);

  //   const handleRefresh = async () => {
  //   const now = new Date();
  //   const fourMinutesInMs = 4 * 60 * 1000;

  //   // Check cooldown
  //   if (lastRefreshTime && (now - lastRefreshTime) < fourMinutesInMs) {
  //     const secondsLeft = Math.ceil((fourMinutesInMs - (now - lastRefreshTime)) / 1000);
  //     toast.error(`Please wait ${Math.floor(secondsLeft / 60)}m ${secondsLeft % 60}s before refreshing again`);
  //     return;
  //   }

  //   setRefreshing(true);

  //   try {
  //     // Execute requests sequentially
  //     await dispatch(fetchDashboardData(adminId));
  //     await dispatch(fetchAdminDailyConsumption(adminId));
  //     await dispatch(fetchMeterListByAdmin(adminId));
  //     await dispatch(fetchFilteredChartData({ adminId, from: startDate, to: endDate }));

  //     // Update last refresh time
  //     setLastRefreshTime(new Date());
  //     toast.success('Data refreshed successfully!');
  //   } catch (error) {
  //     console.error("Refresh failed:", error);
  //     toast.error('Refresh failed. Please try again.');
  //   } finally {
  //     setRefreshing(false);
  //   }
  // };

  const handleRefresh = async () => {
    const now = new Date();
    const fourMinutesInMs = 4 * 60 * 1000;

    // Check cooldown
    if (lastRefreshTime && now - lastRefreshTime < fourMinutesInMs) {
      const secondsLeft = Math.ceil(
        (fourMinutesInMs - (now - lastRefreshTime)) / 1000
      );
      toast.error(
        `Please wait ${Math.floor(secondsLeft / 60)}m ${
          secondsLeft % 60
        }s before refreshing again`
      );
      return;
    }

    setIsRefreshingData(true);

    try {
      // Execute refresh sequence
      await dispatch(fetchDashboardData(adminId));
      await dispatch(fetchAdminDailyConsumption(adminId));
      await dispatch(fetchMeterListByAdmin(adminId));

      // Refresh chart data with current filters
      const chartParams =
        startDate === today && endDate === today
          ? { adminId }
          : { adminId, from: startDate, to: endDate };
      await dispatch(fetchFilteredChartData(chartParams));

      setLastRefreshTime(new Date());
      // toast.success("Data updated successfully");
    } catch (error) {
      console.error("Refresh error:", error);
      toast.error("Failed to update data");
    } finally {
      setIsRefreshingData(false);
    }
  };
  const dismissAlert = (alertId) => {
    setAlerts(alerts.filter((alert) => alert._id !== alertId));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading Dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">
          Error loading dashboard: {error.message || error}
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">No dashboard data found.</p>
      </div>
    );
  }

  const totalActive = data.data.totalActiveMeters;
  const total = data.data.totalMeters;

  // Safeguard against division by zero
  const percentage = total > 0 ? Math.round((totalActive / total) * 100) : 0;

  console.log(data.data.totalRevenue);

  const MetricsCard = ({
    title,
    value,
    change,
    isPositive,
    icon: Icon,
    trend,
    subLabel, // e.g., "Total Meters"
    subValue, // e.g., 12345
    valueRoute, // e.g. "/users"
    subValueRoute, // e.g. "/meters"
  }) => (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 w-full">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-3 rounded-xl ${
            isPositive ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <Icon
            className={`${isPositive ? "text-green-600" : "text-red-600"}`}
            size={24}
          />
        </div>
        <div className="flex items-center space-x-1">
          <div className="relative group flex items-center space-x-1 text-xs font-medium">
            {isPositive ? (
              <TrendingUp size={16} className="text-green-600" />
            ) : (
              <TrendingDown size={16} className="text-red-600" />
            )}

            <span
              className={`text-xs font-semibold ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}
            </span>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max px-2 py-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              Vs Previous Day
            </div>
          </div>
        </div>

        {/*
         */}
      </div>

      <div>
        {/* Side-by-side values */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col">
            {valueRoute ? (
              <Link
                to={valueRoute}
                className="text-2xl font-bold text-gray-900 hover:underline cursor-pointer"
              >
                <h3 className="text-xs font-medium text-gray-600 mb-1">
                  {title}
                </h3>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </Link>
            ) : (
              <>
                {" "}
                <h3 className="text-xs font-medium text-gray-600 mb-1">
                  {title}
                </h3>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </>
            )}
          </div>

          {/* {subLabel && subValue && ( */}
          <div className="flex flex-col items-end">
            {subValueRoute ? (
              <Link
                to={subValueRoute}
                className="text-2xl font-bold text-gray-900 hover:underline cursor-pointer"
              >
                <p className="text-xs font-medium text-gray-600 mb-1">
                  {subLabel}
                </p>
                <p className="text-2xl font-bold text-gray-900">{subValue}</p>
              </Link>
            ) : (
              <>
                {" "}
                <p className="text-xs font-medium text-gray-600 mb-1">
                  {subLabel}
                </p>
                <p className="text-2xl font-bold text-gray-900">{subValue}</p>
              </>
            )}
          </div>
          {/* )} */}
        </div>

        {/* Chart */}
        {trend && (
          <div className="mt-2 h-12 bg-gray-50 rounded-sm flex items-end justify-between px-2 py-1">
            {trend.map((point, index) => (
              <div
                key={index}
                className={`w-2 rounded-t ${
                  isPositive ? "bg-green-400" : "bg-red-400"
                }`}
                style={{ height: `${point}%` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // // Add this function to calculate percentage change between today and yesterday
  // const calculateDailyChange = (dataArray) => {
  //   if (!dataArray || dataArray.length < 2) {
  //     return {
  //       change: 0,
  //       isPositive: true,
  //       tooltip: "Insufficient data to calculate trend",
  //     };
  //   }

  //   // Get today's and yesterday's values
  //   const todayValue = dataArray[dataArray.length - 1];
  //   const yesterdayValue = dataArray[dataArray.length - 2];

  //   // Handle cases where yesterday's value was zero
  //   if (yesterdayValue === 0) {
  //     return {
  //       change: todayValue === 0 ? 0 : 100, // 100% if today has value but yesterday was 0
  //       isPositive: todayValue >= yesterdayValue,
  //       tooltip:
  //         todayValue === 0
  //           ? "No change from zero"
  //           : "Previous day had zero value",
  //     };
  //   }

  //   const change = ((todayValue - yesterdayValue) / yesterdayValue) * 100;
  //   const roundedChange = Math.round(change * 10) / 10; // Round to 1 decimal place

  //   return {
  //     change: roundedChange - 100,
  //     isPositive: change >= 0,
  //     tooltip: `Today vs Yesterday: ${todayValue} vs ${yesterdayValue}`,
  //   };
  // };

  // Updated calculateDailyChange function
  const calculateDailyChange = (dataArray) => {
    if (!dataArray || dataArray.length < 2) {
      return {
        change: 0,
        isPositive: true,
        tooltip: "Insufficient data to calculate trend",
      };
    }

    // Get today's and yesterday's values
    const todayValue = dataArray[dataArray.length - 1];
    const yesterdayValue = dataArray[dataArray.length - 2];

    // Handle cases where yesterday's value was zero
    if (yesterdayValue === 0) {
      return {
        change: todayValue === 0 ? 0 : 100, // 100% if today has value but yesterday was 0
        isPositive: todayValue >= yesterdayValue,
        tooltip:
          todayValue === 0
            ? "No change from zero"
            : "Previous day had zero value",
      };
    }

    const change = ((todayValue - yesterdayValue) / yesterdayValue) * 100;
    const roundedChange = Math.round(change * 10) / 10; // Round to 1 decimal place

    return {
      change: Math.abs(roundedChange), // Return absolute value of change
      isPositive: change >= 0,
      tooltip: `Today vs Yesterday: ${todayValue} vs ${yesterdayValue}`,
    };
  };

  // const totalUsersChange = calculateDailyChange(formattedData.lastSevenDayDayWiseUsers);
  const adminConsumptionChange = calculateDailyChange(
    formattedData.lastSevenDayDayWiseAdminConsumption
  );
  const dueBalanceChange = calculateDailyChange(
    formattedData.lastSevenDayDayWiseDueBalance
  );
  const faultyMetersChange = calculateDailyChange(
    formattedData.lastSevenDayDayWiseFaultyMeters
  );
  const totalUsersChange = calculateDailyChange(
    formattedData.lastSevenDayDayWiseUsers
  );
  const totalRevenueChange = calculateDailyChange(
    formattedData.lastSevenDayDayWiseTotalRevenue
  );
    const offlineMetersChange = calculateDailyChange(
    formattedData.lastSevenDayDayWiseOfflineMeters
  );
  console.log("===offlineMetersChange===",offlineMetersChange)
  // console.log("kjlnknknkn kn kn",adminConsumptionChange.isPositive,dueBalanceChange.isPositive,faultyMetersChange.isPositive,totalUsersChange.isPositive,totalRevenueChange.isPositive)
  console.log("==alert=====", alerts);
  const getColorByAlertType = (type) => {
    if (type.includes("Polarity")) return "bg-red-500";
    if (type.includes("Magnetic")) return "bg-orange-500";
    if (type.includes("Load")) return "bg-yellow-500";
    return "bg-blue-500";
  };
  const AlertPanel = () => (
    <div className="bg-white  p-6  w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-100 rounded-sm">
            <AlertTriangle className="text-orange-600" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Smart Alerts
            </h3>
            <p className="text-xs text-gray-500">
              {alerts.length} active alerts
            </p>
          </div>
        </div>
        <button
          onClick={() => setAlerts([])}
          className="text-xs text-blue-600 hover:text-blue-800"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {alerts.map((alert) => (
          <div
            key={alert._id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-sm"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-2 h-2 rounded-full ${getColorByAlertType(
                  alert.alertType
                )}`}
              />
              <div>
                <div className="text-xs font-medium text-gray-900">
                  {alert.message}
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(alert.time).toLocaleString()}
                </div>
              </div>
            </div>
            <button
              onClick={() => dismissAlert(alert._id)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XCircle size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  console.log(data.data.totalRevenue);
  return (
    <div className="bg-blue-200/10 min-h-screen">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-md sm:text-lg md:text-xl font-semibold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-xs text-gray-500">
              <span className="font-bold">Hello {"user"}</span> Welcome to
              Real-time energy management system
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-2 text-xs text-gray-600">
            <Clock size={16} />
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`}
              />
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>
      </div>

      {/* Revenue Summary */}
      <div className="mx-4 sm:mx-6 mt-6 mb-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 gap-6">
          <div className="flex items-center space-x-6">
            <div className="p-4 bg-emerald-100 rounded-2xl">
              <DollarSign className="text-emerald-600" size={32} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-emerald-800 mb-1">
                Total Revenue
              </h2>
              <div className="flex items-baseline space-x-2">
                {/* <span className="text-3xl font-bold text-emerald-900">$95,000</span> */}
                <span className="text-3xl font-bold text-emerald-900">
                  {data.data.totalRevenue}
                </span>
                {/* <span className="text-xs text-emerald-600 flex items-center group relative">
                  <TrendingUp size={14} className="mr-1" />{" "}
                  {totalRevenueChange.change}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max px-2 py-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    Vs Previous Day
                  </div>
                </span> */}
                <span
                  className={`text-xs flex items-center group relative ${
                    totalRevenueChange.isPositive
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {totalRevenueChange.isPositive ? (
                    <TrendingUp size={14} className="mr-1" />
                  ) : (
                    <TrendingDown size={14} className="mr-1" />
                  )}
                  {totalRevenueChange.change}%
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max px-2 py-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 shadow-md">
                    Vs Previous Day
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-between">
            <div className="text-center">
              {/* <div className="text-2xl font-bold text-emerald-900">1,247</div> */}
              <div className="text-2xl font-bold text-emerald-900">
                {data.data.totalAssignedUsers}
              </div>
              <div className="text-xs text-emerald-600">Active Users</div>
            </div>
            <div className="text-center">
              {/* <div className="text-2xl font-bold text-emerald-900">25/30</div> */}
              <div className="text-2xl font-bold text-emerald-900">
                {data.data.totalActiveMeters}
              </div>
              <div className="text-xs text-emerald-600">Active Meters</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="px-4 sm:px-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <MetricsCard
            title="Total Users"
            value={data.data.totalUsers}
            subLabel="Total Meters"
            subValue={data.data.totalMeters}
            change={`${totalUsersChange.change}%`}
            isPositive={totalUsersChange.isPositive}
            tooltip={totalUsersChange.tooltip}
            icon={Users}
            trend={formattedData.lastSevenDayDayWiseUsers}
            valueRoute="/admin/user-list"
            subValueRoute="/admin/meters-list"
          />

          <MetricsCard
            title="Faulty Meters"
            value={data.data.totalFaultyMeters}
            subLabel="Offline Meters"
            subValue={data.data.totalOfflineMeters}
            change={`${offlineMetersChange.change}%`}
            isPositive={offlineMetersChange.isPositive}
            tooltip={offlineMetersChange.tooltip}
            icon={AlertTriangle}
            trend={formattedData.lastSevenDayDayWiseFaultyMeters}
            valueRoute="/admin/faulty-meters"
            subValueRoute="/admin/offline-meters"
          />

          <MetricsCard
            title="Due Balance"
            value={data.data.negativeRevenue}
            subLabel="Due Users"
            // subValue={data.data.totalDueUsers}
            subValue={data.data.totalDueUser}
            change={`${dueBalanceChange.change}%`}
            isPositive={dueBalanceChange.isPositive}
            tooltip={dueBalanceChange.tooltip}
            icon={DollarSign}
            trend={formattedData.lastSevenDayDayWiseDueBalance}
            valueRoute="/admin/due-balance"
            subValueRoute="/admin/due-users"
          />

          <MetricsCard
            title="Total Energy Consumption"
            value={data.data.totalConsumption}
            change={`${adminConsumptionChange.change}%`}
            isPositive={adminConsumptionChange.isPositive}
            tooltip={adminConsumptionChange.tooltip}
            icon={Zap}
            trend={formattedData.lastSevenDayDayWiseAdminConsumption}
          />
        </div>

        <div className="mt-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-sm">
                  <BarChart3 className="text-blue-600" size={24} />
                </div>

                <div>
                  <h2 className="text-md font-bold text-gray-800">
                    Smart Usage Analytics
                  </h2>
                  <p className="text-xs text-gray-500">
                    AI-powered consumption insights
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      From Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      max={endDate || today} // Ensure from date can't be after to date
                      onChange={(e) => setStartDate(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Last Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      min={startDate} // Ensure to date can't be before from date
                      max={today}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    setStartDate(today);
                    setEndDate(today);
                  }}
                  className="px-3 py-2 text-xs bg-gray-100 font-medium text-gray-700 rounded-sm"
                >
                  Reset
                </button>
              </div>
            </div>
            {/* <EnhancedChart data={filteredCharts[0] || { dataPoints: [] }} /> */}

            {/* Chart Section */}

            <div className="mt-6">
              {chartData.map((chart, ind) => {
                // const filteredChart = filterChart(chart);
                return <CurrentPowerChart key={ind} {...chart} />;
              })}
            </div>
          </div>
        </div>

        {/* <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AlertPanel />
          <div className="space-y-6">
            <MeterList meters={meters} />
          </div>
        </div> */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
          <div className="flex flex-col bg-white  p-6 h-full">
            <AlertPanel />
          </div>
          <div className="flex flex-col bg-white  p-6 h-full">
            <MeterList meters={meters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
