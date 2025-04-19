import React from 'react';
import StudentPersonalDetails from './StudentPersonalDetails';
import FatherDetails from './FatherDetails';
import MotherDetails from './MotherDetails';
import StudentInfoCard from '../StudentInfoCard';

const PersonalDetailsPageContainer = () => {
  return (
    <div className="space-y-6">
      <StudentPersonalDetails />
      <FatherDetails />
      <MotherDetails />
    </div>
  );
};

const PersonalDetailsPage = () =>{
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <PersonalDetailsPageContainer />
        </div>
      );
}

export default PersonalDetailsPage;
