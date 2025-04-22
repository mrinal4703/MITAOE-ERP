import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import StudentInformation from "./Students Details/StudentInformation";
import PersonalDetailsPage from "./PersonalDetails/PersonalDetailsPage";
import AddressDetails from "./AddressDetails/AddressDetails";
import QualificationDetails from "./QualificationDetails/QualificationDetails";
import FeesDetails from "./FeesDetails";
import CourseRegistered from "./CourseRegistered";
import AttendanceDetails from "./AttendanceDetails";
import MarksDetails from "./MarksDetails";
import StudentResultContainer from "./ResultDetails/StudentResultContainer";
import InternalMarks from "./InternalMarks";
import {useLocation} from "react-router-dom";

const StudentCompleteDetail = ({ navbarColor = "#5864bd" }) => {
        const location = useLocation();

        const [activeComponent, setActiveComponent] = useState("info");

        // Handle pre-selected component if passed via navigation
        useEffect(() => {
                if (location.state?.showResult) {
                        setActiveComponent("result");
                }
        }, [location.state]);

        useEffect(() => {
                if (location.state?.showInternalMarks) {
                        setActiveComponent("internal");
                }
        }, [location.state]);

        useEffect(() => {
                if (location.state?.showAttendance) {
                        setActiveComponent("attendance");
                }
        }, [location.state]);

        const renderComponent = () => {
                switch (activeComponent) {
                        case "info": return <StudentInformation navbarColor={navbarColor} />;
                        case "personal": return <PersonalDetailsPage navbarColor={navbarColor} />;
                        case "address": return <AddressDetails navbarColor={navbarColor} />;
                        case "qualification": return <QualificationDetails navbarColor={navbarColor} />;
                        case "fees": return <FeesDetails navbarColor={navbarColor} />;
                        case "course": return <CourseRegistered navbarColor={navbarColor} />;
                        case "attendance": return <AttendanceDetails navbarColor={navbarColor} />;
                        case "result": return <StudentResultContainer navbarColor={navbarColor} />;
                        case "marks": return <MarksDetails navbarColor={navbarColor} />;
                        case "internal": return <InternalMarks navbarColor={navbarColor} />;
                        default: return <StudentInformation navbarColor={navbarColor} />;
                }
        };

        return (
            <div className={'min-h-screen'}>
                    <Header navbarColor={navbarColor} />
                    <div className={'flex'}>
                            <Sidebar active={activeComponent} setActive={setActiveComponent} />
                            <div className="flex-1 p-4">
                                    {renderComponent()}
                            </div>
                    </div>
            </div>
        );
};

export default StudentCompleteDetail;
