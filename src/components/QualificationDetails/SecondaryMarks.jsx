import React from 'react';

const SecondaryMarks = () => {
  const data = [
    ['School/College Name', 'St. Xavier High School'],
    ['Year of Exam', '2019'],
    ['Out Of Marks / GPA', '500'],
    ['Percentage', '86.40%'],
    ['School/College Address', 'Mumbai, Maharashtra'],
    ['Board', 'Maharashtra State Board'],
    ['Medium', 'English'],
    ['Marks Obtained', '432'],
    ['Seat No.', 'MH12345678'],
  ];

  return (
    <div className="bg-white p-6 rounded-xl  mb-6">
      <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Secondary / 10th Marks</h3>

      <div className="grid grid-cols-2 gap-x-6 text-sm text-gray-800">
        {data.map(([label, value], idx) => (
          <div key={idx} className="col-span-1 flex justify-between items-center py-2 border-b">
            <span className="text-gray-700 font-medium">{label}</span>
            <span className="text-gray-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryMarks;
