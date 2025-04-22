import React from 'react';
import {FaAngleDown, FaAsterisk, FaRegBell} from "react-icons/fa";
import {BsDot} from "react-icons/bs";
import {LuAsterisk} from "react-icons/lu";

const AcademicFeedbackPage = ({navbarColor = "#5864bd"}) => {
    return (
        <div
            className={'m-5 p-3 w-[1230px] font-sans h-[max] bg-white rounded-xl shadow-md flex flex-col overflow-hidden'}>
            <h1 className={'text-left text-lg font-semibold'}>Feedback Submission</h1>
            <hr className="mb-3 h-[1.5px] border-none" style={{backgroundColor: navbarColor}}/>
            <div className={'px-5'}>
                <div className={'rounded-sm border w-full h-10 flex'}>
                    <div className={'w-10 flex items-center justify-center text-center'}
                         style={{backgroundColor: navbarColor}}><FaRegBell className={'h-8 text-white'}/></div>
                    <span className={'flex items-center justify-center text-center'}><BsDot
                        className={'text-2xl ml-2'}/>MT - Main Teacher || ADT - Additional Teacher</span>
                </div>
                <div className={'grid grid-cols-2 my-7 gap-2'}>
                    <div>
                        <hr/>
                        <div className={'grid grid-cols-2 text-left my-1.5'}>
                            <div>
                                <h1 className={'font-semibold text-sm'}>Student ID</h1>
                            </div>
                            <div>
                                <h1 className={'text-sm'}>202101070082</h1>
                            </div>
                        </div>
                        <hr/>
                        <div className={'grid grid-cols-2 text-left my-1.5'}>
                            <div>
                                <h1 className={'font-semibold text-sm'}>Student Name</h1>
                            </div>
                            <div>
                                <h1 className={'text-sm'}>MRINAL GUPTA</h1>
                            </div>
                        </div>
                        <hr/>
                        <div className={'grid grid-cols-2 text-left my-1.5'}>
                            <div>
                                <h1 className={'font-semibold text-sm'}>Session</h1>
                            </div>
                            <div>
                                <h1 className={'text-sm'}></h1>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <hr/>
                        <div className={'grid grid-cols-2 text-left my-1.5'}>
                            <div>
                                <h1 className={'font-semibold text-sm'}>Scheme</h1>
                            </div>
                            <div>
                                <h1 className={'text-sm pr-1'}>B. Tech-COMPUTER ENGINEERING-2019-20-Department of
                                    Computer Engineering (CBCS)</h1>
                            </div>
                        </div>
                        <hr/>
                        <div className={'grid grid-cols-2 text-left my-1.5'}>
                            <div>
                                <h1 className={'font-semibold text-sm'}>Semester</h1>
                            </div>
                            <div>
                                <h1 className={'text-sm'}>Eighth Semester</h1>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className={'flex mb-14'}>
                    <div>
                        <h1 className={'text-xs text-left flex mb-5 mr-64'}><LuAsterisk
                            className={'text-xs text-red-600'}/>Session</h1>
                        <div
                            className={'rounded justify-between items-center border border-blue-500 w-64 h-10 px-4 text-left flex'}>MAY
                            2025<FaAngleDown className="text-black text-xs"/></div>
                    </div>
                    <div>
                        <h1 className={'text-xs text-left flex mb-5'}><LuAsterisk className={'text-xs text-red-600'}/>Feedback
                            Type</h1>
                        <div
                            className={'rounded justify-between items-center border border-blue-500 w-64 h-10 px-4 text-left flex'}>360
                            DEGREES FEEDBACK<FaAngleDown className="text-black text-xs"/></div>
                    </div>
                </div>
                <div className="overflow-y-auto flex-grow relative">
                    <table className="w-full text-xs border-separate border-spacing-x-0.5 border-spacing-y-0.5 mb-2">
                        <thead>
                        <tr>
                            <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 py-1 px-2">SrNo</th>
                            <th className="sticky top-0 bg-gray-100 z-[4] font-bold border-b-2 border-b-red-500 py-1 px-2">Subject
                                Code - Subject Name - Faculty Name - Faculty Type - Subject Type
                            </th>
                            <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-orange-500 px-2 py-1">Semester</th>
                            <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-violet-500 px-2 py-1">Feedback
                                Status
                            </th>
                            <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 px-2 py-1">Final
                                Submit Status
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="text-left bg-gray-100 px-2 py-1">1</td>
                            <td className="text-left flex bg-gray-50 px-2 py-1" style={{color: navbarColor}}>CS482L -
                                Human Computer Interaction [<h1 className={'text-[#008000] font-semibold'}>PRAMOD
                                    ANANRRAO DHARMADHIKARI</h1>] [<h1
                                    className={'text-[#008b8b] font-semibold'}>MT</h1>] <h1
                                    className={'text-[#008b8b]'}>[Practical]</h1></td>
                            <td className="text-left bg-gray-50 px-2 py-1">8</td>
                            <td className="text-left bg-gray-50 px-2 py-1 text-[#008000]">Saved</td>
                            <td className="text-left bg-gray-50 px-2 py-1 flex"><span
                                className="inline-block text-green-600 border border-green-600 text-xs px-3 py-1 rounded-full">Complete</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left bg-gray-100 px-2 py-1">2</td>
                            <td className="text-left flex bg-gray-50 px-2 py-1" style={{color: navbarColor}}>HP405T -
                                Engineering Economics [<h1 className={'text-[#008000] font-semibold'}>PARAG NARAYAN
                                    SUTAR</h1>] [<h1 className={'text-[#008b8b] font-semibold'}>MT</h1>] <h1
                                    className={'text-[#008b8b]'}>[Theory]</h1></td>
                            <td className="text-left bg-gray-50 px-2 py-1">8</td>
                            <td className="text-left bg-gray-50 px-2 py-1 text-[#008000]">Saved</td>
                            <td className="text-left bg-gray-50 px-2 py-1 flex"><span
                                className="inline-block text-green-600 border border-green-600 text-xs px-3 py-1 rounded-full">Complete</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left bg-gray-100 px-2 py-1">3</td>
                            <td className="text-left flex bg-gray-50 px-2 py-1" style={{color: navbarColor}}>HP406T -
                                Psychology [<h1 className={'text-[#008000] font-semibold'}>HUSSAIN SHAIK ALI
                                    SHAIKHALI</h1>] [<h1 className={'text-[#008b8b] font-semibold'}>MT</h1>] <h1
                                    className={'text-[#008b8b]'}>[Theory]</h1></td>
                            <td className="text-left bg-gray-50 px-2 py-1">8</td>
                            <td className="text-left bg-gray-50 px-2 py-1 text-[#008000]">Saved</td>
                            <td className="text-left bg-gray-50 px-2 py-1 flex"><span
                                className="inline-block text-green-600 border border-green-600 text-xs px-3 py-1 rounded-full">Complete</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-left bg-gray-100 px-2 py-1">4</td>
                            <td className="text-left flex bg-gray-50 px-2 py-1" style={{color: navbarColor}}>CS482T -
                                Human Computer Interaction [<h1 className={'text-[#008000] font-semibold'}>PRANALI
                                    PRAKSH LOKHANDE</h1>] [<h1 className={'text-[#008b8b] font-semibold'}>MT</h1>] <h1
                                    className={'text-[#008b8b]'}>[Theory]</h1></td>
                            <td className="text-left bg-gray-50 px-2 py-1">8</td>
                            <td className="text-left bg-gray-50 px-2 py-1 text-[#008000]">Saved</td>
                            <td className="text-left bg-gray-50 px-2 py-1 flex"><span
                                className="inline-block text-green-600 border border-green-600 text-xs px-3 py-1 rounded-full">Complete</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AcademicFeedbackPage;