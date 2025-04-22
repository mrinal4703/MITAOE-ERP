import React from 'react';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';
import StudentInfoCard from './StudentInfoCard';
import SemesterSelection2 from "./SemesterSelection2";


const MarksDetailsContainer = ({navbarColor = "#5864bd"}) => {
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

        const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
        const file = new Blob([excelBuffer], {type: 'application/octet-stream'});

        saveAs(file, 'Marks_Details.xlsx');
    };

    return (
        <div className="bg-white p-4 rounded-xl mb-6">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>Marks Details</h3>
                <button
                    onClick={handleDownload}
                    className="px-4 py-2 text-sm text-white rounded-md transition" style={{backgroundColor: navbarColor}}
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

const MarksDetails = ({navbarColor = "#5864bd"}) => {
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
            <StudentInfoCard/>
            <SemesterSelection2 navbarColor={navbarColor}/>
            <MarksDetailsContainer navbarColor={navbarColor}/>
        </div>
    );
}
export default MarksDetails;
