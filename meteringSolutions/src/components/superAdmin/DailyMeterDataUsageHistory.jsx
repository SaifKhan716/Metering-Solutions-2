import React, { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setHeaderTitle, setBreadcrumbs } from "../../redux/slice/headerSlice";
import Header from "../../components/header/Header";
import axios from "axios";
import { meterManagement } from "../../api/apiService";

const DailyMeterDataUsageHistory = () => {
  const dispatch = useDispatch();
  const { meterId } = useParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(setHeaderTitle("Meter Data Usage History"));
    dispatch(
      setBreadcrumbs([
        { label: "Super Admin" },
        { label: "Meter Usage History" },
      ])
    );
  }, []);

  // Fetch data from backend with query params for date filtering
  useEffect(() => {
    const fetchMeterData = async () => {
      try {
        setLoading(true);
        const params = {};
        if (startDate) params.startTime = startDate;
        if (endDate) params.endTime = endDate;

        // const res = await axios.get(
        //   `http://localhost:3000/api/v1/meter/by-meterId/${meterId}`,
        //   { params }
        // );

        const res = await meterManagement.getMeterById(meterId, params);
         
        console.log("response data is : ", res)
        setData(res.data || []);
      } catch (err) {
        setError("Failed to fetch meter data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (meterId) {
      fetchMeterData();
    }
  }, [meterId, startDate, endDate]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const filteredData = useMemo(() => {
    return data
      .filter((item) => {
        const term = debouncedSearchTerm.toLowerCase();
        return item.totalKWh?.toString().toLowerCase().includes(term);
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [data, debouncedSearchTerm]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * limit;
    return filteredData.slice(start, start + limit);
  }, [filteredData, page, limit]);

  const totalPages = Math.ceil(filteredData.length / limit);

  return (
    <div className="bg-blue-200/10 min-h-screen">
      <Header />
      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Meter Data
        </h2>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4">
          <div className="flex flex-col justify-between sm:flex-row sm:items-end gap-4 flex-wrap">
            {/* Search Input */}
            <div>
              <div className="w-full">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Search by kWh
                </label>
                <input
                  type="text"
                  placeholder="Search by total kWh..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Date Filters */}
            <div className="flex gap-6 w-full sm:w-auto">
              <div className="w-full sm:w-1/2">
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
              <div className="w-full sm:w-1/2">
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

        {/* Data Display */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 min-h-[400px]">
          <div className="sm:w-1/4 mb-3">
            <p className="text-md font-semibold text-blue-600">
              Meter ID: {meterId}
            </p>
          </div>

          {loading ? (
            <p className="text-gray-600 text-center">Loading...</p>
          ) : error ? (
            <p className="text-red-600 text-center">{error}</p>
          ) : paginatedData.length === 0 ? (
            <p className="text-gray-600 text-center">
              No meter usage history found.
            </p>
          ) : (
            <>
              {paginatedData.map((item, index) => {
                const usageDate = new Date(item.date).toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  }
                );

                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-4 mb-3 bg-gray-100 rounded-lg"
                  >
                    <div className="text-sm text-gray-700 font-medium sm:w-1/4 w-full mb-2 sm:mb-0">
                      {usageDate}
                    </div>

                    <div className="text-sm w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div className="min-w-0">
                        <p className="text-md font-semibold text-gray-500">
                          Total kWh
                        </p>
                        <p className="font-semibold text-gray-800">
                          {item.totalKWh} KWh
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-md font-semibold text-gray-500">
                          Total EG
                        </p>
                        <p className="font-semibold text-green-600">
                          {item.totalEG}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-md font-semibold text-gray-500">
                          Total DG
                        </p>
                        <p className="font-semibold text-yellow-600">
                          {item.totalDG}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-md font-semibold text-gray-500">
                          Deduction
                        </p>
                        <p className="font-semibold text-red-600">
                          {item.totalDeduction}
                        </p>
                      </div>
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
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
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

export default DailyMeterDataUsageHistory;