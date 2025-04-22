import React from 'react';
import {TfiReload} from "react-icons/tfi";
import {useNavigate} from "react-router-dom";
import {BsFileEarmarkBarGraph, BsFileEarmarkRichtext} from "react-icons/bs";

const QuickAccessPage = ({ navbarColor = "#5864bd" }) => {
    const navigate = useNavigate();

    const handleNavigateResults = () => {
        navigate('/StudentCompleteDetail', { state: { showResult: true } });
    };

    const handleNavigateInternalMarks = () => {
        navigate('/StudentCompleteDetail', { state: { showInternalMarks: true } });
    };

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
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) { h = s = 0; }
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h *= 60;
        }
        return [h, s * 100, l * 100];
    }

    function hslToRgb(h, s, l) {
        s /= 100; l /= 100;
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
        <>
        {navbarColor !== '#ece8e8' ? (
            <div className="m-1.5 p-3 w-[270px] font-sans h-[270px] bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold mb-2 pl-1 text-left">Quick Access</h3>
                    <button type="button" className="text-xs text-blue-600">
                        <TfiReload className="scale-x-[-1] text-black text-sm rotate-[150deg] font-bold" />
                    </button>
                </div>
                <hr className="mb-3 h-[1px] border-none bg-gray-300" />
                <div className="overflow-y-auto flex-grow relative max-h-[300px]">
                    <h1 className={'text-left text-base font-semibold'}>Results:</h1>
                    <button
                        onClick={handleNavigateResults}
                        className="mt-2 px-3 py-1 mx-auto flex text-white rounded-lg hover:bg-[#444b80] transition"
                        style={{ backgroundColor: navbarColor }}
                    >
                        <BsFileEarmarkRichtext className={'mr-1 mt-1'} />Reach to Results
                    </button>
                    <hr className={'my-3 w-5/6 mx-auto'}/>
                    <h1 className={'text-left text-base font-semibold'}>Internal Marks:</h1>
                    <button
                        onClick={handleNavigateInternalMarks}
                        className="mt-2 px-3 py-1 mx-auto flex text-white rounded-lg hover:bg-[#444b80] transition"
                        style={{ backgroundColor: navbarColor }}
                    >
                        <BsFileEarmarkBarGraph className={'mr-1 mt-1'} />Reach to Internal Marks
                    </button>
                    <hr className={'my-3 w-5/6 mx-auto'}/>
                </div>
            </div>
            ):(
            <div className="m-1.5 p-3 w-[270px] font-sans h-[270px] bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold mb-2 pl-1 text-left">Quick Access</h3>
                    <button type="button" className="text-xs text-blue-600">
                        <TfiReload className="scale-x-[-1] text-black text-sm rotate-[150deg] font-bold" />
                    </button>
                </div>
                <hr className="mb-3 h-[1px] border-none bg-gray-300" />
                <div className="overflow-y-auto flex-grow relative max-h-[300px]">
                    <h1 className={'text-left text-base font-semibold'}>Results:</h1>
                    <button
                        onClick={handleNavigateResults}
                        className="mt-2 px-3 py-1 mx-auto flex text-black rounded-lg transition"
                        style={{
                            backgroundColor: navbarColor,
                            transition: 'background-color 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkerNavbarColor}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = navbarColor}
                    >
                        <BsFileEarmarkRichtext className={'mr-1 mt-1'} />Reach to Results
                    </button>
                    <hr className={'my-3 w-5/6 mx-auto'}/>
                    <h1 className={'text-left text-base font-semibold'}>Internal Marks:</h1>
                    <button
                        onClick={handleNavigateInternalMarks}
                        className="mt-2 px-3 py-1 mx-auto flex text-black rounded-lg transition"
                        style={{
                            backgroundColor: navbarColor,
                            transition: 'background-color 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkerNavbarColor}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = navbarColor}
                    >
                        <BsFileEarmarkBarGraph className={'mr-1 mt-1'} />Reach to Internal Marks
                    </button>
                    <hr className={'my-3 w-5/6 mx-auto'}/>
                </div>
            </div>
            )}
        </>
    );
};

export default QuickAccessPage;