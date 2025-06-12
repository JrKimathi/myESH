import React from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-40">
    <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-teal-600 rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;