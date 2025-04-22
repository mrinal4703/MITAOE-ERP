import React from "react";
import {TfiReload} from "react-icons/tfi";

const AttendanceDashboard = () => {
    const course = "HCI";
    const attended = 24;
    const total = 26;
    const percentage = ((attended / total) * 100).toFixed(2); // keeping 2 decimal places

    return (
        <div className="m-1.5 p-3 w-[450px] font-sans h-[270px] bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
            <div className={'flex justify-between'}>
                <h3 className="text-lg font-bold mb-2 pl-1 text-left">Attendance Summary</h3>
                <button type="button" className="text-xs text-blue-600"><TfiReload
                    className={'scale-x-[-1] text-black text-sm rotate-[150deg] font-bold'}/></button>
            </div>
            <hr className="mb-3 h-[1px] border-none bg-gray-300" />
            <div className="overflow-y-auto flex-grow relative max-h-[300px]">
                <table className="w-full text-xs border-separate border-spacing-x-0.5 border-spacing-y-0.5">
                    <thead>
                    <tr>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 py-1 px-2">Course</th>
                        <th className="sticky top-0 bg-gray-100 z-[4] font-bold border-b-2 border-b-red-500 py-1 px-2">Lectures</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-orange-500 px-2 py-1">%</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-center font-semibold bg-gray-100 px-2 py-1">{course}</td>
                        <td className="text-center bg-gray-50 px-2 py-1">{attended}/{total}</td>
                        <td className="text-center bg-gray-50 px-2 py-1">{percentage}%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendanceDashboard;
