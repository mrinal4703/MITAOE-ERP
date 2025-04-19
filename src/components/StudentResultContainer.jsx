import React from 'react';
import StudentResultPage from './StudentResultPage';
import StudentInfoCard from './StudentInfoCard';

const StudentResultContainer = () => {
  return (
    <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
      <StudentInfoCard />
      <StudentResultPage />
    </div>
  );
};

export default StudentResultContainer;
