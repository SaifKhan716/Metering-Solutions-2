
import React, { useState } from "react";
import MeterProfileModal from "../components/MeterProfileModal";
import MeterCard from "../components/MeterCard";
import { Zap, Search } from "lucide-react";

const MeterList = ({ meters }) => {
  const [selectedMeter, setSelectedMeter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  console.log("=====meters----=====", meters);

  const openModal = (meter) => {
    setSelectedMeter(meter);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMeter(null);
    setIsModalOpen(false);
  };

  const filteredMeters = meters.filter((meter) => {
    const query = searchQuery.toLowerCase();
    return (
      meter?.name?.toLowerCase().includes(query) ||
      meter?.meterId?.toLowerCase().includes(query) ||
      meter?.userAssigned?.toLowerCase().includes(query) ||
      meter?.type?.toLowerCase().includes(query) ||
      meter?.status?.toLowerCase().includes(query) ||
      meter?.location?.toLowerCase().includes(query)
    );
  });
  meters = filteredMeters;

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-0 gap-2 bg-white px-4 py-4 rounded-t-md">
        {/* Left: Heading */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-100 rounded-sm">
            <Zap className="text-orange-600" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Meters Overview
            </h3>
            <p className="text-sm text-gray-500">{meters.length} meters</p>
          </div>
        </div>

        {/* Right: Search */}
        {/* Search Input */}
        <div className="w-full sm:w-64 mt-2 sm:mt-0">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search meters..."
              className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="h-[400px] overflow-y-auto">
        <div className="p-4 sm:p-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}

            {/* Scrollable Meter List Section */}
            {/* <div className="max-h-[400px] overflow-y-auto space-y-3 pr-2"> */}
            <div className="  space-y-3 pr-2">
              {meters.map((meter, ind) => (
                <div key={meter._id + ind} className="w-full">
                  <MeterCard meter={meter} onClick={openModal} />
                </div>
              ))}
            </div>

            {/* Meter Modal */}
            <MeterProfileModal
              meter={selectedMeter}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default MeterList;
