import React from 'react'
import StudentInfoCard from './StudentInfoCard';


function CourseRegisteredContainer({navbarColor = "#5864bd"}) {
    const courses = [
      {
        code: 'CS480L',
        sem: 'VIII',
        name: 'Capstone Portfolio',
        type: 'Practical',
        category: 'Core',
        credits: 4,
        courseReg: 'Registered',
        examReg: 'Registered',
        regType: '',
      },
      {
        code: 'CSSW02',
        sem: 'VIII',
        name: 'Cloud Computing',
        type: 'Theory',
        category: 'Normal Elective',
        credits: 3,
        courseReg: 'Registered',
        examReg: 'Registered',
        regType: '',
      },
      {
        code: 'CS482T',
        sem: 'VIII',
        name: 'Human Computer Interaction',
        type: 'Theory',
        category: 'Normal Elective',
        credits: 3,
        courseReg: 'Registered',
        examReg: 'Registered',
        regType: '',
      },
      {
        code: 'HP405T',
        sem: 'VIII',
        name: 'Engineering Economics',
        type: 'Theory',
        category: 'Normal Elective',
        credits: 2,
        courseReg: 'Registered',
        examReg: 'Registered',
        regType: '',
      },
      {
        code: 'HP406T',
        sem: 'VIII',
        name: 'Psychology',
        type: 'Theory',
        category: 'Normal Elective',
        credits: 2,
        courseReg: 'Registered',
        examReg: 'Registered',
        regType: '',
      },
      {
        code: 'CS482L',
        sem: 'VIII',
        name: 'Human Computer Interaction',
        type: 'Practical',
        category: 'Normal Elective',
        credits: 1,
        courseReg: 'Registered',
        examReg: 'Registered',
        regType: '',
      },
    ];
  
    return (
      <div className="bg-white p-4 rounded-xl shadow mb-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg text-left font-semibold mb-4 border-l-4 pl-2" style={{borderColor: navbarColor}}>Course Details</h3>
          <button className="px-3 py-1 border rounded hover:bg-blue-50 text-sm" style={{borderColor: navbarColor, color: navbarColor}} >
            Registration Slip
          </button>
        </div>
  
        {/* Table Headers */}
        <div className="grid grid-cols-[1.3fr_1fr_2fr_1.5fr_2fr_1fr_2fr_2fr_1fr] text-xs font-semibold text-gray-700 border-b mb-2 ">
          <div className="pb-2 border-b-2 border-blue-500 text-sm">CCode</div>
          <div className="pb-2 border-b-2 border-red-500">Semester</div>
          <div className="pb-2 border-b-2 border-orange-500">Course Name</div>
          <div className="pb-2 border-b-2 border-purple-500">Subject Type</div>
          <div className="pb-2 border-b-2 border-blue-500">Course Category</div>
          <div className="pb-2 border-b-2 border-red-500">Credits</div>
          <div className="pb-2 border-b-2 border-orange-500">Course Registration Status</div>
          <div className="pb-2 border-b-2 border-purple-500">Exam Registration Status</div>
          <div className="pb-2 border-b-2 border-blue-500">Registration Type</div>
        </div>
  
        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {courses.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1.3fr_1fr_2fr_1.5fr_2fr_1fr_2fr_2fr_1fr] text-sm text-gray-800 bg-gray-50 rounded-md shadow-sm px-3 py-2 mb-2"
            >
              <div className="underline" style={{color: navbarColor}}>{item.code}</div>
              <div>{item.sem}</div>
              <div>{item.name}</div>
              <div>{item.type}</div>
              <div>{item.category}</div>
              <div>{item.credits.toFixed(2)}</div>
              <div>
                <span className="px-2 py-1 text-green-600 border border-green-500 text-xs rounded-full">
                  {item.courseReg}
                </span>
              </div>
              <div>
                <span className="px-2 py-1 text-green-600 border border-green-500 text-xs rounded-full">
                  {item.examReg}
                </span>
              </div>
              <div>{item.regType}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

function CourseRegistered({navbarColor = "#5864bd"}){
    return (
        <div className="max-w-[1200px] bg-white rounded-xl shadow-xl overflow-hidden font-sans">
          <StudentInfoCard />
          <CourseRegisteredContainer navbarColor={navbarColor} />
        </div>
      );
}

export default CourseRegistered
