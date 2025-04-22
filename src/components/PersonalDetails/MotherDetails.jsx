import React from 'react';

const MotherDetails = ({navbarColor = "#5864bd"}) => {
  const data = [
    ['Mother\'s Name', 'Sujata P. Kasle'],
    ['Alternate Mobile No.', '+91-9876549990'],
    ['Mother\'s Qualification', 'M.Sc.'],
    ['Mother\'s Office Phone No.', '020-456789'],
    ['Mother\'s Mobile No.', '+91-9876543212'],
    ['Mother\'s Email', 'mother@example.com'],
    ['Mother\'s Occupation', 'Lecturer'],
  ];

  return (
    <div className="bg-white p-6 rounded-xl mb-6">
      <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>Mother Details</h3>
      <div className="grid grid-cols-2 gap-x-6 text-sm text-gray-800">
        {data.map(([label, value], idx) => (
          <div key={idx} className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-700 font-medium">{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotherDetails;
