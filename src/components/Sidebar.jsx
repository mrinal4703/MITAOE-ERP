import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { to: "/info", label: "Student Information" },
    { to: "/personal", label: "Personal Details" },
    { to: "/address", label: "Address Details" },
    { to: "/qualification", label: "🎓 Qualification Details" },
    { to: "/fees", label: "Fees Details" },
    { to: "/course", label: "Course Registered" },
    { to: "/attendance", label: "Attendance Details" },
    { to: "/result", label: "Result Details" },
    { to: "/marks", label: "Marks Details" },
    { to: "/internal", label: "Internal Marks" },
  ];

  return (
    <div className="m-4 w-[250px] h-fit bg-white p-4 rounded-xl shadow-2xl">
      <ul className="divide-y divide-gray-200">
        {links.map(({ to, label }, index) => (
          <li key={index} className="py-3 px-2 text-sm">
            <NavLink
              to={to}
              className={({ isActive }) =>
                `block w-full transition-colors duration-200 ${
                  isActive ? 'text-blue-600 font-medium' : 'text-gray-800 hover:text-blue-500'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;


