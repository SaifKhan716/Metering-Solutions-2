// // src/utils/userUtils.js
// export const formatTimestamp = (timestamp) => {
//   return new Date(timestamp).toLocaleString();
// };

// export const formatDate = (dateString) => {
//   return new Date(dateString).toLocaleDateString();
// };

// export const getInitials = (firstName, lastName) => {
//   return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
// };

// export const getStatusColor = (status) => {
//   switch (status) {
//     case 'active': return 'text-green-500';
//     case 'inactive': return 'text-gray-500';
//     case 'suspended': return 'text-red-500';
//     default: return 'text-yellow-500';
//   }
// };

// export const getStatusBg = (status) => {
//   switch (status) {
//     case 'active': return 'bg-green-100 text-green-800';
//     case 'inactive': return 'bg-gray-100 text-gray-800';
//     case 'suspended': return 'bg-red-100 text-red-800';
//     default: return 'bg-yellow-100 text-yellow-800';
//   }
// };

// export const getRoleColor = (role, roleTemplates) => {
//   return roleTemplates[role]?.color || 'gray';
// };

// export const getRoleBg = (role, roleTemplates) => {
//   const color = getRoleColor(role, roleTemplates);
//   const colorMap = {
//     'red': 'bg-red-100 text-red-800',
//     'purple': 'bg-purple-100 text-purple-800',
//     'blue': 'bg-blue-100 text-blue-800',
//     'green': 'bg-green-100 text-green-800',
//     'gray': 'bg-gray-100 text-gray-800'
//   };
//   return colorMap[color] || colorMap.gray;
// };


export const formatTimestamp = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

// export const getInitials = (firstName, lastName) => {
//   return ${firstName.charAt(0)}${lastName.charAt(0)}.toUpperCase();
// };


export const getInitials = (firstName, lastName, fullName = '') => {
  if (firstName || lastName) {
    const first = firstName?.charAt(0) || '';
    const last = lastName?.charAt(0) || '';
    return `${first}${last}`.toUpperCase();
  }

  // Fallback to full name split
  const nameParts = fullName.trim().split(' ');
  const first = nameParts[0]?.charAt(0) || '';
  const last = nameParts[1]?.charAt(0) || '';
  return `${first}${last}`.toUpperCase();
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'active': return 'text-green-500';
    case 'inactive': return 'text-gray-500';
    case 'suspended': return 'text-red-500';
    default: return 'text-yellow-500';
  }
};

export const getStatusBg = (status) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-800';
    case 'inactive': return 'bg-gray-100 text-gray-800';
    case 'suspended': return 'bg-red-100 text-red-800';
    default: return 'bg-yellow-100 text-yellow-800';
  }
};

export const getRoleColor = (role, roleTemplates) => {
  return roleTemplates[role]?.color || 'gray';
};

export const getRoleBg = (role, roleTemplates) => {
  const color = getRoleColor(role, roleTemplates);
  const colorMap = {
    'red': 'bg-red-100 text-red-800',
    'purple': 'bg-purple-100 text-purple-800',
    'blue': 'bg-blue-100 text-blue-800',
    'green': 'bg-green-100 text-green-800',
    'gray': 'bg-gray-100 text-gray-800'
  };
  return colorMap[color] || colorMap.gray;
};
