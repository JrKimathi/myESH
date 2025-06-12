import React from 'react';

const priceData = [
    { product: "Avocado (Fuerte)", price: "KES 48/kg", change: "+2%" },
    { product: "Mango (Ngowe)", price: "KES 37/kg", change: "-1%" },
    { product: "Avocado (Hass)", price: "KES 52/kg", change: "+4%" }
];

const MarketPrices = () => (
    <section className="bg-white dark:bg-[#2C2C2C] p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Latest Market Prices</h2>
        <table className="w-full table-auto">
            <thead>
                <tr className="text-left border-b dark:border-gray-700">
                    <th className="py-2">Product</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Change</th>
                </tr>
            </thead>
            <tbody>
                {priceData.map((item, index) => (
                    <tr key={index} className="border-t dark:border-gray-700">
                        <td className="py-2">{item.product}</td>
                        <td className="py-2">{item.price}</td>
                        <td className="py-2 text-green-600 dark:text-green-400">{item.change}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
);

export default MarketPrices;