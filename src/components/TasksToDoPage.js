import React from 'react';
import {TfiReload} from "react-icons/tfi";
import {GoArrowRight} from "react-icons/go";

const TasksToDoPage = () => {
    return (
        <div className="m-1.5 p-3 w-[270px] font-sans h-[270px] bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold mb-2 pl-1 text-left">Tasks</h3>
                <button type="button" className="text-xs text-blue-600">
                    <TfiReload className="scale-x-[-1] text-black text-sm rotate-[150deg] font-bold" />
                </button>
            </div>
            <hr className="mb-3 h-[1px] border-none bg-gray-300" />
            <div className="overflow-y-auto flex-grow relative max-h-[300px]">
                <span className={'text-left text-sm flex my-1'}>
                    ⋅ Fill out the 360 DEGREES FEEDBACK, through Academic → Feedback
                </span>
                <span className={'text-left text-sm flex my-1'}>
                    ⋅ Update the Student Information, completely. Access it through Academic → Student Information
                </span>
            </div>
        </div>
    );
};

export default TasksToDoPage;