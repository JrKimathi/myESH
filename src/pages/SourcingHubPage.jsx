import React, { useState } from 'react';
import { ShoppingBag, Leaf, Search } from 'lucide-react';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import SourcingOfferCard from '../components/SourcingOfferCard';

const SourcingHubPage = ({ onNavigate }) => {
  const [view, setView] = useState('all'); // 'all', 'buyers', 'sellers'

  const buyerOffers = [
    { type: 'buy', crop: 'Avocado', variety: 'Hass', grade: '1', quantity: '10T', validUntil: 'July 10-20', price: 92, cert: true, user: 'Iviani Exporters', image: 'https://images.pexels.com/photos/163688/avocados-fruit-healthy-food-163688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { type: 'buy', crop: 'Mango', variety: 'Ngowe', grade: '1', quantity: '15,000 kg', validUntil: 'June 20-25', price: 30, cert: true, user: 'Vert Fresh Produce', image: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  const sellerOffers = [
    { type: 'sell', crop: 'Mango', variety: 'Ngowe', grade: '2', quantity: '4T', validUntil: 'June 22', price: 45, cert: false, user: 'Masongaleni Youth', image: 'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { type: 'sell', crop: 'Avocado', variety: 'Fuerte', grade: '1', quantity: '4,800 kg', validUntil: 'June 18', price: 55, cert: false, user: 'Kakya Youth Group', image: 'https://images.pexels.com/photos/5874591/pexels-photo-5874591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  const allOffers = [...buyerOffers, ...sellerOffers].sort((a, b) => new Date(b.validUntil) - new Date(a.validUntil));

  // Dynamic select options derived from offers
  const crops = Array.from(new Set(allOffers.map(o => o.crop)));
  const roles = Array.from(new Set(allOffers.map(o => o.type === 'buy' ? 'Buyer' : 'Seller')));
  const grades = Array.from(new Set(allOffers.map(o => o.grade))).map(g => `Grade ${g}`);
  const certOptions = ['Yes', 'No'];

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div>
          <h1 className="text-3xl font-bold text-[#0B3C49] dark:text-white">Sourcing Hub</h1>
          <p className="text-sm text-gray-500">Find buyers and suppliers for mango and avocado.</p>
        </div>
        <button onClick={() => onNavigate('addOffer')} className="flex items-center bg-[#CE6D63] hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors">
          <ShoppingBag size={20} className="mr-2" /> Post an Offer
        </button>
      </div>

      {/* Filters: two per row */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField type="text" placeholder="Search crop, buyer..." icon={<Search size={18} className="text-gray-400" />} />
        <SelectField options={crops} placeholder="Crop" />
        <SelectField options={roles} placeholder="Role" />
        <SelectField options={grades} placeholder="Grade" />
        {/* For certification, spans two columns when in two-col layout */}
        <SelectField options={certOptions} placeholder="Certification" className="md:col-span-2" />
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {allOffers.map((offer, i) => (
          <SourcingOfferCard key={i} offer={offer} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
};

export default SourcingHubPage;
