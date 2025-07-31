// import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// import { FiEye, FiFilter } from "react-icons/fi";
// import { FaDollarSign } from "react-icons/fa";
// import { AiOutlineAlert } from "react-icons/ai";
// export function SupportAndLogs() {
//     const [tickets, setTickets] = useState([
//       { id: "TKT-2025-001", title: "Smart meter not responding to commands", user: "James Brown", priority: "High Priority", time: "2 hours ago" },
//     ]);

//     return (
//       <div className="p-6 space-y-6 bg-white shadow rounded-lg mt-6">
//         <div className="flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-semibold">Support Center</h2>
//             <p className="text-gray-500">Manage customer support and inquiries</p>
//           </div>
//           <div className="flex space-x-2">
//             {/* <Button variant="outline" className="flex items-center space-x-1">
//               <FiFilter /> <span>Filter</span>
//             </Button>
//             <Button className="bg-blue-600 text-white">+ New Ticket</Button> */}
//           </div>
//         </div>

//         <table className="w-full border mt-4">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2 text-left">Priority</th>
//               <th className="p-2 text-left">Ticket</th>
//               <th className="p-2 text-left">User</th>
//               <th className="p-2 text-left">Time</th>
//               <th className="p-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tickets.map((ticket, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">
//                   {/* <Badge className="bg-red-500 text-white">{ticket.priority}</Badge> */}
//                 </td>
//                 <td className="p-2">{ticket.title}</td>
//                 <td className="p-2">{ticket.user}</td>
//                 <td className="p-2">{ticket.time}</td>
//                 <td className="p-2">
//                   {/* <Button variant="outline">View Details</Button> */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }

// import React from "react";
// import { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { FiEye } from "react-icons/fi";

// const SupportAndLogs = () => {
//   const [tickets, setTickets] = useState([
//     {
//       id: "TKT-2025-001",
//       title: "Smart meter not responding to commands",
//       user: "James Brown",
//       priority: "High Priority",
//       time: "2 hours ago",
//     },
//   ]);

//   return (
//     <div className="p-6 space-y-6 bg-white shadow rounded-lg mt-6">
//       <div className="flex justify-between">
//         <div>
//           <h2 className="text-xl font-semibold">Support Center</h2>
//           <p className="text-gray-500">Manage customer support and inquiries</p>
//         </div>
//         <button className="bg-blue-600 text-white px-4 py-1 rounded flex items-center shadow-md">
//           <FaPlus className="mr-2" /> New Ticket
//         </button>
//       </div>

//       <table className="w-full border mt-4">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2 text-left">Priority</th>
//             <th className="p-2 text-left">Ticket</th>
//             <th className="p-2 text-left">User</th>
//             <th className="p-2 text-left">Time</th>
//             <th className="p-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tickets.map((ticket, index) => (
//             <tr key={index} className="border-t">
//               <td className="p-2">
//                 <span
//                   className={`px-2 py-1 text-white rounded ${
//                     ticket.priority === "High Priority"
//                       ? "bg-red-500"
//                       : "bg-gray-500"
//                   }`}
//                 >
//                   {ticket.priority}
//                 </span>
//               </td>
//               <td className="p-2">{ticket.title}</td>
//               <td className="p-2">{ticket.user}</td>
//               <td className="p-2">{ticket.time}</td>
//               <td className="p-2">
//                 <FiEye className="cursor-pointer" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SupportAndLogs;

// import React, { useState, useEffect } from "react";
// import { Plus, Eye, Edit, Trash2, Search, Filter, Clock, User, AlertCircle, CheckCircle, Circle, MessageSquare, Mail, Phone, Calendar, Tag, Users, Settings } from "lucide-react";

// const TicketingSystem = () => {
// const [tickets, setTickets] = useState([
//   {
//     id: "TKT-2025-001",
//     title: "Smart meter not responding to commands",
//     description: "The smart meter installed last week is not responding to remote commands. Customer unable to monitor usage remotely through the app.",
//     customer: "James Brown",
//     email: "james.brown@email.com",
//     phone: "+1-555-0123",
//     priority: "High",
//     status: "Open",
//     category: "Technical",
//     assignedTo: "John Doe",
//     createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
//     updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
//     tags: ["smart-meter", "connectivity"],
//     comments: [
//       {
//         id: 1,
//         author: "John Doe",
//         content: "Initial assessment completed. Device appears to be offline.",
//         timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000)
//       }
//     ]
//   },
//   {
//     id: "TKT-2025-002",
//     title: "Billing discrepancy in December statement",
//     description: "Customer reports incorrect charges on December bill. Peak usage hours seem to be calculated incorrectly.",
//     customer: "Sarah Wilson",
//     email: "sarah.wilson@email.com",
//     phone: "+1-555-0456",
//     priority: "Medium",
//     status: "In Progress",
//     category: "Billing",
//     assignedTo: "Jane Smith",
//     createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
//     updatedAt: new Date(Date.now() - 30 * 60 * 1000),
//     tags: ["billing", "december"],
//     comments: [
//       {
//         id: 1,
//         author: "Jane Smith",
//         content: "Reviewing billing records for December period.",
//         timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
//       }
//     ]
//   },
//   {
//     id: "TKT-2025-003",
//     title: "Request for energy efficiency consultation",
//     description: "Customer interested in solar panel installation and comprehensive energy efficiency audit for their property.",
//     customer: "Michael Johnson",
//     email: "michael.j@email.com",
//     phone: "+1-555-0789",
//     priority: "Low",
//     status: "Resolved",
//     category: "Consultation",
//     assignedTo: "Bob Wilson",
//     createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
//     updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
//     tags: ["solar", "consultation"],
//     comments: [
//       {
//         id: 1,
//         author: "Bob Wilson",
//         content: "Consultation completed. Customer satisfied with recommendations.",
//         timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
//       }
//     ]
//   },
//   {
//     id: "TKT-2025-004",
//     title: "Power outage compensation request",
//     description: "Customer requesting compensation for extended power outage last week that affected business operations.",
//     customer: "Lisa Chen",
//     email: "lisa.chen@business.com",
//     phone: "+1-555-0321",
//     priority: "High",
//     status: "Open",
//     category: "Complaint",
//     assignedTo: "Alice Johnson",
//     createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
//     updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
//     tags: ["outage", "compensation"],
//     comments: []
//   }
// ]);

//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [filterPriority, setFilterPriority] = useState("All");
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [editingTicketId, setEditingTicketId] = useState(null);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [deletingTicketId, setDeletingTicketId] = useState(null);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isCreatingTicket, setIsCreatingTicket] = useState(false);
//   const [actionType, setActionType] = useState("");
//   const [processing, setProcessing] = useState(false);
//   const [newComment, setNewComment] = useState("");

//   const [createTicketData, setCreateTicketData] = useState({
//     title: "",
//     description: "",
//     customer: "",
//     email: "",
//     phone: "",
//     priority: "Medium",
//     status: "Open",
//     category: "Technical",
//     assignedTo: "",
//     tags: []
//   });

//   const [createTicketErrors, setCreateTicketErrors] = useState({});

//   const priorities = ["Low", "Medium", "High", "Critical"];
//   const statuses = ["Open", "In Progress", "Resolved", "Closed"];
//   const categories = ["Technical", "Billing", "Consultation", "Complaint", "Other"];
//   const assignees = ["John Doe", "Jane Smith", "Bob Wilson", "Alice Johnson"];

// const actionTemplates = {
//   update_status: {
//     name: 'Update Status',
//     description: 'Change the status of the ticket',
//     fields: [
//       {
//         name: 'newStatus',
//         label: 'New Status',
//         type: 'select',
//         options: statuses
//       }
//     ]
//   },
//   update_priority: {
//     name: 'Update Priority',
//     description: 'Change the priority level',
//     fields: [
//       {
//         name: 'newPriority',
//         label: 'New Priority',
//         type: 'select',
//         options: priorities
//       }
//     ]
//   },
//   reassign_ticket: {
//     name: 'Reassign Ticket',
//     description: 'Assign ticket to a different team member',
//     fields: [
//       {
//         name: 'newAssignee',
//         label: 'Assign To',
//         type: 'select',
//         options: assignees
//       }
//     ]
//   },
//   send_update: {
//     name: 'Send Customer Update',
//     description: 'Send status update email to customer',
//     fields: [
//       {
//         name: 'message',
//         label: 'Update Message',
//         type: 'textarea',
//         placeholder: 'Enter update message for customer...'
//       }
//     ]
//   }
// };

// const getPriorityColor = (priority) => {
//   switch (priority) {
//     case "Critical": return "bg-red-600";
//     case "High": return "bg-red-500";
//     case "Medium": return "bg-yellow-500";
//     case "Low": return "bg-green-500";
//     default: return "bg-gray-500";
//   }
// };

// const getStatusColor = (status) => {
//   switch (status) {
//     case "Open": return "bg-blue-500";
//     case "In Progress": return "bg-orange-500";
//     case "Resolved": return "bg-green-500";
//     case "Closed": return "bg-gray-500";
//     default: return "bg-gray-500";
//   }
// };

// const getStatusIcon = (status) => {
//   switch (status) {
//     case "Open": return <Circle className="w-4 h-4" />;
//     case "In Progress": return <Clock className="w-4 h-4" />;
//     case "Resolved": return <CheckCircle className="w-4 h-4" />;
//     case "Closed": return <CheckCircle className="w-4 h-4" />;
//     default: return <Circle className="w-4 h-4" />;
//   }
// };

//   const formatTimeAgo = (date) => {
//     const now = new Date();
//     const diff = now - date;
//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const days = Math.floor(hours / 24);

//     if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
//     if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
//     return "Just now";
//   };

//   const filteredTickets = tickets.filter(ticket => {
//     const matchesSearch = 
//       ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       ticket.id.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesStatus = filterStatus === "All" || ticket.status === filterStatus;
//     const matchesPriority = filterPriority === "All" || ticket.priority === filterPriority;

//     return matchesSearch && matchesStatus && matchesPriority;
//   });

//   const handleCreateTicket = () => {
//     setShowCreateForm(true);
//   };

//   const handleCreateTicketChange = (field, value) => {
//     setCreateTicketData(prev => ({
//       ...prev,
//       [field]: value
//     }));

//     if (createTicketErrors[field]) {
//       setCreateTicketErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }));
//     }
//   };

//   const validateCreateTicketForm = () => {
//     const errors = {};

//     if (!createTicketData.title.trim()) {
//       errors.title = 'Title is required';
//     }

//     if (!createTicketData.description.trim()) {
//       errors.description = 'Description is required';
//     }

//     if (!createTicketData.customer.trim()) {
//       errors.customer = 'Customer name is required';
//     }

//     if (!createTicketData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(createTicketData.email)) {
//       errors.email = 'Please enter a valid email address';
//     }

//     setCreateTicketErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleCreateTicketSubmit = async () => {
//     if (!validateCreateTicketForm()) {
//       return;
//     }

//     setIsCreatingTicket(true);

//     setTimeout(() => {
//       const newTicket = {
//         ...createTicketData,
//         id: `TKT-2025-${String(tickets.length + 1).padStart(3, '0')}`,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         comments: []
//       };

//       setTickets(prev => [...prev, newTicket]);
//       setSelectedTicket(newTicket);
//       setCreateTicketData({
//         title: "",
//         description: "",
//         customer: "",
//         email: "",
//         phone: "",
//         priority: "Medium",
//         status: "Open",
//         category: "Technical",
//         assignedTo: "",
//         tags: []
//       });
//       setCreateTicketErrors({});
//       setShowCreateForm(false);
//       setIsCreatingTicket(false);
//     }, 2000);
//   };

//   const handleAction = async (formData) => {
//     if (!selectedTicket || !actionType) return;

//     setProcessing(true);

//     setTimeout(() => {
//       setTickets(prevTickets => prevTickets.map(ticket => {
//         if (ticket.id === selectedTicket.id) {
//           const updatedTicket = { ...ticket, updatedAt: new Date() };

//           if (actionType === 'update_status' && formData.newStatus) {
//             updatedTicket.status = formData.newStatus;
//           } else if (actionType === 'update_priority' && formData.newPriority) {
//             updatedTicket.priority = formData.newPriority;
//           } else if (actionType === 'reassign_ticket' && formData.newAssignee) {
//             updatedTicket.assignedTo = formData.newAssignee;
//           }

//           return updatedTicket;
//         }
//         return ticket;
//       }));

//       setSelectedTicket(prev => {
//         if (!prev) return prev;
//         const updated = { ...prev, updatedAt: new Date() };

//         if (actionType === 'update_status' && formData.newStatus) {
//           updated.status = formData.newStatus;
//         } else if (actionType === 'update_priority' && formData.newPriority) {
//           updated.priority = formData.newPriority;
//         } else if (actionType === 'reassign_ticket' && formData.newAssignee) {
//           updated.assignedTo = formData.newAssignee;
//         }

//         return updated;
//       });

//       setProcessing(false);
//       setActionType("");
//     }, 2000);
//   };

//   const handleDeleteTicket = (ticketId) => {
//     setDeletingTicketId(ticketId);
//     setShowDeleteConfirm(true);
//   };

//   const confirmDelete = () => {
//     if (!deletingTicketId) return;

//     setIsDeleting(true);

//     setTimeout(() => {
//       setTickets(prev => prev.filter(ticket => ticket.id !== deletingTicketId));

//       if (selectedTicket?.id === deletingTicketId) {
//         setSelectedTicket(null);
//       }

//       setShowDeleteConfirm(false);
//       setDeletingTicketId(null);
//       setIsDeleting(false);
//     }, 1500);
//   };

//   const addComment = () => {
//     if (!newComment.trim() || !selectedTicket) return;

//     const comment = {
//       id: Date.now(),
//       author: "Current User",
//       content: newComment.trim(),
//       timestamp: new Date()
//     };

//     setTickets(prev => prev.map(ticket => {
//       if (ticket.id === selectedTicket.id) {
//         return {
//           ...ticket,
//           comments: [...ticket.comments, comment],
//           updatedAt: new Date()
//         };
//       }
//       return ticket;
//     }));

//     setSelectedTicket(prev => ({
//       ...prev,
//       comments: [...prev.comments, comment],
//       updatedAt: new Date()
//     }));

//     setNewComment("");
//   };

//   const getTicketStats = () => {
//     const stats = {
//       total: tickets.length,
//       open: tickets.filter(t => t.status === 'Open').length,
//       inProgress: tickets.filter(t => t.status === 'In Progress').length,
//       resolved: tickets.filter(t => t.status === 'Resolved').length,
//       closed: tickets.filter(t => t.status === 'Closed').length
//     };
//     return stats;
//   };

//   const stats = getTicketStats();

//   return (
//     <div className="p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Support Ticketing System</h1>
//               <p className="text-gray-600">Manage customer support tickets and inquiries</p>
//             </div>
//             <button
//               onClick={handleCreateTicket}
//               className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//             >
//               <Plus className="h-5 w-5 mr-2" />
//               New Ticket
//             </button>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
//           <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Total Tickets</p>
//                 <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
//               </div>
//               <MessageSquare className="w-8 h-8 text-blue-500" />
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Open</p>
//                 <p className="text-2xl font-bold text-blue-600">{stats.open}</p>
//               </div>
//               <Circle className="w-8 h-8 text-blue-500" />
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">In Progress</p>
//                 <p className="text-2xl font-bold text-orange-600">{stats.inProgress}</p>
//               </div>
//               <Clock className="w-8 h-8 text-orange-500" />
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Resolved</p>
//                 <p className="text-2xl font-bold text-green-600">{stats.resolved}</p>
//               </div>
//               <CheckCircle className="w-8 h-8 text-green-500" />
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Closed</p>
//                 <p className="text-2xl font-bold text-gray-600">{stats.closed}</p>
//               </div>
//               <CheckCircle className="w-8 h-8 text-gray-500" />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Ticket Selection Panel */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-4 border-b border-gray-200">
//                 <h2 className="font-semibold text-gray-900 mb-3">Select Ticket</h2>
//                 <div className="space-y-3">
//                   <div className="relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                     <input
//                       type="text"
//                       placeholder="Search tickets..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-2">
//                     <select
//                       value={filterStatus}
//                       onChange={(e) => setFilterStatus(e.target.value)}
//                       className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="All">All Status</option>
//                       {statuses.map(status => (
//                         <option key={status} value={status}>{status}</option>
//                       ))}
//                     </select>

//                     <select
//                       value={filterPriority}
//                       onChange={(e) => setFilterPriority(e.target.value)}
//                       className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="All">All Priority</option>
//                       {priorities.map(priority => (
//                         <option key={priority} value={priority}>{priority}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="max-h-96 overflow-y-auto">
//                 {filteredTickets.map((ticket) => (
//                   <TicketCard
//                     key={ticket.id}
//                     ticket={ticket}
//                     isSelected={selectedTicket?.id === ticket.id}
//                     onSelect={() => setSelectedTicket(ticket)}
//                     onDelete={() => handleDeleteTicket(ticket.id)}
//                     getPriorityColor={getPriorityColor}
//                     getStatusColor={getStatusColor}
//                     getStatusIcon={getStatusIcon}
//                     formatTimeAgo={formatTimeAgo}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Ticket Details and Actions Panel */}
//           <div className="lg:col-span-2">
//             <TicketDetailsPanel
//               selectedTicket={selectedTicket}
//               actionType={actionType}
//               setActionType={setActionType}
//               actionTemplates={actionTemplates}
//               handleAction={handleAction}
//               processing={processing}
//               getPriorityColor={getPriorityColor}
//               getStatusColor={getStatusColor}
//               formatTimeAgo={formatTimeAgo}
//               newComment={newComment}
//               setNewComment={setNewComment}
//               addComment={addComment}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Create Ticket Modal */}
//       {showCreateForm && (
//         <CreateTicketModal
//           createTicketData={createTicketData}
//           createTicketErrors={createTicketErrors}
//           setShowCreateForm={setShowCreateForm}
//           handleCreateTicketChange={handleCreateTicketChange}
//           handleCreateTicketSubmit={handleCreateTicketSubmit}
//           isCreatingTicket={isCreatingTicket}
//           categories={categories}
//           priorities={priorities}
//           statuses={statuses}
//           assignees={assignees}
//         />
//       )}

//       {/* Delete Confirmation Modal */}
//       {showDeleteConfirm && (
//         <DeleteConfirmation
//           ticket={tickets.find(t => t.id === deletingTicketId)}
//           setShowDeleteConfirm={setShowDeleteConfirm}
//           confirmDelete={confirmDelete}
//           isDeleting={isDeleting}
//         />
//       )}
//     </div>
//   );
// };

// // Ticket Card Component
// const TicketCard = ({ ticket, isSelected, onSelect, onDelete, getPriorityColor, getStatusColor, getStatusIcon, formatTimeAgo }) => {
//   return (
//     <div
//       className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
//         isSelected ? 'bg-blue-50 border-r-4 border-r-blue-500' : ''
//       }`}
//       onClick={onSelect}
//     >
//       <div className="flex items-start justify-between">
//         <div className="flex-1">
//           <div className="flex items-center space-x-2 mb-2">
//             <span className="text-xs font-mono text-gray-500">{ticket.id}</span>
//             <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white ${getPriorityColor(ticket.priority)}`}>
//               {ticket.priority}
//             </span>
//           </div>
//           <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
//             {ticket.title}
//           </h3>
//           <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
//             <User className="h-3 w-3" />
//             <span>{ticket.customer}</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white ${getStatusColor(ticket.status)}`}>
//               {getStatusIcon(ticket.status)}
//               <span className="ml-1">{ticket.status}</span>
//             </span>
//             <span className="text-xs text-gray-500">{formatTimeAgo(ticket.updatedAt)}</span>
//           </div>
//         </div>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             onDelete();
//           }}
//           className="ml-2 text-red-600 hover:text-red-800 transition-colors"
//         >
//           <Trash2 className="h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Ticket Details Panel Component
// const TicketDetailsPanel = ({ 
//   selectedTicket, 
//   actionType, 
//   setActionType, 
//   actionTemplates, 
//   handleAction, 
//   processing, 
//   getPriorityColor, 
//   getStatusColor, 
//   formatTimeAgo,
//   newComment,
//   setNewComment,
//   addComment
// }) => {
//   const [formData, setFormData] = useState({});

//   const handleFormChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleAction(formData);
//     setFormData({});
//   };

//   if (!selectedTicket) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
//         <div className="text-center">
//           <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//           <h3 className="text-lg font-medium text-gray-900 mb-2">No Ticket Selected</h3>
//           <p className="text-gray-600">Select a ticket from the list to view details and perform actions.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* Ticket Details */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//         <div className="p-6">
//           <div className="flex items-start justify-between mb-4">
//             <div>
//               <h2 className="text-xl font-semibold text-gray-900 mb-2">{selectedTicket.title}</h2>
//               <div className="flex items-center space-x-4 text-sm text-gray-600">
//                 <span className="flex items-center">
//                   <Tag className="h-4 w-4 mr-1" />
//                   {selectedTicket.id}
//                 </span>
//                 <span className="flex items-center">
//                   <Calendar className="h-4 w-4 mr-1" />
//                   {formatTimeAgo(selectedTicket.createdAt)}
//                 </span>
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getPriorityColor(selectedTicket.priority)}`}>
//                 {selectedTicket.priority}
//               </span>
//               <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(selectedTicket.status)}`}>
//                 {selectedTicket.status}
//               </span>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <h3 className="font-medium text-gray-900 mb-3">Customer Information</h3>
//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center">
//                   <User className="h-4 w-4 text-gray-400 mr-2" />
//                   <span className="text-gray-900">{selectedTicket.customer}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Mail className="h-4 w-4 text-gray-400 mr-2" />
//                   <span className="text-gray-600">{selectedTicket.email}</span>
//                 </div>
//                 {selectedTicket.phone && (
//                   <div className="flex items-center">
//                     <Phone className="h-4 w-4 text-gray-400 mr-2" />
//                     <span className="text-gray-600">{selectedTicket.phone}</span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div>
//               <h3 className="font-medium text-gray-900 mb-3">Ticket Information</h3>
//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Category:</span>
//                   <span className="text-gray-900">{selectedTicket.category}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Assigned To:</span>
//                   <span className="text-gray-900">{selectedTicket.assignedTo || 'Unassigned'}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Last Updated:</span>
//                   <span className="text-gray-900">{formatTimeAgo(selectedTicket.updatedAt)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h3 className="font-medium text-gray-900 mb-2">Description</h3>
//             <p className="text-gray-600 text-sm">{selectedTicket.description}</p>
//           </div>

//           {selectedTicket.tags && selectedTicket.tags.length > 0 && (
//             <div className="mb-6">
//               <h3 className="font-medium text-gray-900 mb-2">Tags</h3>
//               <div className="flex flex-wrap gap-2">
//                 {selectedTicket.tags.map((tag, index)
//                   => (
//                     <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//               </div>
//             </div> 
//           )}
//           <div className="mb-6">
//             <h3 className="font-medium text-gray-900 mb-2">Comments</h3>
//             <div className="space-y-4">
//               {selectedTicket.comments.length > 0 ? (
//                 selectedTicket.comments.map(comment => (
//                   <div key={comment.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-sm font-medium text-gray-900">{comment.author}</span>
//                       <span className="text-xs text-gray-500">{formatTimeAgo(comment.timestamp)}</span>
//                     </div>
//                     <p className="text-sm text-gray-700">{comment.content}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500">No comments yet.</p>
//               )}
//             </div>
//           </div>
//           <div className="mb-6">
//             <h3 className="font-medium text-gray-900 mb-2">Add Comment</h3>
//             <textarea
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               placeholder="Add a comment..."
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//             <button
//               onClick={addComment}
//               disabled={!newComment.trim()}
//               className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
//             >
//               Add Comment
//             </button>
//           </div>
//           {/* Action Buttons */}
//           <div className="flex space-x-2">
//             {Object.entries(actionTemplates).map(([key, template]) => (
//               <button
//                 key={key}
//                 onClick={() => {
//                   setActionType(key);
//                   setFormData({});
//                 }}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
//               >
//                 {template.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Action Form */}
//       {actionType && (
//         <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//           <h3 className="font-medium text-gray-900 mb-4">{actionTemplates[actionType].name}</h3>
//           <p className="text-sm text-gray-600 mb-4">{actionTemplates[actionType].description}</p>
//           {actionTemplates[actionType].fields.map(field => (
//             <div key={field.name} className="mb-4">
//               {field.type === 'select' ? (
//                 <select
//                   value={formData[field.name] || ''}
//                   onChange={(e) => handleFormChange(field.name, e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   <option value="">Select {field.label}</option>
//                   {field.options.map(option => (
//                     <option key={option} value={option}>{option}</option>
//                   ))}
//                 </select>
//               ) : field.type === 'textarea' ? (
//                 <textarea
//                   value={formData[field.name] || ''}
//                   onChange={(e) => handleFormChange(field.name, e.target.value)}
//                   placeholder={field.placeholder}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               ) : (
//                 <input
//                   type="text"
//                   value={formData[field.name] || ''}
//                   onChange={(e) => handleFormChange(field.name, e.target.value)}
//                   placeholder={field.placeholder}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               )}
//             </div>
//           ))}
//           <button
//             type="submit"
//             disabled={processing}
//             className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
//           >
//             {processing ? 'Processing...' : 'Submit Action'}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }



// Updated TicketingSystem with fixes
import React, { useState, useEffect } from "react";
import {
  Plus, Eye, Edit, Trash2, Search, Filter, Clock, User, AlertCircle, CheckCircle,
  Circle, MessageSquare, Mail, Phone, Calendar, Tag, Users, Settings
} from "lucide-react";


const TicketingSystem = () => {
  const [tickets, setTickets] = useState([
    {
      id: "TKT-2025-001",
      title: "Smart meter not responding to commands",
      description: "The smart meter installed last week is not responding to remote commands. Customer unable to monitor usage remotely through the app.",
      customer: "James Brown",
      email: "james.brown@email.com",
      phone: "+1-555-0123",
      priority: "High",
      status: "Open",
      category: "Technical",
      assignedTo: "John Doe",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      tags: ["smart-meter", "connectivity"],
      comments: [
        {
          id: 1,
          author: "John Doe",
          content: "Initial assessment completed. Device appears to be offline.",
          timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000)
        }
      ]
    },
    {
      id: "TKT-2025-002",
      title: "Billing discrepancy in December statement",
      description: "Customer reports incorrect charges on December bill. Peak usage hours seem to be calculated incorrectly.",
      customer: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+1-555-0456",
      priority: "Medium",
      status: "In Progress",
      category: "Billing",
      assignedTo: "Jane Smith",
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 30 * 60 * 1000),
      tags: ["billing", "december"],
      comments: [
        {
          id: 1,
          author: "Jane Smith",
          content: "Reviewing billing records for December period.",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
        }
      ]
    },
    {
      id: "TKT-2025-003",
      title: "Request for energy efficiency consultation",
      description: "Customer interested in solar panel installation and comprehensive energy efficiency audit for their property.",
      customer: "Michael Johnson",
      email: "michael.j@email.com",
      phone: "+1-555-0789",
      priority: "Low",
      status: "Resolved",
      category: "Consultation",
      assignedTo: "Bob Wilson",
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      tags: ["solar", "consultation"],
      comments: [
        {
          id: 1,
          author: "Bob Wilson",
          content: "Consultation completed. Customer satisfied with recommendations.",
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
        }
      ]
    },
    {
      id: "TKT-2025-004",
      title: "Power outage compensation request",
      description: "Customer requesting compensation for extended power outage last week that affected business operations.",
      customer: "Lisa Chen",
      email: "lisa.chen@business.com",
      phone: "+1-555-0321",
      priority: "High",
      status: "Open",
      category: "Complaint",
      assignedTo: "Alice Johnson",
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
      tags: ["outage", "compensation"],
      comments: []
    }
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingTicketId, setEditingTicketId] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingTicketId, setDeletingTicketId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCreatingTicket, setIsCreatingTicket] = useState(false);
  const [actionType, setActionType] = useState("");
  const [processing, setProcessing] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [formData, setFormData] = useState({});

  const [createTicketData, setCreateTicketData] = useState({
    title: "",
    description: "",
    customer: "",
    email: "",
    phone: "",
    priority: "Medium",
    status: "Open",
    category: "Technical",
    assignedTo: "",
    tags: []
  });
  const [createTicketErrors, setCreateTicketErrors] = useState({});

  const priorities = ["Low", "Medium", "High", "Critical"];
  const statuses = ["Open", "In Progress", "Resolved", "Closed"];
  const categories = ["Technical", "Billing", "Consultation", "Complaint", "Other"];
  const assignees = ["John Doe", "Jane Smith", "Bob Wilson", "Alice Johnson"];

  const actionTemplates = {
    update_status: {
      name: 'Update Status',
      description: 'Change the status of the ticket',
      fields: [
        {
          name: 'newStatus',
          label: 'New Status',
          type: 'select',
          options: statuses
        }
      ]
    },
    update_priority: {
      name: 'Update Priority',
      description: 'Change the priority level',
      fields: [
        {
          name: 'newPriority',
          label: 'New Priority',
          type: 'select',
          options: priorities
        }
      ]
    },
    reassign_ticket: {
      name: 'Reassign Ticket',
      description: 'Assign ticket to a different team member',
      fields: [
        {
          name: 'newAssignee',
          label: 'Assign To',
          type: 'select',
          options: assignees
        }
      ]
    },
    send_update: {
      name: 'Send Customer Update',
      description: 'Send status update email to customer',
      fields: [
        {
          name: 'message',
          label: 'Update Message',
          type: 'textarea',
          placeholder: 'Enter update message for customer...'
        }
      ]
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Critical": return "bg-red-600";
      case "High": return "bg-red-500";
      case "Medium": return "bg-yellow-500";
      case "Low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open": return "bg-blue-500";
      case "In Progress": return "bg-orange-500";
      case "Resolved": return "bg-green-500";
      case "Closed": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Open": return <Circle className="w-4 h-4" />;
      case "In Progress": return <Clock className="w-4 h-4" />;
      case "Resolved": return <CheckCircle className="w-4 h-4" />;
      case "Closed": return <CheckCircle className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };




  const formatTimeAgo = (date) => {
    const now = new Date();
    const diff = now - new Date(date);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "Just now";
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || ticket.status === filterStatus;
    const matchesPriority = filterPriority === "All" || ticket.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  useEffect(() => {
    setFormData({});
  }, [actionType]);

  const handleCreateTicket = () => setShowCreateForm(true);
  const handleCreateTicketChange = (field, value) => {
    setCreateTicketData(prev => ({ ...prev, [field]: value }));
    if (createTicketErrors[field]) {
      setCreateTicketErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateCreateTicketForm = () => {
    const errors = {};
    if (!createTicketData.title.trim()) errors.title = 'Title is required';
    if (!createTicketData.description.trim()) errors.description = 'Description is required';
    if (!createTicketData.customer.trim()) errors.customer = 'Customer name is required';
    if (!createTicketData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(createTicketData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    setCreateTicketErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateTicketSubmit = async () => {
    if (!validateCreateTicketForm()) return;
    setIsCreatingTicket(true);
    setTimeout(() => {
      const newTicket = {
        ...createTicketData,
        id: `TKT-2025-${String(tickets.length + 1).padStart(3, '0')}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        comments: []
      };
      setTickets(prev => [...prev, newTicket]);
      setSelectedTicket(newTicket);
      setCreateTicketData({ title: "", description: "", customer: "", email: "", phone: "", priority: "Medium", status: "Open", category: "Technical", assignedTo: "", tags: [] });
      setCreateTicketErrors({});
      setShowCreateForm(false);
      setIsCreatingTicket(false);
    }, 2000);
  };

  const handleAction = async (formData) => {
    if (!selectedTicket || !actionType) return;
    setProcessing(true);
    setTimeout(() => {
      const updatedTickets = tickets.map(ticket => {
        if (ticket.id === selectedTicket.id) {
          const updatedTicket = { ...ticket, updatedAt: new Date() };
          if (actionType === 'update_status') updatedTicket.status = formData.newStatus;
          else if (actionType === 'update_priority') updatedTicket.priority = formData.newPriority;
          else if (actionType === 'reassign_ticket') updatedTicket.assignedTo = formData.newAssignee;
          return updatedTicket;
        }
        return ticket;
      });
      setTickets(updatedTickets);
      setSelectedTicket(updatedTickets.find(t => t.id === selectedTicket.id));
      setProcessing(false);
      setActionType("");
    }, 2000);
  };

  const handleDeleteTicket = (ticketId) => {
    setDeletingTicketId(ticketId);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (!deletingTicketId) return;
    setIsDeleting(true);
    setTimeout(() => {
      setTickets(prev => prev.filter(ticket => ticket.id !== deletingTicketId));
      if (selectedTicket?.id === deletingTicketId) setSelectedTicket(null);
      setShowDeleteConfirm(false);
      setDeletingTicketId(null);
      setIsDeleting(false);
    }, 1500);
  };

  const addComment = () => {
    if (!newComment.trim() || !selectedTicket) return;
    const comment = {
      id: Date.now() + Math.random(),
      author: "Current User",
      content: newComment.trim(),
      timestamp: new Date()
    };
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === selectedTicket.id) {
        return { ...ticket, comments: [...ticket.comments, comment], updatedAt: new Date() };
      }
      return ticket;
    });
    setTickets(updatedTickets);
    setSelectedTicket(updatedTickets.find(t => t.id === selectedTicket.id));
    setNewComment("");
  };

  const getTicketStats = () => {
    const stats = {
      total: tickets.length,
      open: tickets.filter(t => t.status === 'Open').length,
      inProgress: tickets.filter(t => t.status === 'In Progress').length,
      resolved: tickets.filter(t => t.status === 'Resolved').length,
      closed: tickets.filter(t => t.status === 'Closed').length
    };
    return stats;
  };

  const stats = getTicketStats();

  return (
    <div className="p-6">
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Support Ticketing System</h1>
                <p className="text-gray-600">Manage customer support tickets and inquiries</p>
              </div>
              <button
                onClick={handleCreateTicket}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-5 w-5 mr-2" />
                New Ticket
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {/* Cards rendering total, open, in progress, resolved, closed */}
            {/* Code already present */}
          </div>

          {/* Ticket List and Detail Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Ticket List (Left Side) */}
            <div className="lg:col-span-1">
              {/* Search, Filter, Ticket Cards */}
            </div>

            {/* Ticket Details and Action Panel (Right Side) */}
            <div className="lg:col-span-2">
              <TicketDetailsPanel
                selectedTicket={selectedTicket}
                actionType={actionType}
                setActionType={setActionType}
                actionTemplates={actionTemplates}
                handleAction={handleAction}
                processing={processing}
                getPriorityColor={getPriorityColor}
                getStatusColor={getStatusColor}
                formatTimeAgo={formatTimeAgo}
                newComment={newComment}
                setNewComment={setNewComment}
                addComment={addComment}
              />
            </div>
          </div>
        </div>

        {/* Create Ticket Modal */}
        {showCreateForm && (
          <CreateTicketModal
            createTicketData={createTicketData}
            createTicketErrors={createTicketErrors}
            setShowCreateForm={setShowCreateForm}
            handleCreateTicketChange={handleCreateTicketChange}
            handleCreateTicketSubmit={handleCreateTicketSubmit}
            isCreatingTicket={isCreatingTicket}
            categories={categories}
            priorities={priorities}
            statuses={statuses}
            assignees={assignees}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <DeleteConfirmation
            ticket={tickets.find(t => t.id === deletingTicketId)}
            setShowDeleteConfirm={setShowDeleteConfirm}
            confirmDelete={confirmDelete}
            isDeleting={isDeleting}
          />
        )}
      </div>
    </div>
  );
};

export default TicketingSystem;




const DeleteConfirmation = ({ ticket, setShowDeleteConfirm, confirmDelete, isDeleting }) => {
  if (!ticket) return null;

  return (
    <Dialog open onOpenChange={() => setShowDeleteConfirm(false)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <Trash2 className="w-5 h-5" /> Confirm Delete
          </DialogTitle>
        </DialogHeader>

        <div className="text-sm text-gray-700">
          Are you sure you want to delete the ticket titled:
          <span className="font-semibold"> "{ticket.title}"</span>?
        </div>

        <DialogFooter className="mt-4">
          <Button variant="ghost" onClick={() => setShowDeleteConfirm(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={() => confirmDelete(ticket.id)} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};





const CreateTicketModal = ({
  createTicketData,
  createTicketErrors,
  setShowCreateForm,
  handleCreateTicketChange,
  handleCreateTicketSubmit,
  isCreatingTicket,
  categories,
  priorities,
  statuses,
  assignees
}) => {
  return (
    <Dialog open onOpenChange={() => setShowCreateForm(false)}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Ticket</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              value={createTicketData.title}
              onChange={(e) => handleCreateTicketChange("title", e.target.value)}
              placeholder="Enter ticket title"
            />
            {createTicketErrors.title && <p className="text-red-600 text-xs mt-1">{createTicketErrors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Customer Name</label>
            <Input
              value={createTicketData.customer}
              onChange={(e) => handleCreateTicketChange("customer", e.target.value)}
              placeholder="Enter customer name"
            />
            {createTicketErrors.customer && <p className="text-red-600 text-xs mt-1">{createTicketErrors.customer}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              value={createTicketData.email}
              onChange={(e) => handleCreateTicketChange("email", e.target.value)}
              placeholder="Enter customer email"
            />
            {createTicketErrors.email && <p className="text-red-600 text-xs mt-1">{createTicketErrors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <Input
              value={createTicketData.phone}
              onChange={(e) => handleCreateTicketChange("phone", e.target.value)}
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Priority</label>
            <select
              value={createTicketData.priority}
              onChange={(e) => handleCreateTicketChange("priority", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              {priorities.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={createTicketData.status}
              onChange={(e) => handleCreateTicketChange("status", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              {statuses.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={createTicketData.category}
              onChange={(e) => handleCreateTicketChange("category", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Assign To</label>
            <select
              value={createTicketData.assignedTo}
              onChange={(e) => handleCreateTicketChange("assignedTo", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Unassigned</option>
              {assignees.map(a => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <Textarea
            value={createTicketData.description}
            onChange={(e) => handleCreateTicketChange("description", e.target.value)}
            placeholder="Describe the issue in detail"
            rows={4}
          />
          {createTicketErrors.description && <p className="text-red-600 text-xs mt-1">{createTicketErrors.description}</p>}
        </div>

        <DialogFooter className="mt-4">
          <Button variant="ghost" onClick={() => setShowCreateForm(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreateTicketSubmit} disabled={isCreatingTicket}>
            {isCreatingTicket ? "Creating..." : "Create Ticket"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};




const TicketDetailsPanel = ({
  selectedTicket,
  actionType,
  setActionType,
  actionTemplates,
  handleAction,
  processing,
  getPriorityColor,
  getStatusColor,
  formatTimeAgo,
  newComment,
  setNewComment,
  addComment,
}) => {
  const [formData, setFormData] = useState({});

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAction(formData);
    setFormData({});
  };

  if (!selectedTicket) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Ticket Selected</h3>
        <p className="text-gray-600">Select a ticket from the list to view details and perform actions.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{selectedTicket.title}</h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {selectedTicket.id}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatTimeAgo(selectedTicket.createdAt)}
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getPriorityColor(selectedTicket.priority)}`}>
              {selectedTicket.priority}
            </span>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(selectedTicket.status)}`}>
              {selectedTicket.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Customer Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <User className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-900">{selectedTicket.customer}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">{selectedTicket.email}</span>
              </div>
              {selectedTicket.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">{selectedTicket.phone}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3">Ticket Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="text-gray-900">{selectedTicket.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Assigned To:</span>
                <span className="text-gray-900">{selectedTicket.assignedTo || 'Unassigned'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Updated:</span>
                <span className="text-gray-900">{formatTimeAgo(selectedTicket.updatedAt)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-2">Description</h3>
          <p className="text-gray-600 text-sm">{selectedTicket.description}</p>
        </div>

        {selectedTicket.tags?.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {selectedTicket.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-2">Comments</h3>
          <div className="space-y-4">
            {selectedTicket.comments.length > 0 ? (
              selectedTicket.comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{comment.author}</span>
                    <span className="text-xs text-gray-500">{formatTimeAgo(comment.timestamp)}</span>
                  </div>
                  <p className="text-sm text-gray-700">{comment.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-2">Add Comment</h3>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Button
            onClick={addComment}
            disabled={!newComment.trim()}
            className="mt-2"
          >
            Add Comment
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.entries(actionTemplates).map(([key, template]) => (
            <Button
              key={key}
              variant="outline"
              onClick={() => {
                setActionType(key);
                setFormData({});
              }}
            >
              {template.name}
            </Button>
          ))}
        </div>
      </div>

      {actionType && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-medium text-gray-900 mb-4">{actionTemplates[actionType].name}</h3>
          <p className="text-sm text-gray-600 mb-4">{actionTemplates[actionType].description}</p>
          {actionTemplates[actionType].fields.map((field) => (
            <div key={field.name} className="mb-4">
              {field.type === 'select' ? (
                <select
                  value={formData[field.name] || ''}
                  onChange={(e) => handleFormChange(field.name, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea
                  value={formData[field.name] || ''}
                  onChange={(e) => handleFormChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <input
                  type="text"
                  value={formData[field.name] || ''}
                  onChange={(e) => handleFormChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              )}
            </div>
          ))}
          <Button
            type="submit"
            disabled={processing}
            className="mt-2"
          >
            {processing ? 'Processing...' : 'Submit Action'}
          </Button>
        </form>
      )}
    </div>
  );
};

