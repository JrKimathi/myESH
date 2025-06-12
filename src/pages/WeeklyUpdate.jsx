import React from 'react';
import Section from '../components/Section';

const update = {
    title: "This Week's Highlights",
    summary: "Agri-business forum in Makueni saw 23 exporters meet with 120 farmers across the region. Topics covered included export readiness, certification, and pricing."
};

const WeeklyUpdate = () => (
    <Section title={update.title}>
        <p className="text-gray-700 dark:text-gray-300">{update.summary}</p>
    </Section>
);

export default WeeklyUpdate;