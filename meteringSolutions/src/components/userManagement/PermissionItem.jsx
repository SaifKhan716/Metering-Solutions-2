// src/components/user-management/PermissionItem.jsx
import React from 'react';
import Icons from '../icons/LucideIcons';

const PermissionItem = ({ permission, description, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center p-3 rounded-md cursor-pointer ${
        isSelected
          ? 'bg-blue-50 border border-blue-200'
          : 'bg-gray-50 hover:bg-gray-100'
      }`}
    >
      <div className={`mr-3 w-5 h-5 flex items-center justify-center rounded border ${
        isSelected
          ? 'bg-blue-500 border-blue-500 text-white'
          : 'bg-white border-gray-300'
      }`}>
        {isSelected && <Icons.CheckCircle className="h-4 w-4" />}
      </div>
      <div>
        <div className="text-sm font-medium text-gray-800">{permission.replace(/_/g, ' ')}</div>
        <div className="text-xs text-gray-600">{description}</div>
      </div>
    </div>
  );
};

export default PermissionItem;