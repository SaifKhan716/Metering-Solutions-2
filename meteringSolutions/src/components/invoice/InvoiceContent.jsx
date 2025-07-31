// import React from 'react';

// const InvoiceContent = ({ invoiceData, formatDate, formatCurrency }) => {
//     return (
//         <div className="max-w-5xl mx-auto p-8 bg-white shadow-2xl border border-gray-200 print-page">
//             {/* Professional Header */}
//             <div className="border-b-4 border-cyan-700 pb-8 mb-8">
//                 <div className="flex justify-between items-start">
//                     <div className="flex-1">
//                         <div className="flex items-center mb-4">
//                             <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center mr-4">
//                                 <span className="text-white font-bold text-xl">P</span>
//                             </div>
//                             <div>
//                                 <h1 className="text-2xl font-bold text-cyan-700 mb-1">
//                                     {invoiceData.utilityCompany.name}
//                                 </h1>
//                                 <p className="text-sm text-gray-600 font-medium">Electric Utility Services</p>
//                             </div>
//                         </div>
//                         <div className="text-sm text-gray-700 leading-relaxed">
//                             <p className="font-semibold mb-1">{invoiceData.utilityCompany.address}</p>
//                             <p className="mb-1">{invoiceData.utilityCompany.city}, {invoiceData.utilityCompany.state} {invoiceData.utilityCompany.zipCode}</p>
//                             <p className="mb-1">Phone: {invoiceData.utilityCompany.phone}</p>
//                             <p className="mb-1">Email: {invoiceData.utilityCompany.email}</p>
//                             <p className="text-xs text-gray-500">{invoiceData.utilityCompany.license}</p>
//                         </div>
//                     </div>
//                     <div className="text-right">
//                         <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
//                             <h2 className="text-3xl font-bold text-cyan-700 mb-2">INVOICE</h2>
//                             <div className="text-sm text-gray-700 space-y-1">
//                                 <div className="flex justify-between">
//                                     <span className="font-semibold">Invoice #:</span>
//                                     <span className="font-mono">{invoiceData.invoiceNumber}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="font-semibold">Issue Date:</span>
//                                     <span>{formatDate(invoiceData.issueDate)}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="font-semibold">Due Date:</span>
//                                     <span className="text-red-600 font-semibold">{formatDate(invoiceData.dueDate)}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="font-semibold">Terms:</span>
//                                     <span>{invoiceData.paymentTerms}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Customer & Account Information */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                 <div>
//                     <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">CUSTOMER INFORMATION</h3>
//                     <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
//                         <div className="space-y-2">
//                             <div className="font-bold text-gray-800 text-lg">{invoiceData.customerInfo.name}</div>
//                             <div className="text-gray-700">{invoiceData.customerInfo.address}</div>
//                             <div className="text-gray-700">{invoiceData.customerInfo.city}, {invoiceData.customerInfo.state} {invoiceData.customerInfo.zipCode}</div>
//                             <div className="text-gray-600 text-sm mt-3">
//                                 <div>Phone: {invoiceData.customerInfo.phone}</div>
//                                 <div>Email: {invoiceData.customerInfo.email}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">ACCOUNT DETAILS</h3>
//                     <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
//                         <div className="space-y-3">
//                             <div className="flex justify-between">
//                                 <span className="text-gray-600 font-semibold">Account Number:</span>
//                                 <span className="font-mono text-gray-800">{invoiceData.accountNumber}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-gray-600 font-semibold">Billing Period:</span>
//                                 <span className="text-gray-800">{invoiceData.billingPeriod.days} Days</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-gray-600 font-semibold">Period:</span>
//                                 <span className="text-gray-800">{formatDate(invoiceData.billingPeriod.from)} - {formatDate(invoiceData.billingPeriod.to)}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-gray-600 font-semibold">Meter Read Date:</span>
//                                 <span className="text-gray-800">{formatDate(invoiceData.readDate)}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Meter Reading Details */}
//             <div className="mb-8">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">ELECTRICITY USAGE DETAILS</h3>
//                 <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-cyan-700 text-white">
//                             <tr>
//                                 <th className="px-6 py-4 text-left text-sm font-bold">Meter Information</th>
//                                 <th className="px-6 py-4 text-right text-sm font-bold">Previous Reading</th>
//                                 <th className="px-6 py-4 text-right text-sm font-bold">Current Reading</th>
//                                 <th className="px-6 py-4 text-right text-sm font-bold">Usage (kWh)</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-200">
//                             {invoiceData.meterReadings.map((reading, index) => (
//                                 <tr key={index} className="hover:bg-gray-50">
//                                     <td className="px-6 py-4">
//                                         <div className="text-sm">
//                                             <div className="font-semibold text-gray-800">{reading.meterType}</div>
//                                             <div className="text-gray-600">Meter #: {reading.meterNumber}</div>
//                                             <div className="text-gray-500 text-xs">Location: {reading.meterLocation}</div>
//                                         </div>
//                                     </td>
//                                     <td className="px-6 py-4 text-right">
//                                         <div className="text-lg font-semibold text-gray-800">{reading.previousReading.toLocaleString()}</div>
//                                     </td>
//                                     <td className="px-6 py-4 text-right">
//                                         <div className="text-lg font-semibold text-gray-800">{reading.currentReading.toLocaleString()}</div>
//                                     </td>
//                                     <td className="px-6 py-4 text-right">
//                                         <div className="text-xl font-bold text-cyan-700">{reading.usage.toLocaleString()} kWh</div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* Usage Breakdown */}
//             <div className="mb-8">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">USAGE BREAKDOWN & RATES</h3>
//                 <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-gray-100">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Rate Type</th>
//                                 <th className="px-6 py-3 text-right text-sm font-bold text-gray-700">Usage (kWh)</th>
//                                 <th className="px-6 py-3 text-right text-sm font-bold text-gray-700">Rate</th>
//                                 <th className="px-6 py-3 text-right text-sm font-bold text-gray-700">Amount</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-200">
//                             <tr>
//                                 <td className="px-6 py-3 text-sm text-gray-800">Peak Hours (7AM-7PM)</td>
//                                 <td className="px-6 py-3 text-right text-sm text-gray-800">{invoiceData.meterReadings[0].peakUsage}</td>
//                                 <td className="px-6 py-3 text-right text-sm text-gray-800">{formatCurrency(invoiceData.meterReadings[0].peakRate)}</td>
//                                 <td className="px-6 py-3 text-right text-sm font-semibold text-gray-800">{formatCurrency(invoiceData.meterReadings[0].peakAmount)}</td>
//                             </tr>
//                             <tr>
//                                 <td className="px-6 py-3 text-sm text-gray-800">Off-Peak Hours (7PM-7AM)</td>
//                                 <td className="px-6 py-3 text-right text-sm text-gray-800">{invoiceData.meterReadings[0].offPeakUsage}</td>
//                                 <td className="px-6 py-3 text-right text-sm text-gray-800">{formatCurrency(invoiceData.meterReadings[0].offPeakRate)}</td>
//                                 <td className="px-6 py-3 text-right text-sm font-semibold text-gray-800">{formatCurrency(invoiceData.meterReadings[0].offPeakAmount)}</td>
//                             </tr>
//                             <tr className="bg-cyan-50">
//                                 <td className="px-6 py-3 text-sm font-bold text-cyan-700">Total Energy Charges</td>
//                                 <td className="px-6 py-3 text-right text-sm font-bold text-cyan-700">{invoiceData.meterReadings[0].usage} kWh</td>
//                                 <td className="px-6 py-3"></td>
//                                 <td className="px-6 py-3 text-right text-sm font-bold text-cyan-700">{formatCurrency(invoiceData.charges.energyCharges)}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* Charges Summary */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                 <div>
//                     <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">PAYMENT INSTRUCTIONS</h3>
//                     <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
//                         <div className="text-sm text-gray-700 space-y-2">
//                             <p><span className="font-semibold">Payment Due:</span> {formatDate(invoiceData.dueDate)}</p>
//                             <p><span className="font-semibold">Amount Due:</span> <span className="text-xl font-bold text-red-600">{formatCurrency(invoiceData.charges.total)}</span></p>
//                             <p><span className="font-semibold">Account Number:</span> {invoiceData.accountNumber}</p>
//                             <p className="text-xs text-gray-600 mt-3">
//                                 Late payments may incur additional fees. Please include your account number with all payments.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">BILLING SUMMARY</h3>
//                     <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
//                         <div className="space-y-3">
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-gray-600">Energy Charges:</span>
//                                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.energyCharges)}</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-gray-600">Delivery Charges:</span>
//                                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.deliveryCharges)}</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-gray-600">Connection Fee:</span>
//                                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.connectionFee)}</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-gray-600">Regulatory Fees:</span>
//                                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.regulatoryFees)}</span>
//                             </div>
//                             <hr className="border-gray-300" />
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-gray-600">Subtotal:</span>
//                                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.subtotal)}</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-gray-600">Tax (8.0%):</span>
//                                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.tax)}</span>
//                             </div>
//                             <hr className="border-gray-400" />
//                             <div className="flex justify-between text-lg font-bold bg-cyan-100 p-3 rounded">
//                                 <span className="text-cyan-800">TOTAL AMOUNT DUE:</span>
//                                 <span className="text-cyan-800">{formatCurrency(invoiceData.charges.total)}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Terms and Conditions */}
//             <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
//                 <h3 className="text-sm font-bold text-gray-800 mb-3">TERMS & CONDITIONS</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-600">
//                     <div>
//                         <p className="mb-2">• Payment is due within 30 days of invoice date</p>
//                         <p className="mb-2">• Late payments subject to 1.5% monthly service charge</p>
//                         <p className="mb-2">• Service may be disconnected for non-payment</p>
//                     </div>
//                     <div>
//                         <p className="mb-2">• Meter readings are actual unless marked as estimated</p>
//                         <p className="mb-2">• Questions about your bill: {invoiceData.utilityCompany.phone}</p>
//                         <p className="mb-2">• Energy efficiency programs available online</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Professional Footer */}
//             <div className="text-center border-t border-gray-300 pt-6">
//                 <p className="text-sm text-gray-600 mb-2">
//                     <span className="font-semibold">{invoiceData.utilityCompany.name}</span> | Reliable Power for Your Community Since 1952
//                 </p>
//                 <p className="text-xs text-gray-500">
//                     For customer service, visit {invoiceData.utilityCompany.website} or call {invoiceData.utilityCompany.phone}
//                 </p>
//                 <p className="text-xs text-gray-400 mt-2">
//                     This invoice was generated electronically on {formatDate(invoiceData.issueDate)}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default InvoiceContent;


// import React from 'react';

// const InvoiceContent = ({ invoiceData, formatDate, formatCurrency }) => {
//     return (
//         <div className="max-w-5xl mx-auto p-8 bg-[#ffffff] shadow-2xl border border-[#e5e7eb] print-page">
//             {/* Professional Header */}
//             <div className="border-b-4 border-[#0e7490] pb-4 mb-8">
//                 <div className="flex justify-between items-start">
//                     <div className="flex-1">
//                         <div className="flex items-center mb-4">
//                             <div className="w-12 h-12 bg-[#0e7490] rounded-full flex items-center justify-center mr-4">
//                                 <span className="text-[#ffffff] font-bold text-xl">{}</span>
//                             </div>
//                             <div>
//                                 <h1 className="text-2xl font-bold text-[#0e7490] mb-1">
//                                     {invoiceData.utilityCompany.name}
//                                 </h1>
//                                 <p className="text-sm text-[#4b5563] font-medium">Electric Utility Services</p>
//                             </div>
//                         </div>
//                         <div className="text-xm text-[#374151] leading-relaxed">
//                             <p className="font-semibold text-sm mb-1">{invoiceData.utilityCompany.address}</p>
//                             <p className="mb-1">{invoiceData.utilityCompany.city}, {invoiceData.utilityCompany.state} {invoiceData.utilityCompany.zipCode}</p>
//                             <p className="mb-1">Phone: {invoiceData.utilityCompany.phone}</p>
//                             <p className="mb-1">Email: {invoiceData.utilityCompany.email}</p>
//                             <p className="text-xs text-[#6b7280]">{invoiceData.utilityCompany.license}</p>
//                         </div>
//                     </div>
//                     <div className="text-right">
//                         <div className="bg-[#ecfeff] flex flex-col justify-start items-center p-4 rounded-lg border border-[#67e8f9]">
//                             <h2 className="text-2xl font-bold text-[#0e7490] mb-2">INVOICE</h2>
//                             <div className="text-xm text-[#374151] space-y-1">
//                                 <div className="flex gap-2 justify-between">
//                                     <span className="font-semibold">Invoice #:</span>
//                                     <span className="font-mono">{invoiceData.invoiceNumber}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="font-semibold">Issue Date:</span>
//                                     <span>{formatDate(invoiceData.issueDate)}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="font-semibold">Due Date:</span>
//                                     <span className="text-[#dc2626] font-semibold">{formatDate(invoiceData.dueDate)}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="font-semibold">Terms:</span>
//                                     <span>{invoiceData.paymentTerms}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Customer & Account Information */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                 <div>
//                     <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">CUSTOMER INFORMATION</h3>
//                     <div className="bg-[#f9fafb] p-6 rounded-lg border border-[#e5e7eb]">
//                         <div className="space-y-2">
//                             <div className="font-bold text-[#1f2937] text-md">{invoiceData.customerInfo.name}</div>
//                             <div className="text-[#374151]">{invoiceData.customerInfo.address}</div>
//                             <div className="text-[#374151]">{invoiceData.customerInfo.city}, {invoiceData.customerInfo.state} {invoiceData.customerInfo.zipCode}</div>
//                             <div className="text-[#4b5563] text-sm mt-3">
//                                 <div>Phone: {invoiceData.customerInfo.phone}</div>
//                                 <div>Email: {invoiceData.customerInfo.email}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">ACCOUNT DETAILS</h3>
//                     <div className="bg-[#f9fafb] p-6 rounded-lg border border-[#e5e7eb]">
//                         <div className="space-y-3">
//                             <div className="flex justify-between">
//                                 <span className="text-[#4b5563] font-semibold">Account Number:</span>
//                                 <span className="font-mono text-[#1f2937]">{invoiceData.accountNumber}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-[#4b5563] font-semibold">Billing Period:</span>
//                                 <span className="text-[#1f2937]">{invoiceData.billingPeriod.days} Days</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-[#4b5563] font-semibold">Period:</span>
//                                 <span className="text-[#1f2937]">{formatDate(invoiceData.billingPeriod.from)} - {formatDate(invoiceData.billingPeriod.to)}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-[#4b5563] font-semibold">Meter Read Date:</span>
//                                 <span className="text-[#1f2937]">{formatDate(invoiceData.readDate)}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Meter Reading Details */}
//             <div className="mb-8">
//                 <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">ELECTRICITY USAGE DETAILS</h3>
//                 <div className="bg-[#ffffff] border border-[#d1d5db] rounded-lg overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-[#0e7490] text-[#ffffff]">
//                             <tr>
//                                 <th className="px-6 py-4 text-left text-sm font-bold">Meter Information</th>
//                                 <th className="px-6 py-4 text-right text-sm font-bold">Previous Reading</th>
//                                 <th className="px-6 py-4 text-right text-sm font-bold">Current Reading</th>
//                                 <th className="px-6 py-4 text-right text-sm font-bold">Usage (kWh)</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-[#e5e7eb]">
//                             {invoiceData.meterReadings.map((reading, index) => (
//                                 <tr key={index} className="hover:bg-[#f9fafb]">
//                                     <td className="px-6 py-4">
//                                         <div className="text-sm">
//                                             <div className="font-semibold text-[#1f2937]">{reading.meterType}</div>
//                                             <div className="text-[#4b5563]">Meter #: {reading.meterNumber}</div>
//                                             <div className="text-[#6b7280] text-xs">Location: {reading.meterLocation}</div>
//                                         </div>
//                                     </td>
//                                     <td className="px-6 py-4 text-right">
//                                         <div className="text-lg font-semibold text-[#1f2937]">{reading.previousReading.toLocaleString()}</div>
//                                     </td>
//                                     <td className="px-6 py-4 text-right">
//                                         <div className="text-lg font-semibold text-[#1f2937]">{reading.currentReading.toLocaleString()}</div>
//                                     </td>
//                                     <td className="px-6 py-4 text-right">
//                                         <div className="text-xl font-bold text-[#0e7490]">{reading.usage.toLocaleString()} kWh</div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* Usage Breakdown */}
//             <div className="mb-8">
//                 <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">USAGE BREAKDOWN & RATES</h3>
//                 <div className="bg-[#ffffff] border border-[#d1d5db] rounded-lg overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-[#f3f4f6]">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-sm font-bold text-[#374151]">Rate Type</th>
//                                 <th className="px-6 py-3 text-right text-sm font-bold text-[#374151]">Usage (kWh)</th>
//                                 <th className="px-6 py-3 text-right text-sm font-bold text-[#374151]">Rate</th>
//                                 <th className="px-6 py-3 text-right text-sm font-bold text-[#374151]">Amount</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-[#e5e7eb]">
//                             <tr>
//                                 <td className="px-6 py-3 text-sm text-[#1f2937]">Peak Hours (7AM-7PM)</td>
//                                 <td className="px-6 py-3 text-right text-sm text-[#1f2937]">{invoiceData.meterReadings[0].peakUsage}</td>
//                                 <td className="px-6 py-3 text-right text-sm text-[#1f2937]">{formatCurrency(invoiceData.meterReadings[0].peakRate)}</td>
//                                 <td className="px-6 py-3 text-right text-sm font-semibold text-[#1f2937]">{formatCurrency(invoiceData.meterReadings[0].peakAmount)}</td>
//                             </tr>
//                             <tr>
//                                 <td className="px-6 py-3 text-sm text-[#1f2937]">Off-Peak Hours (7PM-7AM)</td>
//                                 <td className="px-6 py-3 text-right text-sm text-[#1f2937]">{invoiceData.meterReadings[0].offPeakUsage}</td>
//                                 <td className="px-6 py-3 text-right text-sm text-[#1f2937]">{formatCurrency(invoiceData.meterReadings[0].offPeakRate)}</td>
//                                 <td className="px-6 py-3 text-right text-sm font-semibold text-[#1f2937]">{formatCurrency(invoiceData.meterReadings[0].offPeakAmount)}</td>
//                             </tr>
//                             <tr className="bg-[#ecfeff]">
//                                 <td className="px-6 py-3 text-sm font-bold text-[#0e7490]">Total Energy Charges</td>
//                                 <td className="px-6 py-3 text-right text-sm font-bold text-[#0e7490]">{invoiceData.meterReadings[0].usage} kWh</td>
//                                 <td className="px-6 py-3"></td>
//                                 <td className="px-6 py-3 text-right text-sm font-bold text-[#0e7490]">{formatCurrency(invoiceData.charges.energyCharges)}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* Charges Summary */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                 <div>
//                     <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">PAYMENT INSTRUCTIONS</h3>
//                     <div className="bg-[#fffbeb] border border-[#fde68a] p-6 rounded-lg">
//                         <div className="text-sm text-[#374151] space-y-2">
//                             <p><span className="font-semibold">Payment Due:</span> {formatDate(invoiceData.dueDate)}</p>
//                             <p><span className="font-semibold">Amount Due:</span> <span className="text-xl font-bold text-[#dc2626]">{formatCurrency(invoiceData.charges.total)}</span></p>
//                             <p><span className="font-semibold">Account Number:</span> {invoiceData.accountNumber}</p>
//                             <p className="text-xs text-[#4b5563] mt-3">
//                                 Late payments may incur additional fees. Please include your account number with all payments.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">BILLING SUMMARY</h3>
//                     <div className="bg-[#f9fafb] border border-[#e5e7eb] p-6 rounded-lg">
//                         <div className="space-y-3">
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-[#4b5563]">Energy Charges:</span>
//                                 <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.energyCharges)}</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-[#4b5563]">Delivery Charges:</span>
//                                 <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.deliveryCharges)}</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-[#4b5563]">Connection Fee:</span>
//                                 <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.connectionFee)}</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-[#4b5563]">Regulatory Fees:</span>
//                                 <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.regulatoryFees)}</span>
//                             </div>
//                             <hr className="border-[#d1d5db]" />
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-[#4b5563]">Subtotal:</span>
//                                 <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.subtotal)}</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-[#4b5563]">Tax (8.0%):</span>
//                                 <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.tax)}</span>
//                             </div>
//                             <hr className="border-[#9ca3af]" />
//                             <div className="flex justify-between text-lg font-bold bg-[#e0f7fa] p-3 rounded">
//                                 <span className="text-[#0e7490]">TOTAL AMOUNT DUE:</span>
//                                 <span className="text-[#0e7490]">{formatCurrency(invoiceData.charges.total)}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Terms and Conditions */}
//             <div className="bg-[#f9fafb] border border-[#e5e7eb] p-6 rounded-lg mb-6">
//                 <h3 className="text-sm font-bold text-[#1f2937] mb-3">TERMS & CONDITIONS</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#4b5563]">
//                     <div>
//                         <p className="mb-2">• Payment is due within 30 days of invoice date</p>
//                         <p className="mb-2">• Late payments subject to 1.5% monthly service charge</p>
//                         <p className="mb-2">• Service may be disconnected for non-payment</p>
//                     </div>
//                     <div>
//                         <p className="mb-2">• Meter readings are actual unless marked as estimated</p>
//                         <p className="mb-2">• Questions about your bill: {invoiceData.utilityCompany.phone}</p>
//                         <p className="mb-2">• Energy efficiency programs available online</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Professional Footer */}
//             <div className="text-center border-t border-[#d1d5db] pt-6">
//                 <p className="text-sm text-[#4b5563] mb-2">
//                     <span className="font-semibold">{invoiceData.utilityCompany.name}</span> | Reliable Power for Your Community Since 1952
//                 </p>
//                 <p className="text-xs text-[#6b7280]">
//                     For customer service, visit {invoiceData.utilityCompany.website} or call {invoiceData.utilityCompany.phone}
//                 </p>
//                 <p className="text-xs text-[#9ca3af] mt-2">
//                     This invoice was generated electronically on {formatDate(invoiceData.issueDate)}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default InvoiceContent;

import React from 'react';

// const calulate = (tariffRate,Readings)=>{
//     const value = tariffRate * Readings;
//     if (isNaN(value)) {
//         return 0; 
//     }
//     return value;
// }
const createCalculator = (operator = (a, b) => a + b) => {
  return (...args) => args.reduce(operator);
};


const sum = createCalculator();
const multiply = createCalculator((a, b) => a * b);
const subtract = createCalculator((a, b) => a - b);

const InvoiceContent = ({ invoiceData, formatDate, formatCurrency }) => {
    return (
        <div className="max-w-5xl mx-auto p-8 bg-[#ffffff] shadow-2xl border border-[#e5e7eb] print-page">
            {/* Professional Header */}
            <div className="border-b-4 border-[#0e7490] pb-4 mb-8">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#0e7490] rounded-full flex items-center justify-center mr-4">
                                <span className="text-[#ffffff] font-bold text-xl">{invoiceData.utilityCompany.name?.charAt(0)}</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-[#0e7490] mb-1">
                                    {invoiceData.utilityCompany.name}
                                </h1>
                                <p className="text-sm text-[#4b5563] font-medium">Electric Utility Services</p>
                            </div>
                        </div>
                        <div className="text-xm text-[#374151] leading-relaxed">
                            <p className="font-semibold text-sm mb-1">{invoiceData.utilityCompany.address}</p>
                            <p className="mb-1">{invoiceData.utilityCompany.city}, {invoiceData.utilityCompany.state} {invoiceData.utilityCompany.zipCode}</p>
                            <p className="mb-1">Phone: {invoiceData.utilityCompany.phone}</p>
                            <p className="mb-1">Email: {invoiceData.utilityCompany.email}</p>
                            <p className="text-xs text-[#6b7280]">{invoiceData.utilityCompany.license}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="bg-[#ecfeff] flex flex-col justify-start items-center p-4 rounded-lg border border-[#67e8f9]">
                            <h2 className="text-2xl font-bold text-[#0e7490] mb-2">INVOICE</h2>
                            <div className="text-sm text-[#374151] space-y-1">
                                <div className="flex gap-2 justify-between">
                                    <span className="font-semibold">Invoice #:</span>
                                    <span className="font-mono">{invoiceData.invoiceNumber}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Issue Date:</span>
                                    <span>{formatDate(invoiceData.issueDate)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Due Date:</span>
                                    <span className="text-[#dc2626] font-semibold">{formatDate(invoiceData.dueDate)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Terms:</span>
                                    <span>{invoiceData.paymentTerms}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Customer & Account Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">CUSTOMER INFORMATION</h3>
                    <div className="bg-[#f9fafb] p-4 rounded-lg border border-[#e5e7eb]">
                        <div className="space-y-1 text-xs">
                            <div className="font-bold text-[#1f2937] text-sm">{invoiceData.customerInfo.name}</div>
                            <div className="text-[#374151]">{invoiceData.customerInfo.address}</div>
                            <div className="text-[#374151]">{invoiceData.customerInfo.city}, {invoiceData.customerInfo.state} {invoiceData.customerInfo.zipCode}</div>
                            <div className="text-[#4b5563] text-xm mt-2">
                                <div>Phone: {invoiceData.customerInfo.phone}</div>
                                <div>Email: {invoiceData.customerInfo.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">ACCOUNT DETAILS</h3>
                    <div className="bg-[#f9fafb] p-6 rounded-lg border border-[#e5e7eb]">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-[#4b5563] font-semibold">Account Number:</span>
                                <span className="font-mono text-[#1f2937]">{invoiceData.accountNumber}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#4b5563] font-semibold">Billing Period:</span>
                                <span className="text-[#1f2937]">{invoiceData.billingPeriod.days} Days</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#4b5563] font-semibold">Period:</span>
                                <span className="text-[#1f2937]">{formatDate(invoiceData.billingPeriod.from)} - {formatDate(invoiceData.billingPeriod.to)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#4b5563] font-semibold">Meter Read Date:</span>
                                <span className="text-[#1f2937]">{formatDate(invoiceData.readDate)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meter Reading Details */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">ELECTRICITY USAGE DETAILS</h3>
                <div className="bg-[#ffffff] border border-[#d1d5db] rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-[#0e7490] text-[#ffffff]">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold">Meter Information</th>
                                <th className="px-6 py-4 text-right text-sm font-bold">Previous Reading</th>
                                <th className="px-6 py-4 text-right text-sm font-bold">Current Reading</th>
                                <th className="px-6 py-4 text-right text-sm font-bold">Usage (kWh)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e5e7eb]">
                            {invoiceData.meterReadings.map((reading, index) => (
                                <tr key={index} className="hover:bg-[#f9fafb]">
                                    <td className="p-4">
                                        <div className="text-sm">
                                            <div className="font-semibold text-[#1f2937]">{reading.meterType}</div>
                                            <div className="text-[#4b5563]">Meter ID: {reading.meterNumber}</div>
                                            <div className="text-[#6b7280] text-xs">Location: {reading.meterLocation}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="text-[16px] font-semibold text-[#1f2937]">{reading.previousReading.toLocaleString()}</div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="text-[16px] font-semibold text-[#1f2937]">{reading.currentReading.toLocaleString()}</div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="text-[16px] font-bold text-[#0e7490]">{reading.usage.toLocaleString()} kWh</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Simple Tariff Breakdown */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">TARIFF BREAKDOWN</h3>
                <div className="bg-[#ffffff] border border-[#d1d5db] rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-[#f3f4f6]">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-bold text-[#374151]">Description</th>
                                <th className="px-6 py-3 text-right text-sm font-bold text-[#374151]">Usage (kWh)</th>
                                <th className="px-6 py-3 text-right text-sm font-bold text-[#374151]">Rate per kWh</th>
                                <th className="px-6 py-3 text-right text-sm font-bold text-[#374151]">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e5e7eb]">
                            <tr>
                                <td className="px-6 py-3 text-sm text-[#1f2937]">Electricity Consumption</td>
                                <td className="px-6 py-3 text-right text-sm text-[#1f2937]">{invoiceData.meterReadings[0].usage.toLocaleString()}</td>
                                <td className="px-6 py-3 text-right text-sm text-[#1f2937]">{formatCurrency(invoiceData.tariff.rate)}</td>
                                <td className="px-6 py-3 text-right text-sm font-semibold text-[#1f2937]">{formatCurrency(multiply(invoiceData.tariff.rate,invoiceData.meterReadings[0].usage))}</td>
                            </tr>
                            <tr className="bg-[#ecfeff]">
                                <td className="px-6 py-3 text-sm font-bold text-[#0e7490]">Total Energy Charges</td>
                                <td className="px-6 py-3 text-right text-sm font-bold text-[#0e7490]">{invoiceData.meterReadings[0].usage.toLocaleString()} kWh</td>
                                <td className="px-6 py-3"></td>
                                <td className="px-6 py-3 text-right text-sm font-bold text-[#0e7490]">{formatCurrency(multiply(invoiceData.tariff.rate,invoiceData.meterReadings[0].usage))}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Charges Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">PAYMENT INSTRUCTIONS</h3>
                    <div className="bg-[#fffbeb] border border-[#fde68a] p-6 rounded-lg">
                        <div className="text-sm text-[#374151] space-y-2">
                            <p><span className="font-semibold">Payment Due:</span> {formatDate(invoiceData.dueDate)}</p>
                            <p><span className="font-semibold">Amount Due:</span> <span className="text-xl font-bold text-[#dc2626]">{formatCurrency(sum(multiply(invoiceData.tariff.rate,invoiceData.meterReadings[0].usage),invoiceData.charges.deliveryCharges,invoiceData.charges.connectionFee,invoiceData.charges.regulatoryFees))}</span></p>
                            <p><span className="font-semibold">Account Number:</span> {invoiceData.accountNumber}</p>
                            <p className="text-xs text-[#4b5563] mt-3">
                                Late payments may incur additional fees. Please include your account number with all payments.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-[#1f2937] mb-4 border-b-2 border-[#e5e7eb] pb-2">BILLING SUMMARY</h3>
                    <div className="bg-[#f9fafb] border border-[#e5e7eb] p-6 rounded-lg">
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-[#4b5563]">Energy Charges:</span>
                                <span className="text-[#1f2937] font-semibold">{formatCurrency(sum(invoiceData.tariff.rate,invoiceData.meterReadings[0].usage))}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[#4b5563]">Delivery Charges:</span>
                                <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.deliveryCharges)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[#4b5563]">Connection Fee:</span>
                                <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.connectionFee)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[#4b5563]">Regulatory Fees:</span>
                                <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.regulatoryFees)}</span>
                            </div>
                            <hr className="border-[#d1d5db]" />
                            <div className="flex justify-between text-sm">
                                <span className="text-[#4b5563]">Subtotal:</span>
                                <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[#4b5563]">Tax (8.0%):</span>
                                <span className="text-[#1f2937] font-semibold">{formatCurrency(invoiceData.charges.tax)}</span>
                            </div>
                            <hr className="border-[#9ca3af]" />
                            <div className="flex justify-between text-lg font-bold bg-[#e0f7fa] p-3 rounded">
                                <span className="text-[#0e7490]">TOTAL AMOUNT DUE:</span>
                                <span className="text-[#0e7490]">{formatCurrency(sum(multiply(invoiceData.tariff.rate,invoiceData.meterReadings[0].usage),invoiceData.charges.deliveryCharges,invoiceData.charges.connectionFee,invoiceData.charges.regulatoryFees))}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-[#f9fafb] border border-[#e5e7eb] p-6 rounded-lg mb-6">
                <h3 className="text-sm font-bold text-[#1f2937] mb-3">TERMS & CONDITIONS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#4b5563]">
                    <div>
                        <p className="mb-2">• Payment is due within 30 days of invoice date</p>
                        <p className="mb-2">• Late payments subject to 1.5% monthly service charge</p>
                        <p className="mb-2">• Service may be disconnected for non-payment</p>
                    </div>
                    <div>
                        <p className="mb-2">• Meter readings are actual unless marked as estimated</p>
                        <p className="mb-2">• Questions about your bill: {invoiceData.utilityCompany.phone}</p>
                        <p className="mb-2">• Energy efficiency programs available online</p>
                    </div>
                </div>
            </div>

            {/* Professional Footer */}
            <div className="text-center border-t border-[#d1d5db] pt-6">
                <p className="text-sm text-[#4b5563] mb-2">
                    <span className="font-semibold">{invoiceData.utilityCompany.name}</span> | Reliable Power for Your Community Since 1952
                </p>
                <p className="text-xs text-[#6b7280]">
                    For customer service, visit {invoiceData.utilityCompany.website} or call {invoiceData.utilityCompany.phone}
                </p>
                <p className="text-xs text-[#9ca3af] mt-2">
                    This invoice was generated electronically on {formatDate(invoiceData.issueDate)}
                </p>
            </div>
        </div>
    );
};

export default InvoiceContent;