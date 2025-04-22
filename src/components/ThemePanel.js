import React from 'react';
import { FaSun, FaMoon, FaTimes } from 'react-icons/fa';
import {cloudmountain, defaultbg, greendrop, pebbles, raindrops, seeside} from "../images";

const ThemePanel = ({ setNavbarColor, setBackground, dark, setDark, setPanel }) => {
    const colors = ['#ece8e8', '#3dc9b3', '#28c76f', '#5864bd', '#ea5455'];
    const dummyBackgrounds = [
       defaultbg, raindrops, pebbles, seeside, cloudmountain, greendrop
    ];

    return (
        <div className="w-full h-full z-50 bg-gray-50 shadow-xl border dark:border-gray-700">
            <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-semibold text-gray-800">Setting Panel</h2>
                <button onClick={() => setPanel(false)} className="text-red-500 hover:text-red-600">
                    <FaTimes />
                </button>
            </div>
            <hr/>
            <div className="mb-6 p-4">
                <label className="block text-sm text-left text-gray-700 mb-2">Select Theme</label>
                <div className="flex gap-4">
                    <button
                        onClick={() => setDark(false)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md`}
                    >
                        <FaSun className={'text-gray-600 w-6 h-6'} />
                    </button>
                    <button
                        onClick={() => setDark(true)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md`}
                    >
                        <FaMoon className={'text-gray-600 w-6 h-6'} />
                    </button>
                </div>
            </div>
            <hr/>
            <div className="my-6 p-4">
                <label className="block text-sm text-left text-gray-700 mb-2">Color Theme</label>
                <div className="flex gap-3">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="w-7 h-7 rounded-full cursor-pointer border-2 border-white shadow-md"
                            style={{ backgroundColor: color }}
                            onClick={() => setNavbarColor(color)}
                        />
                    ))}
                </div>
            </div>
            <hr/>
            <div className="my-6 p-4">
                <label className="block text-sm text-left text-gray-700 mb-2">Theme Background</label>
                <div className="grid grid-cols-4 gap-y-2">
                    {dummyBackgrounds.map((url, idx) => (
                        <img
                            key={idx}
                            src={url}
                            alt={`bg-${idx}`}
                            className="w-16 h-16 object-cover rounded cursor-pointer border hover:ring-2 hover:ring-blue-500"
                            onClick={() => setBackground(url)}
                        />
                    ))}
                </div>
            </div>
            <div className="text-right">
                <button onClick={() => setPanel(false)} className="absolute right-3 bottom-3 px-4 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-100">
                    Close
                </button>
            </div>
        </div>
    );
};

export default ThemePanel;
