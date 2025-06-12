import React from 'react';

const ResourceCard = ({ title, type, source, link }) => (
    <div className="bg-white dark:bg-[#2C2C2C] p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{type} &middot; {source}</p>
        <a href={link} target="_blank" rel="noreferrer" className="inline-block mt-2 text-teal-700 hover:underline">
            View Resource
        </a>
    </div>
);

export default ResourceCard;