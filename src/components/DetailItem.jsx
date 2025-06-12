import React from 'react';

const DetailItem = ({ label, value }) => (
    <div className="mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{label}: </span>
        <span className="text-gray-900 dark:text-white">{value}</span>
    </div>
);

export default DetailItem;