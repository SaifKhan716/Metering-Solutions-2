

import React from "react";
import {
  User,
  X,
  Zap,
  Wifi,
  WifiOff,
  AlertCircle,
  Link,
  Unlink,
} from "lucide-react";

const MeterProfileModal = ({ meter, isOpen, onClose }) => {
  if (!isOpen || !meter) return null;

  const getStatusIcon = () => {
    switch (meter.status) {
      case "online":
        return <Wifi className="text-green-500" size={20} />;
      case "offline":
        return <WifiOff className="text-yellow-500" size={20} />;
      case "faulty":
        return <AlertCircle className="text-red-500" size={20} />;
      default:
        return <WifiOff className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div
        className="relative z-50 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all scale-100 opacity-100"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">Meter Details</h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="mt-4 space-y-4">
          {/* Meter Basic Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-1.5 bg-blue-100 rounded-md">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-gray-800">
                    {meter.name}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    ID: {meter.meterId}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon()}
                <span className="capitalize text-sm font-medium text-gray-700">
                  {meter.status}
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600 font-medium">Type</p>
                <p className="text-gray-800">{meter.type}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Serial No</p>
                <p className="text-gray-800">{meter.meterSerialNumber}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Slave ID</p>
                <p className="text-gray-800">{meter.slaveId}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Last Seen</p>
                <p className="text-gray-800">
                  {meter.lastSeen
                    ? new Date(meter.lastSeen).toLocaleString()
                    : "Never"}
                </p>
              </div>
            </div>
          </div>

          {/* Assignment Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              {meter.isAssigned ? (
                <Link className="text-green-600" size={20} />
              ) : (
                <Unlink className="text-gray-400" size={20} />
              )}
              <h4 className="font-semibold text-gray-800 text-sm">
                {meter.isAssigned ? "Assigned to User" : "Unassigned Meter"}
              </h4>
            </div>

            {meter.isAssigned && meter.assingnedUserId ? (
              <div className="flex items-center space-x-3">
                <div className="p-1.5 bg-blue-100 rounded-md">
                  <User className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    {meter.assignedUser?.name || "Loading user..."}
                  </p>
                  <p className="text-sm text-gray-600">
                    User ID: {meter.assingnedUserId}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                This meter is not currently assigned to any user.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MeterProfileModal;
