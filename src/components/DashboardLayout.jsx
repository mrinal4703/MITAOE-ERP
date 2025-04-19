import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import StudentResultContainer from './StudentResultContainer';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <Header />

      {/* Sidebar + Main content aligned horizontally */}
      <div className="flex">
        <Sidebar /> {/* This will sit on the left */}
        <div className="flex-grow">
          <StudentResultContainer /> {/* This will sit on the right */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
