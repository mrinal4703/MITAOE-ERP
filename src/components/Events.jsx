import React from 'react';
import {TfiReload} from "react-icons/tfi";

const Events = () => {
    return (
        <div className="m-1.5 p-4 bg-white rounded-xl shadow-md font-sans h-[150px] overflow-y-auto flex flex-col justify-start w-full">
            <div className={'flex justify-between'}>
                <h3 className="text-lg font-bold mb-2 pl-1 text-left">Events</h3>
                <button type="button" className="text-xs text-blue-600"><TfiReload
                    className={'scale-x-[-1] text-black text-sm rotate-[150deg] font-bold'}/></button>
            </div>
            <hr className="mb-3 h-[1px] border-none bg-gray-300" />
            <div className="overflow-y-auto flex-grow relative h-[calc(100%-72px)] pr-1 custom-scrollbar">
                No Events Scheduled...
            </div>
        </div>
    );
};

export default Events;