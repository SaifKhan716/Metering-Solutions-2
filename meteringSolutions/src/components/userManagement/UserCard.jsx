// // src/components/user-management/UserCard.jsx
// import React from 'react';
// import Icons from '../icons/LucideIcons';
// import StatusBadge from './StatusBadge';
// import RoleBadge from './RoleBadge';
// import { getInitials, formatDate } from '../../utils/userUtils';

// const UserCard = ({ 
//   user, 
//   isSelected, 
//   onSelect, 
//   onEdit, 
//   onDelete,
//   roleTemplates
// }) => {
//   return (
//     <div
//       className={`p-4 border-b border-gray-100 transition-colors ${
//         isSelected ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex justify-between items-start mb-3">
//         <div 
//           className="flex-1 flex items-center cursor-pointer"
//           onClick={onSelect}
//         >
//           <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
//             {getInitials(user.firstName, user.lastName)}
//           </div>
//           <div className="flex-1">
//             <div className="font-medium text-gray-900">{user.firstName} {user.lastName}</div>
//             <div className="text-sm text-gray-600">@{user.username}</div>
//           </div>
//         </div>
        
//         <div className="flex space-x-2">
//           <button 
//             onClick={(e) => {
//               e.stopPropagation();
//               onEdit();
//             }}
//             className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full"
//           >
//             <Icons.Edit3 className="h-4 w-4" />
//           </button>
//           <button 
//             onClick={(e) => {
//               e.stopPropagation();
//               onDelete();
//             }}
//             className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full"
//           >
//             <Icons.Trash2 className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
      
//       <div className="space-y-1 text-sm text-gray-600">
//         <div className="flex items-center">
//           <Icons.Mail className="h-3 w-3 mr-2" />
//           {user.email}
//         </div>
//         <div className="flex items-center">
//           <Icons.Shield className="h-3 w-3 mr-2" />
//           <RoleBadge role={user.role} roleTemplates={roleTemplates} />
//         </div>
//       </div>
      
//       <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
//         <div className="flex items-center">
//           <Icons.Activity className="h-3 w-3 mr-1" />
//           {user.loginCount} logins
//         </div>
//         <div className="flex items-center">
//           <Icons.Clock className="h-3 w-3 mr-1" />
//           {user.lastLogin ? formatDate(user.lastLogin) : 'Never'}
//         </div>
//       </div>
      
//       <div className="mt-2">
//         <StatusBadge status={user.status} />
//       </div>
//     </div>
//   );
// };

// export default UserCard;


import React from 'react';
import Icons from '../icons/LucideIcons';
import StatusBadge from './StatusBadge';
import RoleBadge from './RoleBadge';
import { getInitials, formatDate } from '../../utils/userUtils';

const UserCard = ({ 
  user, 
  isSelected, 
  onSelect, 
  onEdit, 

  roleTemplates
}) => {

  console.log("======user====",user)
  return (
    <div
      className={`p-4 border-b border-gray-100 transition-colors ${
        isSelected ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div 
          className="flex-1 flex items-center cursor-pointer"
          onClick={onSelect}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
            {/* {getInitials(user.firstName, user.lastName)} */}
            {getInitials(user.firstName, user.lastName, user.name)} 
          </div>
          <div className="flex-1">
             <div className="font-medium text-gray-900">{user.name}</div>
            {/* <div className="font-medium text-gray-900">{user.firstName} {user.lastName}</div> */}
            <div className="text-sm text-gray-600">@{user.name.split().join("").toLowerCase()}</div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full"
          >
            <Icons.Edit3 className="h-4 w-4" />
          </button>
          {/* <button 
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full"
          >
            <Icons.Trash2 className="h-4 w-4" />
          </button> */}
        </div>
      </div>
      
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex items-center">
          <Icons.Mail className="h-3 w-3 mr-2" />
          {user.email}
        </div>
        <div className="flex items-center">
          <Icons.Shield className="h-3 w-3 mr-2" />
          <RoleBadge role={user.role} roleTemplates={roleTemplates} />
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
        <div className="flex items-center">
          <Icons.Activity className="h-3 w-3 mr-1" />
          {user.loginCount || 0} logins
        </div>
        <div className="flex items-center">
          <Icons.Clock className="h-3 w-3 mr-1" />
          {user.lastLogin ? formatDate(user.lastLogin ) : 'Never'}
        </div>
      </div>
      
      <div className="mt-2">
        <StatusBadge status={user.status || "Unactive"} />
      </div>
    </div>
  );
};

export default UserCard;