import React, { useState } from 'react';
import StudentInfoCard from './StudentInfoCard';

const InternalMarksContainer = ({navbarColor = "#5864bd"}) => {
  const [selected, setSelected] = useState(null);

  const internalMarksData = [
    {
      code: 'CS482T',
      name: 'Human Computer Interaction',
      session: 'MAY 2025',
      details: [{ exam: 'MSE MARKS', total: 50, obtained: 31 }],
    },
    {
      code: 'CS501',
      name: 'Algorithms',
      session: 'MAY 2025',
      details: [{ exam: 'MSE MARKS', total: 50, obtained: 42 }],
    },
    {
      code: 'CS502',
      name: 'DBMS',
      session: 'MAY 2025',
      details: [{ exam: 'MSE MARKS', total: 50, obtained: 38 }],
    },
    {
      code: 'CS503',
      name: 'Operating Systems',
      session: 'MAY 2025',
      details: [{ exam: 'MSE MARKS', total: 50, obtained: 44 }],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-xl mb-6">
      <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>Internal Marks</h3>

      {/* Table Headings */}
      <div className="grid grid-cols-[1fr_1fr_2fr] font-semibold text-gray-600 border-b mb-2">
        <div className="pb-2 border-b-2 border-blue-500">Show</div>
        <div className="pb-2 border-b-2 border-red-500">SESSION NAME</div>
        <div className="pb-2 border-b-2 border-orange-500">COURSE NAME</div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-200">
        {internalMarksData.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_1fr_2fr] text-sm text-gray-800 items-center px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-md shadow-sm mb-2 transition cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <div className="underline" style={{color: navbarColor}}>{item.code}</div>
            <div>{item.session}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50 px-2">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
            <h4 className="text-xl font-semibold mb-4">Marks Detail</h4>

            {/* Course Info Box */}
            <div className="border border-gray-300 p-4 mb-6 text-sm rounded space-y-1">
              <p><strong>Course name:</strong> {selected.name}</p>
              <p><strong>Course Code:</strong> {selected.code}</p>
              <p><strong>Session Name:</strong> {selected.session}</p>
            </div>

            {/* Marks Table */}
            <table className="w-full border text-sm mb-4">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border px-4 py-2 border-b-2 border-blue-500">Exam Name</th>
                  <th className="border px-4 py-2 border-b-2 border-red-500">Total Marks</th>
                  <th className="border px-4 py-2 border-b-2 border-orange-500">Marks Obtained</th>
                </tr>
              </thead>
              <tbody>
                {selected.details.map((detail, i) => (
                  <tr key={i} className="bg-gray-50">
                    <td className="border px-4 py-2">{detail.exam}</td>
                    <td className="border px-4 py-2">{detail.total}</td>
                    <td className="border px-4 py-2">{detail.obtained}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Close Button */}
            <div className="text-right">
              <button
                className="px-4 py-2 text-sm font-semibold text-red-600 border border-red-500 rounded hover:bg-red-100"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InternalMarks = ({navbarColor = "#5864bd"}) => {
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <InternalMarksContainer navbarColor={navbarColor} />
        </div>
      );
}

export default InternalMarks;
