import React from 'react';
import SecondaryMarks from './SecondaryMarks';
import HigherSecondaryMarks from './HigherSecondaryMarks';
import EntranceExamScores from './EntranceExamScores';
import StudentInfoCard from '../StudentInfoCard';



function QualificationDetailsContainer() {
    return (
        <div>
          <SecondaryMarks />
          <HigherSecondaryMarks />
          <EntranceExamScores />
        </div>
      );
}
function QualificationDetails(){
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <QualificationDetailsContainer />
        </div>
      );
}

export default QualificationDetails
