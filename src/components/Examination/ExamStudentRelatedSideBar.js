import React from 'react';
import {Link, useLocation} from "react-router-dom";

const ExamStudentRelatedSideBar = ({navbarColor = "#5864bd"}) => {
    const location = useLocation();
    const links = [
        {key: "admitCard", label: "Admit Card for Student", path: "#"},
        {key: "revaluation", label: "Revaluation Registration", path: "#"},
        {key: "registration", label: "EXAM REGISTRATION", path: "#"},
        {key: "backlog", label: "Backlog Subject Registration", path: "#"},
        {key: "remedial", label: "Re-Medial Registration", path: "#"},
    ];

    function darkenColor(hex) {

        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        let [h, s, l] = rgbToHsl(r, g, b);

        l = Math.max(l - 15, 0);

        const [dr, dg, db] = hslToRgb(h, s, l);
        return `#${[dr, dg, db].map(x => x.toString(16).padStart(2, '0')).join('')}`;
    }

    function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h *= 60;
        }
        return [h, s * 100, l * 100];
    }

    function hslToRgb(h, s, l) {
        s /= 100;
        l /= 100;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c / 2;
        let r, g, b;

        if (h < 60) [r, g, b] = [c, x, 0];
        else if (h < 120) [r, g, b] = [x, c, 0];
        else if (h < 180) [r, g, b] = [0, c, x];
        else if (h < 240) [r, g, b] = [0, x, c];
        else if (h < 300) [r, g, b] = [x, 0, c];
        else [r, g, b] = [c, 0, x];

        return [r, g, b].map(v => Math.round((v + m) * 255));
    }

    const darkerNavbarColor = darkenColor(navbarColor, 20);

    return (
        <div className="w-full min-h-screen bg-white p-4 shadow-2xl">
            <h1 className="p-4 text-left">Student Related</h1>
            <ul>
                {links.map(({ key, label, path }) => {
                    const isActive = location.pathname === path;
                    return (
                        <li
                            key={key}
                            className={`py-3 px-2 text-sm cursor-pointer transition-all border-l-4 border-b border-gray-200 ${
                                isActive ? "font-medium" : "text-gray-800 hover:font-medium"
                            }`}
                            style={{
                                borderLeftColor: isActive ? navbarColor : "transparent", // 💥 ONLY left border
                                color: isActive ? navbarColor : darkerNavbarColor,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderLeftColor = darkerNavbarColor;
                                e.currentTarget.style.color = darkerNavbarColor;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderLeftColor = isActive ? navbarColor : "transparent";
                                e.currentTarget.style.color = isActive ? navbarColor : darkerNavbarColor;
                            }}
                        >
                            <Link to={path} className="flex items-center">
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ExamStudentRelatedSideBar;