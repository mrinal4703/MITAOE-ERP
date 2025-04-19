import React, { useState } from 'react';
import SemesterSelection from './SemesterSelection';
import SemesterResultCard from './SemesterResultCard';
      
const StudentResultPage = () => {
  const [selectedSemester, setSelectedSemester] = useState('');

  return (
    <div className="p-4 space-y-4">
      <SemesterSelection
        selectedSemester={selectedSemester}
        onSelect={(value) => setSelectedSemester(value)}
      />
      {selectedSemester && (
        <SemesterResultCard selectedSemester={selectedSemester} />
      )}
    </div>
  );
};

export default StudentResultPage;
