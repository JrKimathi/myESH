import React from 'react';

const Section = ({ title, cta, children }) => (
    <section className="space-y-4">
        <div className="flex items-center justify-between">
            {title && (
                <h2 className="text-2xl font-bold text-[#0B3C49] dark:text-white">
                    {title}
                </h2>
            )}
            {cta && (
                <button
                    onClick={cta.onClick}
                    className="text-sm text-[#1C5D57] hover:text-teal-600 font-medium"
                >
                    {cta.label}
                </button>
            )}
        </div>
        {children}
    </section>
);

export default Section;
