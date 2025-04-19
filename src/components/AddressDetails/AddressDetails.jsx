import React from 'react';
import PermanentAddress from './PermanentAddress';
import LocalAddress from './LocalAddress';
import LocalGuardianAddress from './LocalGuardianAddress';
import StudentInfoCard from '../StudentInfoCard';


const AddressDetailsContainer = () => {
  return (
    <div className="space-y-6">
      <PermanentAddress />
      <LocalAddress />
      <LocalGuardianAddress />
    </div>
  );
};

const AddressDetails = () =>{
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <AddressDetailsContainer />
        </div>
      );
}
export default AddressDetails;
