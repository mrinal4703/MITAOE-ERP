// import './App.css';
// import MITLoginPage from './components/MITLoginPage';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import StudentCompleteDetail from "./components/StudentCompleteDetail";
// import {useEffect, useState} from "react";
// import NavBar from "./components/NavBar";
// import ThemePanel from "./components/ThemePanel";
// import {Settings} from "lucide-react";
// import {defaultbg} from "./images";
// import {FaCog} from "react-icons/fa";
// import StudentRelatedDashboard from "./components/StudentRelated/StudentRelatedDashboard";
// import Footer from "./components/Footer";
// import FeedbackDashboard from "./components/Feedback/FeedbackDashboard";
// import {FaCircleInfo} from "react-icons/fa6";
// import InfoPanel from "./components/InfoPanel";
// import ExamDashboard from "./components/Examination/ExamDashboard";
// import {HiMiniLink} from "react-icons/hi2";
// import LinksPanel from "./components/LinksPanel";
//
// function App() {
//     const [dark, setDark] = useState(false);
//     const [navbarColor, setNavbarColor] = useState("#5864bd");
//     const [background, setBackground] = useState(defaultbg);
//     const [showPanel, setShowPanel] = useState(false);
//     const [showPanel2, setShowPanel2] = useState(false);
//     const [showPanel3, setShowPanel3] = useState(false);
//
//     useEffect(() => {
//         document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
//     }, [dark]);
//
//     return (
//         <div
//             className="App overflow-x-hidden min-h-screen relative"
//             style={{
//                 backgroundImage: background ? `url(${background})` : "none",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//             }}
//         >
//             {/* Settings Button */}
//             <div className="fixed top-1/2 right-0 z-40 transform -translate-y-1/2">
//                 {navbarColor !== '#ece8e8' ? (
//                     <div className={'flex flex-col'}>
//                         <button
//                             onClick={() => setShowPanel(true)}
//                             className="hover:bg-[#4b52a1] text-white p-3 my-2.5 rounded-l-lg shadow-lg"
//                             style={{backgroundColor: navbarColor}}
//                         >
//                             <FaCog className="animate-spin-slow"/>
//                         </button>
//                         <button
//                             onClick={() => setShowPanel2(true)}
//                             className="hover:bg-[#4b52a1] text-white p-3 my-2.5 rounded-l-lg shadow-lg"
//                             style={{backgroundColor: navbarColor}}
//                         >
//                             <FaCircleInfo className=""/>
//                         </button>
//                         <button
//                             onClick={() => setShowPanel3(true)}
//                             className="hover:bg-[#4b52a1] text-white p-3 my-2.5 rounded-l-lg shadow-lg"
//                             style={{backgroundColor: navbarColor}}
//                         >
//                             <HiMiniLink className=""/>
//                         </button>
//                     </div>
//                 ) : (
//                     <div className={'flex flex-col'}>
//                         <button
//                             onClick={() => setShowPanel(true)}
//                             className="hover:bg-[#d3d3d3] text-black p-3 my-2 rounded-l-lg shadow-lg"
//                             style={{backgroundColor: navbarColor}}
//                         >
//                             <FaCog className="animate-spin-slow"/>
//                         </button>
//                         <button
//                             onClick={() => setShowPanel2(true)}
//                             className="hover:bg-[#d3d3d3] text-black p-3 my-2 rounded-l-lg shadow-lg"
//                             style={{backgroundColor: navbarColor}}
//                         >
//                             <FaCircleInfo className=""/>
//                         </button>
//                         <button
//                             onClick={() => setShowPanel3(true)}
//                             className="hover:bg-[#d3d3d3] text-black p-3 my-2 rounded-l-lg shadow-lg"
//                             style={{backgroundColor: navbarColor}}
//                         >
//                             <HiMiniLink className=""/>
//                         </button>
//                     </div>
//                 )}
//             </div>
//
//             {/* ThemePanel Overlay */}
//             {showPanel && (
//                 <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
//                     <div
//                         className="absolute top-0 right-0 h-full w-[350px] shadow-lg transition-transform transform translate-x-0"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <ThemePanel
//                             setNavbarColor={setNavbarColor}
//                             setBackground={setBackground}
//                             dark={dark}
//                             setDark={setDark}
//                             setPanel={setShowPanel}
//                         />
//                     </div>
//                 </div>
//             )}
//
//             {showPanel2 && (
//                 <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
//                     <div
//                         className="absolute top-0 right-0 h-full w-[350px] shadow-lg transition-transform transform translate-x-0 ease-in "
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <InfoPanel
//                             setPanel2={setShowPanel2}
//                         />
//                     </div>
//                 </div>
//             )}
//
//             {showPanel3 && (
//                 <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
//                     <div
//                         className="absolute top-0 right-0 h-full w-[350px] shadow-lg transition-transform transform translate-x-0"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <LinksPanel
//                             setPanel3={setShowPanel3}
//                         />
//                     </div>
//                 </div>
//             )}
//
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<MITLoginPage/>}/>
//                     <Route
//                         path="/Dashboard"
//                         element={<><NavBar navbarColor={navbarColor}/><Dashboard navbarColor={navbarColor}/><Footer
//                             navbarColor={navbarColor}/></>}
//                     />
//                     <Route
//                         path="/StudentCompleteDetail"
//                         element={<><NavBar navbarColor={navbarColor}/><StudentCompleteDetail navbarColor={navbarColor}/><Footer
//                             navbarColor={navbarColor}/></>}
//                     />
//                     <Route
//                         path="/StudentRelated"
//                         element={<><NavBar navbarColor={navbarColor}/><StudentRelatedDashboard navbarColor={navbarColor}/><Footer
//                             navbarColor={navbarColor}/></>}
//                     />
//                     <Route
//                         path="/AcademicFeedback"
//                         element={<><NavBar navbarColor={navbarColor}/><FeedbackDashboard
//                             navbarColor={navbarColor}/><Footer navbarColor={navbarColor}/></>}
//                     />
//                     <Route
//                         path="/ExamStudentRelated"
//                         element={<><NavBar navbarColor={navbarColor}/><ExamDashboard
//                             navbarColor={navbarColor}/><Footer navbarColor={navbarColor}/></>}
//                     />
//                 </Routes>
//             </Router>
//         </div>
//     );
// }
//
// export default App;

import './App.css';
import MITLoginPage from './components/MITLoginPage';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StudentCompleteDetail from "./components/StudentCompleteDetail";
import {useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import ThemePanel from "./components/ThemePanel";
import {defaultbg} from "./images";
import {FaCog} from "react-icons/fa";
import StudentRelatedDashboard from "./components/StudentRelated/StudentRelatedDashboard";
import Footer from "./components/Footer";
import FeedbackDashboard from "./components/Feedback/FeedbackDashboard";
import {FaCircleInfo} from "react-icons/fa6";
import InfoPanel from "./components/InfoPanel";
import ExamDashboard from "./components/Examination/ExamDashboard";
import {HiMiniLink} from "react-icons/hi2";
import LinksPanel from "./components/LinksPanel";

function InnerApp({
                      dark, setDark,
                      navbarColor, setNavbarColor,
                      background, setBackground,
                      showPanel, setShowPanel,
                      showPanel2, setShowPanel2,
                      showPanel3, setShowPanel3
                  }) {
    const location = useLocation();

    return (
        <div
            className="App overflow-x-hidden min-h-screen relative"
            style={{
                backgroundImage: background ? `url(${background})` : "none",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Conditionally render button panel */}
            {location.pathname !== '/' && (
                <div className="fixed top-1/2 right-0 z-40 transform -translate-y-1/2">
                    {navbarColor !== '#ece8e8' ? (
                        <div className="flex flex-col">
                            <button onClick={() => setShowPanel(true)} className="hover:bg-[#4b52a1] text-white p-3 my-2.5 rounded-l-lg shadow-lg" style={{ backgroundColor: navbarColor }}>
                                <FaCog className="animate-spin-slow" />
                            </button>
                            <button onClick={() => setShowPanel2(true)} className="hover:bg-[#4b52a1] text-white p-3 my-2.5 rounded-l-lg shadow-lg" style={{ backgroundColor: navbarColor }}>
                                <FaCircleInfo />
                            </button>
                            <button onClick={() => setShowPanel3(true)} className="hover:bg-[#4b52a1] text-white p-3 my-2.5 rounded-l-lg shadow-lg" style={{ backgroundColor: navbarColor }}>
                                <HiMiniLink />
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <button onClick={() => setShowPanel(true)} className="hover:bg-[#d3d3d3] text-black p-3 my-2 rounded-l-lg shadow-lg" style={{ backgroundColor: navbarColor }}>
                                <FaCog className="animate-spin-slow" />
                            </button>
                            <button onClick={() => setShowPanel2(true)} className="hover:bg-[#d3d3d3] text-black p-3 my-2 rounded-l-lg shadow-lg" style={{ backgroundColor: navbarColor }}>
                                <FaCircleInfo />
                            </button>
                            <button onClick={() => setShowPanel3(true)} className="hover:bg-[#d3d3d3] text-black p-3 my-2 rounded-l-lg shadow-lg" style={{ backgroundColor: navbarColor }}>
                                <HiMiniLink />
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Panels */}
            {showPanel && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
                    <div className="absolute top-0 right-0 h-full w-[350px] shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <ThemePanel setNavbarColor={setNavbarColor} setBackground={setBackground} dark={dark} setDark={setDark} setPanel={setShowPanel} />
                    </div>
                </div>
            )}
            {showPanel2 && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
                    <div className="absolute top-0 right-0 h-full w-[350px] shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <InfoPanel setPanel2={setShowPanel2} />
                    </div>
                </div>
            )}
            {showPanel3 && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
                    <div className="absolute top-0 right-0 h-full w-[350px] shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <LinksPanel setPanel3={setShowPanel3} />
                    </div>
                </div>
            )}

            {/* Routes */}
            <Routes>
                <Route path="/" element={<MITLoginPage />} />
                <Route path="/Dashboard" element={<><NavBar navbarColor={navbarColor} /><Dashboard navbarColor={navbarColor} /><Footer navbarColor={navbarColor} /></>} />
                <Route path="/StudentCompleteDetail" element={<><NavBar navbarColor={navbarColor} /><StudentCompleteDetail navbarColor={navbarColor} /><Footer navbarColor={navbarColor} /></>} />
                <Route path="/StudentRelated" element={<><NavBar navbarColor={navbarColor} /><StudentRelatedDashboard navbarColor={navbarColor} /><Footer navbarColor={navbarColor} /></>} />
                <Route path="/AcademicFeedback" element={<><NavBar navbarColor={navbarColor} /><FeedbackDashboard navbarColor={navbarColor} /><Footer navbarColor={navbarColor} /></>} />
                <Route path="/ExamStudentRelated" element={<><NavBar navbarColor={navbarColor} /><ExamDashboard navbarColor={navbarColor} /><Footer navbarColor={navbarColor} /></>} />
            </Routes>
        </div>
    );
}


function App() {
    const [dark, setDark] = useState(false);
    const [navbarColor, setNavbarColor] = useState("#5864bd");
    const [background, setBackground] = useState(defaultbg);
    const [showPanel, setShowPanel] = useState(false);
    const [showPanel2, setShowPanel2] = useState(false);
    const [showPanel3, setShowPanel3] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <Router>
            <InnerApp
                dark={dark}
                setDark={setDark}
                navbarColor={navbarColor}
                setNavbarColor={setNavbarColor}
                background={background}
                setBackground={setBackground}
                showPanel={showPanel}
                setShowPanel={setShowPanel}
                showPanel2={showPanel2}
                setShowPanel2={setShowPanel2}
                showPanel3={showPanel3}
                setShowPanel3={setShowPanel3}
            />
        </Router>
    );
}

export default App;
