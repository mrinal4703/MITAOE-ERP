import React from 'react';

const HigherSecondaryMarks = ({navbarColor = "#5864bd"}) => {
  const data = [
    ['School/College Name', 'Modern Jr. College'],
    ['Year of Exam', '2021'],
    ['Seat No.', 'MH98765432'],
    ['Total Marks', '600'],
    ['Total Percentage', '78.50%'],
    ['Board', 'Maharashtra State Board'],
    ['Medium', 'English'],
    ['Stream', 'Science'],
    ['Obtained Marks', '471'],
    ['School/College Address', 'Pune, Maharashtra'],
  ];

  return (
    <div className="bg-white p-6 rounded-xl  mb-6">
      <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>
        Higher Secondary / 12th Marks / Diploma Marks
      </h3>

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

export default HigherSecondaryMarks;
