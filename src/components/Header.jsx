import React from 'react';

const Header = ({navbarColor = "#5864bd"}) => (
  <div className="mt-4 mr-4 ml-4 bg-white rounded-xl shadow-md p-4 text-left">
    <h2 className="text-lg font-semibold text-gray-900">Student Complete Detail</h2>
      <hr className="mt-2 h-[1.2px] border-none" style={{backgroundColor: navbarColor}} />
  </div>
);

export default Header;
