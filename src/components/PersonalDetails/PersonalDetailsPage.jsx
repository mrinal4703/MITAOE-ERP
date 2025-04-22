import React from 'react';
import StudentPersonalDetails from './StudentPersonalDetails';
import FatherDetails from './FatherDetails';
import MotherDetails from './MotherDetails';
import StudentInfoCard from '../StudentInfoCard';

const PersonalDetailsPageContainer = ({navbarColor = "#5864bd"}) => {
  return (
    <div className="space-y-6">
      <StudentPersonalDetails navbarColor={navbarColor} />
      <FatherDetails navbarColor={navbarColor} />
      <MotherDetails navbarColor={navbarColor} />
    </div>
  );
};

const PersonalDetailsPage = ({navbarColor = "#5864bd"}) =>{
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <PersonalDetailsPageContainer navbarColor={navbarColor} />
        </div>
      );
}

export default PersonalDetailsPage;
