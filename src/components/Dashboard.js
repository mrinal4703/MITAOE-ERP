import React, {useState} from 'react';
import NavBar from "./NavBar";
import ClassTimeTable from "./ClassTimeTable";
import PlacementSchedule from "./PlacementSchedule";
import NoticeBoard from "./NoticeBoard";
import DailyTable from "./DailyTable";
import AttendanceDashboard from "./AttendanceDashboard";
import {FaBullhorn, FaHome, FaKey, FaPercent, FaTasks, FaUser} from "react-icons/fa";
import QuickAccessPage from "./QuickAccessPage";
import TasksToDoPage from "./TasksToDoPage";
import {useNavigate} from "react-router-dom";
import {IoCloseOutline} from "react-icons/io5";
import assignments from "./AssignmentsPending.json";
import {defaultbg} from "../images";
import ExamTimeTable from "./ExamTimeTable";
import Events from "./Events";

const AssignmentSection = ({title, data}) => (<div className="mb-6">
    <div className="flex justify-between items-center">
        <p className="text-sm font-semibold text-left text-black">
            {title} Assignments Pending
        </p>
    </div>

    <div className="mt-2 space-y-1">
        <div className="overflow-y-auto flex-grow relative max-h-[300px]">
            <table className="w-full text-xs border-separate border-spacing-x-0.5 border-spacing-y-0.5">
                <thead>
                <tr>
                    <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 py-1 px-2">Course</th>
                    <th className="sticky top-0 bg-gray-100 z-[4] font-bold border-b-2 border-b-red-500 py-1 px-2">Assignment</th>
                    <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-orange-500 px-2 py-1">Due
                        Date
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (<tr key={index}>
                    <td colSpan={3}>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full text-black no-underline hover:bg-blue-50 transition"
                        >
                            <div
                                className="w-1/3 text-center font-semibold bg-gray-100 px-2 py-1">{item.course}</div>
                            <div className="w-1/3 text-center bg-gray-50 px-2 py-1">{item.assignment}</div>
                            <div className="w-1/3 text-center bg-gray-50 px-2 py-1">{item.dueDate}</div>
                        </a>
                    </td>
                </tr>))}
                </tbody>
            </table>
        </div>
    </div>
</div>);

const Dashboard = ({ navbarColor = "#5864bd" }) => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    const handleNavigateAttendance = () => {
        navigate('/StudentCompleteDetail', {state: {showAttendance: true}});
    };
    return (
        <div className={''}>
            <div className={'mx-2'}>
                <div className="flex justify-center space-x-6 mt-4 mb-1">
                    <div
                        className="w-[450px] h-[70px] bg-white rounded-lg shadow-md flex justify-center items-center px-4">
                        <div
                            className="w-9 h-9 rounded-full bg-[#2f3e4f] flex items-center justify-center text-white text-xl mr-4">
                            <FaPercent className={'text-white text-2xl'}/>
                        </div>
                        <button onClick={handleNavigateAttendance}><span
                            className="text-gray-700 text-sm font-semibold">92.31% Attendance</span></button>
                    </div>
                    <div
                        className="w-[450px] h-[70px] bg-white rounded-lg shadow-md flex justify-center items-center px-4">
                        <div
                            className="w-9 h-9 rounded-full bg-[#f44336] flex items-center justify-center text-white text-xl mr-4">
                            <FaTasks className={'text-white text-2xl'}/>
                        </div>
                        <button onClick={() => setShowDropdown(!showDropdown)}><span
                            className="text-gray-700 text-sm font-semibold">Assignment</span></button>
                        {showDropdown && (<div
                            className="absolute top-12 w-96 h-96 bg-white animate-bounce-down px-2 text-sm rounded-md shadow-lg z-50 py-4">

                            {/* Header with Close Button */}
                            <div className="flex justify-between items-center mb-3">
                                <p className="text-lg font-semibold text-left text-black">Assignments Pending</p>
                                <button onClick={() => setShowDropdown(false)}>
                                    <IoCloseOutline className="text-xl text-black"/>
                                </button>
                            </div>
                            <hr className="mb-3 h-[1px] border-none bg-gray-300"/>
                            {/* Scrollable content area */}
                            <div className="overflow-y-auto h-[calc(100%-72px)] pr-1 custom-scrollbar">
                                <AssignmentSection title="Theory" data={assignments.theory}/>
                                <AssignmentSection title="Practical" data={assignments.practical}/>
                                <AssignmentSection title="Quiz" data={assignments.quiz}/>
                            </div>
                        </div>)}
                    </div>
                    <div
                        className="w-[450px] h-[70px] bg-white rounded-lg shadow-md flex justify-center items-center px-4">
                        <div
                            className="w-9 h-9 rounded-full bg-[#4caf50] flex items-center justify-center text-white text-xl mr-4">
                            <FaBullhorn className={'text-white text-2xl'}/>
                        </div>
                        <button onClick={() => setShowDropdown2(!setShowDropdown2())}><span
                            className="text-gray-700 text-sm font-semibold">Announcement</span></button>
                        {showDropdown2 && (<div
                            className="absolute top-12 w-96 h-32 bg-white animate-bounce-down px-2 text-sm rounded-md shadow-lg z-50 py-4">
                            <div className="flex justify-between items-center mb-3">
                                <p className="text-lg font-semibold text-left text-black">Announcements</p>
                                <button onClick={() => setShowDropdown2(false)}>
                                    <IoCloseOutline className="text-xl"/>
                                </button>
                            </div>
                            <hr className="mb-3 h-[1px] border-none bg-gray-300"/>
                            <div className="overflow-y-auto flex-grow relative">
                                    <span className={'text-left text-sm flex my-1'}>
                                        No current announcements...
                                    </span>
                            </div>
                        </div>)}
                    </div>
                </div>

                <div className={'grid grid-cols-3 space-x-1'}>
                    <div className={'flex col-span-2'}>
                        <AttendanceDashboard/>
                        <QuickAccessPage navbarColor = {navbarColor}/>
                        <TasksToDoPage/>
                    </div>
                    <div className={'col-span-1'}>
                        <NoticeBoard/>
                    </div>
                </div>
                <div className={'grid grid-cols-3 space-x-1'}>
                    <div className={'flex col-span-2'}>
                        <DailyTable/>
                        <ClassTimeTable/>
                    </div>
                    <div className={'col-span-1'}>
                        <ExamTimeTable/>
                    </div>
                </div>
                <div className={'grid grid-cols-3 space-x-1'}>
                    <div className={'col-span-2'}>
                        <PlacementSchedule/>
                    </div>
                    <div className={'col-span-1'}>
                        <Events/>
                    </div>
                </div>
            </div>
        </div>);
};

export default Dashboard;