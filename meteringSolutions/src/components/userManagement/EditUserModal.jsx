// // src/components/user-management/EditUserModal.jsx
// import React from 'react';
// import Icons from '../icons/LucideIcons';
// import PermissionItem from './PermissionItem';

// const EditUserModal = ({
//   user,
//   editUserData,
//   setEditUserData,
//   setEditingUserId,
//   saveEditedUser,
//   departments,
//   roleTemplates,
//   permissionsList,
//   togglePermission
// }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold text-gray-900">Edit User</h2>
//             <button 
//               onClick={() => setEditingUserId(null)}
//               className="text-gray-400 hover:text-gray-500"
//             >
//               <Icons.X className="h-6 w-6" />
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//               <input
//                 type="text"
//                 value={editUserData.firstName}
//                 onChange={(e) => setEditUserData(prev => ({...prev, firstName: e.target.value}))}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//               <input
//                 type="text"
//                 value={editUserData.lastName}
//                 onChange={(e) => setEditUserData(prev => ({...prev, lastName: e.target.value}))}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 value={editUserData.email}
//                 onChange={(e) => setEditUserData(prev => ({...prev, email: e.target.value}))}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//               <input
//                 type="tel"
//                 value={editUserData.phone}
//                 onChange={(e) => setEditUserData(prev => ({...prev, phone: e.target.value}))}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//               <select
//                 value={editUserData.department}
//                 onChange={(e) => setEditUserData(prev => ({...prev, department: e.target.value}))}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select department</option>
//                 {departments.map(dept => (
//                   <option key={dept} value={dept}>{dept}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//               <select
//                 value={editUserData.role}
//                 onChange={(e) => setEditUserData(prev => ({...prev, role: e.target.value}))}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 {Object.entries(roleTemplates).map(([key, role]) => (
//                   <option key={key} value={key}>{role.name}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//               <select
//                 value={editUserData.status}
//                 onChange={(e) => setEditUserData(prev => ({...prev, status: e.target.value}))}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//                 <option value="suspended">Suspended</option>
//               </select>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h3 className="font-medium text-gray-700 mb-3">Permissions</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//               {Object.entries(permissionsList).map(([key, description]) => (
//                 <PermissionItem
//                   key={key}
//                   permission={key}
//                   description={description}
//                   isSelected={editUserData.permissions.includes(key)}
//                   onClick={() => togglePermission(key)}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-end space-x-3">
//             <button
//               onClick={() => setEditingUserId(null)}
//               className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={saveEditedUser}
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditUserModal;

import React, { useState, useEffect } from 'react';
import Icons from '../icons/LucideIcons';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserById } from '../../redux/thunks/userManagementThunks';
import { toast } from 'react-toastify';
import {userManagementLoading} from "../../redux/slice/userMangementSlice"

const EditUserModal = ({
  user,
  setEditingUserId,
  // roleTemplates,
  currentAdmin // Should contain { _id, name, role, adminId?, superAdminId? }
}) => {
  const dispatch = useDispatch();
  const isUpdatingUser = useSelector(userManagementLoading);
  console.log("===user======setEditingUserId===", user, setEditingUserId)
  
  const [editUserData, setEditUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phonenumber || "",
    role: user?.role || "user",
    adminId: user?.adminId || currentAdmin?.adminId || currentAdmin?._id || "",
    superAdminId: user?.superAdminId || currentAdmin?.superAdminId || currentAdmin?._id || "",
    status: user?.status || "active"
  });

  const [editUserErrors, setEditUserErrors] = useState({});

  useEffect(() => {
    // Initialize form data when user changes
    if (user) {
      setEditUserData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phonenumber || "",
        role: user.role || "user",
        adminId: user.adminId || currentAdmin?.adminId || currentAdmin?._id || "",
        superAdminId: user.superAdminId || currentAdmin?.superAdminId || currentAdmin?._id || "",
        status: user.status || "active"
      });
    }
  }, [user, currentAdmin]);

  const handleEditUserChange = (field, value) => {
    setEditUserData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (editUserErrors[field]) {
      setEditUserErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateEditUserForm = () => {
    const errors = {};

    if (!editUserData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!editUserData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editUserData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Phone validation based on role
    if (editUserData.role === "user" || editUserData.role === "admin") {
      if (!editUserData.phone) {
        errors.phone = "Phone number is required";
      } else if (!/^\d+$/.test(editUserData.phone)) {
        errors.phone = "Phone number must contain only digits";
      } else if (editUserData.phone.length !== 10) {
        errors.phone = "Phone number must be 10 digits";
      }
    }

    // Admin ID validation based on role
    if (editUserData.role === "user" && !editUserData.adminId) {
      errors.adminId = "Admin ID is required for users";
    }

    // Super Admin ID validation based on role
    if ((editUserData.role === "user" || editUserData.role === "admin") && !editUserData.superAdminId) {
      errors.superAdminId = "Super Admin ID is required";
    }

    setEditUserErrors(errors);
    return Object.keys(errors).length === 0;
  };



  const generateActionHistoryEntry = () => {
    const changedFields = {};
    for (const key in editUserData) {
      if (editUserData[key] !== user[key]) {
        changedFields[key] = {
          oldValue: user[key],
          newValue: editUserData[key]
        };
      }
    }

    return {
      // userId: user._id,
      // userName: editUserData.name,
      actionType: "User Update",
      details: {
        changedFields
      },
      timestamp: new Date(),
      performedBy: currentAdmin?.name || "System Admin"
    };
  };




  const handleSaveChanges = async () => {
    if (!validateEditUserForm()) {
      return;
    }

    try {
      // Generate the action history entry (status = "pending")
      const actionHistoryEntry = generateActionHistoryEntry();

      // Prepare update payload with role-based logic
      const updateData = {
        name: editUserData.name,
        email: editUserData.email,
        phonenumber: editUserData.role !== "super admin" ? editUserData.phone : undefined,
        role: editUserData.role,
        adminId: editUserData.role === "user" ? editUserData.adminId : undefined,
        superAdminId: editUserData.role !== "super admin" ? editUserData.superAdminId : undefined,
        status: editUserData.status,
        actionHistory: [...(user.actionHistory || []), actionHistoryEntry] // Push to existing or initialize
      };

      // Remove undefined fields before dispatching
      Object.keys(updateData).forEach((key) => {
        if (updateData[key] === undefined) {
          delete updateData[key];
        }
      });

      // Dispatch API Call
      const result = await dispatch(updateUserById({
        id: user._id,
        data: updateData
      }));

      if (updateUserById.fulfilled.match(result)) {
        toast.success("User updated successfully!");
        setEditingUserId(null);
      } else {
        toast.error(result.payload || "Failed to update user");
      }

    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error("Error updating user:", error);
    }
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-100/30 backdrop-blur-sm px-2">
      <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Edit User</h2>
            <button
              onClick={() => setEditingUserId(null)}
              className="text-gray-400 hover:text-gray-500"
            >
              <Icons.X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {editUserErrors.general && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
              {editUserErrors.general}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
              <input
                type="text"
                value={editUserData.name}
                onChange={(e) => handleEditUserChange('name', e.target.value)}
                className={`w-full p-2 border ${editUserErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
              />
              {editUserErrors.name && (
                <p className="mt-1 text-xs text-red-500">{editUserErrors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                value={editUserData.email}
                onChange={(e) => handleEditUserChange('email', e.target.value)}
                className={`w-full p-2 border ${editUserErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
              />
              {editUserErrors.email && (
                <p className="mt-1 text-xs text-red-500">{editUserErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone{(editUserData.role === "user" || editUserData.role === "admin") ? "*" : ""}
              </label>
              <input
                type="tel"
                value={editUserData.phone}
                onChange={(e) => handleEditUserChange('phone', e.target.value)}
                className={`w-full p-2 border ${editUserErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
                placeholder="10 digits only"
              />
              {editUserErrors.phone && (
                <p className="mt-1 text-xs text-red-500">{editUserErrors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role*</label>
              <select
                value={editUserData.role}
                onChange={(e) => handleEditUserChange('role', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                {/* <option value="super admin">Super Admin</option> */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status*</label>
              <select
                value={editUserData.status}
                onChange={(e) => handleEditUserChange('status', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            {editUserData.role === "user" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Admin ID*</label>
                <input
                  type="text"
                  value={editUserData.adminId}
                  onChange={(e) => handleEditUserChange('adminId', e.target.value)}
                  className={`w-full p-2 border ${editUserErrors.adminId ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
                  disabled={!!currentAdmin?.adminId || !!currentAdmin?._id}
                />
                {editUserErrors.adminId && (
                  <p className="mt-1 text-xs text-red-500">{editUserErrors.adminId}</p>
                )}
              </div>
            )}

            {(editUserData.role === "user" || editUserData.role === "admin") && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Super Admin ID*</label>
                <input
                  type="text"
                  value={editUserData.superAdminId}
                  onChange={(e) => handleEditUserChange('superAdminId', e.target.value)}
                  className={`w-full p-2 border ${editUserErrors.superAdminId ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
                  disabled={!!currentAdmin?.superAdminId || !!currentAdmin?._id}
                />
                {editUserErrors.superAdminId && (
                  <p className="mt-1 text-xs text-red-500">{editUserErrors.superAdminId}</p>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col-1 sm:flex-row sm:justify-end gap-5">
            <button
              onClick={() => setEditingUserId(null)}
              className="w-full sm:w-auto flex items-center justify-center
                         px-3 sm:px-4 md:px-5 
                         py-2 sm:py-2 md:py-2.5 
                         border border-gray-300 
                         rounded-md text-gray-700 
                         hover:bg-gray-50 
                         text-sm sm:text-base md:text-lg 
                         whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              disabled={isUpdatingUser}
              className="w-full sm:w-auto flex items-center justify-center
                         px-3 sm:px-4 md:px-5 
                         py-2 sm:py-2 md:py-2.5 
                         bg-blue-600 text-white 
                         rounded-md 
                         hover:bg-blue-700 
                         disabled:bg-blue-400 
                         text-sm sm:text-base md:text-lg 
                         whitespace-nowrap"
            >
              {isUpdatingUser ? (
                <span className="flex items-center justify-center">
                  <Icons.Loader2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 animate-spin" />
                  Updating...
                </span>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;