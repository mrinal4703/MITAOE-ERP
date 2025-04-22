import React from 'react';
import SecondaryMarks from './SecondaryMarks';
import HigherSecondaryMarks from './HigherSecondaryMarks';
import EntranceExamScores from './EntranceExamScores';
import StudentInfoCard from '../StudentInfoCard';



function QualificationDetailsContainer({navbarColor = "#5864bd"}) {
    return (
        <div>
          <SecondaryMarks navbarColor={navbarColor} />
          <HigherSecondaryMarks navbarColor={navbarColor} />
          <EntranceExamScores navbarColor={navbarColor} />
        </div>
      );
}
function QualificationDetails({navbarColor = "#5864bd"}){
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <QualificationDetailsContainer navbarColor={navbarColor} />
        </div>
      );
}

export default QualificationDetails
