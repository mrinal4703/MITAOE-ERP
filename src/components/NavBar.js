import React, {useEffect, useRef, useState} from 'react';
import {me, mitaoe} from "../images";
import {FaAngleDown, FaHome, FaKey, FaPowerOff, FaSortDown, FaTh, FaUser} from "react-icons/fa";
import {GoSearch} from "react-icons/go";
import {Link, useNavigate} from "react-router-dom";
import {
    BsCalculator, BsCalendarEvent, BsCameraVideo,
    BsClipboardCheck,
    BsFileEarmarkRichtext, BsGoogle, BsInfoCircle,
    BsMegaphone,
    BsSpeedometer2, BsTranslate,
    BsWikipedia
} from "react-icons/bs";
import {HiMiniLink} from "react-icons/hi2";
import {IoCloseOutline} from "react-icons/io5";
import LinksPanel from "./LinksPanel";
import {WelcomeTour} from "../videos";

const NavBar = ({navbarColor = "#5864bd"}) => {

    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const containerRef = useRef(null);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpenSearch(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [isOpenFAQ, setIsOpenFAQ] = useState(false);

    function darkenColor(hex) {

        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        let [h, s, l] = rgbToHsl(r, g, b);

        l = Math.max(l - 15, 0);

        const [dr, dg, db] = hslToRgb(h, s, l);
        return `#${[dr, dg, db].map(x => x.toString(16).padStart(2, '0')).join('')}`;
    }

    function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h *= 60;
        }
        return [h, s * 100, l * 100];
    }

    function hslToRgb(h, s, l) {
        s /= 100;
        l /= 100;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c / 2;
        let r, g, b;

        if (h < 60) [r, g, b] = [c, x, 0];
        else if (h < 120) [r, g, b] = [x, c, 0];
        else if (h < 180) [r, g, b] = [0, c, x];
        else if (h < 240) [r, g, b] = [0, x, c];
        else if (h < 300) [r, g, b] = [x, 0, c];
        else [r, g, b] = [c, 0, x];

        return [r, g, b].map(v => Math.round((v + m) * 255));
    }

    const darkerNavbarColor = darkenColor(navbarColor, 20);

    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown9, setShowDropdown9] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            navigate("/");
        }
    };

    const handleHome = () => {
        navigate("/Dashboard");
    };

    const handleRelated = () => {
        navigate("/StudentRelated");
    };

    const handleAcademicFeedback = () => {
        navigate("/AcademicFeedback");
    };

    const handleExanRelated = () => {
        navigate("/ExamStudentRelated");
    };

    const openCalculator = () => {
        window.location.href = "calculator:"; // Triggers OS calculator if protocol is registered
    };

    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showPanel3, setShowPanel3] = useState(false);

    const [showVideo, setShowVideo] = useState(false);

    const handlePlay = () => {
        setShowVideo(true);
    };

    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    return (
        <>
            {navbarColor !== '#ece8e8' ? (
                <div className="relative flex justify-between items-center w-full text-white shadow-md z-40"
                     style={{backgroundColor: navbarColor}}>
                    {/* LEFT SECTION */}
                    <div className="flex h-10 w-screen text-white shadow-md" style={{backgroundColor: navbarColor}}>
                        <button onClick={handleHome}>
                            <img src={mitaoe} className="h-[35px] mt-1 ml-1 mr-4" alt="mitaoe"/>
                        </button>

                        {/* Academic */}
                        <div className="relative group">
                            <div className="flex items-center text-sm px-1 h-full cursor-pointer"
                                 style={{
                                     backgroundColor: navbarColor,
                                     transition: 'background-color 0.3s',
                                 }}
                                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkerNavbarColor}
                                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = navbarColor}>
                                Academic <FaSortDown className="ml-1"/>
                            </div>
                            <div
                                className="absolute top-9 left-0 animate-bounce-down text-white text-sm shadow-md shadow-gray-700 w-48 rounded-md hidden group-hover:block"
                                style={{backgroundColor: navbarColor}}>
                                <div onClick={handleRelated} className="px-4 py-2 cursor-pointer" style={{
                                    backgroundColor: navbarColor,
                                    transition: 'background-color 0.3s',
                                }}
                                     onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkerNavbarColor}
                                     onMouseLeave={(e) => e.currentTarget.style.backgroundColor = navbarColor}>Student
                                    Related
                                </div>
                                <div onClick={handleAcademicFeedback} className="px-4 py-2 cursor-pointer" style={{
                                    backgroundColor: navbarColor,
                                    transition: 'background-color 0.3s',
                                }}
                                     onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkerNavbarColor}
                                     onMouseLeave={(e) => e.currentTarget.style.backgroundColor = navbarColor}>Feedback
                                </div>
                            </div>
                        </div>

                        {/* Examination */}
                        <div className="relative group">
                            <div className="flex items-center text-sm px-1 h-full cursor-pointer" style={{
                                backgroundColor: navbarColor,
                                transition: 'background-color 0.3s',
                            }}
                                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkerNavbarColor}
                                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = navbarColor}>
                                Examination <FaSortDown className="ml-1"/>
                            </div>
                            <div
                                className="absolute top-9 left-0 animate-bounce-down text-white text-sm shadow-md shadow-gray-700 w-48 rounded-md hidden group-hover:block"
                                style={{backgroundColor: navbarColor}}>
                                <div onClick={handleExanRelated} className="px-4 py-2 cursor-pointer" style={{
                                    backgroundColor: navbarColor,
                                    transition: 'background-color 0.3s',
                                }}
                                     onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkerNavbarColor}
                                     onMouseLeave={(e) => e.currentTarget.style.backgroundColor = navbarColor}>Student
                                    Related
                                </div>
                            </div>
                        </div>

                        {/* Administration */}
                        <div className="relative group">
                            <div className="flex items-center text-sm px-1 h-full cursor-pointer" style={{
                                backgroundColor: navbarColor,
                                transition: 'background-color 0.3s',
                            }}
                                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkerNavbarColor}
                                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = navbarColor}>
                                Administration <FaSortDown className="ml-1"/>
                            </div>
                            <div
                                className="absolute top-9 left-0 animate-bounce-down text-white text-sm shadow-md shadow-gray-700 w-48 rounded-md hidden group-hover:block"
                                style={{backgroundColor: navbarColor}}>
                                <div className="px-4 py-2 cursor-pointer" style={{
                                    backgroundColor: navbarColor,
                                    transition: 'background-color 0.3s',
                                }}
                                     onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkerNavbarColor}
                                     onMouseLeave={(e) => e.currentTarget.style.backgroundColor = navbarColor}>Transactions
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="flex items-center -ml-52 space-x-3 px-4 py-1 rounded-sm"
                         style={{backgroundColor: navbarColor}}>
                        <div className="relative flex items-center" ref={containerRef}>
                            {!isOpenSearch && (
                                <button
                                    className="p-1 bg-white shadow-sm z-10"
                                    onClick={() => setIsOpenSearch(true)}
                                >
                                    <GoSearch className="text-gray-400 text-xl"/>
                                </button>
                            )}

                            <div
                                className={`flex items-center bg-white shadow-sm absolute right-0 transition-all duration-300 ease-in-out overflow-hidden ${
                                    isOpenSearch ? 'w-64 px-3 py-1' : 'w-0 px-0 py-0'
                                }`}
                            >
                                <GoSearch className="text-gray-400 text-lg mr-2"/>
                                <input
                                    type="text"
                                    placeholder="search"
                                    className="outline-none text-gray-700 w-full bg-transparent"
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <button
                                className="px-3 py-1 text-red-600 font-semibold text-sm bg-white shadow-sm"
                                onClick={() => setIsOpenFAQ(true)}
                            >
                                FAQs
                            </button>

                            {isOpenFAQ && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                                    <div
                                        className="bg-white w-[550px] h-[600px] rounded shadow-lg relative p-4 flex flex-col">
                                        <h2 className="text-lg text-left text-gray-800 font mb-2">Frequently Asked
                                            Questions</h2>
                                        <hr className="mb-3 h-[1px] border-none bg-gray-300"/>

                                        <div
                                            className="overflow-y-auto text-left px-4 flex-grow relative custom-scrollbar pr-2 text-sm text-gray-700 space-y-3 mb-12">
                                            <div>
                                                <strong>1. What is the ERP portal used for?</strong>
                                                <p>The ERP portal helps manage academic and administrative student data
                                                    such as attendance, marks, fees, and timetables.</p>
                                            </div>
                                            <div>
                                                <strong>2. How do I log in to the ERP system?</strong>
                                                <p>Use your student ID and password. If not received, contact ERP
                                                    support or your academic coordinator.</p>
                                            </div>
                                            <div>
                                                <strong>3. What should I do if I forget my password?</strong>
                                                <p>Click on “Forgot Password” on the login page or contact the ERP
                                                    helpdesk to reset it.</p>
                                            </div>
                                            <div>
                                                <strong>4. How can I check my attendance and internal marks?</strong>
                                                <p>Go to the “Student Dashboard” and select “Attendance” or “Internal
                                                    Marks.”</p>
                                            </div>
                                            <div>
                                                <strong>5. Where can I find the class timetable or exam
                                                    schedule?</strong>
                                                <p>Check the “Academic Calendar” or “Timetable” section in your
                                                    dashboard.</p>
                                            </div>
                                            <div>
                                                <strong>6. Can I apply for leave or OD (On Duty) through the
                                                    portal?</strong>
                                                <p>Yes, apply through the “Leave Application” section in the ERP.</p>
                                            </div>
                                            <div>
                                                <strong>7. How do I pay my semester fees?</strong>
                                                <p>Navigate to the “Fees” tab and follow the instructions for online
                                                    payment.</p>
                                            </div>
                                            <div>
                                                <strong>8. How can I download my grade sheet or transcript?</strong>
                                                <p>Go to “Reports” or “Academic Records” to download documents.</p>
                                            </div>
                                            <div>
                                                <strong>9. How do I raise a support ticket or report a technical
                                                    issue?</strong>
                                                <p>Use the “Helpdesk” or “Support” section to raise a ticket.</p>
                                            </div>
                                            <div>
                                                <strong>10. Why is some of my information incorrect or missing?</strong>
                                                <p>Contact the ERP admin or academic office to correct it.</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setIsOpenFAQ(false)}
                                            className="absolute bottom-4 right-4 text-sm text-red-600 border border-red-600 px-4 py-1 rounded hover:bg-red-100"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={'relative'}>
                            <button className="p-1 bg-white shadow-sm"
                                    onClick={() => setShowDropdown9(!showDropdown9)}>
                                <FaTh style={{color: navbarColor}}/>
                            </button>
                            {showDropdown9 && (
                                <div
                                    className="absolute right-0 top-8 w-[350px] h-[350px] bg-white animate-bounce-down text-sm rounded-md shadow-lg z-50 p-5">
                                    <div className={'grid grid-cols-3 grid-rows-4 gap-4 gap-y-9 text-[#6e7df0]'}>
                                        <div>
                                            <button onClick={() => setShowDropdown2(!setShowDropdown2())}
                                                    className={'flex flex-col items-center justify-center text-center'}>
                                                <BsMegaphone className={'text-2xl'}/><h1
                                                className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Announcements</h1>
                                            </button>
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
                                        <button className={'flex flex-col items-center justify-center text-center'}>
                                            <Link to={'/Dashboard'}
                                                  className={'flex flex-col items-center justify-center text-center'}><BsSpeedometer2
                                                className={'text-2xl'}/><h1
                                                className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Dashboard</h1>
                                            </Link>
                                        </button>
                                        <div>
                                            <button onClick={() => setShowPanel3(true)} className={'flex flex-col items-center justify-center text-center'}>
                                                <HiMiniLink className={'text-2xl'}/><h1
                                                className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Recent
                                                Links</h1>
                                            </button>
                                            {showPanel3 && (
                                                <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
                                                    <div
                                                        className="absolute top-0 right-0 h-full w-[350px] shadow-lg transition-transform transform translate-x-0"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <LinksPanel
                                                            setPanel3={setShowPanel3}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <button className={'flex flex-col items-center justify-center text-center'}>
                                            <BsFileEarmarkRichtext className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Report
                                            Collection</h1>
                                        </button>
                                        <button className={'flex flex-col items-center justify-center text-center'}>
                                            <BsClipboardCheck className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Todo List</h1>
                                        </button>
                                        <button onClick={openCalculator}
                                                className={'flex flex-col items-center justify-center text-center'}>
                                            <BsCalculator className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Calculator</h1>
                                        </button>
                                        <a
                                            href="https://www.wikipedia.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={'flex flex-col items-center justify-center text-center'}>
                                            <BsWikipedia className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Wikipedia</h1>
                                        </a>
                                        <a
                                            href="https://www.google.co.in"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={'flex flex-col items-center justify-center text-center'}>
                                            <BsGoogle className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Google
                                            Search</h1>
                                        </a>
                                        <a
                                            href="https://meet.google.com/landing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={'flex flex-col items-center justify-center text-center'}>
                                            <BsCameraVideo className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Google
                                            Meet</h1>
                                        </a>
                                        <a
                                            href="https://translate.google.co.in/?hl=en&tab=TT&sl=auto&tl=en&op=translate"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={'flex flex-col items-center justify-center text-center'}>
                                            <BsTranslate className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Google
                                            Translate</h1>
                                        </a>
                                        <button className={'flex flex-col items-center justify-center text-center'}>
                                            <BsCalendarEvent className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Event
                                            Calendar</h1>
                                        </button>
                                        <>
                                            <button
                                                className="flex flex-col items-center justify-center text-center"
                                                onClick={handlePlay}
                                            >
                                                <BsInfoCircle className="text-2xl" />
                                                <h1 className="text-xs mt-2 text-gray-700 hover:text-[#6e7df0]">Welcome Tour</h1>
                                            </button>

                                            {showVideo && (
                                                <div className="fixed inset-0 z-50 bg-black">
                                                    <video
                                                        src={WelcomeTour}
                                                        autoPlay
                                                        className="w-full h-full object-cover"
                                                        onEnded={handleVideoEnd}
                                                        playsInline
                                                    />
                                                    <button
                                                        className="absolute bottom-4 left-4 bg-white font-semibold border-2 rounded-xl px-4 py-2 shadow-md shadow-black hover:bg-gray-200 transition" style={{color: navbarColor}}
                                                        onClick={handleVideoEnd}
                                                    >
                                                        Stop the tour
                                                    </button>
                                                </div>
                                            )}

                                        </>
                                    </div>

                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="flex items-center space-x-1 focus:outline-none"
                            >
                                <img
                                    src={me}
                                    alt="User"
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                />
                                <FaAngleDown className="text-white text-xs"/>
                            </button>

                            {showDropdown && (
                                <div
                                    className="absolute right-0 top-8 w-64 bg-white animate-bounce-down text-sm rounded-md shadow-lg z-50 py-4">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={me}
                                            alt="User"
                                            className="w-20 h-20 rounded-full mb-2"
                                        />
                                        <p className="text-lg text-black">Welcome</p>
                                    </div>
                                    <div className="mt-4 space-y-1">
                                        <div
                                            className="flex items-center space-x-2 text-gray-600 hover:text-black hover:bg-gray-100 px-2 py-2 rounded cursor-pointer">
                                            <FaUser/>
                                            <span>User Profile</span>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2 text-gray-600 hover:text-black hover:bg-gray-100 px-2 py-2 rounded cursor-pointer">
                                            <FaHome/>
                                            <span>Home</span>
                                        </div>
                                    </div>
                                    <div className={'h-[0.3px] my-2 bg-gray-300 w-full'}>
                                    </div>
                                    <div className="mt-4 flex justify-around">
                                        <button className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600">
                                            <FaKey/>
                                        </button>
                                        <button
                                            className="p-2 rounded bg-red-600 text-white hover:bg-red-700"
                                            onClick={handleLogout}
                                        >
                                            <FaPowerOff/>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative flex justify-between items-center w-full text-black shadow-md z-40"
                     style={{backgroundColor: navbarColor}}>
                    {/* LEFT SECTION */}
                    <div className="flex h-10 w-screen text-black shadow-md" style={{backgroundColor: navbarColor}}>
                        <button onClick={handleHome}>
                            <img src={mitaoe} className="h-[35px] mt-1 ml-1 mr-4" alt="mitaoe"/>
                        </button>

                        {/* Academic */}
                        <div className="relative group">
                            <div className="flex items-center text-sm px-1 h-full hover:bg-gray-400 cursor-pointer">
                                Academic <FaSortDown className="ml-1"/>
                            </div>
                            <div
                                className="absolute top-9 left-0 animate-bounce-down text-black text-sm shadow-md shadow-gray-700 w-48 rounded-md hidden group-hover:block"
                                style={{backgroundColor: navbarColor}}>
                                <div onClick={handleRelated}
                                     className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Student Related
                                </div>
                                <div className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Feedback</div>
                            </div>
                        </div>

                        {/* Examination */}
                        <div className="relative group">
                            <div className="flex items-center text-sm px-1 h-full hover:bg-gray-400 cursor-pointer">
                                Examination <FaSortDown className="ml-1"/>
                            </div>
                            <div onClick={handleExanRelated}
                                 className="absolute top-9 left-0 animate-bounce-down text-black text-sm shadow-md shadow-gray-700 w-48 rounded-md hidden group-hover:block"
                                 style={{backgroundColor: navbarColor}}>
                                <div className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Student Related</div>
                            </div>
                        </div>

                        {/* Administration */}
                        <div className="relative group">
                            <div className="flex items-center text-sm px-1 h-full hover:bg-gray-400 cursor-pointer">
                                Administration <FaSortDown className="ml-1"/>
                            </div>
                            <div
                                className="absolute top-9 left-0 animate-bounce-down text-black text-sm shadow-md shadow-gray-700 w-48 rounded-md hidden group-hover:block"
                                style={{backgroundColor: navbarColor}}>
                                <div className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Transactions</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="flex items-center -ml-52 space-x-3 px-4 py-1 rounded-sm"
                         style={{backgroundColor: navbarColor}}>
                        <div className="relative flex items-center" ref={containerRef}>
                            {!isOpenSearch && (
                                <button
                                    className="p-1 bg-white shadow-sm z-10"
                                    onClick={() => setIsOpenSearch(true)}
                                >
                                    <GoSearch className="text-gray-400 text-xl"/>
                                </button>
                            )}

                            <div
                                className={`flex items-center bg-white shadow-sm absolute right-0 transition-all duration-300 ease-in-out overflow-hidden ${
                                    isOpenSearch ? 'w-64 px-3 py-1' : 'w-0 px-0 py-0'
                                }`}
                            >
                                <GoSearch className="text-gray-400 text-lg mr-2"/>
                                <input
                                    type="text"
                                    placeholder="search"
                                    className="outline-none text-gray-700 w-full bg-transparent"
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <button
                                className="px-3 py-1 text-red-600 font-semibold text-sm bg-white shadow-sm"
                                onClick={() => setIsOpenFAQ(true)}
                            >
                                FAQs
                            </button>

                            {isOpenFAQ && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                                    <div
                                        className="bg-white w-[550px] h-[600px] rounded shadow-lg relative p-4 flex flex-col">
                                        <h2 className="text-lg text-left text-gray-800 font mb-2">Frequently Asked
                                            Questions</h2>
                                        <hr className="mb-3 h-[1px] border-none bg-gray-300"/>

                                        <div
                                            className="overflow-y-auto text-left px-4 flex-grow relative custom-scrollbar pr-2 text-sm text-gray-700 space-y-3 mb-12">
                                            <div>
                                                <strong>1. What is the ERP portal used for?</strong>
                                                <p>The ERP portal helps manage academic and administrative student data
                                                    such as attendance, marks, fees, and timetables.</p>
                                            </div>
                                            <div>
                                                <strong>2. How do I log in to the ERP system?</strong>
                                                <p>Use your student ID and password. If not received, contact ERP
                                                    support or your academic coordinator.</p>
                                            </div>
                                            <div>
                                                <strong>3. What should I do if I forget my password?</strong>
                                                <p>Click on “Forgot Password” on the login page or contact the ERP
                                                    helpdesk to reset it.</p>
                                            </div>
                                            <div>
                                                <strong>4. How can I check my attendance and internal marks?</strong>
                                                <p>Go to the “Student Dashboard” and select “Attendance” or “Internal
                                                    Marks.”</p>
                                            </div>
                                            <div>
                                                <strong>5. Where can I find the class timetable or exam
                                                    schedule?</strong>
                                                <p>Check the “Academic Calendar” or “Timetable” section in your
                                                    dashboard.</p>
                                            </div>
                                            <div>
                                                <strong>6. Can I apply for leave or OD (On Duty) through the
                                                    portal?</strong>
                                                <p>Yes, apply through the “Leave Application” section in the ERP.</p>
                                            </div>
                                            <div>
                                                <strong>7. How do I pay my semester fees?</strong>
                                                <p>Navigate to the “Fees” tab and follow the instructions for online
                                                    payment.</p>
                                            </div>
                                            <div>
                                                <strong>8. How can I download my grade sheet or transcript?</strong>
                                                <p>Go to “Reports” or “Academic Records” to download documents.</p>
                                            </div>
                                            <div>
                                                <strong>9. How do I raise a support ticket or report a technical
                                                    issue?</strong>
                                                <p>Use the “Helpdesk” or “Support” section to raise a ticket.</p>
                                            </div>
                                            <div>
                                                <strong>10. Why is some of my information incorrect or missing?</strong>
                                                <p>Contact the ERP admin or academic office to correct it.</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setIsOpenFAQ(false)}
                                            className="absolute bottom-4 right-4 text-sm text-red-600 border border-red-600 px-4 py-1 rounded hover:bg-red-100"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={'relative'}>
                            <button className="p-1 bg-white shadow-sm"
                                    onClick={() => setShowDropdown9(!showDropdown9)}>
                                <FaTh style={{color: navbarColor}}/>
                            </button>
                            {showDropdown9 && (
                                <div
                                    className="absolute right-0 top-8 w-[350px] h-[350px] bg-white animate-bounce-down text-sm rounded-md shadow-lg z-50 p-5">
                                    <div className={'grid grid-cols-3 grid-rows-4 gap-4 gap-y-9 text-[#6e7df0]'}>
                                        <div>
                                            <button onClick={() => setShowDropdown2(!setShowDropdown2())}
                                                    className={'flex flex-col items-center justify-center text-center'}>
                                                <BsMegaphone className={'text-2xl'}/><h1
                                                className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Announcements</h1>
                                            </button>
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
                                        <button className={'flex flex-col items-center justify-center text-center'}>
                                            <Link to={'/Dashboard'}
                                                  className={'flex flex-col items-center justify-center text-center'}><BsSpeedometer2
                                                className={'text-2xl'}/><h1
                                                className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Dashboard</h1>
                                            </Link>
                                        </button>
                                        <div>
                                            <button onClick={() => setShowPanel3(true)} className={'flex flex-col items-center justify-center text-center'}>
                                                <HiMiniLink className={'text-2xl'}/><h1
                                                className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Recent
                                                Links</h1>
                                            </button>
                                            {showPanel3 && (
                                                <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
                                                    <div
                                                        className="absolute top-0 right-0 h-full w-[350px] shadow-lg transition-transform transform translate-x-0"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <LinksPanel
                                                            setPanel3={setShowPanel3}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <button className={'flex flex-col items-center justify-center text-center'}>
                                            <BsFileEarmarkRichtext className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Report
                                            Collection</h1>
                                        </button>
                                        <button className={'flex flex-col items-center justify-center text-center'}>
                                            <BsClipboardCheck className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Todo List</h1>
                                        </button>
                                        <button onClick={openCalculator}
                                                className={'flex flex-col items-center justify-center text-center'}>
                                            <BsCalculator className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Calculator</h1>
                                        </button>
                                        <a
                                            href="https://www.wikipedia.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={'flex flex-col items-center justify-center text-center'}>
                                            <BsWikipedia className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Wikipedia</h1>
                                        </a>
                                        <a
                                            href="https://www.google.co.in"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={'flex flex-col items-center justify-center text-center'}>
                                            <BsGoogle className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Google
                                            Search</h1>
                                        </a>
                                        <a
                                            href="https://meet.google.com/landing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={'flex flex-col items-center justify-center text-center'}>
                                            <BsCameraVideo className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Google
                                            Meet</h1>
                                        </a>
                                        <a
                                            href="https://translate.google.co.in/?hl=en&tab=TT&sl=auto&tl=en&op=translate"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={'flex flex-col items-center justify-center text-center'}>
                                            <BsTranslate className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Google
                                            Translate</h1>
                                        </a>
                                        <button className={'flex flex-col items-center justify-center text-center'}>
                                            <BsCalendarEvent className={'text-2xl'}/><h1
                                            className={'text-xs mt-2 text-gray-700 hover:text-[#6e7df0]'}>Event
                                            Calendar</h1>
                                        </button>
                                        <>
                                            <button
                                                className="flex flex-col items-center justify-center text-center"
                                                onClick={handlePlay}
                                            >
                                                <BsInfoCircle className="text-2xl" />
                                                <h1 className="text-xs mt-2 text-gray-700 hover:text-[#6e7df0]">Welcome Tour</h1>
                                            </button>

                                            {showVideo && (
                                                <div className="fixed inset-0 z-50 bg-black">
                                                    <video
                                                        src={WelcomeTour}
                                                        autoPlay
                                                        className="w-full h-full object-cover"
                                                        onEnded={handleVideoEnd}
                                                        playsInline
                                                    />
                                                    <button
                                                        className="absolute bottom-4 left-4 bg-white font-semibold border-2 rounded-xl px-4 py-2 shadow-md shadow-black hover:bg-gray-200 transition" style={{color: navbarColor}}
                                                        onClick={handleVideoEnd}
                                                    >
                                                        Stop the tour
                                                    </button>
                                                </div>
                                            )}

                                        </>
                                    </div>

                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="flex items-center space-x-1 focus:outline-none"
                            >
                                <img
                                    src={me}
                                    alt="User"
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                />
                                <FaAngleDown className="text-white text-xs"/>
                            </button>

                            {showDropdown && (
                                <div
                                    className="absolute right-0 top-8 w-64 bg-white animate-bounce-down text-sm rounded-md shadow-lg z-50 py-4">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={me}
                                            alt="User"
                                            className="w-20 h-20 rounded-full mb-2"
                                        />
                                        <p className="text-lg text-black">Welcome</p>
                                    </div>
                                    <div className="mt-4 space-y-1">
                                        <div
                                            className="flex items-center space-x-2 text-gray-600 hover:text-black hover:bg-gray-100 px-2 py-2 rounded cursor-pointer">
                                            <FaUser/>
                                            <span>User Profile</span>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2 text-gray-600 hover:text-black hover:bg-gray-100 px-2 py-2 rounded cursor-pointer">
                                            <FaHome/>
                                            <span>Home</span>
                                        </div>
                                    </div>
                                    <div className={'h-[0.3px] my-2 bg-gray-300 w-full'}>
                                    </div>
                                    <div className="mt-4 flex justify-around">
                                        <button className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600">
                                            <FaKey/>
                                        </button>
                                        <button
                                            className="p-2 rounded bg-red-600 text-white hover:bg-red-700"
                                            onClick={handleLogout}
                                        >
                                            <FaPowerOff/>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default NavBar;
