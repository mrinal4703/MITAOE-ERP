import React, { useState } from 'react';
import SemesterSelection from './SemesterSelection';
import SemesterResultCard from './SemesterResultCard';

const SemesterResultsPage = ({navbarColor = "#5864bd"}) => {
    const [selectedSemester, setSelectedSemester] = useState('');

    return (
        <div className="p-6">
            <SemesterSelection
                selectedSemester={selectedSemester}
                onSelect={setSelectedSemester} navbarColor={navbarColor}
            />
            <SemesterResultCard selectedSemester={selectedSemester} navbarColor={navbarColor} />
        </div>
    );
};

export default SemesterResultsPage;
