import React from 'react';
import InputField from '../components/InputField';

const SupplierForm = ({ user, onNavigate }) => {
    return (
        <form className="space-y-4 max-w-2xl mx-auto">
            <InputField label="Farmer Name" type="text" placeholder="e.g. Alice Mwikali" required />
            <InputField label="Ward / Sub-County" type="text" placeholder="e.g. Kalawa, Makueni" required />
            <InputField label="Crop Available" type="text" placeholder="e.g. Mango" required />
            <InputField label="Quantity" type="text" placeholder="e.g. 1.2 tonnes" required />
            <InputField label="Estimated Harvest Date" type="date" required />
            <button type="submit" className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800">
                Submit Offer
            </button>
        </form>
    );
};

export default SupplierForm;