import React from 'react';
import DetailItem from '../components/DetailItem';

const OfferDetailPage = ({ offer, onBack }) => {
    if (!offer) return null;

    return (
        <div className="container mx-auto px-4 py-8">
            <button onClick={onBack} className="mb-4 text-sm text-blue-500 hover:underline">&larr; Back to Offers</button>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{offer.crop} - {offer.variety}</h2>
                <img src={offer.image} alt={offer.crop} className="w-full h-64 object-cover rounded mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <DetailItem label="Type" value={offer.type === 'buy' ? 'Buyer Request' : 'Seller Offer'} />
                    <DetailItem label="Grade" value={offer.grade} />
                    <DetailItem label="Quantity" value={offer.quantity} />
                    <DetailItem label="Valid Until" value={offer.validUntil} />
                    <DetailItem label="Price" value={`KES ${offer.price}/kg`} />
                    <DetailItem label="Certification" value={offer.cert ? 'Required' : 'Not Required'} />
                </div>
                <div className="mt-6 border-t pt-4">
                    <h3 className="font-semibold">Posted by:</h3>
                    <p>{offer.user}</p>
                </div>
            </div>
        </div>
    );
};

export default OfferDetailPage;
