import React from 'react';

const LocalGuardianAddress = () => {
  const data = [
    ['Address Details', 'Flat 102, Green Square, Hadapsar'],
    ['Guardian Ph. No.', '+91-9876543210'],
    ['Guardian Occupation', 'Teacher'],
    ['Guardian Name', 'Rajesh Sharma'],
    ['Guardian\'s Relation', 'Uncle'],
    ['Guardian Qualification', 'M.Sc., B.Ed.'],
  ];

  return (
    <div className="bg-white p-6 rounded-xl mb-6">
      <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Local Guardian's Address</h3>

      {/* Checkbox */}
      <div className="flex items-center gap-2 mb-4 text-sm text-gray-700">
        <input type="checkbox" className="accent-blue-600" />
        <label>Same as Permanent Address</label>
      </div>

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

export default LocalGuardianAddress;
