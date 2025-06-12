import React from 'react';
import Section from '../components/Section';

const offers = [
    { buyer: 'Tropical Exporters Ltd', crop: 'Avocado', qty: '5T', deadline: '15 Sep' },
    { buyer: 'FreshHarvest Ltd', crop: 'Mango', qty: '12T', deadline: '22 Sep' },
];

const ExporterSourcingOffers = ({ onNavigate }) => (
    <Section title="Active Buyer Sourcing Offers">
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#2C2C2C] rounded">
                <thead>
                    <tr className="text-left border-b">
                        <th className="p-3">Buyer</th>
                        <th className="p-3">Crop</th>
                        <th className="p-3">Quantity</th>
                        <th className="p-3">Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map((offer, i) => (
                        <tr key={i} className="border-t">
                            <td className="p-3">{offer.buyer}</td>
                            <td className="p-3">{offer.crop}</td>
                            <td className="p-3">{offer.qty}</td>
                            <td className="p-3">{offer.deadline}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Section>
);

export default ExporterSourcingOffers;