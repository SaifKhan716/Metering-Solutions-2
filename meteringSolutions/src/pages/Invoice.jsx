// import React from 'react';

// const Invoice = () => {
//   // PDF download function
//   const downloadPDF = () => {
//     // Hide the download button before printing
//     const downloadBtn = document.getElementById('download-btn');
//     if (downloadBtn) {
//       downloadBtn.style.display = 'none';
//     }

//     // Set up print styles
//     const printStyles = `
//       @media print {
//         body { margin: 0; padding: 0; }
//         .no-print { display: none !important; }
//         .print-page { 
//           page-break-inside: avoid; 
//           margin: 0;
//           padding: 0;
//         }
//         .shadow-2xl { box-shadow: none !important; }
//       }
//     `;

//     // Add print styles to head
//     const styleSheet = document.createElement('style');
//     styleSheet.textContent = printStyles;
//     document.head.appendChild(styleSheet);

//     // Trigger print dialog
//     window.print();

//     // Clean up - show button again and remove styles
//     setTimeout(() => {
//       if (downloadBtn) {
//         downloadBtn.style.display = 'block';
//       }
//       document.head.removeChild(styleSheet);
//     }, 100);
//   };

// // Professional electricity meter reading data
// const invoiceData = {
//   invoiceNumber: "ELE-2025-001234",
//   accountNumber: "4789-6512-3847",
//   customerInfo: {
//     name: "John Michael Smith",
//     address: "1247 Oakwood Drive",
//     city: "Springfield",
//     state: "Illinois",
//     zipCode: "62701",
//     phone: "(555) 123-4567",
//     email: "john.smith@email.com"
//   },
//   utilityCompany: {
//     name: "PowerGrid Electric Company",
//     address: "2500 Corporate Plaza, Suite 800",
//     city: "Springfield",
//     state: "Illinois",
//     zipCode: "62702",
//     phone: "(555) 987-6543",
//     email: "billing@powergrid.com",
//     website: "www.powergrid.com",
//     license: "Electric Utility License #EUL-2024-IL-789"
//   },
//   billingPeriod: {
//     from: "2024-12-01",
//     to: "2024-12-31",
//     days: 31
//   },
//   meterReadings: [
//     {
//       meterType: "Smart Digital Meter",
//       meterNumber: "ELE-SM-445789",
//       meterLocation: "Main Service Panel",
//       previousReading: 45678,
//       currentReading: 46234,
//       usage: 556,
//       unit: "kWh",
//       peakUsage: 334,
//       offPeakUsage: 222,
//       peakRate: 0.1450,
//       offPeakRate: 0.0890,
//       peakAmount: 48.43,
//       offPeakAmount: 19.76,
//       amount: 68.19
//     }
//   ],
//   charges: {
//     energyCharges: 68.19,
//     deliveryCharges: 24.50,
//     connectionFee: 12.00,
//     regulatoryFees: 3.85,
//     subtotal: 108.54,
//     tax: 8.68,
//     total: 117.22
//   },
//   dueDate: "2025-01-31",
//   issueDate: "2025-01-03",
//   readDate: "2024-12-31",
//   paymentTerms: "Net 30 Days"
// };

// const formatDate = (dateString) => {
//   return new Date(dateString).toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });
// };

// const formatCurrency = (amount) => {
//   return new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2
//   }).format(amount);
// };

//   return (
//     <div className="max-w-5xl mx-auto p-8 bg-white shadow-2xl border border-gray-200 print-page my-4">
//       {/* Download PDF Button */}
//       <div id="download-btn" className="no-print mb-6 text-center">
//         <button
//           onClick={downloadPDF}
//           className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 inline-flex items-center"
//         >
//           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//           </svg>
//           Download PDF
//         </button>
//       </div>
//       {/* Professional Header */}
//       <div className="border-b-4 border-cyan-700 pb-8 mb-8">
//         <div className="flex justify-between items-start">
//           <div className="flex-1">
//             <div className="flex items-center mb-4">
//               <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center mr-4">
//                 <span className="text-white font-bold text-xl">P</span>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-cyan-700 mb-1">
//                   {invoiceData.utilityCompany.name}
//                 </h1>
//                 <p className="text-sm text-gray-600 font-medium">Electric Utility Services</p>
//               </div>
//             </div>
//             <div className="text-sm text-gray-700 leading-relaxed">
//               <p className="font-semibold mb-1">{invoiceData.utilityCompany.address}</p>
//               <p className="mb-1">{invoiceData.utilityCompany.city}, {invoiceData.utilityCompany.state} {invoiceData.utilityCompany.zipCode}</p>
//               <p className="mb-1">Phone: {invoiceData.utilityCompany.phone}</p>
//               <p className="mb-1">Email: {invoiceData.utilityCompany.email}</p>
//               <p className="text-xs text-gray-500">{invoiceData.utilityCompany.license}</p>
//             </div>
//           </div>
//           <div className="text-right">
//             <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
//               <h2 className="text-3xl font-bold text-cyan-700 mb-2">INVOICE</h2>
//               <div className="text-sm text-gray-700 space-y-1">
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Invoice #:</span>
//                   <span className="font-mono">{invoiceData.invoiceNumber}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Issue Date:</span>
//                   <span>{formatDate(invoiceData.issueDate)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Due Date:</span>
//                   <span className="text-red-600 font-semibold">{formatDate(invoiceData.dueDate)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Terms:</span>
//                   <span>{invoiceData.paymentTerms}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Customer & Account Information */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//         <div>
//           <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">CUSTOMER INFORMATION</h3>
//           <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
//             <div className="space-y-2">
//               <div className="font-bold text-gray-800 text-lg">{invoiceData.customerInfo.name}</div>
//               <div className="text-gray-700">{invoiceData.customerInfo.address}</div>
//               <div className="text-gray-700">{invoiceData.customerInfo.city}, {invoiceData.customerInfo.state} {invoiceData.customerInfo.zipCode}</div>
//               <div className="text-gray-600 text-sm mt-3">
//                 <div>Phone: {invoiceData.customerInfo.phone}</div>
//                 <div>Email: {invoiceData.customerInfo.email}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">ACCOUNT DETAILS</h3>
//           <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
//             <div className="space-y-3">
//               <div className="flex justify-between">
//                 <span className="text-gray-600 font-semibold">Account Number:</span>
//                 <span className="font-mono text-gray-800">{invoiceData.accountNumber}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600 font-semibold">Billing Period:</span>
//                 <span className="text-gray-800">{invoiceData.billingPeriod.days} Days</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600 font-semibold">Period:</span>
//                 <span className="text-gray-800">{formatDate(invoiceData.billingPeriod.from)} - {formatDate(invoiceData.billingPeriod.to)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600 font-semibold">Meter Read Date:</span>
//                 <span className="text-gray-800">{formatDate(invoiceData.readDate)}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Meter Reading Details */}
//       <div className="mb-8">
//         <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">ELECTRICITY USAGE DETAILS</h3>
//         <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
//           <table className="w-full">
//             <thead className="bg-cyan-700 text-white">
//               <tr>
//                 <th className="px-6 py-4 text-left text-sm font-bold">Meter Information</th>
//                 <th className="px-6 py-4 text-right text-sm font-bold">Previous Reading</th>
//                 <th className="px-6 py-4 text-right text-sm font-bold">Current Reading</th>
//                 <th className="px-6 py-4 text-right text-sm font-bold">Usage (kWh)</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {invoiceData.meterReadings.map((reading, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-6 py-4">
//                     <div className="text-sm">
//                       <div className="font-semibold text-gray-800">{reading.meterType}</div>
//                       <div className="text-gray-600">Meter #: {reading.meterNumber}</div>
//                       <div className="text-gray-500 text-xs">Location: {reading.meterLocation}</div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-right">
//                     <div className="text-lg font-semibold text-gray-800">{reading.previousReading.toLocaleString()}</div>
//                   </td>
//                   <td className="px-6 py-4 text-right">
//                     <div className="text-lg font-semibold text-gray-800">{reading.currentReading.toLocaleString()}</div>
//                   </td>
//                   <td className="px-6 py-4 text-right">
//                     <div className="text-xl font-bold text-cyan-700">{reading.usage.toLocaleString()} kWh</div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Usage Breakdown */}
//       <div className="mb-8">
//         <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">USAGE BREAKDOWN & RATES</h3>
//         <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
//           <table className="w-full">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Rate Type</th>
//                 <th className="px-6 py-3 text-right text-sm font-bold text-gray-700">Usage (kWh)</th>
//                 <th className="px-6 py-3 text-right text-sm font-bold text-gray-700">Rate</th>
//                 <th className="px-6 py-3 text-right text-sm font-bold text-gray-700">Amount</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               <tr>
//                 <td className="px-6 py-3 text-sm text-gray-800">Peak Hours (7AM-7PM)</td>
//                 <td className="px-6 py-3 text-right text-sm text-gray-800">{invoiceData.meterReadings[0].peakUsage}</td>
//                 <td className="px-6 py-3 text-right text-sm text-gray-800">{formatCurrency(invoiceData.meterReadings[0].peakRate)}</td>
//                 <td className="px-6 py-3 text-right text-sm font-semibold text-gray-800">{formatCurrency(invoiceData.meterReadings[0].peakAmount)}</td>
//               </tr>
//               <tr>
//                 <td className="px-6 py-3 text-sm text-gray-800">Off-Peak Hours (7PM-7AM)</td>
//                 <td className="px-6 py-3 text-right text-sm text-gray-800">{invoiceData.meterReadings[0].offPeakUsage}</td>
//                 <td className="px-6 py-3 text-right text-sm text-gray-800">{formatCurrency(invoiceData.meterReadings[0].offPeakRate)}</td>
//                 <td className="px-6 py-3 text-right text-sm font-semibold text-gray-800">{formatCurrency(invoiceData.meterReadings[0].offPeakAmount)}</td>
//               </tr>
//               <tr className="bg-cyan-50">
//                 <td className="px-6 py-3 text-sm font-bold text-cyan-700">Total Energy Charges</td>
//                 <td className="px-6 py-3 text-right text-sm font-bold text-cyan-700">{invoiceData.meterReadings[0].usage} kWh</td>
//                 <td className="px-6 py-3"></td>
//                 <td className="px-6 py-3 text-right text-sm font-bold text-cyan-700">{formatCurrency(invoiceData.charges.energyCharges)}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Charges Summary */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//         <div>
//           <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">PAYMENT INSTRUCTIONS</h3>
//           <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
//             <div className="text-sm text-gray-700 space-y-2">
//               <p><span className="font-semibold">Payment Due:</span> {formatDate(invoiceData.dueDate)}</p>
//               <p><span className="font-semibold">Amount Due:</span> <span className="text-xl font-bold text-red-600">{formatCurrency(invoiceData.charges.total)}</span></p>
//               <p><span className="font-semibold">Account Number:</span> {invoiceData.accountNumber}</p>
//               <p className="text-xs text-gray-600 mt-3">
//                 Late payments may incur additional fees. Please include your account number with all payments.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">BILLING SUMMARY</h3>
//           <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
//             <div className="space-y-3">
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Energy Charges:</span>
//                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.energyCharges)}</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Delivery Charges:</span>
//                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.deliveryCharges)}</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Connection Fee:</span>
//                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.connectionFee)}</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Regulatory Fees:</span>
//                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.regulatoryFees)}</span>
//               </div>
//               <hr className="border-gray-300" />
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Subtotal:</span>
//                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.subtotal)}</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Tax (8.0%):</span>
//                 <span className="text-gray-800 font-semibold">{formatCurrency(invoiceData.charges.tax)}</span>
//               </div>
//               <hr className="border-gray-400" />
//               <div className="flex justify-between text-lg font-bold bg-cyan-100 p-3 rounded">
//                 <span className="text-cyan-800">TOTAL AMOUNT DUE:</span>
//                 <span className="text-cyan-800">{formatCurrency(invoiceData.charges.total)}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Terms and Conditions */}
//       <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
//         <h3 className="text-sm font-bold text-gray-800 mb-3">TERMS & CONDITIONS</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-600">
//           <div>
//             <p className="mb-2">• Payment is due within 30 days of invoice date</p>
//             <p className="mb-2">• Late payments subject to 1.5% monthly service charge</p>
//             <p className="mb-2">• Service may be disconnected for non-payment</p>
//           </div>
//           <div>
//             <p className="mb-2">• Meter readings are actual unless marked as estimated</p>
//             <p className="mb-2">• Questions about your bill: {invoiceData.utilityCompany.phone}</p>
//             <p className="mb-2">• Energy efficiency programs available online</p>
//           </div>
//         </div>
//       </div>

//       {/* Professional Footer */}
//       <div className="text-center border-t border-gray-300 pt-6">
//         <p className="text-sm text-gray-600 mb-2">
//           <span className="font-semibold">{invoiceData.utilityCompany.name}</span> | Reliable Power for Your Community Since 1952
//         </p>
//         <p className="text-xs text-gray-500">
//           For customer service, visit {invoiceData.utilityCompany.website} or call {invoiceData.utilityCompany.phone}
//         </p>
//         <p className="text-xs text-gray-400 mt-2">
//           This invoice was generated electronically on {formatDate(invoiceData.issueDate)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Invoice;

// import React, { useRef } from 'react';
// import InvoiceContent from '../components/invoice/InvoiceContent';
// import html2pdf from 'html2pdf.js';

// const MeterReadingInvoice = () => {
//   const invoiceRef = useRef();

//   const downloadPDF = () => {
//     const element = invoiceRef.current;

//     const opt = {
//       margin: 0,
//       filename: 'meter-invoice.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2, scrollY: 0 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     html2pdf().set(opt).from(element).save();
//   };

//   // your invoiceData, formatDate, formatCurrency as before...
//   // Professional electricity meter reading data
//   const invoiceData = {
//     invoiceNumber: "ELE-2025-001234",
//     accountNumber: "4789-6512-3847",
//     customerInfo: {
//       name: "Avinash Yadav",
//       address: "1247 Oakwood Drive",
//       city: "Springfield",
//       state: "Illinois",
//       zipCode: "62701",
//       phone: "(555) 123-4567",
//       email: "john.smith@email.com"
//     },
//     utilityCompany: {
//       name: "Smartlynk Power Solutions Pvt Ltd",
//       address: "2500 Corporate Plaza, Suite 800",
//       city: "Springfield",
//       state: "Illinois",
//       zipCode: "62702",
//       phone: "(555) 987-6543",
//       email: "billing@smartlynk.com",
//       website: "www.smartlynk.net",
//       license: "Electric Utility License #EUL-2024-IL-789"
//     },
//     billingPeriod: {
//       from: "2024-12-01",
//       to: "2024-12-31",
//       days: 31
//     },
//     meterReadings: [
//       {
//         meterType: "Smart Digital Meter",
//         meterNumber: "ELE-SM-445789",
//         meterLocation: "Main Service Panel",
//         previousReading: 45678,
//         currentReading: 46234,
//         usage: 556,
//         unit: "kWh",
//         peakUsage: 334,
//         offPeakUsage: 222,
//         peakRate: 0.1450,
//         offPeakRate: 0.0890,
//         peakAmount: 48.43,
//         offPeakAmount: 19.76,
//         amount: 68.19
//       }
//     ],
//     charges: {
//       energyCharges: 68.19,
//       deliveryCharges: 24.50,
//       connectionFee: 12.00,
//       regulatoryFees: 3.85,
//       subtotal: 108.54,
//       tax: 8.68,
//       total: 117.22
//     },
//     dueDate: "2025-01-31",
//     issueDate: "2025-01-03",
//     readDate: "2024-12-31",
//     paymentTerms: "Net 30 Days"
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 2
//     }).format(amount);
//   };


//   return (
//     <div className='p-2'>
//       {/* Download Button */}
// <div className="no-print p-4 text-center flex justify-between items-center">
// <h2 className="text-2xl font-bold text-cyan-700 mb-1">Invoice</h2>
//   <button
//     onClick={downloadPDF}
//     className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 inline-flex items-center"
//   >
//     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//     </svg>
//     Download PDF
//   </button>

// </div>

//       {/* Actual Invoice */}
//       <div ref={invoiceRef}>
//         <InvoiceContent
//           invoiceData={invoiceData}
//           formatDate={formatDate}
//           formatCurrency={formatCurrency}
//         />
//       </div>
//     </div>
//   );
// };

// export default MeterReadingInvoice;



// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import InvoiceContent from '../components/invoice/InvoiceContent';

// const MeterReadingInvoice = () => {
//   const invoiceRef = useRef();

//   const downloadPDF = async () => {
//     const element = invoiceRef.current;

//     // Scroll to top to ensure full visibility
//     window.scrollTo(0, 0);

//     const canvas = await html2canvas(element, {
//       scale: 2,
//       scrollY: -window.scrollY, // ensures only invoice content
//       useCORS: true,
//     });

//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save('meter-invoice.pdf');
//   };

//   // Your invoice data and format functions
//   const invoiceData = {
//     invoiceNumber: "ELE-2025-001234",
//     accountNumber: "4789-6512-3847",
//     customerInfo: {
//       name: "Avinash Yadav",
//       address: "1247 Oakwood Drive",
//       city: "Springfield",
//       state: "Illinois",
//       zipCode: "62701",
//       phone: "(555) 123-4567",
//       email: "john.smith@email.com"
//     },
//     utilityCompany: {
//       name: "Smartlynk Power Solutions Pvt Ltd",
//       address: "2500 Corporate Plaza, Suite 800",
//       city: "Springfield",
//       state: "Illinois",
//       zipCode: "62702",
//       phone: "(555) 987-6543",
//       email: "billing@smartlynk.com",
//       website: "www.smartlynk.net",
//       license: "Electric Utility License #EUL-2024-IL-789"
//     },
//     billingPeriod: {
//       from: "2024-12-01",
//       to: "2024-12-31",
//       days: 31
//     },
//     meterReadings: [
//       {
//         meterType: "Smart Digital Meter",
//         meterNumber: "ELE-SM-445789",
//         meterLocation: "Main Service Panel",
//         previousReading: 45678,
//         currentReading: 46234,
//         usage: 556,
//         unit: "kWh",
//         peakUsage: 334,
//         offPeakUsage: 222,
//         peakRate: 0.1450,
//         offPeakRate: 0.0890,
//         peakAmount: 48.43,
//         offPeakAmount: 19.76,
//         amount: 68.19
//       }
//     ],
//     charges: {
//       energyCharges: 68.19,
//       deliveryCharges: 24.50,
//       connectionFee: 12.00,
//       regulatoryFees: 3.85,
//       subtotal: 108.54,
//       tax: 8.68,
//       total: 117.22
//     },
//     dueDate: "2025-01-31",
//     issueDate: "2025-01-03",
//     readDate: "2024-12-31",
//     paymentTerms: "Net 30 Days"
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 2
//     }).format(amount);
//   };

//   return (
//     <div className="p-4">
//       {/* Only this button is outside the PDF area */}
//       <div className="no-print flex justify-between mb-4 px-auto items-center">
//         <h2 className="text-2xl font-bold text-cyan-700 mb-1">INVOICE</h2>
//         <button
//           onClick={downloadPDF}
//           className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 inline-flex items-center"
//         >
//           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//           </svg>
//           Download PDF
//         </button>
//       </div>

//       {/* This section only will be in PDF */}
//       <div ref={invoiceRef}>
//         <InvoiceContent
//           invoiceData={invoiceData}
//           formatDate={formatDate}
//           formatCurrency={formatCurrency}
//         />
//       </div>
//     </div>
//   );
// };

// export default MeterReadingInvoice;


// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import InvoiceContent from '../components/invoice/InvoiceContent';

// const MeterReadingInvoice = () => {
//   const invoiceRef = useRef();

//   const downloadPDF = async () => {
//     const element = invoiceRef.current;

//     // Store original scroll position
//     const originalScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const originalScrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

//     try {
//       // Scroll to top-left to ensure full visibility
//       window.scrollTo(0, 0);
      
//       // Wait a moment for scroll to complete
//       await new Promise(resolve => setTimeout(resolve, 100));

//       const canvas = await html2canvas(element, {
//         scale: 2,
//         scrollX: 0,
//         scrollY: 0,
//         useCORS: true,
//         allowTaint: true,
//         backgroundColor: '#ffffff',
//         removeContainer: true,
//         logging: false,
//         width: element.scrollWidth,
//         height: element.scrollHeight,
//         windowWidth: element.scrollWidth,
//         windowHeight: element.scrollHeight,
//         x: 0,
//         y: 0
//       });

//       // Get the actual content dimensions
//       const imgData = canvas.toDataURL('image/png', 1.0);
      
//       // Create PDF with proper sizing
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });

//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();
      
//       // Calculate dimensions to fit content properly
//       const imgWidth = pdfWidth;
//       const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

//       // If content is longer than one page, handle multiple pages
//       if (imgHeight > pdfHeight) {
//         let heightLeft = imgHeight;
//         let position = 0;
        
//         // Add first page
//         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pdfHeight;
        
//         // Add additional pages if needed
//         while (heightLeft >= 0) {
//           position = heightLeft - imgHeight;
//           pdf.addPage();
//           pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//           heightLeft -= pdfHeight;
//         }
//       } else {
//         // Single page - center the content
//         const yPosition = (pdfHeight - imgHeight) / 2;
//         pdf.addImage(imgData, 'PNG', 0, Math.max(0, yPosition), imgWidth, imgHeight);
//       }

//       // Save the PDF
//       pdf.save('meter-invoice.pdf');
      
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       alert('Error generating PDF. Please try again.');
//     } finally {
//       // Restore original scroll position
//       window.scrollTo(originalScrollLeft, originalScrollTop);
//     }
//   };

//   // Your invoice data and format functions
//   const invoiceData = {
//     invoiceNumber: "ELE-2025-001234",
//     accountNumber: "4789-6512-3847",
//     customerInfo: {
//       name: "Avinash Yadav",
//       address: "1247 Oakwood Drive",
//       city: "Springfield",
//       state: "Illinois",
//       zipCode: "62701",
//       phone: "(555) 123-4567",
//       email: "john.smith@email.com"
//     },
//     utilityCompany: {
//       name: "Smartlynk Power Solutions Pvt Ltd",
//       address: "2500 Corporate Plaza, Suite 800",
//       city: "Springfield",
//       state: "Illinois",
//       zipCode: "62702",
//       phone: "(555) 987-6543",
//       email: "billing@smartlynk.com",
//       website: "www.smartlynk.net",
//       license: "Electric Utility License #EUL-2024-IL-789"
//     },
//     billingPeriod: {
//       from: "2024-12-01",
//       to: "2024-12-31",
//       days: 31
//     },
//     meterReadings: [
//       {
//         meterType: "Smart Digital Meter",
//         meterNumber: "ELE-SM-445789",
//         meterLocation: "Main Service Panel",
//         previousReading: 45678,
//         currentReading: 46234,
//         usage: 556,
//         unit: "kWh",
//         peakUsage: 334,
//         offPeakUsage: 222,
//         peakRate: 0.1450,
//         offPeakRate: 0.0890,
//         peakAmount: 48.43,
//         offPeakAmount: 19.76,
//         amount: 68.19
//       }
//     ],
//     charges: {
//       energyCharges: 68.19,
//       deliveryCharges: 24.50,
//       connectionFee: 12.00,
//       regulatoryFees: 3.85,
//       subtotal: 108.54,
//       tax: 8.68,
//       total: 117.22
//     },
//     dueDate: "2025-01-31",
//     issueDate: "2025-01-03",
//     readDate: "2024-12-31",
//     paymentTerms: "Net 30 Days"
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 2
//     }).format(amount);
//   };

//   return (
//     <div className="p-4">
//       {/* Only this button is outside the PDF area */}
//       <div className="no-print flex justify-between mb-4 px-auto items-center">
//         <h2 className="text-2xl font-bold text-cyan-700 mb-1">INVOICE</h2>
//         <button
//           onClick={downloadPDF}
//           className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 inline-flex items-center"
//         >
//           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//           </svg>
//           Download PDF
//         </button>
//       </div>

//       {/* This section only will be in PDF */}
//       <div 
//         ref={invoiceRef}
//         style={{
//           width: '100%',
//           minHeight: 'fit-content',
//           backgroundColor: '#ffffff',
//           boxSizing: 'border-box'
//         }}
//       >
//         <InvoiceContent
//           invoiceData={invoiceData}
//           formatDate={formatDate}
//           formatCurrency={formatCurrency}
//         />
//       </div>
//     </div>
//   );
// };

// export default MeterReadingInvoice;

//better version with better handling of zoom and scroll issues

// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import InvoiceContent from '../components/invoice/InvoiceContent';

// const MeterReadingInvoice = () => {
//   const invoiceRef = useRef();

//   const downloadPDF = async () => {
//     const element = invoiceRef.current;

//     if (!element) {
//       alert('Invoice content not found. Please try again.');
//       return;
//     }

//     // Store original scroll position and zoom
//     const originalScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const originalScrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     const originalZoom = document.body.style.zoom;
//     const originalTransform = document.body.style.transform;

//     try {
//       // Detect current zoom level
//       const currentZoom = window.devicePixelRatio;
//       console.log('Current zoom level:', currentZoom);

//       // Temporarily reset zoom to 100% for consistent rendering
//       document.body.style.zoom = '1';
//       document.body.style.transform = 'scale(1)';
      
//       // Scroll to top-left to ensure full visibility
//       window.scrollTo(0, 0);
      
//       // Wait for zoom reset and scroll to complete
//       await new Promise(resolve => setTimeout(resolve, 500));

//       console.log('Starting PDF generation...');
//       console.log('Element dimensions:', {
//         width: element.offsetWidth,
//         height: element.offsetHeight,
//         scrollWidth: element.scrollWidth,
//         scrollHeight: element.scrollHeight
//       });

//       // Get the actual content dimensions at 100% zoom
//       const elementRect = element.getBoundingClientRect();
//       const actualWidth = Math.max(element.offsetWidth, element.scrollWidth);
//       const actualHeight = Math.max(element.offsetHeight, element.scrollHeight);

//       const canvas = await html2canvas(element, {
//         scale: 2, // Higher scale for better quality
//         useCORS: true,
//         allowTaint: true,
//         backgroundColor: '#ffffff',
//         logging: true,
//         width: actualWidth,
//         height: actualHeight,
//         scrollX: 0,
//         scrollY: 0,
//         windowWidth: actualWidth,
//         windowHeight: actualHeight,
//         // Force the canvas to use the actual dimensions
//         onclone: (clonedDoc) => {
//           // Ensure the cloned document has consistent styling
//           const clonedElement = clonedDoc.querySelector('[data-html2canvas-clone]');
//           if (clonedElement) {
//             clonedElement.style.width = actualWidth + 'px';
//             clonedElement.style.height = actualHeight + 'px';
//             clonedElement.style.transform = 'scale(1)';
//             clonedElement.style.zoom = '1';
//           }
          
//           // Reset any zoom/transform on the cloned document
//           clonedDoc.body.style.zoom = '1';
//           clonedDoc.body.style.transform = 'scale(1)';
//           clonedDoc.documentElement.style.zoom = '1';
//         },
//         ignoreElements: (element) => {
//           return element.classList && element.classList.contains('no-print');
//         }
//       });

//       console.log('Canvas created:', {
//         width: canvas.width,
//         height: canvas.height
//       });

//       if (canvas.width === 0 || canvas.height === 0) {
//         throw new Error('Canvas has zero dimensions');
//       }

//       // Get the canvas data
//       const imgData = canvas.toDataURL('image/png', 1.0);
      
//       if (!imgData || imgData === 'data:,') {
//         throw new Error('Failed to generate image data');
//       }

//       console.log('Image data generated successfully');
      
//       // Create PDF
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });

//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();
      
//       // Calculate dimensions
//       const imgProps = pdf.getImageProperties(imgData);
//       const imgRatio = imgProps.height / imgProps.width;
      
//       // Add margins
//       const margin = 10;
//       const availableWidth = pdfWidth - (margin * 2);
//       const availableHeight = pdfHeight - (margin * 2);
      
//       let imgWidth = availableWidth;
//       let imgHeight = availableWidth * imgRatio;
      
//       // If height exceeds available space, scale down
//       if (imgHeight > availableHeight) {
//         imgHeight = availableHeight;
//         imgWidth = imgHeight / imgRatio;
//       }

//       // Center the image on the page
//       const xPosition = (pdfWidth - imgWidth) / 2;
//       const yPosition = margin;

//       // Add the image to PDF
//       pdf.addImage(imgData, 'PNG', xPosition, yPosition, imgWidth, imgHeight);

//       console.log('PDF generated successfully');

//       // Save the PDF
//       pdf.save('meter-invoice.pdf');
      
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       alert(`Error generating PDF: ${error.message}. Please check the console for details.`);
//     } finally {
//       // Restore original zoom, transform, and scroll position
//       if (originalZoom) {
//         document.body.style.zoom = originalZoom;
//       } else {
//         document.body.style.zoom = '';
//       }
      
//       if (originalTransform) {
//         document.body.style.transform = originalTransform;
//       } else {
//         document.body.style.transform = '';
//       }
      
//       window.scrollTo(originalScrollLeft, originalScrollTop);
//     }
//   };

//   // Your invoice data and format functions
//   const invoiceData = {
//     invoiceNumber: "ELE-2025-001234",
//     accountNumber: "4789-6512-3847",
//     customerInfo: {
//       name: "Avinash Yadav",
//       address: "1247 Oakwood Drive",
//       city: "Springfield",
//       state: "Illinois",
//       zipCode: "62701",
//       phone: "(555) 123-4567",
//       email: "john.smith@email.com"
//     },
//     utilityCompany: {
//       name: "Smartlynk Power Solutions Pvt Ltd",
//       address: "2500 Corporate Plaza, Suite 800",
//       city: "Springfield",
//       state: "Illinois",
//       zipCode: "62702",
//       phone: "(555) 987-6543",
//       email: "billing@smartlynk.com",
//       website: "www.smartlynk.net",
//       license: "Electric Utility License #EUL-2024-IL-789"
//     },
//     billingPeriod: {
//       from: "2024-12-01",
//       to: "2024-12-31",
//       days: 31
//     },
//     meterReadings: [
//       {
//         meterType: "Smart Digital Meter",
//         meterNumber: "ELE-SM-445789",
//         meterLocation: "Main Service Panel",
//         previousReading: 45678,
//         currentReading: 46234,
//         usage: 556,
//         unit: "kWh",
//         peakUsage: 334,
//         offPeakUsage: 222,
//         peakRate: 0.1450,
//         offPeakRate: 0.0890,
//         peakAmount: 48.43,
//         offPeakAmount: 19.76,
//         amount: 68.19
//       }
//     ],
//     charges: {
//       energyCharges: 68.19,
//       deliveryCharges: 24.50,
//       connectionFee: 12.00,
//       regulatoryFees: 3.85,
//       subtotal: 108.54,
//       tax: 8.68,
//       total: 117.22
//     },
//     dueDate: "2025-01-31",
//     issueDate: "2025-01-03",
//     readDate: "2024-12-31",
//     paymentTerms: "Net 30 Days"
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 2
//     }).format(amount);
//   };

//   return (
//     <div className="p-4">
//       {/* Only this button is outside the PDF area */}
//       <div className="no-print flex justify-between mb-4 px-auto items-center">
//         <h2 className="text-2xl font-bold text-cyan-700 mb-1">INVOICE</h2>
//         <button
//           onClick={downloadPDF}
//           className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 inline-flex items-center"
//         >
//           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//           </svg>
//           Download PDF
//         </button>
//       </div>

//       {/* This section only will be in PDF */}
//       <div 
//         ref={invoiceRef}
//         style={{
//           width: '794px', // A4 width at 96 DPI
//           minHeight: '1123px', // A4 height at 96 DPI
//           backgroundColor: '#ffffff',
//           boxSizing: 'border-box',
//           padding: '40px',
//           margin: '0 auto',
//           fontFamily: 'Arial, sans-serif',
//           fontSize: '14px',
//           lineHeight: '1.5',
//           color: '#333',
//           position: 'relative',
//           // Ensure consistent rendering regardless of zoom
//           transform: 'scale(1)',
//           transformOrigin: 'top left',
//           zoom: '1'
//         }}
//       >
//         <InvoiceContent
//           invoiceData={invoiceData}
//           formatDate={formatDate}
//           formatCurrency={formatCurrency}
//         />
//       </div>
//     </div>
//   );
// };

// export default MeterReadingInvoice;

import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import InvoiceContent from '../components/invoice/InvoiceContent';

const MeterReadingInvoice = () => {
  const invoiceRef = useRef();

  const downloadPDF = async () => {
    const element = invoiceRef.current;

    if (!element) {
      alert('Invoice content not found. Please try again.');
      return;
    }

    // Store original scroll position and zoom
    const originalScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const originalScrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const originalZoom = document.body.style.zoom;
    const originalTransform = document.body.style.transform;

    try {
      // Detect current zoom level
      const currentZoom = window.devicePixelRatio;
      console.log('Current zoom level:', currentZoom);

      // Temporarily reset zoom to 100% for consistent rendering
      document.body.style.zoom = '1';
      document.body.style.transform = 'scale(1)';
      
      // Scroll to top-left to ensure full visibility
      window.scrollTo(0, 0);
      
      // Wait for zoom reset and scroll to complete
      await new Promise(resolve => setTimeout(resolve, 500));

      console.log('Starting PDF generation...');
      console.log('Element dimensions:', {
        width: element.offsetWidth,
        height: element.offsetHeight,
        scrollWidth: element.scrollWidth,
        scrollHeight: element.scrollHeight
      });

      // Get the actual content dimensions at 100% zoom
      const elementRect = element.getBoundingClientRect();
      const actualWidth = Math.max(element.offsetWidth, element.scrollWidth);
      const actualHeight = Math.max(element.offsetHeight, element.scrollHeight);

      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: true,
        width: actualWidth,
        height: actualHeight,
        scrollX: 0,
        scrollY: 0,
        windowWidth: actualWidth,
        windowHeight: actualHeight,
        // Force the canvas to use the actual dimensions
        onclone: (clonedDoc) => {
          // Ensure the cloned document has consistent styling
          const clonedElement = clonedDoc.querySelector('[data-html2canvas-clone]');
          if (clonedElement) {
            clonedElement.style.width = actualWidth + 'px';
            clonedElement.style.height = actualHeight + 'px';
            clonedElement.style.transform = 'scale(1)';
            clonedElement.style.zoom = '1';
          }
          
          // Reset any zoom/transform on the cloned document
          clonedDoc.body.style.zoom = '1';
          clonedDoc.body.style.transform = 'scale(1)';
          clonedDoc.documentElement.style.zoom = '1';
        },
        ignoreElements: (element) => {
          return element.classList && element.classList.contains('no-print');
        }
      });

      console.log('Canvas created:', {
        width: canvas.width,
        height: canvas.height
      });

      if (canvas.width === 0 || canvas.height === 0) {
        throw new Error('Canvas has zero dimensions');
      }

      // Get the canvas data
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      if (!imgData || imgData === 'data:,') {
        throw new Error('Failed to generate image data');
      }

      console.log('Image data generated successfully');
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate dimensions to fill the entire page width
      const imgProps = pdf.getImageProperties(imgData);
      const imgRatio = imgProps.height / imgProps.width;
      
      // Use full page width (no margins)
      const imgWidth = pdfWidth;
      const imgHeight = pdfWidth * imgRatio;

      // Check if content fits in one page
      if (imgHeight <= pdfHeight) {
        // Single page - fits perfectly
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      } else {
        // Multi-page handling
        let remainingHeight = imgHeight;
        let currentY = 0;
        let pageNumber = 1;
        
        while (remainingHeight > 0) {
          // Calculate how much content fits on current page
          const pageContentHeight = Math.min(remainingHeight, pdfHeight);
          
          // Calculate source Y position for cropping
          const sourceY = (pageNumber - 1) * pdfHeight;
          const sourceHeight = pageContentHeight;
          
          // Calculate source dimensions in canvas pixels
          const canvasWidth = canvas.width;
          const canvasHeight = canvas.height;
          const canvasRatio = canvasHeight / canvasWidth;
          
          // Calculate crop area in canvas coordinates
          const cropY = (sourceY / imgHeight) * canvasHeight;
          const cropHeight = (sourceHeight / imgHeight) * canvasHeight;
          
          // Create a temporary canvas for this page
          const tempCanvas = document.createElement('canvas');
          const tempCtx = tempCanvas.getContext('2d');
          
          tempCanvas.width = canvasWidth;
          tempCanvas.height = cropHeight;
          
          // Draw the cropped portion
          tempCtx.drawImage(
            canvas, 
            0, cropY, canvasWidth, cropHeight, // Source crop area
            0, 0, canvasWidth, cropHeight      // Destination
          );
          
          // Convert to image data
          const pageImgData = tempCanvas.toDataURL('image/png', 1.0);
          
          // Add page if not the first one
          if (pageNumber > 1) {
            pdf.addPage();
          }
          
          // Calculate dimensions for this page
          const pageImgRatio = cropHeight / canvasWidth;
          const pageImgHeight = pdfWidth * pageImgRatio;
          
          // Add image to PDF page (full width, positioned at top)
          pdf.addImage(pageImgData, 'PNG', 0, 0, pdfWidth, pageImgHeight);
          
          // Update for next iteration
          remainingHeight -= pdfHeight;
          pageNumber++;
          
          // Clean up temporary canvas
          tempCanvas.remove();
        }
      }

      console.log('PDF generated successfully with', pdf.internal.pages.length - 1, 'pages');

      // Save the PDF
      pdf.save('meter-invoice.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert(`Error generating PDF: ${error.message}. Please check the console for details.`);
    } finally {
      // Restore original zoom, transform, and scroll position
      if (originalZoom) {
        document.body.style.zoom = originalZoom;
      } else {
        document.body.style.zoom = '';
      }
      
      if (originalTransform) {
        document.body.style.transform = originalTransform;
      } else {
        document.body.style.transform = '';
      }
      
      window.scrollTo(originalScrollLeft, originalScrollTop);
    }
  };

  // Your invoice data and format functions
  const invoiceData = {
    invoiceNumber: "ELE-2025-001234",
    accountNumber: "4789-6512-3847",
    customerInfo: {
      name: "Avinash Yadav",
      address: "1247 Oakwood Drive",
      city: "Springfield",
      state: "Illinois",
      zipCode: "62701",
      phone: "(555) 123-4567",
      email: "john.smith@email.com"
    },
    utilityCompany: {
      name: "Smartlynk Power Solutions Pvt Ltd",
      address: "2500 Corporate Plaza, Suite 800",
      city: "Springfield",
      state: "Illinois",
      zipCode: "62702",
      phone: "(555) 987-6543",
      email: "billing@smartlynk.com",
      website: "www.smartlynk.net",
      license: "Electric Utility License #EUL-2024-IL-789"
    },
    billingPeriod: {
      from: "2024-12-01",
      to: "2024-12-31",
      days: 31
    },
    meterReadings: [
      {
        meterType: "Smart Digital Meter",
        meterNumber: "ELE-SM-445789",
        meterLocation: "Main Service Panel",
        previousReading: 45678,
        currentReading: 46234,
        usage: 556,
        unit: "kWh",
        peakUsage: 334,
        offPeakUsage: 222,
        peakRate: 0.1450,
        offPeakRate: 0.0890,
        peakAmount: 48.43,
        offPeakAmount: 19.76,
        amount: 68.19
      }
    ],
    tariff: {
      rate:7,
    },
    charges: {
      energyCharges: 68.19,
      deliveryCharges: 24.50,
      connectionFee: 12.00,
      regulatoryFees: 3.85,
      subtotal: 108.54,
      tax: 8.68,
      total: 117.22
    },
    dueDate: "2025-01-31",
    issueDate: "2025-01-03",
    readDate: "2024-12-31",
    paymentTerms: "Net 30 Days"
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="">
      <div className="no-print bg-cyan-600 px-4 flex justify-between mb-4 py-1 items-center sticky top-0 bg- z-10 ">
        <h2 className="text-2xl font-bold text-white mb-1">INVOICE</h2>
        <button
          onClick={downloadPDF}
          className="bg-cyan-500 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 inline-flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>
    <div className="p-4">
      {/* Only this button is outside the PDF area */}
      

      {/* This section only will be in PDF */}
      <div 
        ref={invoiceRef}
        style={{
          width: '210mm', // Full A4 width
          minHeight: '297mm', // Full A4 height
          backgroundColor: '#ffffff',
          boxSizing: 'border-box',
          padding: '2px', // No padding to use full page
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif',
          fontSize: '12px',
          footer: '2px',
          header: '2px',
          lineHeight: '1',
          color: '#333',
          position: 'relative',
          // Ensure consistent rendering regardless of zoom
          transform: 'scale(1)',
          transformOrigin: 'top left',
          zoom: '1'
        }}
      >
        <InvoiceContent
          invoiceData={invoiceData}
          formatDate={formatDate}
          formatCurrency={formatCurrency}
        />
      </div>
    </div>
    </div>
  );
};

export default MeterReadingInvoice;