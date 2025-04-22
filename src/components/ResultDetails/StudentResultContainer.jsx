import React from 'react';
import StudentResultPage from './StudentResultPage';
import StudentInfoCard from '../StudentInfoCard';

const StudentResultContainer = ({navbarColor = "#5864bd"}) => {
  return (
    <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
      <StudentInfoCard />
      <StudentResultPage navbarColor={navbarColor} />
    </div>
  );
};

export default StudentResultContainer;
