import React from 'react';

const FirebaseInitErrorPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-center">
    <h1 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-4">Initialization Error</h1>
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      The Firebase application could not be initialized properly. Please check your configuration.
    </p>
    <code className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded text-sm text-gray-800 dark:text-white">
      Check .env file and Firebase config.
    </code>
  </div>
);

export default FirebaseInitErrorPage;