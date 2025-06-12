import React from 'react';
import Section from '../components/Section';

const highlights = [
    { title: 'Understanding Organic Avocado Certification', type: 'PDF' },
    { title: 'How to Join a Cooperative Aggregator', type: 'Article' },
];

const KnowledgeHubHighlights = ({ onNavigate }) => (
    <Section title="Knowledge Hub Highlights">
        <div className="space-y-2">
            {highlights.map((res, i) => (
                <div key={i} className="bg-white dark:bg-[#2C2C2C] p-4 rounded shadow">
                    <h3 className="font-semibold text-gray-800 dark:text-white">{res.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{res.type}</p>
                </div>
            ))}
        </div>
        <button
            onClick={() => onNavigate('knowledgeHub')}
            className="mt-4 inline-block px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800"
        >
            Explore More</button>
    </Section>
);

export default KnowledgeHubHighlights;