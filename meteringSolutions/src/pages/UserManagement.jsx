


import React, { useState } from "react";
import UserCard from "../components/userManagement/UserCard";
import UserDetailsPanel from "../components/userManagement/UserDetailsPanel";
import ActionHistory from "../components/userManagement/ActionHistory";
import CreateUserModal from "../components/userManagement/CreateUserModal";
import EditUserModal from "../components/userManagement/EditUserModal";
import DeleteConfirmation from "../components/userManagement/DeleteConfirmation";
import Icons from "../components/icons/LucideIcons";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { userQueryData } from '../redux/slice/userMangementSlice'
import { fetchUsersByQuery } from '../redux/thunks/userManagementThunks'
import { selectUserId, selectUserRole } from "../redux/slice/authSlice";

const UserManagement = () => {
  // State declarations
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchUserTerm, setSearchUserTerm] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);

  const dispatch = useDispatch();

  //selectors
  const fetchUsersByQueryData = useSelector(userQueryData);
  const adminId = useSelector(selectUserId);
  const role = useSelector(selectUserRole);
  const superAdminId= import.meta.env.VITE_SUPER_ADMIN_ID;
  console.log(superAdminId);

  const currentAdmin = {
    _id: superAdminId,
    name: "",//profileSlice
    role: role,
    adminId: adminId,
    superAdminId: superAdminId,
  }


  // const [currentAdmin, setCurrentAdmin] = useState({
  //   // Current logged-in admin info
  //   _id: "68808cd5ad225ab1dc079812", // MongoDB ObjectId of current admin
  //   name: "Test Admin Name", // Name of current admin
  //   role: "admin", // or "super admin"
  //   adminId: "6880a79534fd25a9226b12ed", // Only if current admin is an admin (not super admin)
  //   superAdminId: "68808cd5ad225ab1dc079812", // Only if current admin is an admin/user under super admin
  // }); // New state for admin

  useEffect(() => {
    const queryParams = {};
    if (superAdminId) queryParams.superAdminId = superAdminId;
    if (adminId) queryParams.adminId = adminId;
    if (searchUserTerm) queryParams.search = searchUserTerm;

    console.log('queryParams', queryParams);
    const data = dispatch(fetchUsersByQuery(queryParams));
    console.log(data)

  }, [dispatch, adminId, role, searchUserTerm]);


  useEffect(() => {
    if (selectedUser) {
      const updatedUser = fetchUsersByQueryData.find(
        (user) => user._id === selectedUser._id
      );
      if (updatedUser) {
        setSelectedUser(updatedUser);
      }
    }
  }, [fetchUsersByQueryData]);


  const roleTemplates = {
    admin: {
      name: "Admin",
      permissions: ["view_users", "edit_users", "delete_users", "manage_roles"],
    },
    // editor: {
    //   name: "Editor",
    //   permissions: ["view_users", "edit_users"],
    // },
    user: {
      name: "User",
      permissions: ["view_users"],
    },
    // viewer: {
    //   name: "Viewer",
    //   permissions: ["view_users"],
    // },
  };

  const [editUserData,setEditUserData]=useState({});



  const filteredUsers = useMemo(() => {
    const term = searchUserTerm.toLowerCase();
    return fetchUsersByQueryData.filter((user) =>
      (user.name && user.name.toLowerCase().includes(term)) ||
      (user.email && user.email.toLowerCase().includes(term)) ||
      (user.role && user.role.toLowerCase().includes(term)) ||
      (user._id && user._id.toLowerCase().includes(term)) ||
      (user.adminId && user.adminId.toLowerCase().includes(term)) ||
      (user.superAdminId && user.superAdminId.toLowerCase().includes(term))
    );
  }, [searchUserTerm, fetchUsersByQueryData]);


  // Handle user edit
  const handleEditUser = (user) => {
    console.log("======user11====", user);
    setEditingUserId(user._id);
  };
  //console.log("=====hjgm======", currentAdmin);
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="mb-8">
          <div className="flex  items-center justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-xl md:text-3xl font-semibold text-gray-900">
                User Management
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Manage user accounts, roles, and permissions
              </p>
            </div>
            <div>
              <button
                onClick={() => setShowCreateForm(true)}
                className="flex items-center justify-center 
             px-3 sm:px-4 md:px-5 
             py-2 sm:py-2 md:py-2.5 
             bg-blue-600 text-white 
             rounded-md 
             hover:bg-blue-700 transition-colors 
             text-sm sm:text-base md:text-lg 
             whitespace-nowrap"
              >
                <Icons.UserPlus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2" />
                <span className="leading-tight">New User</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Selection Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-3">
                  Select User
                </h2>
                <div className="relative">
                  <Icons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchUserTerm}
                    onChange={(e) => setSearchUserTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {filteredUsers.map((user) => (
                  <UserCard
                    key={user._id}
                    user={user}
                    isSelected={selectedUser?._id === user._id}
                    onSelect={() => setSelectedUser(user)}
                    onEdit={() => handleEditUser(user)}
                    // onDelete={() => handleDeleteClick(user)}

                    // onDelete={() => {
                    //   setDeletingUserId(selectedUser._id);
                    //   setShowDeleteConfirm(true);
                    // }}
                    roleTemplates={roleTemplates}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* User Action Configuration Panel and Action History */}
          <div className="lg:col-span-2">
            <UserDetailsPanel
              selectedUser={selectedUser}
              roleTemplates={roleTemplates}
              // permissionsList={permissionsList}
              // currentAdmin={{
              //   // Current logged-in admin info
              //   _id: "68808cd5ad225ab1dc079812", // MongoDB ObjectId of current admin
              //   name: "Test Admin Name", // Name of current admin
              //   role: "admin", // or "super admin"
              //   adminId: "6880a79534fd25a9226b12ed", // Only if current admin is an admin (not super admin)
              //   superAdminId: "68808cd5ad225ab1dc079812", // Only if current admin is an admin/user under super admin
              // }}

              currentAdmin={currentAdmin}
            />

            <div className="mt-6">
              {/* <ActionHistory actionHistory={selectedUser} /> */}
              {/* <ActionHistory
                actionHistory={selectedUser}
              /> */}

              <ActionHistory user={selectedUser} />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showCreateForm && (
        <CreateUserModal
          setShowCreateForm={setShowCreateForm} // Function to close the modal
          roleTemplates={roleTemplates} // Your role templates object
          // currentAdmin={{
          //   // Current logged-in admin info
          //   _id: "68808cd5ad225ab1dc079812", // MongoDB ObjectId of current admin
          //   name: "Test Admin Name", // Name of current admin
          //   role: "admin", // or "super admin"
          //   adminId: "6880a79534fd25a9226b12ed", // Only if current admin is an admin (not super admin)
          //   superAdminId: "68808cd5ad225ab1dc079812", // Only if current admin is an admin/user under super admin
          // }}
          currentAdmin={currentAdmin}
        />
      )}

      {editingUserId && (
        <EditUserModal
          user={filteredUsers.find((u) => u._id === editingUserId)}
          setEditingUserId={setEditingUserId}
          // roleTemplates={roleTemplates}
          // currentAdmin={{
          //   _id: "68808cd5ad225ab1dc079812", // MongoDB ObjectId of current admin
          //   name: "Test Admin Name", // Name of current admin
          //   role: "admin", // or "super admin"
          //   adminId: "6880a79534fd25a9226b12ed", // Only if current admin is an admin (not super admin)
          //   superAdminId: "68808cd5ad225ab1dc079812",
          // }}
          currentAdmin={currentAdmin}
        />
      )}
      {/* 
      {showDeleteConfirm && (
        <DeleteConfirmation
          user={users.find((u) => u.id === deletingUserId)}
          setShowDeleteConfirm={setShowDeleteConfirm}
          confirmDelete={confirmDelete}
          isDeleting={isDeleting}
        />
      )} */}
    </div>
  );
};

export default UserManagement;