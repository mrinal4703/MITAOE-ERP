import React from 'react';
import SideBarFeedback from "./SideBarFeedback";
import AcademicFeedbackPage from "./AcademicFeedbackPage";

const FeedbackDashboard = ({ navbarColor = "#5864bd" }) => {return (
        <div className={'flex'}>
            <div className={'w-2/12 min-h-screen'}>
                <SideBarFeedback navbarColor={navbarColor}/>
            </div>
            <div className={'w-10/12 min-h-screen'}>
                <AcademicFeedbackPage navbarColor={navbarColor}/>
            </div>
        </div>
    );
};

export default FeedbackDashboard;