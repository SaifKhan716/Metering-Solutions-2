// src/components/user-management/RoleBadge.jsx
import React from 'react';
import { getRoleBg } from '../../utils/userUtils';

const RoleBadge = ({ role, roleTemplates }) => {
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getRoleBg(role, roleTemplates)}`}>
      {roleTemplates[role]?.name || role}
    </span>
  );
};

export default RoleBadge;