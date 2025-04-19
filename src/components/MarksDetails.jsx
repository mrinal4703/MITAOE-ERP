import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import StudentInfoCard from './StudentInfoCard';


const MarksDetailsContainer = () => {
  const data = [
    {
      courseCode: 'CS101',
      courseType: 'Theory',
      CA: 18,
      IA: 12,
      MSE: 30,
      ESE: 60,
    },
    {
      courseCode: 'CS102P',
      courseType: 'Practical',
      CA: 20,
      IA: 10,
      MSE: 25,
      ESE: 55,
    },
    // Add more rows if needed
  ];

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Marks Details');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });

    saveAs(file, 'Marks_Details.xlsx');
  };

  return (
    <div className="bg-white p-4 rounded-xl mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Marks Details</h3>
        <button
          onClick={handleDownload}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Download Excel File For Marks
        </button>
      </div>
      <p className="text-sm text-gray-600">
        Click the button to download your complete marks data in Excel format.
      </p>
    </div>
  );
};

const MarksDetails = () => {
  return (
    <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
      <StudentInfoCard />
      <MarksDetailsContainer />
    </div>
  );
}
export default MarksDetails;
