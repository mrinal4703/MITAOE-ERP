import React from 'react';
import {me, sign} from "../images";

const StudentInfoCard = () => {
    return (
        <div className="mt-2 ml-2 mr-2 flex justify-between p-6 bg-white rounded-xl shadow-md flex-wrap gap-4 mb-8">
            {/* Left Section */}
            <div className="flex-1 min-w-[250px]">
                <div className="grid grid-cols-[180px_1fr] gap-x-2 gap-y-3 text-sm text-gray-800">
                    <div className='text-left'><strong>PRN No.:</strong></div>
                    <div className='text-left'>202101070082</div>

                    <div className='text-left'><strong>Student Name:</strong></div>
                    <div className='text-left'>Mrinal Gupta</div>

                    <div className='text-left'><strong>User Login Status:</strong></div>
                    <div className='text-left'>
            <span
                className="inline-block text-green-600 border border-green-600 text-xs font-medium px-3 py-1 rounded-full">
              Active
            </span>
                    </div>

                    <div className='text-left'><strong className='text-left'>Admission Status:</strong></div>
                    <div className='text-left'>
            <span
                className="inline-block text-blue-500 border border-blue-500 text-xs font-medium px-3 py-1 rounded-full">
              Admitted
            </span>
                    </div>

                    <div className='text-left'><strong>Current Student/Admission Status:</strong></div>
                    <div className='text-left'>
            <span
                className="inline-block text-green-700 border border-green-700 text-xs font-medium px-3 py-1 rounded-full">
              ADMISSION
            </span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-300 mx-4"/>

            {/* Right Section */}
            <div className="flex-1 min-w-[250px]">
                <div className="grid grid-cols-[180px_1fr] gap-x-2 gap-y-3 text-sm text-gray-800">
                    <div className='text-left'><strong>Admission Batch:</strong></div>
                    <div className='text-left'>2021-22</div>

                    <div className='text-left'><strong>School/Institute:</strong></div>
                    <div className='text-left'>SCHOOL OF COMPUTER ENGINEERING</div>

                    <div className='text-left'><strong>Degree/Branch:</strong></div>
                    <div className='text-left'>Bachelor of Technology - COMPUTER ENGINEERING</div>

                    <div className='text-left'><strong>Semester:</strong></div>
                    <div className='text-left'>VIII</div>

                    <div className='text-left'><strong>Scheme:</strong></div>
                    <div className='text-left'>B. Tech-COMPUTER ENGINEERING-2019-20-Department of Computer Engineering
                        (CBCS)
                    </div>
                </div>
            </div>

            {/* Profile Image */}
            <div className="flex flex-col items-center min-w-[100px] ml-auto">
                <img
                    src={me}
                    alt="Profile"
                    className="w-20 h-20 mb-2"
                />
                <img
                    src={sign}
                    alt="Profile"
                    className="h-10 mb-2"
                />
            </div>
        </div>
    );
};

export default StudentInfoCard;
