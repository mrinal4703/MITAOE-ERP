import React from "react";
import timeTableData from "./timetable.json";
import { TfiReload } from "react-icons/tfi";

const ClassTimeTable = () => {
    const hasSchedule = timeTableData && timeTableData.length > 0;

    return (
        <div className="m-1.5 p-3 w-[800px] font-sans h-[270px] bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
            <div className="flex justify-between">
                <h3 className="text-lg font-bold mb-2 pl-1 text-left">Class Time Table</h3>
                <button type="button" className="text-xs text-blue-600">
                    <TfiReload className="scale-x-[-1] text-black text-sm rotate-[150deg] font-bold" />
                </button>
            </div>
            <hr className="mb-3 h-[1px] border-none bg-gray-300" />
            <div className="overflow-y-auto flex-grow relative custom-scrollbar">
                <table className="w-full text-xs border-separate border-spacing-x-0.5 border-spacing-y-0.5">
                    <thead>
                    <tr>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold text-left border-b-2 border-b-blue-500 py-1 px-2">Time/Day</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-red-500 py-1 px-2">Monday</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-orange-500 px-2 py-1">Tuesday</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-violet-500 px-2 py-1">Wednesday</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 py-1 px-2">Thursday</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-red-500 py-1 px-2">Friday</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-orange-500 px-2 py-1">Saturday</th>
                    </tr>
                    </thead>
                    <tbody>
                    {hasSchedule ? (
                        timeTableData.map((row, index) => (
                            <tr key={index} className="rounded-xl">
                                <td className="sticky left-0 bg-gray-100 font-semibold text-left px-2 py-1">
                                    {row.time}
                                </td>
                                {row.days.map((subject, i) => (
                                    <td
                                        key={i}
                                        className="text-center text-xs bg-gray-50 px-2 py-1 box-border"
                                    >
                                        {subject}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center text-gray-600 py-4">
                                No timetable data available.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClassTimeTable;

// import React from "react";
// // import { FiRefreshCw } from "react-icons/fi";
// import timeTableData from "./timetable.json";

// const dayBorderColors = [
//   "border-b-2 border-blue-600",     // Time/Day
//   "border-b-2 border-red-500",      // Monday
//   "border-b-2 border-orange-500",   // Tuesday
//   "border-b-2 border-purple-500",   // Wednesday
//   "border-b-2 border-blue-500",     // Thursday
//   "border-b-2 border-red-500",      // Friday
//   "border-b-2 border-orange-500"    // Saturday
// ];

// const ClassTimeTable = () => {
//   return (
//     <div className="p-4 bg-white rounded-xl shadow-md font-sans">
//       {/* Header with Refresh Icon */}
//       <div className="flex justify-between items-center mb-2 px-1">
//         <h3 className="text-lg font-bold">Class Time Table</h3>
//         <FiRefreshCw className="text-gray-500 cursor-pointer hover:text-black" />
//       </div>

//       {/* Divider line */}
//       <div className="border-t border-gray-200 mb-2" />

//       {/* Scrollable Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-[700px] border-collapse w-full">
//           <thead>
//             <tr>
//               {["Time/Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, i) => (
//                 <th
//                   key={day}
//                   className={`text-sm font-semibold text-gray-800 bg-gray-100 px-4 py-2 text-center sticky top-0 z-10 ${dayBorderColors[i]} border`}
//                 >
//                   {day}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {timeTableData.map((row, index) => (
//               <tr key={index}>
//                 <td className="font-semibold text-left bg-gray-100 px-4 py-2 sticky left-0 z-10 border border-gray-300">
//                   {row.time}
//                 </td>
//                 {row.days.map((subject, i) => (
//                   <td key={i} className="text-sm text-center px-4 py-2 border border-gray-300 min-w-[100px] h-[50px]">
//                     {subject}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ClassTimeTable;
