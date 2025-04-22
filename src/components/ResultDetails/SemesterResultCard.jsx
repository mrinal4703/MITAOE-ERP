import React, {useState} from 'react';
import resultsData from './semesterData.json';
import {down, up} from "../../images";

const SemesterResultCard = ({selectedSemester, navbarColor = "#5864bd"}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!selectedSemester || !resultsData[selectedSemester]) return null;

    const summary = resultsData[selectedSemester].summary;
    const details = resultsData[selectedSemester].details;

    return (
        <div className="mt-5 bg-white rounded-lg overflow-hidden font-sans text-left">
            {/*<h4 className="text-lg font-semibold bg-[#f7f9fa] px-6 py-4 border-b border-gray-300">*/}
            {/*    Semester: {selectedSemester}*/}
            {/*</h4>*/}

            {/* Header Row */}
            <div
                className="grid grid-cols-10 text-xs font-semibold bg-white px-2 py-2 shadow-sm">
                <div className="border-b-2 mx-1 border-blue-500">Show</div>
                <div className="border-b-2 mx-1 border-red-500">Session</div>
                <div className="border-b-2 mx-1 border-orange-500">Section</div>
                <div className="border-b-2 mx-1 border-violet-500">Registered Courses</div>
                <div className="border-b-2 mx-1 border-blue-500">Registered Credits</div>
                <div className="border-b-2 mx-1 border-red-500">Earned Credits</div>
                <div className="border-b-2 mx-1 border-orange-500">SGPA</div>
                <div className="border-b-2 mx-1 border-violet-500">CGPA</div>
                <div className="border-b-2 mx-1 border-blue-500">Result Date</div>
                <div className="border-b-2 mx-1 border-red-500 text-center">Print</div>
            </div>

            {/* Summary Row */}
            <div className="grid grid-cols-10 items-center text-xs py-2 rounded-md bg-gray-100">
                {/* Toggle Button */}
                <div className="flex justify-center">
                    <button onClick={() => setIsExpanded(prev => !prev)}>
                        <img src={isExpanded ? up : down} alt="Toggle" className="w-4 h-4"/>
                    </button>
                </div>

                {/* Data Cells */}
                <div className="text-center">{summary.session}</div>
                <div className="text-center">{summary.section}</div>
                <div className="text-center">{summary.registeredCourses}</div>
                <div className="text-center">{summary.registeredCredits}</div>
                <div className="text-center">{summary.earnedCredits}</div>
                <div className="text-center">{summary.sgpa}</div>
                <div className="text-center">{summary.cgpa}</div>
                <div className="text-center">{summary.resultDate}</div>

                {/* Print Button */}
                <div className="flex justify-center">
                    <button className="text-xs cursor-pointer">🖨️</button>
                </div>
            </div>

            {/* Expandable Subject Details */}
            {isExpanded && (
                <div className="py-4 animate-fade-in rounded-lg hover:bg-gray-100 my-3">
                  <h3 className="text-base ml-2 text-left font-semibold border-l-4 pl-2" style={{borderColor: navbarColor}}>Students Session wise Details</h3>
                    <table className="w-full text-sm ml-2 mr-4 mt-1">
                        <thead>
                        <tr className="bg-white">
                            <th className="p-2 text-left border-b-2 mx-1 border-blue-500">Course Name</th>
                            <th className=" p-2 text-left border-b-2 mx-1 border-red-500">Exam Type</th>
                            <th className=" p-2 text-left border-b-2 mx-1 border-orange-500">Course Type</th>
                            <th className=" p-2 text-left border-b-2 mx-1 border-violet-500">Credits</th>
                            <th className="p-2 text-left border-b-2 mx-1 border-blue-500">Grade</th>
                            <th className=" p-2 text-left border-b-2 mx-1 border-red-500">Grade Point</th>
                            <th className=" p-2 text-left border-b-2 mx-1 border-orange-500">Earned Grade Points</th>
                            <th className=" p-2 text-left border-b-2 mx-1 border-violet-500">Result</th>
                        </tr>
                        </thead>
                        <tbody>
                        {details.map((subject, idx) => (
                            <tr key={idx}>
                                <td className="border p-2">{subject.code} - {subject.subject}</td>
                                <td className="border p-2">{subject.examType}</td>
                                <td className="border p-2">{subject.courseType}</td>
                                <td className="border p-2">{subject.credits}</td>
                                <td className="border p-2">{subject.grade}</td>
                                <td className="border p-2">{subject.gradePoint}</td>
                                <td className="border p-2">{subject.earnedGradePoint}</td>
                                <td className="border p-2">{subject.result}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SemesterResultCard;