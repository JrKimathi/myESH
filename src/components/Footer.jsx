import React from 'react';
import MyEshLogo from './MyEshLogo';

const Footer = () => (
  <footer className="bg-[#2C2C2C] text-gray-300 text-center p-6 mt-12">
    <p className="font-semibold text-lg">
      <MyEshLogo />
    </p>
    <p className="text-sm">
      Your Farm. Your Market. Your Export Supply Hub.
    </p>
    <p className="text-xs mt-4">
      &copy; {new Date().getFullYear()} MyESH Platform. All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
