import React from 'react';

const LocalAddress = ({navbarColor = "#5864bd"}) => {
  const data = [
    ['Address Details', '401, Sun Villa, Nanded City'],
    ['State', 'Maharashtra'],
    ['Taluka', 'Haveli'],
    ['City/Village', 'Pune'],
    ['Landline No.', '020-234567'],
    ['Area Police Station', 'Sinhagad Road'],
    ['Country', 'India'],
    ['District', 'Pune'],
    ['ZIP / PIN', '411041'],
    ['Area Post Office', 'Sinhagad Post Office'],
  ];

  return (
    <div className="bg-white p-6 rounded-xl  mb-6">
      <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>Local Address</h3>

      {/* Checkbox */}
      {/*<div className="flex items-center gap-2 mb-4 text-sm text-gray-700">*/}
      {/*  <input type="checkbox" className="accent-blue-600" />*/}
      {/*  <label>Same as Permanent Address</label>*/}
      {/*</div>*/}

      <div className="grid grid-cols-2 gap-x-6 text-sm text-gray-800">
        {data.map(([label, value], idx) => (
          <div key={idx} className="col-span-1 flex justify-between items-center py-2 border-b">
            <span className="text-gray-700 font-medium">{label}</span>
            <span className="text-gray-900">{value}</span>
          </div>
        ))}

        {/* Area with radio buttons */}
        <div className="col-span-1 flex justify-between items-center py-2 border-b">
          <span className="text-gray-700 font-medium">Area</span>
          <div className="flex gap-4 text-sm text-gray-900">
            <span>Urban</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalAddress;
