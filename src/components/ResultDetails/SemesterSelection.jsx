import React from 'react';

const SemesterSelection = ({ selectedSemester, onSelect, navbarColor = "#5864bd" }) => {
  const semesters = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

  return (
    <div className="w-full p-4 rounded-xl mb-4 bg-white text-left">
      <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>Select Semester</h3>
      <div className="flex flex-wrap gap-4">
        {semesters.map((sem, index) => (
          <label
            key={index}
            className="flex items-center gap-2 text-sm font-medium text-gray-800 text-left"
          >
            <input
              type="radio"
              name="semester"  
              value={sem}
              checked={selectedSemester === sem}
              onChange={(e) => onSelect(e.target.value)}
              className="accent-blue-600"
            />
            {sem}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SemesterSelection;
