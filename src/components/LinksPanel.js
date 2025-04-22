import React from 'react';
import {FaTimes} from "react-icons/fa";
import {HiMiniLink} from "react-icons/hi2";
import {Link} from "react-router-dom";

const LinksPanel = ({ setPanel3 }) => {
    return (
        <div className="w-full h-full z-50 bg-gray-50 shadow-xl border dark:border-gray-700">
            <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-semibold text-gray-800">Recent Links</h2>
                <button onClick={() => setPanel3(false)} className="text-red-500 hover:text-red-600">
                    <FaTimes />
                </button>
            </div>
            <hr />
            <div className="mb-6 p-4 overflow-y-auto text-left px-4 flex-grow relative custom-scrollbar pr-2 text-sm text-gray-700 space-y-2">
                <table className="w-full text-sm border-gray-50 border-spacing-x-0.5 border-spacing-y-0.5">
                    <tbody>
                    <tr>
                        <a href={'/StudentRelated'} className="text-center flex border px-3 py-3"><HiMiniLink className={'text-[#3c8dbc] mr-1.5 font-semibold text-lg'}/>Student Home</a>
                    </tr>
                    <tr>
                        <a href={'/StudentCompleteDetail'} className="text-center flex border px-3 py-3"><HiMiniLink className={'text-[#3c8dbc] mr-1.5 font-semibold text-lg'}/>Student Complete Detail</a>
                    </tr>
                    <tr>
                        <a href={'/StudentRelated'} className="text-center flex border px-3 py-3"><HiMiniLink className={'text-[#3c8dbc] mr-1.5 font-semibold text-lg'}/>Online Payment</a>
                    </tr>
                    <tr>
                        <a href={'/ExamStudentRelated'} className="text-center flex border px-3 py-3"><HiMiniLink className={'text-[#3c8dbc] mr-1.5 font-semibold text-lg'}/>Admit Card for Student</a>
                    </tr>
                    <tr>
                        <td className="text-center flex border px-3 py-3"><HiMiniLink className={'text-[#3c8dbc] mr-1.5 font-semibold text-lg'}/>Grievance Application</td>
                    </tr>
                    <tr>
                        <a href={'/AcademicFeedback'} className="text-center flex border px-3 py-3"><HiMiniLink className={'text-[#3c8dbc] mr-1.5 font-semibold text-lg'}/>Feedback Submission</a>
                    </tr>
                    <tr>
                        <a href={'/StudentRelated'} className="text-center flex border px-3 py-3"><HiMiniLink className={'text-[#3c8dbc] mr-1.5 font-semibold text-lg'}/>Online Payment Hostel</a>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-right">
                <button onClick={() => setPanel3(false)} className="absolute right-3 bottom-3 px-4 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-100">
                    Close
                </button>
            </div>
        </div>
    );
};

export default LinksPanel;