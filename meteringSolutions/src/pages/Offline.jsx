import React, { useState, useEffect } from "react";
import {
  Eye,
  ArrowLeft,
  Filter,
  Zap,
  Clock,
  Wifi,
  WifiOff,
  Link,
  Link2Off,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { fetchMeterListByAdmin } from "../redux/thunks/adminDashboardThunks";
import { selectUserId } from "../redux/slice/authSlice";
import {
  selectMeterList,
  selectLoading,
  selectError,
} from "../redux/slice/adminDashboardSlice";

const Offline = () => {
  const [currentView, setCurrentView] = useState("main");
  const [selectedMeter, setSelectedMeter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const dispatch = useDispatch();
  const adminId = useSelector(selectUserId);
  const adminMeterList = useSelector(selectMeterList);

  useEffect(() => {
    dispatch(fetchMeterListByAdmin(adminId));
  }, [dispatch]);

  const filteredMeters = adminMeterList.filter((meter) => {
    const status = meter.status?.toLowerCase();
    const isOfflineOrFaulty = status === "offline";

    const matchesSearch =
      meter.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meter.meterId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meter.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meter.meterSerialNumber?.toString().includes(searchTerm);

    return isOfflineOrFaulty && matchesSearch;
  });

  console.log("====filteredMeters=====", filteredMeters);
  const handleViewMeter = (meter) => {
    setSelectedMeter(meter);
    setCurrentView("meterDetails");
  };

  const handleBackToMeterList = () => {
    setSelectedMeter(null);
    setCurrentView("main");
    setSearchTerm("");
    setStatusFilter("all");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status) => {
    const baseClasses =
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    if (status === "online") {
      return `${baseClasses} bg-green-100 text-green-800`;
    } else {
      return `${baseClasses} bg-red-100 text-red-800`;
    }
  };

  const getAssignmentBadge = (isAssigned) => {
    const baseClasses =
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    if (isAssigned) {
      return `${baseClasses} bg-blue-100 text-blue-800`;
    } else {
      return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="min-h-screen bg-blue-200/10 p-4 sm:p-6 md:p-8">
      {currentView === "main" && (
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-500">Manage meters and their assignments</p>
          </div>

          <div className=" min-h-screen bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Meters List
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {/* <div className="flex items-center">
                                    <Filter className="w-4 h-4 text-gray-500 mr-2" />
                                    <select
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                        className="text-sm border border-gray-300 rounded-md px-2 py-1"
                                    >
                                        <option value="all">All Status</option>
                                        <option value="online">Faulty</option>
                                        <option value="offline">Offline</option>

                                    </select>
                                </div> */}
                <input
                  type="text"
                  placeholder="Search by Name, Meter ID or Serial"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-72 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Meter Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Meter ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assignment
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assign Date
                    </th>
                  </tr>
                </thead>
                {/* <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMeters.map((meter) => (
                    <tr key={meter._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-750">
                        {meter.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {meter.meterId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {meter.type}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={getStatusBadge(meter.status)}>
                          {meter.status === "online" ? (
                            <Wifi className="w-3 h-3 mr-1" />
                          ) : (
                            <WifiOff className="w-3 h-3 mr-1" />
                          )}
                          {meter.status.charAt(0).toUpperCase() +
                            meter.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={getAssignmentBadge(meter.isAssigned)}>
                          {meter.isAssigned ? (
                            <Link className="w-3 h-3 mr-1" />
                          ) : (
                            <Link2Off className="w-3 h-3 mr-1" />
                          )}
                          {meter.isAssigned ? "Assigned" : "Unassigned"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-700 text-right">
                        {meter.userAssignedTimestamp
                          ? formatDate(meter.userAssignedTimestamp)
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody> */}

                <tbody className="bg-white divide-y divide-gray-200">
  {filteredMeters.length > 0 ? (
    filteredMeters.map((meter) => (
      <tr key={meter._id} className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm font-medium text-gray-750">{meter.name}</td>
        <td className="px-6 py-4 text-sm text-gray-500">{meter.meterId}</td>
        <td className="px-6 py-4 text-sm text-gray-500">{meter.type}</td>
        <td className="px-6 py-4 text-sm">
          <span className={getStatusBadge(meter.status)}>
            {meter.status === 'online' ? (
              <Wifi className="w-3 h-3 mr-1" />
            ) : (
              <WifiOff className="w-3 h-3 mr-1" />
            )}
            {meter.status.charAt(0).toUpperCase() + meter.status.slice(1)}
          </span>
        </td>
        <td className="px-6 py-4 text-sm">
          <span className={getAssignmentBadge(meter.isAssigned)}>
            {meter.isAssigned ? (
              <Link className="w-3 h-3 mr-1" />
            ) : (
              <Link2Off className="w-3 h-3 mr-1" />
            )}
            {meter.isAssigned ? 'Assigned' : 'Unassigned'}
          </span>
        </td>
        <td className="px-6 py-4 text-sm text-gray-700 text-right">
          {meter.userAssignedTimestamp ? formatDate(meter.userAssignedTimestamp) : '—'}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6" className="px-6 py-10 text-center text-gray-500 text-sm font-medium">
        No Offline Meters Found
      </td>
    </tr>
  )}
</tbody>

              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offline;
