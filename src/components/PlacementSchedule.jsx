import React, {useState} from "react";
import placementData from "./placementData.json";
import {TfiReload} from "react-icons/tfi";

const PlacementSchedule = () => {
    const [selectedDrive, setSelectedDrive] = useState(null);

    return (
        <div className="flex justify-start items-center">
            <div className="bg-white rounded-xl shadow-md m-1.5 p-3 w-full font-sans h-[270px]">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold mb-2 pl-1 text-left">Placement Scheduled</h3>
                <button type="button" className="text-xs text-blue-600">
                  <TfiReload className="scale-x-[-1] text-black text-sm rotate-[150deg] font-bold" />
                </button>
              </div>
              <hr className="mb-3 h-[1px] border-none bg-gray-300" />
                <div className="overflow-y-auto flex-grow relative">
                    <table className="w-full text-sm border-separate border-spacing-x-0.5 border-spacing-y-0.5">
                        <thead>
                        <tr>
                            <th className="sticky top-0 bg-gray-100 z-[2] font-bold text-left border-b-2 border-b-blue-500 py-1 px-2">Company
                                Name
                            </th>
                            <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-red-500 py-1 px-2">Scheduled
                                Date
                            </th>
                            <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-orange-500 py-1 px-2">Salary/Stipend</th>
                            <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-violet-500 py-1 px-2">Eligibility</th>
                            <th className="sticky top-0 bg-gray-100 z-[2] font-bold border-b-2 border-b-blue-500 py-1 px-2">Degree
                                & Branch
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {placementData.length > 0 ? (
                            placementData.map((drive) => (
                                <tr
                                    key={drive.id}
                                    className="hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                                    onClick={() => setSelectedDrive(drive)}
                                >
                                    <td className="text-left bg-gray-50 px-2 py-1">{drive.company}</td>
                                    <td className="text-center bg-gray-50 px-2 py-1">{drive.date}</td>
                                    <td className="text-center bg-gray-50 px-2 py-1">{drive.salary}</td>
                                    <td className="text-center bg-gray-50 px-2 py-1">{drive.eligibility}</td>
                                    <td className="text-center bg-gray-50 px-2 py-1">{drive.degree}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-gray-600 py-4">
                                    No placement data available.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

            </div>

            {selectedDrive && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-10">
                    <div className="bg-white px-6 py-5 rounded-lg w-[90%] max-w-[500px] text-left shadow-lg">
                        <h3 className="text-2xl font-semibold mb-3">{selectedDrive.company}</h3>
                        <hr className="mb-4 border-t border-gray-300"/>

                        <div className="space-y-2 text-base text-gray-800">
                            <p><strong>Scheduled Date:</strong> {selectedDrive.date}</p>
                            <p><strong>Salary/Stipend:</strong> {selectedDrive.salary}</p>
                            <p><strong>Eligibility:</strong> {selectedDrive.eligibility}</p>
                            <p><strong>Degree & Branch:</strong> {selectedDrive.degree}</p>
                            <p className="pt-1">{selectedDrive.description}</p>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
                                onClick={() => setSelectedDrive(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default PlacementSchedule;
