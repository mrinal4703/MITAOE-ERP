import React from 'react';

const SideBarFeedback = ({navbarColor = "#5864bd"}) => {
    const links = [
        { key: "feedback", label: "Feedback Submission" },
    ];
    return (
        <div className="w-full min-h-screen bg-white p-4 shadow-2xl">
            <h1 className={'p-4 text-left'}>Feedback</h1>
            <ul className="divide-y divide-gray-200">
                {links.map(({ key, label, path }) => {
                    return (
                        <li
                            key={key}
                            className={`py-3 px-2 text-sm cursor-pointer transition-all font-medium border-l-4 `} style={{borderColor: navbarColor, color: navbarColor}}
                        >
                            <div className="flex items-center">
                                {label}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBarFeedback;