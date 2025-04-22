import React from 'react';
import ExamStudentRelatedSideBar from "./ExamStudentRelatedSideBar";

const ExamDashboard = ({navbarColor = "#5864bd"}) => {
    return (
        <div className={'flex'}>
            <div className={'w-2/12 min-h-screen'}>
                <ExamStudentRelatedSideBar navbarColor={navbarColor}/>
            </div>
            <div className={'w-10/12 min-h-screen'}>

            </div>
        </div>
    );
};

export default ExamDashboard;