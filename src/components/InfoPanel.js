import React from 'react';
import {FaTimes} from "react-icons/fa";

const InfoPanel = ({ setPanel2 }) => {

    return (
        <div className="w-full h-full z-50 bg-gray-50 shadow-xl border dark:border-gray-700">
            <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-semibold text-gray-800">Help - Feedback Submission</h2>
                <button onClick={() => setPanel2(false)} className="text-red-500 hover:text-red-600">
                    <FaTimes />
                </button>
            </div>
            <hr />
            <div className="mb-6 p-4 overflow-y-auto text-left px-4 flex-grow relative custom-scrollbar pr-2 text-sm text-gray-700 space-y-2">
                <div>
                    <p className="font-semibold flex">📌 Attendance Summary</p>
                    <p>Check your current attendance percentage and total lectures attended for each subject.</p>
                </div>
                <div>
                    <p className="font-semibold">📅 Class & Today's Time Table</p>
                    <p>See your scheduled classes for today and the weekly timetable.</p>
                </div>
                <div>
                    <p className="font-semibold">📝 Assignments & Tasks</p>
                    <p>Track your upcoming assignments, submissions, and faculty-assigned tasks.</p>
                </div>
                <div>
                    <p className="font-semibold">📊 Internal Marks & Results</p>
                    <p>View your academic performance including internal marks and semester results.</p>
                </div>
                <div>
                    <p className="font-semibold">📣 Active Notices</p>
                    <p>Stay updated with the latest announcements like placement drives or library notices.</p>
                </div>
                <div>
                    <p className="font-semibold">🧪 Exam Time Table</p>
                    <p>View your upcoming mid-semester and practical exam schedules with timing and room info.</p>
                </div>
                <div>
                    <p className="font-semibold">❓ Need More Help?</p>
                    <p>Click the FAQ button or contact your academic coordinator or ERP support.</p>
                </div>
            </div>
            <div className="text-right">
                <button onClick={() => setPanel2(false)} className="absolute right-3 bottom-3 px-4 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-100">
                    Close
                </button>
            </div>
        </div>

    );
};

export default InfoPanel;