// 
import React from 'react';

const EntranceExamScores = () => {
  return (
    <div className="bg-white p-6 rounded-xl mb-6">
      <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Entrance Exam Scores</h3>

      <div className="grid grid-cols-2 gap-x-6 text-sm text-gray-800">
        {[
          ['Exam Name', 'JEE Mains'],
          ['Seat No.', 'JE123456'],
          ['Year of Exam', '2022'],
          ['Percentage', '91.33%'],
          ['Total Marks', '300'],
          ['Obtained Marks', '274'],
          ['Rank', '4563'],
          ['Category Rank', '872'],
          ['Last School Name as per TC/Leaving Certificate', 'St. Xavier High School'],
        ].map(([label, value], idx) => (
          <div
            key={idx}
            className="col-span-1 flex justify-between items-center py-2 border-b"
          >
            <span className="text-gray-700 font-medium">{label}</span>
            <span className="text-gray-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntranceExamScores;
