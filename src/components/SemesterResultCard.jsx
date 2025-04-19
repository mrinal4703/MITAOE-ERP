import React, { useState } from 'react';

const dummySummaryData = {
  session: 'MAY 2025',
  section: 'A',
  registeredCourses: 6,
  registeredCredits: 24,
  earnedCredits: 22,
  sgpa: 8.5,
  cgpa: 8.1,
  resultDate: '2025-06-15'
};

const dummyDetailedResults = [
  { code: 'CS501', subject: 'Algorithms', credits: 4, grade: 'A' },
  { code: 'CS502', subject: 'DBMS', credits: 4, grade: 'A+' },
  { code: 'CS503', subject: 'Operating Systems', credits: 4, grade: 'B+' },
  { code: 'CS504', subject: 'Web Tech', credits: 3, grade: 'A' },
  { code: 'CS505', subject: 'Software Engg.', credits: 3, grade: 'A' },
  { code: 'CS506', subject: 'Mini Project', credits: 6, grade: 'A+' }
];

const SemesterResultCard = ({ selectedSemester }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!selectedSemester) return null;

  return (
    <div className="mt-5 bg-white rounded-lg shadow-md overflow-hidden font-sans text-left">
      <h4 className="text-lg font-semibold bg-[#f7f9fa] px-6 py-4 border-b border-gray-300">
        Semester: {selectedSemester}
      </h4>

      {/* Header Row */}
      <div className="grid grid-cols-[50px_repeat(8,minmax(0,1fr))_50px] text-sm font-semibold bg-gray-100 border-b border-gray-300 px-4 py-3">
        <div></div>
        <div>Session</div>
        <div>Section</div>
        <div>Registered Courses</div>
        <div>Registered Credits</div>
        <div>Earned Credits</div>
        <div>SGPA</div>
        <div>CGPA</div>
        <div>Result Date</div>
        <div className="text-center">Print</div>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-[50px_repeat(8,minmax(0,1fr))_50px] items-center text-sm border-b border-gray-200 px-4 py-3 hover:bg-gray-50 transition">
        <div>
          <button
            className="text-lg cursor-pointer"
            onClick={() => setIsExpanded(prev => !prev)}
          >
            {isExpanded ? '❌' : '⬇️'}
          </button>
        </div>
        <div>{dummySummaryData.session}</div>
        <div>{dummySummaryData.section}</div>
        <div>{dummySummaryData.registeredCourses}</div>
        <div>{dummySummaryData.registeredCredits}</div>
        <div>{dummySummaryData.earnedCredits}</div>
        <div>{dummySummaryData.sgpa}</div>
        <div>{dummySummaryData.cgpa}</div>
        <div>{dummySummaryData.resultDate}</div>
        <div className="text-center">
          <button className="text-lg cursor-pointer">🖨️</button>
        </div>
      </div>

      {/* Expandable Subject Details */}
      {isExpanded && (
        <div className="px-6 py-4 animate-fade-in">
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Code</th>
                <th className="border p-2 text-left">Subject</th>
                <th className="border p-2 text-left">Credits</th>
                <th className="border p-2 text-left">Grade</th>
              </tr>
            </thead>
            <tbody>
              {dummyDetailedResults.map((subject, idx) => (
                <tr key={idx}>
                  <td className="border p-2">{subject.code}</td>
                  <td className="border p-2">{subject.subject}</td>
                  <td className="border p-2">{subject.credits}</td>
                  <td className="border p-2">{subject.grade}</td>
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
