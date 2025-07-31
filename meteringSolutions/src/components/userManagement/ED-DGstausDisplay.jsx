import React from "react";
import { Circle } from "lucide-react";

export const EGStatusDisplay = ({ status }) => {
  const getStatusText = () => {
    if (status === 0) return "EG Supply";
    if (status === 1) return "DG Supply";
    return "UNKNOWN";
  };

  const getStatusColor = () => {
    if (status === 0) return "text-green-600";
    if (status === 1) return "text-red-600";
    return "text-gray-600";
  };

  return (
<div className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-200">
      <div className="text-sm text-gray-600 mb-2">EG/DG Status</div>
      <div className={`text-xl font-bold flex items-center gap-2 ${getStatusColor()}`}>
        {status === 0 && (
          <Circle className="h-3 w-3 fill-green-600 animate-pulse" />
        )}
        {status === 1 && (
          <Circle className="h-3 w-3 fill-yellow-600 animate-pulse" />
        )}
        {status !== 0 && status !== 1 && (
          <Circle className="h-3 w-3 fill-red-400" />
        )}
        {getStatusText()}
      </div>
    </div>
  );
};
