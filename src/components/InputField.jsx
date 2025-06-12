import React from 'react';

const defaultInputStyles = `block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-700 focus:border-teal-700 sm:text-sm bg-white dark:bg-gray-800 dark:text-white`;

const InputField = ({ label, type, value, onChange, placeholder, required = false, icon, as = "input", rows, disabled = false }) => {
    const commonProps = {
        value,
        onChange,
        placeholder,
        required,
        disabled,
        className: `${defaultInputStyles} ${icon ? 'pl-10' : ''} ${disabled ? 'bg-gray-200 dark:bg-gray-600 cursor-not-allowed' : ''}`
    };
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
            <div className="relative">
                {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
                {as === "textarea" ? (
                    <textarea {...commonProps} rows={rows || 3}></textarea>
                ) : (
                    <input type={type} {...commonProps} />
                )}
            </div>
        </div>
    );
};

export default InputField;