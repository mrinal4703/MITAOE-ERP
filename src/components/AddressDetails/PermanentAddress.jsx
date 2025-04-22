import React from 'react';

const PermanentAddress = ({navbarColor = "#5864bd"}) => {
  const data = [
    ['Address Details', '123, Galaxy Apartment, Ring Road'],
    ['State', 'Maharashtra'],
    ['Taluka', 'Haveli'],
    ['City/Village', 'Pune'],
    ['Landline No.', '020-123456'],
    ['Area Police Station', 'Kothrud'],
    ['Country', 'India'],
    ['District', 'Pune'],
    ['Area', 'Warje'],
    ['Pin Code', '411058'],
    ['Area Post Office', 'Warje Post Office'],
  ];

  return (
    <div className="bg-white p-6 rounded-xl  mb-6">
      <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>Permanent Address</h3>
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

export default PermanentAddress;
