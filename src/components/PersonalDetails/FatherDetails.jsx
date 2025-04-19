import React from 'react';

const FatherDetails = () => {
  const data = [
    ['Father Full Name', 'Prakash R. Kasle'],
    ['Father Middle Name', 'Raghunath'],
    ['Father\'s Mobile No.', '+91-9876500001'],
    ['Father\'s Office Phone No.', '020-2223344'],
    ['Father\'s Occupation', 'Bank Manager'],
    ['Annual Income', '₹5,00,000'],
    ['Father\'s First Name', 'Prakash'],
    ['Father\'s Last Name', 'Kasle'],
    ['Father Alternate Mobile No', '+91-9876543219'],
    ['Father\'s Qualification', 'MBA'],
    ['Father\'s Email', 'father@example.com'],
  ];

  return (
    <div className="bg-white p-6 rounded-xl mb-6">
      <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Father Details</h3>
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

export default FatherDetails;
