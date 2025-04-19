import React from 'react';

const SessionDropdown = () => (
  <div className="bg-white p-4 rounded-lg mb-4">
    <label htmlFor="session" className="block text-sm font-medium text-gray-700 mb-2">
      Session
    </label>
    <select
      id="session"
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="may-2025">MAY 2025</option>
    </select>
  </div>
);

export default SessionDropdown;
