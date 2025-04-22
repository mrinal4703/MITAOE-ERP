import React from 'react';
import PermanentAddress from './PermanentAddress';
import LocalAddress from './LocalAddress';
import LocalGuardianAddress from './LocalGuardianAddress';
import StudentInfoCard from '../StudentInfoCard';


const AddressDetailsContainer = ({navbarColor = "#5864bd"}) => {
  return (
    <div className="space-y-6">
      <PermanentAddress navbarColor={navbarColor} />
      <LocalAddress navbarColor={navbarColor} />
      <LocalGuardianAddress navbarColor={navbarColor} />
    </div>
  );
};

const AddressDetails = ({navbarColor = "#5864bd"}) =>{
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <AddressDetailsContainer navbarColor={navbarColor} />
        </div>
      );
}
export default AddressDetails;
