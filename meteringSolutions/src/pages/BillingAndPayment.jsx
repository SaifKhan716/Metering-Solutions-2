import React, { useState } from "react";

const BillingAndPayment = () => {
  const [formData, setFormData] = useState({
    amount: "200",
    rechargeAmount: "",
    paymentMode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="flex flex-col items-center p-6 w-full">
      {/* <h2 className="text-2xl font-semibold mb-4">Total Next Payment</h2> */}
      <form
        className="border border-gray-300 p-6 rounded-md shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block font-medium">Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Recharge Amount:</label>
          <input
            type="text"
            name="rechargeAmount"
            value={formData.rechargeAmount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Payment Mode:</label>
          <input
            type="text"
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingAndPayment;


// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { FiEye, FiFilter } from "react-icons/fi";
// import { FaDollarSign } from "react-icons/fa";
// import { AiOutlineAlert } from "react-icons/ai";

// export function BillingAndPayment() {
//   const [invoices, setInvoices] = useState([
//     { id: "INV-2025-001", customer: "Robert Wilson", amount: "$345.00", status: "Paid", dueDate: "Jan 15, 2025" },
//   ]);

//   return (
//     <div className="p-6 space-y-6 bg-white shadow rounded-lg">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-xl font-semibold">Billing & Payments</h2>
//           <p className="text-gray-500">Manage invoices and payment tracking</p>
//         </div>
//         <Button className="bg-blue-600 text-white">+ Generate Invoice</Button>
//       </div>

//       <div className="grid grid-cols-3 gap-4">
//         <div className="p-4 flex items-center space-x-4 border rounded-lg">
//           <FaDollarSign className="text-green-500 text-3xl" />
//           <div>
//             <p className="text-gray-500">Total Revenue</p>
//             <h3 className="text-xl font-bold">$45,289</h3>
//             <p className="text-green-500">+12% this month</p>
//           </div>
//         </div>
//         <div className="p-4 flex items-center space-x-4 border rounded-lg">
//           <FaDollarSign className="text-yellow-500 text-3xl" />
//           <div>
//             <p className="text-gray-500">Pending Payments</p>
//             <h3 className="text-xl font-bold">$12,450</h3>
//             <p className="text-yellow-500">23 invoices pending</p>
//           </div>
//         </div>
//         <div className="p-4 flex items-center space-x-4 border rounded-lg">
//           <AiOutlineAlert className="text-red-500 text-3xl" />
//           <div>
//             <p className="text-gray-500">Overdue Payments</p>
//             <h3 className="text-xl font-bold">$5,890</h3>
//             <p className="text-red-500">8 overdue invoices</p>
//           </div>
//         </div>
//       </div>

//       <table className="w-full border mt-4">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2 text-left">Invoice</th>
//             <th className="p-2 text-left">Customer</th>
//             <th className="p-2 text-left">Amount</th>
//             <th className="p-2 text-left">Status</th>
//             <th className="p-2 text-left">Due Date</th>
//             <th className="p-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoices.map((invoice, index) => (
//             <tr key={index} className="border-t">
//               <td className="p-2">{invoice.id}</td>
//               <td className="p-2">{invoice.customer}</td>
//               <td className="p-2">{invoice.amount}</td>
//               <td className="p-2">
//                 <Badge className="bg-green-500 text-white">{invoice.status}</Badge>
//               </td>
//               <td className="p-2">{invoice.dueDate}</td>
//               <td className="p-2">
//                 <FiEye className="cursor-pointer" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// import React from 'react'
// import { useState } from "react";
// import { FiEye } from "react-icons/fi";
// import { FaDollarSign, FaPlus } from "react-icons/fa";
// import { AiOutlineAlert } from "react-icons/ai";

// const BillingAndPayment = () => {
//   const [invoices, setInvoices] = useState([
//     { id: "INV-2025-001", customer: "Robert Wilson", amount: "$345.00", status: "Paid", dueDate: "Jan 15, 2025" },
//   ]);

//   return (
//     <div className="p-6 space-y-6 bg-white shadow rounded-lg">
//       <div className="flex justify-between">
//       <div>
//         <h2 className="text-xl font-semibold">Billing & Payments</h2>
//         <p className="text-gray-500">Manage invoices and payment tracking</p>
//         </div>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center shadow-md">
//                   <FaPlus className="mr-2" /> Generate Invoice
//         </button>
//       </div>

//       <div className="grid grid-cols-3 gap-4">
//         <div className="p-4 flex items-center space-x-4 border rounded-lg">
//           <FaDollarSign className="text-green-500 text-3xl" />
//           <div>
//             <p className="text-gray-500">Total Revenue</p>
//             <h3 className="text-xl font-bold">$45,289</h3>
//             <p className="text-green-500">+12% this month</p>
//           </div>
//         </div>
//         {/* <div className="p-4 flex items-center space-x-4 border rounded-lg">
//           <FaDollarSign className="text-yellow-500 text-3xl" />
//           <div>
//             <p className="text-gray-500">Pending Payments</p>
//             <h3 className="text-xl font-bold">$12,450</h3>
//             <p className="text-yellow-500">23 invoices pending</p>
//           </div>
//         </div> */}
//         <div className="p-4 flex items-center space-x-4 border rounded-lg">
//           <AiOutlineAlert className="text-red-500 text-3xl" />
//           <div>
//             <p className="text-gray-500">Overdue Payments</p>
//             <h3 className="text-xl font-bold">$5,890</h3>
//             <p className="text-red-500">8 overdue invoices</p>
//           </div>
//         </div>
//       </div>

//       <table className="w-full border mt-4">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2 text-left">Invoice</th>
//             <th className="p-2 text-left">Customer</th>
//             <th className="p-2 text-left">Amount</th>
//             <th className="p-2 text-left">Status</th>
//             <th className="p-2 text-left">Due Date</th>
//             <th className="p-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoices.map((invoice, index) => (
//             <tr key={index} className="border-t">
//               <td className="p-2">{invoice.id}</td>
//               <td className="p-2">{invoice.customer}</td>
//               <td className="p-2">{invoice.amount}</td>
//               <td className="p-2">
//                 <span
//                   className={`px-2 py-1 text-white rounded ${
//                     invoice.status === "Paid" ? "bg-green-500" : "bg-red-500"
//                   }`}
//                 >
//                   {invoice.status}
//                 </span>
//               </td>
//               <td className="p-2">{invoice.dueDate}</td>
//               <td className="p-2">
//                 <FiEye className="cursor-pointer" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BillingAndPayment;