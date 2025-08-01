// // src/components/user-management/CreateUserModal.jsx
// import React from 'react';
// import Icons from '../icons/LucideIcons';

// const CreateUserModal = ({
//     createUserData,
//     createUserErrors,
//     setShowCreateForm,
//     handleCreateUserChange,
//     handleCreateUser,
//     isCreatingUser,
//     departments,
//     roleTemplates
// }) => {
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-100/30 backdrop-blur-sm">
//             <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto">
//                 <div className="p-6" >
//                     <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-xl font-bold text-gray-900">Create New User</h2>
//                         <button
//                             onClick={() => setShowCreateForm(false)}
//                             className="text-gray-400 hover:text-gray-500"
//                         >
//                             <Icons.X className="h-6 w-6" />
//                         </button>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                             <input
//                                 type="text"
//                                 value={createUserData.firstName}
//                                 onChange={(e) => handleCreateUserChange('firstName', e.target.value)}
//                                 className={`w-full p-2 border ${createUserErrors.firstName ? 'border-red-500' : 'border-gray-300'
//                                     } rounded-md`}
//                             />
//                             {createUserErrors.firstName && (
//                                 <p className="mt-1 text-xs text-red-500">{createUserErrors.firstName}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                             <input
//                                 type="text"
//                                 value={createUserData.lastName}
//                                 onChange={(e) => handleCreateUserChange('lastName', e.target.value)}
//                                 className={`w-full p-2 border ${createUserErrors.lastName ? 'border-red-500' : 'border-gray-300'
//                                     } rounded-md`}
//                             />
//                             {createUserErrors.lastName && (
//                                 <p className="mt-1 text-xs text-red-500">{createUserErrors.lastName}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
//                             <input
//                                 type="text"
//                                 value={createUserData.username}
//                                 onChange={(e) => handleCreateUserChange('username', e.target.value)}
//                                 className={`w-full p-2 border ${createUserErrors.username ? 'border-red-500' : 'border-gray-300'
//                                     } rounded-md`}
//                             />
//                             {createUserErrors.username && (
//                                 <p className="mt-1 text-xs text-red-500">{createUserErrors.username}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                             <input
//                                 type="email"
//                                 value={createUserData.email}
//                                 onChange={(e) => handleCreateUserChange('email', e.target.value)}
//                                 className={`w-full p-2 border ${createUserErrors.email ? 'border-red-500' : 'border-gray-300'
//                                     } rounded-md`}
//                             />
//                             {createUserErrors.email && (
//                                 <p className="mt-1 text-xs text-red-500">{createUserErrors.email}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                             <input
//                                 type="tel"
//                                 value={createUserData.phone}
//                                 onChange={(e) => handleCreateUserChange('phone', e.target.value)}
//                                 className={`w-full p-2 border ${createUserErrors.phone ? 'border-red-500' : 'border-gray-300'
//                                     } rounded-md`}
//                             />
//                             {createUserErrors.phone && (
//                                 <p className="mt-1 text-xs text-red-500">{createUserErrors.phone}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                             <select
//                                 value={createUserData.department}
//                                 onChange={(e) => handleCreateUserChange('department', e.target.value)}
//                                 className={`w-full p-2 border ${createUserErrors.department ? 'border-red-500' : 'border-gray-300'
//                                     } rounded-md`}
//                             >
//                                 <option value="">Select department</option>
//                                 {departments.map(dept => (
//                                     <option key={dept} value={dept}>{dept}</option>
//                                 ))}
//                             </select>
//                             {createUserErrors.department && (
//                                 <p className="mt-1 text-xs text-red-500">{createUserErrors.department}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//                             <select
//                                 value={createUserData.role}
//                                 onChange={(e) => handleCreateUserChange('role', e.target.value)}
//                                 className="w-full p-2 border border-gray-300 rounded-md"
//                             >
//                                 {Object.entries(roleTemplates).map(([key, role]) => (
//                                     <option key={key} value={key}>{role.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//                             <select
//                                 value={createUserData.status}
//                                 onChange={(e) => handleCreateUserChange('status', e.target.value)}
//                                 className="w-full p-2 border border-gray-300 rounded-md"
//                             >
//                                 <option value="active">Active</option>
//                                 <option value="inactive">Inactive</option>
//                                 <option value="suspended">Suspended</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className="flex items-center space-x-4 mb-6">
//                         <div className="flex items-center">
//                             <input
//                                 type="checkbox"
//                                 id="sendWelcomeEmail"
//                                 checked={createUserData.sendWelcomeEmail}
//                                 onChange={(e) => handleCreateUserChange('sendWelcomeEmail', e.target.checked)}
//                                 className="h-4 w-4 text-blue-600 rounded"
//                             />
//                             <label htmlFor="sendWelcomeEmail" className="ml-2 text-sm text-gray-700">
//                                 Send welcome email
//                             </label>
//                         </div>
//                         <div className="flex items-center">
//                             <input
//                                 type="checkbox"
//                                 id="requirePasswordReset"
//                                 checked={createUserData.requirePasswordReset}
//                                 onChange={(e) => handleCreateUserChange('requirePasswordReset', e.target.checked)}
//                                 className="h-4 w-4 text-blue-600 rounded"
//                             />
//                             <label htmlFor="requirePasswordReset" className="ml-2 text-sm text-gray-700">
//                                 Require password reset on first login
//                             </label>
//                         </div>
//                     </div>

//                     <div className="flex justify-end space-x-3">
//                         <button
//                             onClick={() => setShowCreateForm(false)}
//                             className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             onClick={handleCreateUser}
//                             disabled={isCreatingUser}
//                             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
//                         >
//                             {isCreatingUser ? (
//                                 <span className="flex items-center">
//                                     <Icons.Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                                     Creating...
//                                 </span>
//                             ) : 'Create User'}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CreateUserModal;



import React, { useState } from 'react';
import Icons from '../icons/LucideIcons';
import { useDispatch, useSelector } from 'react-redux';
// import { createUser } from '../../redux/thunks/userManagementThunks';
import { toast } from 'react-toastify';
import { userManagementLoading } from '../../redux/slice/userMangementSlice';
import { useEffect } from 'react';
import { createUser, fetchUsersByQuery } from '../../redux/thunks/userManagementThunks';
const CreateUserModal = ({
    setShowCreateForm,
    roleTemplates,
    currentAdmin
}) => {
    const dispatch = useDispatch();
    const isCreatingUser = useSelector(userManagementLoading);

    console.log("====currentAdmin========", currentAdmin)

    const [createUserData, setCreateUserData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "user",
        adminId: currentAdmin?.adminId || currentAdmin?._id || "",
        superAdminId: currentAdmin?.superAdminId || currentAdmin?._id || "",
        sendWelcomeEmail: true,
        requirePasswordReset: true,
    });

    const [createUserErrors, setCreateUserErrors] = useState({});

    const handleCreateUserChange = (field, value) => {
        setCreateUserData((prev) => ({
            ...prev,
            [field]: value,
        }));

        if (createUserErrors[field]) {
            setCreateUserErrors((prev) => ({
                ...prev,
                [field]: "",
            }));
        }
    };

    const validateCreateUserForm = () => {
        const errors = {};

        if (!createUserData.name.trim()) {
            errors.name = "Name is required";
        }

        if (!createUserData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(createUserData.email)) {
            errors.email = "Please enter a valid email address";
        }



        if (createUserData.role === "user" || createUserData.role === "admin") {
            if (!createUserData.phone) {
                errors.phone = "Phone number is required";
            } else if (!/^\d+$/.test(createUserData.phone)) {
                errors.phone = "Phone number must contain only digits";
            } else if (createUserData.phone.length !== 10) {
                errors.phone = "Phone number must be 10 digits";
            }
        }

        if (createUserData.role === "user" && !createUserData.adminId) {
            errors.adminId = "Admin ID is required for users";
        }

        if ((createUserData.role === "user" || createUserData.role === "admin") && !createUserData.superAdminId) {
            errors.superAdminId = "Super Admin ID is required";
        }

        setCreateUserErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const generateActionHistoryEntry = (status, userId = null) => {
        return {
            // id: Date.now(),
            // userId: userId,
            // userName: createUserData.name,
            actionType: "User Creation",
            details: {
                role: createUserData.role,
                sendWelcomeEmail: createUserData.sendWelcomeEmail,
                requirePasswordReset: createUserData.requirePasswordReset,
            },
            timestamp: new Date(),
            // status,
            performedBy: currentAdmin?.name || "System Admin"
        };
    };

    // const handleCreateUser = async () => {
    //     if (!validateCreateUserForm()) {
    //         return;
    //     }

    //     try {
    //         const pendingAction = generateActionHistoryEntry("pending");

    //         const userData = {
    //             name: createUserData.name,
    //             email: createUserData.email,
    //             // password: createUserData.password,
    //             role: createUserData.role,
    //             phonenumber: createUserData.role !== "super admin" ? createUserData.phone : undefined,
    //             adminId: createUserData.role === "user" ? createUserData.adminId : undefined,
    //             superAdminId: createUserData.role !== "super admin" ? createUserData.superAdminId : undefined,
    //             actionHistory: [pendingAction],
    //             status: "active",
    //             firstLogin: createUserData.requirePasswordReset
    //         };


    //         const result = await dispatch(createUser(userData));

    //         if (result.error) {
    //             toast.error(result.error.message || "Failed to create user");
    //             return;
    //         }

    //         setCreateUserData({
    //             name: "",
    //             email: "",
    //             password: "",
    //             phone: "",
    //             role: "user",
    //             adminId: currentAdmin?.adminId || currentAdmin?._id || "",
    //             superAdminId: currentAdmin?.superAdminId || currentAdmin?._id || "",
    //             sendWelcomeEmail: true,
    //             requirePasswordReset: true,
    //         });
    //         setCreateUserErrors({});
    //         setShowCreateForm(false);

    //         toast.success("User created successfully!");

    //     } catch (error) {
    //         toast.error("An unexpected error occurred");
    //         console.error("Error creating user:", error);
    //     }
    // };


    const handleCreateUser = async () => {
    if (!validateCreateUserForm()) {
        return;
    }

    try {
        const pendingAction = generateActionHistoryEntry("pending");

        const userData = {
            name: createUserData.name,
            email: createUserData.email,
            role: createUserData.role,
            phonenumber: createUserData.role !== "super admin" ? createUserData.phone : undefined,
            adminId: createUserData.role === "user" ? createUserData.adminId : undefined,
            superAdminId: createUserData.role !== "super admin" ? createUserData.superAdminId : undefined,
            actionHistory: [pendingAction],
            status: "active",
            firstLogin: createUserData.requirePasswordReset
        };

        const result = await dispatch(createUser(userData));
        
        // Check if the action was successful
        if (createUser.fulfilled.match(result)) {
            // Reset form
            setCreateUserData({
                name: "",
                email: "",
                password: "",
                phone: "",
                role: "user",
                adminId: currentAdmin?.adminId || currentAdmin?._id || "",
                superAdminId: currentAdmin?.superAdminId || currentAdmin?._id || "",
                sendWelcomeEmail: true,
                requirePasswordReset: true,
            });
            setCreateUserErrors({});
            setShowCreateForm(false);
            
            toast.success("User created successfully!");
            
            // Optionally refetch users to ensure the list is up-to-date
            dispatch(fetchUsersByQuery({
                superAdminId: currentAdmin?.superAdminId || currentAdmin?._id,
                adminId: currentAdmin?.adminId || currentAdmin?._id,
                role: "",
                search: ""
            }));
        } else if (result.error) {
            toast.error(result.error.message || "Failed to create user");
        }
    } catch (error) {
        toast.error("An unexpected error occurred");
        console.error("Error creating user:", error);
    }
};
    useEffect(()=>{

    },[])
    //   return (
    //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-100/30 backdrop-blur-sm px-2">
    //       <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh]">
    //         <div className="p-4 sm:p-6 h-full w-full overflow-y-scroll" >
    //           <div className="flex justify-between items-center mb-4">
    //             <h2 className="text-lg sm:text-xl font-bold text-gray-900">Create New User</h2>
    //             <button
    //               onClick={() => setShowCreateForm(false)}
    //               className="text-gray-400 hover:text-gray-500"
    //             >
    //               <Icons.X className="h-5 w-5 sm:h-6 sm:w-6" />
    //             </button>
    //           </div>

    //           {createUserErrors.general && (
    //             <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
    //               {createUserErrors.general}
    //             </div>
    //           )}

    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
    //               <input
    //                 type="text"
    //                 value={createUserData.name}
    //                 onChange={(e) => handleCreateUserChange('name', e.target.value)}
    //                 className={`w-full p-2 border ${createUserErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
    //               />
    //               {createUserErrors.name && (
    //                 <p className="mt-1 text-xs text-red-500">{createUserErrors.name}</p>
    //               )}
    //             </div>

    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
    //               <input
    //                 type="email"
    //                 value={createUserData.email}
    //                 onChange={(e) => handleCreateUserChange('email', e.target.value)}
    //                 className={`w-full p-2 border ${createUserErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
    //               />
    //               {createUserErrors.email && (
    //                 <p className="mt-1 text-xs text-red-500">{createUserErrors.email}</p>
    //               )}
    //             </div>



    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 mb-1">
    //                 Phone{(createUserData.role === "user" || createUserData.role === "admin") ? "*" : ""}
    //               </label>
    //               <input
    //                 type="tel"
    //                 value={createUserData.phone}
    //                 onChange={(e) => handleCreateUserChange('phone', e.target.value)}
    //                 className={`w-full p-2 border ${createUserErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
    //                 placeholder="10 digits only"
    //               />
    //               {createUserErrors.phone && (
    //                 <p className="mt-1 text-xs text-red-500">{createUserErrors.phone}</p>
    //               )}
    //             </div>

    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 mb-1">Role*</label>
    //               <select
    //                 value={createUserData.role}
    //                 onChange={(e) => handleCreateUserChange('role', e.target.value)}
    //                 className="w-full p-2 border border-gray-300 rounded-md text-sm"
    //               >
    //                 <option value="user">User</option>
    //               </select>
    //             </div>

    //             {createUserData.role === "user" && (
    //               <div>
    //                 <label className="block text-sm font-medium text-gray-700 mb-1">Admin ID*</label>
    //                 <input
    //                   type="text"
    //                   value={createUserData.adminId}
    //                   onChange={(e) => handleCreateUserChange('adminId', e.target.value)}
    //                   className={`w-full p-2 border ${createUserErrors.adminId ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
    //                   disabled={!!currentAdmin?.adminId || !!currentAdmin?._id}
    //                 />
    //                 {createUserErrors.adminId && (
    //                   <p className="mt-1 text-xs text-red-500">{createUserErrors.adminId}</p>
    //                 )}
    //               </div>
    //             )}

    //             {(createUserData.role === "user") && (
    //               <div>
    //                 <label className="block text-sm font-medium text-gray-700 mb-1">Super Admin ID*</label>
    //                 <input
    //                   type="text"
    //                   value={createUserData.superAdminId}
    //                   onChange={(e) => handleCreateUserChange('superAdminId', e.target.value)}
    //                   className={`w-full p-2 border ${createUserErrors.superAdminId ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
    //                   disabled={!!currentAdmin?.superAdminId || !!currentAdmin?._id}
    //                 />
    //                 {createUserErrors.superAdminId && (
    //                   <p className="mt-1 text-xs text-red-500">{createUserErrors.superAdminId}</p>
    //                 )}
    //               </div>
    //             )}
    //           </div>

    //           <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2 mb-6">
    //             <div className="flex items-center">
    //               <input
    //                 type="checkbox"
    //                 id="sendWelcomeEmail"
    //                 checked={createUserData.sendWelcomeEmail}
    //                 onChange={(e) => handleCreateUserChange('sendWelcomeEmail', e.target.checked)}
    //                 className="h-4 w-4 text-blue-600"
    //               />
    //               <label htmlFor="sendWelcomeEmail" className="ml-2 text-sm text-gray-700">
    //                 Send welcome email
    //               </label>
    //             </div>
    //             <div className="flex items-center">
    //               <input
    //                 type="checkbox"
    //                 id="requirePasswordReset"
    //                 checked={createUserData.requirePasswordReset}
    //                 onChange={(e) => handleCreateUserChange('requirePasswordReset', e.target.checked)}
    //                 className="h-4 w-4 text-blue-600"
    //               />
    //               {/* <label htmlFor="requirePasswordReset" className="ml-2 text-sm text-gray-700">
    //                 Require password reset on first login
    //               </label> */}
    //                     <label htmlFor="requirePasswordReset" className="ml-2 text-sm text-gray-700">
    //                 Require Verify otp on login
    //               </label>
    //             </div>
    //           </div>

    //           <div className="flex flex-col-1 sm:flex-row sm:justify-end gap-5">
    //             <button
    //               onClick={() => setShowCreateForm(false)}
    //               className="w-full sm:w-auto flex items-center justify-center
    //                          px-3 sm:px-4 md:px-5 
    //                          py-2 sm:py-2 md:py-2.5 
    //                          border border-gray-300 
    //                          rounded-md text-gray-700 
    //                          hover:bg-gray-50 
    //                          text-sm sm:text-base md:text-lg 
    //                          whitespace-nowrap"
    //             >
    //               Cancel
    //             </button>
    //             <button
    //               onClick={handleCreateUser}
    //               disabled={isCreatingUser}
    //               className="w-full sm:w-auto flex items-center justify-center
    //                          px-3 sm:px-4 md:px-5 
    //                          py-2 sm:py-2 md:py-2.5 
    //                          bg-blue-600 text-white 
    //                          rounded-md 
    //                          hover:bg-blue-700 
    //                          disabled:bg-blue-400 
    //                          text-sm sm:text-base md:text-lg 
    //                          whitespace-nowrap"
    //             >
    //               {isCreatingUser ? (
    //                 <span className="flex items-center justify-center">
    //                   <Icons.Loader2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 animate-spin" />
    //                   Creating...
    //                 </span>
    //               ) : (
    //                 <>
    //                   <Icons.UserPlus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2" />
    //                   Create User
    //                 </>
    //               )}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-100/30 backdrop-blur-sm px-2">
            <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">

                {/* Header (fixed) */}
                <div className="p-4 sm:p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Create New User</h2>
                        <button
                            onClick={() => setShowCreateForm(false)}
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <Icons.X className="h-5 w-5 sm:h-6 sm:w-6" />
                        </button>
                    </div>

                    {createUserErrors.general && (
                        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
                            {createUserErrors.general}
                        </div>
                    )}
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto px-4 sm:px-6 py-4 space-y-6" style={{ maxHeight: 'calc(90vh - 88px)' }}>
                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                            <input
                                type="text"
                                value={createUserData.name}
                                onChange={(e) => handleCreateUserChange('name', e.target.value)}
                                className={`w-full p-2 border ${createUserErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
                            />
                            {createUserErrors.name && (
                                <p className="mt-1 text-xs text-red-500">{createUserErrors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                            <input
                                type="email"
                                value={createUserData.email}
                                onChange={(e) => handleCreateUserChange('email', e.target.value)}
                                className={`w-full p-2 border ${createUserErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
                            />
                            {createUserErrors.email && (
                                <p className="mt-1 text-xs text-red-500">{createUserErrors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone{(createUserData.role === "user" || createUserData.role === "admin") ? "*" : ""}
                            </label>
                            <input
                                type="tel"
                                value={createUserData.phone}
                                onChange={(e) => handleCreateUserChange('phone', e.target.value)}
                                className={`w-full p-2 border ${createUserErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
                                placeholder="10 digits only"
                            />
                            {createUserErrors.phone && (
                                <p className="mt-1 text-xs text-red-500">{createUserErrors.phone}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Role*</label>
                            <select
                                value={createUserData.role}
                                onChange={(e) => handleCreateUserChange('role', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            >
                                <option value="user">User</option>
                            </select>
                        </div>

                        {createUserData.role === "user" && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Admin ID*</label>
                                    <input
                                        type="text"
                                        value={createUserData.adminId}
                                        onChange={(e) => handleCreateUserChange('adminId', e.target.value)}
                                        className={`w-full p-2 border ${createUserErrors.adminId ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
                                        disabled={!!currentAdmin?.adminId || !!currentAdmin?._id}
                                    />
                                    {createUserErrors.adminId && (
                                        <p className="mt-1 text-xs text-red-500">{createUserErrors.adminId}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Super Admin ID*</label>
                                    <input
                                        type="text"
                                        value={createUserData.superAdminId}
                                        onChange={(e) => handleCreateUserChange('superAdminId', e.target.value)}
                                        className={`w-full p-2 border ${createUserErrors.superAdminId ? 'border-red-500' : 'border-gray-300'} rounded-md text-sm`}
                                        disabled={!!currentAdmin?.superAdminId || !!currentAdmin?._id}
                                    />
                                    {createUserErrors.superAdminId && (
                                        <p className="mt-1 text-xs text-red-500">{createUserErrors.superAdminId}</p>
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Checkboxes */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="sendWelcomeEmail"
                                checked={createUserData.sendWelcomeEmail}
                                onChange={(e) => handleCreateUserChange('sendWelcomeEmail', e.target.checked)}
                                className="h-4 w-4 text-blue-600"
                            />
                            <label htmlFor="sendWelcomeEmail" className="ml-2 text-sm text-gray-700">
                                Send welcome email
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="requirePasswordReset"
                                checked={createUserData.requirePasswordReset}
                                onChange={(e) => handleCreateUserChange('requirePasswordReset', e.target.checked)}
                                className="h-4 w-4 text-blue-600"
                            />
                            <label htmlFor="requirePasswordReset" className="ml-2 text-sm text-gray-700">
                                Require Verify OTP on login
                            </label>
                        </div>
                    </div>
                </div>
                {/* Footer buttons */}
                
                <div className="flex flex-col-1 sm:flex-row sm:justify-end gap-5 py-3 px-4 border-t border-gray-200">
                    <button
                        onClick={() => setShowCreateForm(false)}
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
                        onClick={handleCreateUser}
                        disabled={isCreatingUser}
                        className="w-full sm:w-auto flex items-center justify-center
                       px-2 sm:px-4 md:px-3 
                       py-1 sm:py-2 md:py-2 
                       bg-blue-600 text-white 
                       rounded-md 
                       hover:bg-blue-700 
                       disabled:bg-blue-400 
                       text-xs sm:text-xs md:text-sm
                       whitespace-nowrap"
                    >
                        {isCreatingUser ? (
                            <span className="flex items-center justify-center">
                                <Icons.Loader2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 animate-spin" />
                                Creating...
                            </span>
                        ) : (
                            <>
                                <Icons.UserPlus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2" />
                                Create User
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateUserModal;