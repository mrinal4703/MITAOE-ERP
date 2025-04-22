import React from 'react';
import {TbUserSquare} from "react-icons/tb";
import {FaGraduationCap, FaRegAddressCard} from "react-icons/fa";
import {ImLocation} from "react-icons/im";
import {BsFileEarmarkBarGraph, BsFileEarmarkRichtext, BsJournals, BsWallet} from "react-icons/bs";
import {LuClipboardCheck} from "react-icons/lu";

const Sidebar = ({ active, setActive }) => {
  const links = [
    { key: "info", label: "Student Information", icon: <TbUserSquare /> },
    { key: "personal", label: "Personal Details", icon: <FaRegAddressCard /> },
    { key: "address", label: "Address Details", icon: <ImLocation /> },
    { key: "qualification", label: "Qualification Details", icon: <FaGraduationCap /> },
    { key: "fees", label: "Fees Details", icon: <BsWallet /> },
    { key: "course", label: "Course Registered", icon: <BsJournals /> },
    { key: "attendance", label: "Attendance Details", icon: <LuClipboardCheck /> },
    { key: "result", label: "Result Details", icon: <BsFileEarmarkRichtext /> },
    { key: "marks", label: "Marks Details", icon: <BsFileEarmarkBarGraph /> },
    { key: "internal", label: "Internal Marks", icon: <BsFileEarmarkBarGraph /> },
  ];

  return (
      <div className="m-4 w-[250px] h-fit bg-white p-4 rounded-xl shadow-2xl">
        <ul className="divide-y divide-gray-200">
          {links.map(({ key, label, icon }, index) => (
              <li
                  key={index}
                  className={`py-3 text-left px-2 text-sm cursor-pointer transition-colors duration-200 ${
                      active === key ? "text-blue-600 font-medium" : "text-gray-800 hover:text-blue-500"
                  }`}
                  onClick={() => setActive(key)}
              >
                <span className="inline-block text-lg mr-2">{icon}</span>
                {label}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Sidebar;
