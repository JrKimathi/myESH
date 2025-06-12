import React from 'react';

const MyEshLogo = ({ className = '' }) => (
  <span className={`font-bold text-2xl ${className}`}>
    <span className="text-black dark:text-white">My</span>
    <span className="text-teal-900">ESH</span>
  </span>
);

export default MyEshLogo;