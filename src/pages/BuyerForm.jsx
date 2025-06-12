import React from 'react';
import InputField from '../components/InputField';

const BuyerForm = ({ onNavigate, user }) => {
    return (
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-6 text-green-600">Post Sourcing Request</h2>
            <form className="space-y-4">
                <InputField label="Crop" placeholder="e.g. Mango" />
                <InputField label="Variety" placeholder="e.g. Ngowe" />
                <InputField label="Grade" placeholder="e.g. Grade 1" />
                <InputField label="Quantity (kg)" placeholder="15,000" />
                <InputField label="Price Offered (KES/kg)" placeholder="30" />
                <InputField label="Delivery Period" placeholder="June 20-25" />
                <InputField label="Pickup/Delivery Point" placeholder="Wote Packhouse" />
                <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-5 w-5 rounded" />
                    Certification Required (GlobalG.A.P.)
                </label>
                <button className="w-full mt-4 bg-[#1C5D57] text-white py-2 rounded-lg font-semibold">Submit Request</button>
            </form>
        </div>
    );
};

export default BuyerForm;
