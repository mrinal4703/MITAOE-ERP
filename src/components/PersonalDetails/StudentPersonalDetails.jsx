import React from 'react';

const StudentPersonalDetails = () => {
  const data = [
    ['Enrollment Number', 'ENR2025001'],
    ['Registration No.', 'REG2025A123'],
    ['Student First Name', 'Omkar'],
    ['Student Last Name', 'Kasle'],
    ['Alternate Mobile No', '+91-9876543210'],
    ['Alternate Email ID', 'alt.email@example.com'],
    ['Birth Place', 'Pune'],
    ['Blood Group', 'B+'],
    ['Category', 'OBC'],
    ['Physically Disabled', 'No'],
    ['Passport No.', 'M1234567'],
    ['Admission Through', 'CAP Round 1'],
    ['ABC ID', 'ABC123456789'],
    ['University Eligibility Number', 'UNIV56789'],
    ['Family Income', '₹3,50,000'],
    ['Admission Type', 'Regular'],
    ['Student Full Name', 'Omkar Prakash Kasle'],
    ['Student Middle Name', 'Prakash'],
    ['Student Mobile No.', '+91-9876543211'],
    ['Student Email ID', 'omkar@example.com'],
    ['Date of Birth', '2003-07-15'],
    ['Gender', 'Male'],
    ['Nationality', 'Indian'],
    ['Religion', 'Hindu'],
    ['Sub Caste', 'Kasar'],
    ['Aadhar No.', '1234-5678-9012'],
    ['Visa Number', ''],
    ['Transportation', 'Yes'],
    ['DTE Application ID', 'DTE20251234'],
    ['Uchcha Shiksha ID', 'USH45678901'],
  ];

  return (
    <div className="bg-white p-6 rounded-xl mb-6">
      <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Student Personal Details</h3>

      {/* Radio buttons and yes/no toggles */}
      <div className="grid grid-cols-2 gap-x-6 text-sm text-gray-800">
        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-gray-700 font-medium">Marital Status</span>
          <div className="flex gap-4">
            <label><input type="radio" name="marital" defaultChecked /> Single</label>
            <label><input type="radio" name="marital" /> Married</label>
          </div>
        </div>

        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-gray-700 font-medium">Hosteller</span>
          <span>Yes</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-gray-700 font-medium">NRI/OCI/International Student/PIO</span>
          <span>No</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-gray-700 font-medium">Specify Father Details</span>
          <span>Yes</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-gray-700 font-medium">Specify Mother Details</span>
          <span>Yes</span>
        </div>

        {/* Remaining Data */}
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

export default StudentPersonalDetails;
