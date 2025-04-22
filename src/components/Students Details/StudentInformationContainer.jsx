import React from 'react';

const StudentInformationContainer = ({navbarColor = "#5864bd"}) => {
  const data = [
    ['Student Name', 'MRINAL GUPTA'],
    ['Gender', 'Male'],
    ['Father\'s Name', 'SIDDHARTHA SHANKAR GUPTA'],
    ['Mother\'s Name', 'BANDANA GUPTA'],
    ['PRN No.', '202101070082'],
    ['Enrollment No.', 'ENR2025XYZ'],
    ['Application ID', 'APP123456'],
    ['Admission Batch', '2021-22'],
    ['Academic Year', '2024-2025'],
    ['Admission Date', '10/12/2021'],
    ['Current Student / Admission Status', 'Admitted'],
    ['User Login Status', 'Active'],
    ['Admission Status', 'Confirmed'],
    ['Allotted Category', 'CAP Round'],
    ['Admission Type', 'Regular'],
    ['Current Year', 'Fourth Year'],
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
    ['School/Institute Name', 'SCHOOL OF COMPUTER ENGINEERING'],
    ['Degree', 'Bachelor of Technology'],
    ['Branch', 'COMPUTER ENGINEERING'],
    ['Semester', 'VIII'],
    ['Scheme', 'B. Tech-COMPUTER ENGINEERING-2019-20-Department of Computer Engineering (CBCS)'],
    ['Division', 'B'],
    ['Roll No.', '148'],
    ['Mobile No', '+91-9876543210'],
    ['Alternate Mobile No', '+91-9876500000'],
    ['Aadhar Number', '1234-5678-9012'],
    ['Email ID', 'mrinal.gupta@mitaoe.ac.in'],
    ['Date of Birth', '04/07/2003'],
    ['Caste', '-'],
    ['Payment Type', 'Institute Level'],
    ['Category', 'GENERAL'],
    ['Nationality', 'Indian'],
    ['Religion', 'HINDU'],
    ['Father Occupation', 'Service'],
    ['Father Income', '800000'],
    ['Mother Occupation', 'House Wife'],
    ['Guardian name', 'Bandana Gupta'],
    ['Father Occupation', 'Bank Manager'],
    ['Father Income', '500000'],
    ['Mother Occupation', 'Lecturer'],
    ['Guardian name', 'Rajesh Kasle'],
    ['Father Mobile No', '+91-9876543211'],
    ['Mother Mobile No', '+91-9876543222'],
    ['Faculty Advisor Name (Mentor)', 'Prof. Shinde'],
    ['Class Advisor Name', 'Prof. Jadhav'],
    ['Class Advisor Email Address', 'jadhav@class.edu'],
    ['Class Advisor Mobile No', '+91-9876543223'],
  ];

  const leftData = data.slice(0, 32);  // till Weaknesses inclusive
  const rightData = data.slice(32);    // from School/Institute Name onward

  return (
      <div className="bg-white text-left p-6 rounded-xl mb-6">
        <h3 className="text-lg font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>
          Student Information
        </h3>
        <div className="grid grid-cols-2 gap-x-8 text-sm text-gray-800">
          {/* Left Column */}
          <div>
            {leftData.map(([label, value], index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700 font-medium">{label}</span>
                  <span className="text-left">{value}</span>
                </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightData.map(([label, value], index) => (
                <div key={index + 33} className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700 font-medium">{label}</span>
                  <span className="text-left">{value}</span>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default StudentInformationContainer;
