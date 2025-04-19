import React, { useState } from "react";
import notices from "./notice.json";

const NoticeBoard = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [selectedNotice, setSelectedNotice] = useState(null);

  const filteredNotices = notices.filter((item) =>
    activeTab === "active" ? item.status === "active" : item.status === "old"
  );

  return (
    <div className="p-4 bg-white rounded-xl shadow-md font-sans h-full overflow-y-auto flex flex-col justify-start w-full max-w-[1000px]">
      <div className="flex justify-between font-bold pb-2 border-b border-gray-300 mb-2">
        <span
          className={`mx-3 cursor-pointer transition-colors duration-200 ${activeTab === "active" ? "text-green-600" : "text-black"}`}
          onClick={() => setActiveTab("active")}
        >
          Active Notice/News
        </span>
        <span className="text-gray-700">|</span>
        <span
          className={`mx-3 cursor-pointer transition-colors duration-200 ${activeTab === "old" ? "text-green-600" : "text-black"}`}
          onClick={() => setActiveTab("old")}
        >
          Old Notice/News
        </span>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto">
        {filteredNotices.map((item) => (
          <div
            className="cursor-pointer p-3 bg-gray-100 border border-gray-300 rounded-md hover:bg-blue-50"
            key={item.id}
            onClick={() => setSelectedNotice(item)}
          >
            <div className="flex justify-between items-center w-full">
              <p className="font-semibold text-left flex-1">{item.title}</p>
              <p className="text-sm text-gray-600 text-right ml-3 flex-shrink-0">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedNotice && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-[999]">
        <div className="bg-white px-6 py-5 w-[90%] max-w-[500px] rounded-xl flex flex-col text-left shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">{selectedNotice.title}</h3>
          <hr className="mb-4 border-t border-gray-300" />
      
          <p className="text-base leading-6 text-gray-800">{selectedNotice.description}</p>
      
          <div className="mt-6 flex justify-end">
            <button
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
              onClick={() => setSelectedNotice(null)}
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

export default NoticeBoard;