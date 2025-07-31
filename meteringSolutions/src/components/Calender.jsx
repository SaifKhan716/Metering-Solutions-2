// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; // Only for base styles

// // const CalendarCard = () => {
// //     const [date, setDate] = useState(new Date());

// //     return (
// //         <div className="h-[50%] bg-red-500 text-white p-6 rounded-2xl shadow-md">
// //             <h3 className="text-lg font-semibold mb-4">Calendar Schedule</h3>
// //             <div className=" h-full bg-white rounded-lg overflow-hidden shadow-md p-2">
// //                 <Calendar
// //                     onChange={setDate}
// //                     value={date}
// //                     style={{ width: "300px", height: "auto", backgroundColor: "red"}}
// //                     className="border-none rounded-lg text-black"
// //                     tileClassName="bg-red-900" // Add this line to make each tile have the red background
// //                 />
// //             </div>
// //         </div>
// //     );
// // };

// // const CalendarCard = () => {
// //   const [date, setDate] = useState(new Date());

// //   return (
// //     <div className=" bg-radial from-yellow-400 from-20% to-orange-500 text-white p-6 rounded-2xl shadow-md w-full">
// //       {/* Title */}
// //       <h3 className="text-lg font-semibold mb-4">Calendar Schedule</h3>

// //       {/* Calendar Container with Responsive Size */}
// //       <div className="bg-white rounded-lg overflow-hidden shadow-md p-2 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
// //         <Calendar
// //           onChange={setDate}
// //           value={date}
// //           style={{ width: "100%", height: "auto", backgroundColor: "yellow", color:"black"}}
// //         />
// //       </div>
// //     </div>
// //   );
// // };



// // export default CalendarCard;


// import "react-calendar/dist/Calendar.css";
// import '../app.css'
// const CalendarCard = () => {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className=" absolute h-[60%] bg-radial bg-gradient-to-br from-red-900 via-red-500 to-orange-500 text-white p-6 rounded-2xl shadow-md w-full">
//       {/* Title */}
//       <h3 className="text-lg font-semibold mb-4">Calendar Schedule</h3>

//       {/* Calendar Container with Gradient Background */}

//         <Calendar
//           onChange={setDate}
//           value={date}
//           className="rounded-lg text-black"
//         />
//     </div>
//   );
// };

// export default CalendarCard;

import "react-calendar/dist/Calendar.css";
import "../app.css";
import React,{ useState } from "react";
import Calendar from "react-calendar";

const CalendarCard = ({className}) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className={`h-auto bg-radial bg-gradient-to-br from-red-900 via-red-500 to-orange-500 text-white p-6 rounded-2xl shadow-md w-full ${className}`}>
        <h3 className="p-2 font-bold">Calender</h3>
      {/* Calendar Container */}
      <Calendar
        onChange={setDate}
        value={date}
        className="rounded-lg text-black w-full h-"
      />
    </div>
  );
};

export default CalendarCard;
