// // src/components/user-management/UserDetailsPanel.jsx
// import React from 'react';
// import Icons from '../icons/LucideIcons';
// import PermissionItem from './PermissionItem';
// import { 
//   getInitials, 
//   formatDate, 
//   getStatusColor,
//   getRoleBg
// } from '../../utils/userUtils';

// const UserDetailsPanel = ({
//   selectedUser,
//   actionType,
//   setActionType,
//   formData,
//   handleFormChange,
//   roleTemplates,
//   permissionsList,
//   actionTemplates,
//   handleAction,
//   processing
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
//       <div className="p-6">
//         <h2 className="font-semibold text-gray-900 mb-4">User Actions</h2>
        
//         {selectedUser ? (
//           <div className="space-y-6">
//             {/* Selected User Info */}
//             <div className="bg-blue-50 p-4 rounded-lg">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium mr-4">
//                     {getInitials(selectedUser.firstName, selectedUser.lastName)}
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-blue-900">{selectedUser.firstName} {selectedUser.lastName}</h3>
//                     <p className="text-sm text-blue-700">{selectedUser.email}</p>
//                     <p className="text-sm text-blue-600">{selectedUser.department}</p>
//                   </div>
//                 </div>
//                 <Icons.Users className="h-8 w-8 text-blue-600" />
//               </div>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-blue-200">
//                 <div>
//                   <div className="text-xs text-blue-600 uppercase tracking-wide">Status</div>
//                   <div className={`text-sm font-medium ${getStatusColor(selectedUser.status)}`}>
//                     {selectedUser.status}
//                   </div>
//                 </div>
//                 <div>
//                   <div className="text-xs text-blue-600 uppercase tracking-wide">Role</div>
//                   <div className="text-sm font-medium text-blue-900">
//                     {roleTemplates[selectedUser.role]?.name || selectedUser.role}
//                   </div>
//                 </div>
//                 <div>
//                   <div className="text-xs text-blue-600 uppercase tracking-wide">Last Login</div>
//                   <div className="text-sm font-medium text-blue-900">
//                     {selectedUser.lastLogin ? formatDate(selectedUser.lastLogin) : 'Never'}
//                   </div>
//                 </div>
//                 <div>
//                   <div className="text-xs text-blue-600 uppercase tracking-wide">Member Since</div>
//                   <div className="text-sm font-medium text-blue-900">
//                     {formatDate(selectedUser.createdAt)}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Action Type Selection */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Action Type</label>
//               <select
//                 value={actionType}
//                 onChange={(e) => {
//                   setActionType(e.target.value);
//                 }}
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="">Select an action...</option>
//                 {Object.entries(actionTemplates).map(([key, template]) => (
//                   <option key={key} value={key}>{template.name}</option>
//                 ))}
//               </select>
//               {actionType && (
//                 <p className="mt-2 text-sm text-gray-600">{actionTemplates[actionType].description}</p>
//               )}
//             </div>

//             {/* Action-Specific Forms */}
//             {actionType === 'update_role' && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">New Role</label>
//                 <select
//                   value={formData.newRole || ''}
//                   onChange={(e) => handleFormChange('newRole', e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   <option value="">Select new role...</option>
//                   {Object.entries(roleTemplates).map(([key, role]) => (
//                     <option key={key} value={key}>{role.name}</option>
//                   ))}
//                 </select>
//                 {formData.newRole && (
//                   <div className="mt-3 p-3 bg-gray-50 rounded-md">
//                     <div className="text-sm font-medium text-gray-700 mb-2">Permissions for this role:</div>
//                     <div className="space-y-1">
//                       {roleTemplates[formData.newRole].permissions.map((permission) => (
//                         <div key={permission} className="flex items-center text-sm text-gray-600">
//                           <Icons.CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                           {permissionsList[permission]}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {actionType === 'toggle_status' && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">New Status</label>
//                 <select
//                   value={formData.newStatus || ''}
//                   onChange={(e) => handleFormChange('newStatus', e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   <option value="">Select new status...</option>
//                   <option value="active">Active</option>
//                   <option value="inactive">Inactive</option>
//                   <option value="suspended">Suspended</option>
//                 </select>
//                 {formData.newStatus && (
//                   <div className="mt-2 text-sm text-gray-600">
//                     {formData.newStatus === 'active' && 'User will have full access according to their role.'}
//                     {formData.newStatus === 'inactive' && 'User will not be able to log in.'}
//                     {formData.newStatus === 'suspended' && 'User account will be temporarily suspended.'}
//                   </div>
//                 )}
//               </div>
//             )}

//             {actionType === 'send_notification' && (
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                   <input
//                     type="text"
//                     value={formData.subject || ''}
//                     onChange={(e) => handleFormChange('subject', e.target.value)}
//                     placeholder="Enter notification subject"
//                     className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                   <textarea
//                     value={formData.message || ''}
//                     onChange={(e) => handleFormChange('message', e.target.value)}
//                     placeholder="Enter notification message"
//                     rows={4}
//                     className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Current Permissions Display */}
//             {selectedUser && (
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h4 className="font-medium text-gray-700 mb-3">Current Permissions</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                   {selectedUser.permissions.map((permission) => (
//                     <div key={permission} className="flex items-center text-sm text-gray-600">
//                       <Icons.CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                       {permissionsList[permission]}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Execute Action Button */}
//             <button
//               onClick={handleAction}
//               disabled={!actionType || processing}
//               className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
//             >
//               {processing ? (
//                 <Icons.Loader2 className="h-5 w-5 mr-2 animate-spin" />
//               ) : (
//                 <Icons.Settings className="h-5 w-5 mr-2" />
//               )}
//               {processing ? 'Processing...' : 'Execute Action'}
//             </button>
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <Icons.Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//             <p className="text-gray-500">Select a user to manage their account</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDetailsPanel;


import React, { useState } from "react";
import Icons from "../icons/LucideIcons";
import { useDispatch } from "react-redux";
import { updateUserById } from "../../redux/thunks/userManagementThunks";
import { toast } from "react-toastify";
import {
  getInitials,
  formatDate,
  getStatusColor,
  getRoleBg,
} from "../../utils/userUtils";

const UserDetailsPanel = ({
  selectedUser,
  roleTemplates = {},

  currentAdmin = {},
}) => {
  const dispatch = useDispatch();
  const [actionType, setActionType] = useState("");
  const [formData, setFormData] = useState({});
  const [processing, setProcessing] = useState(false);

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateActionHistoryEntry = () => {
    const changedFields = {};

    switch (actionType) {
      case "update_role":
        changedFields.role = {
          oldValue: selectedUser.role,
          newValue: formData.newRole,
        };
        break;
      case "toggle_status":
        changedFields.status = {
          oldValue: selectedUser.status,
          newValue: formData.newStatus,
        };
        // Include reason for all status changes
        if (formData.statusReason) {
          changedFields.reason = formData.statusReason;
        }
        break;
      case "send_password_reset":
      case "force_logout":
        break;
    }

    return {
      // userId: selectedUser._id,
      // userName: selectedUser.name,
      actionType: getActionTypeName(),
      details: {
        ...(Object.keys(changedFields).length > 0 ? { changedFields } : {}),
      },
      timestamp: new Date().toISOString(),
      performedBy: currentAdmin?.name || "System Admin",
    };
  };

  const getActionTypeName = () => {
    switch (actionType) {
      case "update_role":
        return "Role Update";
      case "toggle_status":
        return "Status Update";
      // case 'update_department': return 'Department Update';
      case "send_password_reset":
        return "Password Reset";
      case "force_logout":
        return "Force Logout";
      default:
        return "User Update";
    }
  };

  const handleAction = async () => {
    // if (!selectedUser || !actionType) return;

    if (!selectedUser || !actionType) return;
    // Validate required fields for status changes
    if (actionType === "toggle_status") {
      if (!formData.statusReason || formData.statusReason.length < 10) {
        toast.error(
          "Please provide a detailed reason (at least 10 characters)"
        );
        return;
      }
      if (formData.statusReason.length > 500) {
        toast.error("Reason must be 500 characters or less");
        return;
      }
    }

    setProcessing(true);

    try {
      

      if (actionType === "force_logout") {
        const response = await fetch(
          "http://localhost:5000/api/v1/auth/user-logout",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: selectedUser._id,
            }),
          }
        );

        console.log("=====rrrrrr=====", response);

        if (!response.ok) {
          throw new Error("Failed to force logout");
        }

        // Add Action History Entry for Force Logout
        const forceLogoutAction = generateActionHistoryEntry();
        const updatedData = {
          actionHistory: [
            ...(selectedUser.actionHistory || []),
            forceLogoutAction,
          ],
        };

        await dispatch(
          updateUserById({
            id: selectedUser._id,
            data: updatedData,
          })
        );

        toast.success("User has been logged out from all sessions");
        setActionType("");
        setFormData({});
        return;
      }

      // Prepare update data based on action type
      let updateData = {};
      switch (actionType) {
        case "update_role":
          updateData.role = formData.newRole;
          break;
          // case 'toggle_status':
          //   updateData.status = formData.newStatus;
          break;
        // case 'update_department':
        //   updateData.department = formData.newDepartment;
        //   break;
        case "send_password_reset":
          // case 'force_logout':
          // No direct field updates for these actions
          break;
      }

      // Generate action history entry
      // const actionHistoryEntry = generateActionHistoryEntry('pending');
      const actionHistoryEntry = generateActionHistoryEntry();
      console.log("----", formData.newStatus);

      // Prepare full update payload
      const fullUpdateData = {
        //...updateData,
        status: formData.newStatus,

        actionHistory: [
          ...(selectedUser.actionHistory || []),
          actionHistoryEntry,
        ],
      };

      // Dispatch the update action
      const result = await dispatch(
        updateUserById({
          id: selectedUser._id,
          data: fullUpdateData,
        })
      );

      if (result.error) {
        // Generate failed action entry if update fails
        const failedAction = generateActionHistoryEntry("failed");
        await dispatch(
          updateUserById({
            id: selectedUser._id,
            data: { $push: { actionHistory: failedAction } },
          })
        );

        toast.error(result.error.message || "Failed to perform action");
        return;
      }

      // On success, update the action status to completed
      const completedAction = generateActionHistoryEntry("completed");
      await dispatch(
        updateUserById({
          id: selectedUser._id,
          data: { $push: { actionHistory: completedAction } },
        })
      );

      toast.success("Action completed successfully!");
      setActionType("");
      setFormData({});
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error("Action error:", error);
    } finally {
      setProcessing(false);
    }
  };

  const renderActionForm = () => {
    switch (actionType) {
      case "update_role":
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Role
            </label>
            <select
              value={formData.newRole || ""}
              onChange={(e) => handleFormChange("newRole", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select new role...</option>
              {Object.keys(roleTemplates).map((key) => (
                <option key={key} value={key}>
                  {roleTemplates[key].name}
                </option>
              ))}
            </select>
          </div>
        );

      case "toggle_status":
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Status
            </label>
            <select
              value={formData.newStatus || ""}
              onChange={(e) => handleFormChange("newStatus", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select new status...</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>

            {/* Reason field for all status changes */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {formData.newStatus === "suspended"
                  ? "Suspension Reason"
                  : "Change Reason"}
              </label>
              <textarea
                value={formData.statusReason || ""}
                onChange={(e) =>
                  handleFormChange("statusReason", e.target.value)
                }
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`Enter reason for changing to ${
                  formData.newStatus || "new status"
                }...`}
                required
              />

              {/* Character count and limit */}
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-500">
                  {formData.statusReason?.length || 0}/500 characters
                </span>
                {formData.statusReason?.length > 500 && (
                  <span className="text-xs text-red-500">
                    Maximum length exceeded
                  </span>
                )}
              </div>

              {/* Common reasons suggestions */}
              <div className="mt-2">
                <p className="text-xs text-gray-500 mb-1">Common reasons:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Onboarding",
                    "Offboarding",
                    "Performance issues",
                    "Security concern",
                  ].map((reason) => (
                    <button
                      key={reason}
                      type="button"
                      onClick={() => handleFormChange("statusReason", reason)}
                      className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                    >
                      {reason}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "send_password_reset":
      case "force_logout":
        return (
          <div className="p-3 bg-yellow-50 rounded-md">
            <p className="text-sm text-yellow-700">
              {actionType === "send_password_reset"
                ? "This will send a password reset email to the user"
                : "This will immediately log the user out of all active sessions"}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-6">
        <h2 className="font-semibold text-gray-900 mb-4">User Actions</h2>

        {selectedUser ? (
          <div className="space-y-6">
            {/* User Info Section */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* <div className={`w-12 h-12 ${getRoleBg(selectedUser.role, roleTemplates)} rounded-full flex items-center justify-center text-white font-medium mr-4`}>
                    {getInitials(selectedUser.name)}
                  </div> */}
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
                    {/* {getInitials(user.firstName, user.lastName)} */}
                    {getInitials(
                      selectedUser.firstName,
                      selectedUser.lastName,
                      selectedUser.name
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-900">
                      {selectedUser.name}
                    </h3>
                    <p className="text-sm text-blue-700">
                      {selectedUser.email}
                    </p>
                    <p className="text-sm text-blue-600">
                      {roleTemplates[selectedUser.role]?.name ||
                        selectedUser.role}
                    </p>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    selectedUser.status
                  )}`}
                >
                  {selectedUser.status}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-blue-200">
                <div>
                  <div className="text-xs text-blue-600 uppercase tracking-wide">
                    Last Login
                  </div>
                  <div className="text-sm font-medium text-blue-900">
                    {selectedUser.lastLogin
                      ? formatDate(selectedUser.lastLogin)
                      : "Never"}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-blue-600 uppercase tracking-wide">
                    Member Since
                  </div>
                  <div className="text-sm font-medium text-blue-900">
                    {formatDate(selectedUser.createdAt)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-blue-600 uppercase tracking-wide">
                    Actions Taken
                  </div>
                  <div className="text-sm font-medium text-blue-900">
                    {selectedUser.actionHistory?.length || 0}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-blue-600 uppercase tracking-wide">
                    Admin
                  </div>
                  <div className="text-sm font-medium text-blue-900">
                    {currentAdmin?.name || "System"}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Action Type
              </label>
              <select
                value={actionType}
                onChange={(e) => {
                  setActionType(e.target.value);
                  setFormData({});
                }}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select an action...</option>
                <option value="update_role">Update Role</option>
                <option value="toggle_status">Update Status</option>
                {/* <option value="update_department">Update Department</option> */}
                <option value="send_password_reset">Reset Password </option>
                <option value="force_logout">Force Logout</option>
              </select>
            </div>

            {/* Dynamic Action Form */}
            {actionType && (
              <>
                {renderActionForm()}
                <button
                  onClick={handleAction}
                  disabled={processing}
                  className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
                >
                  {processing ? (
                    <>
                      <Icons.Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Icons.Check className="h-5 w-5 mr-2" />
                      Confirm {getActionTypeName()}
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icons.Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Select a user to manage their account
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailsPanel;