import React from 'react'
import StudentInfoCard from './StudentInfoCard';


function AttendanceDetailsContainer({navbarColor = "#5864bd"}) {
    const overall = {
        totalClasses: 12,
        totalPresent: 9,
        totalAbsent: 3,
        totalOD: 0,
        totalPercentage: 75.0,
    };

    const attendanceData = [
        {
            courseCode: 'CS482L',
            courseName: 'Human Computer Interaction',
            subjectType: 'Practical',
            totalClasses: 7,
            present: 4,
            absent: 3,
            od: 0,
            percentage: 57.14,
        },
        {
            courseCode: 'CS482T',
            courseName: 'Human Computer Interaction',
            subjectType: 'Theory',
            totalClasses: 5,
            present: 5,
            absent: 0,
            od: 0,
            percentage: 100.0,
        },
    ];

    return (
        <div className="bg-white p-4 rounded-xl mb-6">
            <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>Attendance Details</h3>

            {/* Overall Stats */}
            <div className="text-sm text-gray-700 mb-4 flex flex-wrap gap-4">
                <div><strong>Total Classes</strong> - {overall.totalClasses}</div>
                <div><strong>Total Present</strong> - {overall.totalPresent}</div>
                <div><strong>Total Absent</strong> - {overall.totalAbsent}</div>
                <div><strong>Total OD</strong> - {overall.totalOD}</div>
                <div><strong>Total Attendance(%)</strong> - {overall.totalPercentage.toFixed(2)} %</div>
            </div>

            {/* Table Header */}
            <div
                className="grid grid-cols-[1.2fr_2fr_1.2fr_1fr_1fr_1fr_1fr_1.2fr] text-xs font-semibold text-gray-700 border-b mb-2">
                <div className="pb-2 border-b-2 border-blue-500">Course Code</div>
                <div className="pb-2 border-b-2 border-red-500">Course Name</div>
                <div className="pb-2 border-b-2 border-orange-500">Subject Type</div>
                <div className="pb-2 border-b-2 border-blue-500">Total Classes</div>
                <div className="pb-2 border-b-2 border-blue-500">Total Present</div>
                <div className="pb-2 border-b-2 border-red-500">Total Absent</div>
                <div className="pb-2 border-b-2 border-orange-500">Total OD</div>
                <div className="pb-2 border-b-2 border-purple-500">Total Attendance(%)</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-200">
                {attendanceData.map((item, idx) => (
                    <div
                        key={idx}
                        className="grid grid-cols-[1.2fr_2fr_1.2fr_1fr_1fr_1fr_1fr_1.2fr] text-sm text-gray-800 bg-gray-50 rounded-md shadow-sm px-3 py-2 mb-2"
                    >
                        <div className="underline" style={{color: navbarColor}}>{item.courseCode}</div>
                        <div>{item.courseName}</div>
                        <div>{item.subjectType}</div>
                        <div>{item.totalClasses}</div>
                        <div>{item.present}</div>
                        <div>{item.absent}</div>
                        <div>{item.od}</div>
                        <div>{item.percentage.toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


function AttendanceDetails({navbarColor = "#5864bd"}) {
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
            <StudentInfoCard/>
            <AttendanceDetailsContainer navbarColor={navbarColor}/>
        </div>
    );
}

export default AttendanceDetails

