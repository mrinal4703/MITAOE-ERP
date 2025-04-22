import React from 'react'
import StudentInfoCard from './StudentInfoCard';

function FeesDetailsContainer({navbarColor = "#5864bd"}) {
    const feesData = [
      {
        year: 'Second Year',
        semester: 'III',
        branch: 'COMPUTER ENGINEERING',
        type: 'Admission Fees',
        receiptNo: 'C/TF/22/2288',
        receiptDate: '13/03/2023 00:00:00',
        applied: 175707.0,
        paid: 175707.0,
        excess: 0.0,
        outstanding: 0.0,
      },
      {
        year: 'Third Year',
        semester: 'V',
        branch: 'COMPUTER ENGINEERING',
        type: 'Admission Fees',
        receiptNo: 'C1/O/TF/2203',
        receiptDate: '20/09/2023 09:08:37',
        applied: 175707.0,
        paid: 88000.0,
        excess: 0.0,
        outstanding: 87707.0,
      },
      {
        year: 'Third Year',
        semester: 'V',
        branch: 'COMPUTER ENGINEERING',
        type: 'Admission Fees',
        receiptNo: 'C1/O/TF/3004',
        receiptDate: '25/11/2023 11:14:00',
        applied: 175707.0,
        paid: 87707.0,
        excess: 0.0,
        outstanding: 0.0,
      },
      {
        year: 'Fourth Year',
        semester: 'VII',
        branch: 'COMPUTER ENGINEERING',
        type: 'Admission Fees',
        receiptNo: 'C1/O/TF/4119',
        receiptDate: '04/06/2024 14:58:08',
        applied: 175707.0,
        paid: 87854.0,
        excess: 0.0,
        outstanding: 87853.0,
      },
      {
        year: 'Fourth Year',
        semester: 'VII',
        branch: 'COMPUTER ENGINEERING',
        type: 'Admission Fees',
        receiptNo: 'C1/O/TF/8296',
        receiptDate: '12/11/2024 13:53:46',
        applied: 175707.0,
        paid: 87853.0,
        excess: 0.0,
        outstanding: 0.0,
      },
    ];
  
    return (
      <div className="bg-white p-4 rounded-xl mb-6">
        <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>Fees Details</h3>
  
        {/* Table Header */}
        <div className="grid grid-cols-[1.2fr_1fr_2fr_1.5fr_2fr_2fr_1.7fr_1.7fr_1.7fr_1.7fr] text-xs font-semibold text-gray-700 border-b mb-2">
          <div className="pb-2 border-b-2 border-blue-500">Year</div>
          <div className="pb-2 border-b-2 border-red-500">Semester</div>
          <div className="pb-2 border-b-2 border-orange-500">Branch</div>
          <div className="pb-2 border-b-2 border-purple-500">Receipt Type</div>
          <div className="pb-2 border-b-2 border-blue-500">Receipt No.</div>
          <div className="pb-2 border-b-2 border-red-500">Receipt Date</div>
          <div className="pb-2 border-b-2 border-orange-500">Applied Amount</div>
          <div className="pb-2 border-b-2 border-blue-500">Amount Paid</div>
          <div className="pb-2 border-b-2 border-purple-500">Excess Amount</div>
          <div className="pb-2 border-b-2 border-red-500">Outstanding Amount</div>
        </div>
  
        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {feesData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1.2fr_1fr_2fr_1.5fr_2fr_2fr_1.7fr_1.7fr_1.7fr_1.7fr] text-xs text-gray-800 bg-gray-50 rounded-md shadow-sm px-3 py-2 mb-2"
            >
              <div>{item.year}</div>
              <div>{item.semester}</div>
              <div>{item.branch}</div>
              <div>{item.type}</div>
              <div className="underline cursor-pointer" style={{color: navbarColor}}>{item.receiptNo}</div>
              <div>{item.receiptDate}</div>
              <div>{item.applied.toFixed(2)}</div>
              <div>{item.paid.toFixed(2)}</div>
              <div>{item.excess.toFixed(2)}</div>
              <div>{item.outstanding.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };


function FeesDetails({navbarColor = "#5864bd"}){
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <FeesDetailsContainer navbarColor={navbarColor} />
        </div>
      );
}
export default FeesDetails
