import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
import { fetchMeters } from "../redux/slice/superAdminMeterSlice"; // <-- import redux action
import Header from "../components/header/Header";

const SuperAdminPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const [filters, setFilters] = useState({ search: "" });
  const [debouncedSearch, setDebouncedSearch] = useState(filters.search);
  const [selectedMeter, setSelectedMeter] = useState(null);
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const metersPerPage = 10;

  // Redux meter data
  const { allMeters, loading } = useSelector((state) => state.meter);

  console.log("=================", allMeters);

  useEffect(() => {
    dispatch(setHeaderTitle("Super Admin"));
    dispatch(setBreadcrumbs([{ label: "Super Admin" }]));
    dispatch(fetchMeters());
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(filters.search);
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(handler);
  }, [filters.search]);

  const formattedMeters = useMemo(() => {
    return allMeters.map((item) => ({
      id: item._id,
      Admin: "Admin",
      User: item.isAssigned ? item.assingnedUserId?.name : "Unassigned",
      meterId: item.meterId,
      meterName: item.name,
      currentBalance: item.balanceAmount || "0.00",
      lastRecharge: item?.latestPayment?.createdAt || "-",
      status: item.status === "online" ? "Online" : "Offline",
      connectionType: item.type,
      originalData: item,
    }));
  }, [allMeters]);

  // item.updatedAt?.split("T")[0]

  const uniqueMetersData = useMemo(() => {
    const seen = new Set();
    return formattedMeters.filter((meter) => {
      if (seen.has(meter.meterId)) return false;
      seen.add(meter.meterId);
      return true;
    });
  }, [formattedMeters]);

  const filteredMeters = useMemo(() => {
    if (!debouncedSearch.trim()) return uniqueMetersData;
    return uniqueMetersData.filter(
      (meter) =>
        meter.meterId.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        meter.User.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, uniqueMetersData]);

  const indexOfLastMeter = currentPage * metersPerPage;
  const indexOfFirstMeter = indexOfLastMeter - metersPerPage;
  const paginatedMeters = filteredMeters.slice(
    indexOfFirstMeter,
    indexOfLastMeter
  );
  const totalPages = Math.ceil(filteredMeters.length / metersPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case "Online":
        return "text-green-700 bg-green-100";
      case "Offline":
        return "text-red-700 bg-red-100";
      case "Faulty":
        return "text-orange-700 bg-orange-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  const handleRecharge = () => {
    if (selectedMeter) {
      setShowRechargeModal(true);
    }
  };

  const processRecharge = () => {
    if (rechargeAmount && selectedMeter) {
      alert(
        `Recharge of ₹${rechargeAmount} initiated for meter ${selectedMeter.meterId}`
      );
      setRechargeAmount("");
      setShowRechargeModal(false);
    }
  };
  return (
    <div className="bg-blue-200/10 min-h-screen">
      <Header />
      <div className="p-4 max-w-7xl mx-auto">
        <div className="mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            Admin Panel
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Manage all meters, recharge balances, and monitor statuses
          </p>
        </div>

        {/* Search and Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:w-2/3" ref={dropdownRef}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search Meter
              </label>
              <input
                type="text"
                placeholder="Search MeterId, Name..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className=" px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full md:w-1/3 gap-2">
              <button
                disabled={!selectedMeter}
                onClick={() =>
                  navigate(`/super-admin/recharge-history/${selectedMeter?.meterId}`)
                }
                className="cursor-pointer disabled:cursor-not-allowed px-3 py-2 w-full sm:w-auto text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                Recharge History
              </button>

              <button
                disabled={!selectedMeter}
                onClick={() =>
                  navigate(`/super-admin/meter-usage/${selectedMeter?.meterId}`)
                }
                className="cursor-pointer disabled:cursor-not-allowed px-3 py-2 w-full sm:w-auto text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                Usage History
              </button>

              <button
                disabled={!selectedMeter}
                onClick={handleRecharge}
                className="cursor-pointer disabled:cursor-not-allowed px-3 py-2 w-full sm:w-auto text-sm rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
              >
                Recharge Now
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-gray-500 py-10">
            Loading meters...
          </div>
        ) : (
          <>
            {/* Meter Cards */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
              {paginatedMeters.length === 0 ? (
                <div className="text-center text-gray-500 py-8 text-sm">
                  No meters found for your search.
                </div>
              ) : (
                paginatedMeters.map((meter) => (
                  <div
                    key={meter.id}
                    className={`cursor-pointer p-4 border rounded-lg transition-all ${
                      selectedMeter?.meterId === meter.meterId
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedMeter(meter)}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">
                          Meter ID
                        </p>
                        <p className="text-sm font-semibold text-blue-700">
                          {meter.meterId}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">
                          User
                        </p>
                        <p className="text-sm font-medium">{meter.User}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">
                          Meter Name
                        </p>
                        <p className="text-sm font-medium">{meter.meterName}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">
                          Balance
                        </p>
                        <p className="text-sm font-bold text-green-600">
                          ₹{meter.currentBalance}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">
                          Last Recharge
                        </p>
                        <p className="text-sm font-medium text-blue-600">
                          {new Date(meter.lastRecharge)
                            .toLocaleString("en-GB", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            })
                            .replace(",", "")}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wid">
                          Status
                        </p>
                        <span
                          className={`text-xs px-2 py-1 font-medium rounded-full ${getStatusColor(
                            meter.status
                          )}`}
                        >
                          {meter.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm font-medium text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < totalPages ? prev + 1 : prev
                  )
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Recharge Modal */}
        {showRechargeModal && selectedMeter && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
              <button
                onClick={() => setShowRechargeModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
              <h2 className="text-lg font-semibold mb-4">Recharge Meter</h2>
              <div className="space-y-1 mb-4 text-sm text-gray-700">
                <div>
                  <strong>Meter:</strong> {selectedMeter.meterId}
                </div>
                <div>
                  <strong>Admin:</strong> {selectedMeter.Admin}
                </div>
                <div>
                  <strong>User:</strong> {selectedMeter.User}
                </div>
                <div>
                  <strong>Current Balance:</strong> ₹
                  {selectedMeter.currentBalance}
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter recharge amount"
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowRechargeModal(false)}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={processRecharge}
                  disabled={!rechargeAmount}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  Recharge
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminPanel;