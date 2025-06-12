import React from 'react';

const PlaceholderPage = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
    <p className="text-gray-600 dark:text-gray-300">Coming soon...</p>
  </div>
);

export default PlaceholderPage;