import React from 'react';

const StudentInformationContainer = () => {
  const data = [
    ['Student Name', 'Omkar Kasle'],
    ['Gender', 'Male'],
    ['Father\'s Name', 'Prakash Kasle'],
    ['Mother\'s Name', 'Sujata Kasle'],
    ['PRN No.', '123456789012345'],
    ['Enrollment No.', 'ENR2025XYZ'],
    ['Application ID', 'APP123456'],
    ['Admission Batch', '2023'],
    ['Academic Year', '2023-2024'],
    ['Admission Date', '01/08/2023'],
    ['Current Student / Admission Status', 'Admitted'],
    ['User Login Status', 'Active'],
    ['Admission Status', 'Confirmed'],
    ['Allotted Category', 'OBC'],
    ['Admission Type', 'Regular'],
    ['Current Year', 'Second Year'],
    ['Taluka', 'Haveli'],
    ['District', 'Pune'],
    ['City', 'Pune'],
    ['Local Address', 'Flat 402, Nanded City, Pune'],
    ['Permanent Address', '123, Galaxy Apartment, Ring Road, Pune'],
    ['Physical Handicapped', 'No'],
    ['Bank Name', 'State Bank of India'],
    ['Bank Account Number', '123456789012'],
    ['IFSC Code', 'SBIN0000456'],
    ['Bank Address', 'SBI Main Branch, Pune'],
    ['ABC ID', 'ABC123456789'],
    ['Hostel Name', 'Boys Hostel A'],
    ['Hostel Sub Session', 'Morning'],
    ['Objective', 'To become a full-stack developer.'],
    ['Strengths', 'Quick Learner, Logical Thinking'],
    ['Weaknesses', 'Perfectionist'],
    ['School/Institute Name', 'ABC College of Engineering'],
    ['Degree', 'B.E.'],
    ['Branch', 'Computer Engineering'],
    ['Semester', 'IV'],
    ['Scheme', '2021'],
    ['Division', 'B'],
    ['Roll No.', '45'],
    ['Mobile No', '+91-9876543210'],
    ['Alternate Mobile No', '+91-9876500000'],
    ['Aadhar Number', '1234-5678-9012'],
    ['Email ID', 'omkar@example.com'],
    ['Date of Birth', '15/07/2003'],
    ['Caste', 'Kasar'],
    ['Payment Type', 'Online'],
    ['Category', 'OBC'],
    ['Nationality', 'Indian'],
    ['Religion', 'Hindu'],
    ['Father Occupation', 'Bank Manager'],
    ['Father Income', '₹5,00,000'],
    ['Mother Occupation', 'Lecturer'],
    ['Guardian name', 'Rajesh Kasle'],
    ['Father Mobile No', '+91-9876543211'],
    ['Mother Mobile No', '+91-9876543222'],
    ['Faculty Advisor Name (Mentor)', 'Prof. Shinde'],
    ['Class Advisor Name', 'Prof. Jadhav'],
    ['Class Advisor Email Address', 'jadhav@class.edu'],
    ['Class Advisor Mobile No', '+91-9876543223'],
  ];

  return (
    <div className="bg-white p-6 rounded-xl mb-6">
      <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Student Information</h3>
      <div className="grid grid-cols-2 gap-x-6 text-sm text-gray-800">
        {data.map(([label, value], index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-700 font-medium">{label}</span>
            <span className="text-right">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentInformationContainer;
