import React from 'react';
import { ShoppingBag, Leaf, BadgeCheck } from 'lucide-react';

const SourcingOfferCard = ({ offer, onNavigate }) => {
  const isBuyOffer = offer.type === 'buy';
  const cardColor = isBuyOffer ? 'border-green-500' : 'border-orange-500';
  const icon = isBuyOffer ? <ShoppingBag className="text-green-500" /> : <Leaf className="text-orange-500" />;

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl border-t-4 ${cardColor}`}
    >
      <img src={offer.image} alt={offer.crop} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <p
            className={`text-sm font-bold flex items-center gap-2 ${isBuyOffer
                ? 'text-green-600 dark:text-green-400'
                : 'text-orange-600 dark:text-orange-400'
              }`}
          >
            {icon} {isBuyOffer ? 'Looking to Buy' : 'Ready to Sell'}
          </p>
          {offer.cert && <BadgeCheck size={20} className="text-blue-500" title="Certification Required" />}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
          {offer.crop} - {offer.variety}
        </h3>
        <p className="text-sm text-gray-500">Grade: {offer.grade}</p>

        <div className="my-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-semibold">Quantity:</span>
            <span>{offer.quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Price:</span>
            <span>KES {offer.price}/kg</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Ready by:</span>
            <span>{offer.validUntil}</span>
          </div>
        </div>

        <div className="border-t pt-3 mt-auto">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{offer.user}</p>
          <button
            className="w-full mt-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg font-semibold hover:bg-[#1C5D57] hover:text-white transition-colors"
            onClick={() => onNavigate && onNavigate('offerDetail', offer)}
          >
            {isBuyOffer ? 'View Details' : 'Express Interest'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SourcingOfferCard;
