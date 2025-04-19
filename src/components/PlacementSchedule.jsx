import React, { useState } from "react";
import placementData from "./placementData.json";

const PlacementSchedule = () => {
  const [selectedDrive, setSelectedDrive] = useState(null);

  return (
    <div className="p-4 flex justify-start items-center">
      <div className="p-3 bg-white rounded-xl shadow-md font-sans w-full max-w-[1000px]">
        <div className="flex justify-between items-center border-b border-gray-300 mb-2 pb-1.5">
          <h3 className="text-lg font-semibold">Placement Scheduled</h3>
          <button className="border-none bg-transparent text-lg cursor-pointer">🔄</button>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex bg-gray-100 border border-gray-300 rounded-md font-bold py-1.5">
            <span className="flex-1 text-center px-2">Company Name</span>
            <span className="flex-1 text-center px-2">Scheduled Date</span>
            <span className="flex-1 text-center px-2">Salary/Stipend</span>
            <span className="flex-1 text-center px-2">Eligibility</span>
            <span className="flex-1 text-center px-2">Degree & Branch</span>
          </div>

          {placementData.map((drive) => (
            <div
              key={drive.id}
              className="flex border border-gray-200 rounded-md py-1.5 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setSelectedDrive(drive)}
            >
              <span className="flex-1 text-center px-2">{drive.company}</span>
              <span className="flex-1 text-center px-2">{drive.date}</span>
              <span className="flex-1 text-center px-2">{drive.salary}</span>
              <span className="flex-1 text-center px-2">{drive.eligibility}</span>
              <span className="flex-1 text-center px-2">{drive.degree}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedDrive && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-10">
  <div className="bg-white px-6 py-5 rounded-lg w-[90%] max-w-[500px] text-left shadow-lg">
    <h3 className="text-2xl font-semibold mb-3">{selectedDrive.company}</h3>
    <hr className="mb-4 border-t border-gray-300" />

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
