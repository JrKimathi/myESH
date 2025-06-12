import React, { useState } from 'react';
import { ShoppingBag, Leaf } from 'lucide-react';
import BuyerForm from './BuyerForm';
import SupplierForm from './SupplierForm';

const AddOfferPage = ({ onNavigate, user }) => {
    const [role, setRole] = useState(''); // 'buyer' or 'seller'

    if (!role) {
        return (
            <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-center mb-4">What would you like to do?</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">Please select your role to continue.</p>
                <div className="flex gap-8">
                    <button onClick={() => setRole('buyer')} className="flex flex-col items-center gap-3 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/50 border-2 border-transparent hover:border-green-500 transition-all">
                        <ShoppingBag size={48} className="text-green-500" />
                        <h2 className="text-xl font-bold">Post a Sourcing Request</h2>
                        <p className="text-sm text-gray-500">I am looking to buy produce.</p>
                    </button>
                    <button onClick={() => setRole('seller')} className="flex flex-col items-center gap-3 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-orange-900/50 border-2 border-transparent hover:border-orange-500 transition-all">
                        <Leaf size={48} className="text-orange-500" />
                        <h2 className="text-xl font-bold">Post Available Produce</h2>
                        <p className="text-sm text-gray-500">I am ready to sell my produce.</p>
                    </button>
                </div>
                <button onClick={() => onNavigate('sourcingHub')} className="mt-8 text-sm text-gray-500 hover:underline">Cancel</button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {role === 'buyer' && <BuyerForm onNavigate={onNavigate} user={user} />}
            {role === 'seller' && <SupplierForm onNavigate={onNavigate} user={user} />}
        </div>
    );
};

export default AddOfferPage;
