import React from 'react'
import StudentInfoCard from '../StudentInfoCard';
import StudentInformationContainer from './StudentInformationContainer';

function StudentInformation() {
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <StudentInformationContainer />
        </div>
      );
}

export default StudentInformation
