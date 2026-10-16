import React from 'react';

const SelectField = ({ options, placeholder, value, onChange }) => (
    <select
        value={value || ''}
        onChange={onChange}
        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-gray-800 dark:text-white"
    >
        <option value="" disabled hidden>
            {placeholder}
        </option>
        {options.map((o) => (
            <option key={o} value={o}>
                {o}
            </option>
        ))}
    </select>
);

export default SelectField;
