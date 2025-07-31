// src/components/user-management/StatusBadge.jsx
import React from 'react';
import { getStatusBg } from '../../utils/userUtils';

const StatusBadge = ({ status }) => {
  return (
    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBg(status)}`}>
      {status}
    </div>
  );
};

export default StatusBadge;