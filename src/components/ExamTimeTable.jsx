import React from 'react';
import {TfiReload} from "react-icons/tfi";

const ExamTimeTable = () => {

    return (
        <div className="m-1.5 p-4 bg-white rounded-xl shadow-md font-sans h-[270px] overflow-y-auto flex flex-col justify-start w-full">
            <div className={'flex justify-between'}>
                <h3 className="text-lg font-bold mb-2 pl-1 text-left">Exam Time Table</h3>
                <button type="button" className="text-xs text-blue-600"><TfiReload
                    className={'scale-x-[-1] text-black text-sm rotate-[150deg] font-bold'}/></button>
            </div>
            <hr className="mb-3 h-[1px] border-none bg-gray-300" />
            <div className="overflow-y-auto flex-grow relative h-[calc(100%-72px)] pr-1 custom-scrollbar">
                <h3 className="text-sm font-bold mb-2 pl-1 text-left">Mid Semester Exam</h3>
                <table className="w-full text-xs border-separate border-spacing-x-0.5 border-spacing-y-0.5 mb-2">
                    <thead>
                    <tr>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 py-1 px-2">EXAMDATE</th>
                        <th className="sticky top-0 bg-gray-100 z-[4] font-bold border-b-2 border-b-red-500 py-1 px-2">TIME</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-orange-500 px-2 py-1">CCODE</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-violet-500 px-2 py-1">COURSE</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 px-2 py-1">REGULAR/BACKLOG</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-center font-semibold bg-gray-100 px-2 py-1">Saturday 08/03/2025</td>
                        <td className="text-center bg-gray-50 px-2 py-1">03.00 pm to 05.00 pm</td>
                        <td className="text-center bg-gray-50 px-2 py-1">CS482T</td>
                        <td className="text-center bg-gray-50 px-2 py-1">Human Computer Interaction</td>
                        <td className="text-center bg-gray-50 px-2 py-1">REGULAR</td>
                    </tr>
                    </tbody>
                </table>
                <hr className="mb-3 h-[1px] border-none bg-gray-300" />
                <h3 className="text-sm font-bold mb-2 pl-1 text-left">Practical Exam</h3>
                <table className="w-full text-xs border-separate border-spacing-x-0.5 border-spacing-y-0.5 mb-2">
                    <thead>
                    <tr>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 py-1 px-2">EXAMDATE</th>
                        <th className="sticky top-0 bg-gray-100 z-[4] font-bold border-b-2 border-b-red-500 py-1 px-2">TIME</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-orange-500 px-2 py-1">CCODE</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-violet-500 px-2 py-1">COURSE</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 px-2 py-1">REGULAR/BACKLOG</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-center font-semibold bg-gray-100 px-2 py-1">To be Declare soon..</td>
                    </tr>
                    </tbody>
                </table>
                <hr className="mb-3 h-[1px] border-none bg-gray-300" />
                <h3 className="text-sm font-bold mb-2 pl-1 text-left">End Semester Exam</h3>
                <table className="w-full text-xs border-separate border-spacing-x-0.5 border-spacing-y-0.5 mb-2">
                    <thead>
                    <tr>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 py-1 px-2">EXAMDATE</th>
                        <th className="sticky top-0 bg-gray-100 z-[4] font-bold border-b-2 border-b-red-500 py-1 px-2">TIME</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-orange-500 px-2 py-1">CCODE</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-violet-500 px-2 py-1">COURSE</th>
                        <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 px-2 py-1">REGULAR/BACKLOG</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-center font-semibold bg-gray-100 px-2 py-1">To be Declare soon..</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExamTimeTable;