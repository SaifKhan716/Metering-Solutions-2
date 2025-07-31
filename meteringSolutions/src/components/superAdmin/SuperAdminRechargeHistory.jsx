
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { ArrowDownCircle } from "lucide-react";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setBreadcrumbs, setHeaderTitle } from "../../redux/slice/headerSlice";
import { paymentApi } from "../../api/apiService";

const SuperAdminRechargeHistory = () => {
  const dispatch = useDispatch();
  const { meterId } = useParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [rechargeData, setRechargeData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Set header and breadcrumbs
  useEffect(() => {
    dispatch(setHeaderTitle("Top Up History"));
    dispatch(setBreadcrumbs([{ label: "Top Up History" }]));
  }, [dispatch]);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Fetch data when meterId or date filters change
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const params = {};
        if (startDate) params.startTime = startDate;
        if (endDate) params.endTime = endDate;

        // const res = await axios.get(
        //   `http://localhost:3000/api/v1/payment/get-payment-history-by/${meterId}`,
        //   { params }
        // );

        const res = await paymentApi.getPaymentHistoryById(meterId, params)

        setRechargeData(res.data || []);
      } catch (err) {
        console.error("Error fetching payment history", err);
        setRechargeData([]);
      } finally {
        setLoading(false);
      }
    };

    if (meterId) {
      fetchData();
    }
  }, [meterId, startDate, endDate]);

  // Filter by search term only (date filtering is handled in backend)
  const filteredData = useMemo(() => {
    const term = debouncedSearchTerm.toLowerCase();
    return rechargeData
      .filter((item) => {
        return (
          item.status?.toLowerCase().includes(term) ||
          item.amount?.toString().includes(term)
        );
      })
      .sort(
        (a, b) =>
          new Date(b.updatedAt || b.timestamp || b.createdAt) -
          new Date(a.updatedAt || a.timestamp || a.createdAt)
      );
  }, [debouncedSearchTerm, rechargeData]);

  // Pagination
  const paginatedData = useMemo(() => {
    const start = (page - 1) * limit;
    return filteredData.slice(start, start + limit);
  }, [filteredData, page, limit]);

  const totalPages = Math.ceil(filteredData.length / limit);

  return (
    <div className="p-bg-blue-200/10 min-h-screen">
      <Header />
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Recharge History
        </h2>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <div className="flex flex-col justify-between sm:flex-row sm:items-end gap-4 flex-wrap">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Search
              </label>
              <input
                type="text"
                placeholder="Search by status, amount..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Data List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-md font-semibold text-blue-600 mb-2">
            Meter ID: {meterId}
          </p>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : paginatedData.length === 0 ? (
            <p className="text-center text-gray-500">No recharge history found.</p>
          ) : (
            <>
              {paginatedData.map((item, index) => {
                const isSuccess = item.status === "success";
                const rechargeDate = new Date(
                  item.updatedAt || item.timestamp || item.createdAt
                ).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "2-digit",
                });

                return (
                  <div
                    key={item._id || index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-4 mb-3 bg-gray-100 rounded-lg gap-2"
                  >
                    <div className="text-sm text-gray-600 font-medium sm:w-1/4 w-full">
                      {rechargeDate}
                    </div>

                    <div className="text-center sm:w-1/4 w-full">
                      <p className="text-gray-600 font-semibold text-base">
                        ₹ {item.amount}
                      </p>
                    </div>

                    <div className="text-center sm:w-1/4 w-full">
                      <p className="text-gray-600 font-semibold text-base">
                        {item.source || "N/A"}
                      </p>
                    </div>

                    <div className="text-center sm:w-1/4 w-full">
                      <p
                        className={`text-base font-semibold ${
                          isSuccess ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {item.status?.charAt(0).toUpperCase() +
                          item.status?.slice(1)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end sm:w-1/4 w-full gap-2">
                      <p
                        className={`text-base font-semibold ${
                          isSuccess ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        ₹{item.amount}
                      </p>
                      {isSuccess && (
                        <ArrowDownCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Pagination */}
              <div className="flex justify-center mt-6 gap-4 items-center">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page <= 1}
                  className="px-4 py-2 bg-gray-200 cursor-pointer text-sm rounded-md disabled:opacity-50"
                >
                  Prev
                </button>
                <span className="text-sm">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={page >= totalPages}
                  className="px-4 py-2 bg-gray-200 text-sm cursor-pointer rounded-md disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminRechargeHistory;