import React from 'react';
import { Filter } from 'lucide-react';
import {
    DEEP_TEAL,
    TEXT_SECONDARY,
    LIGHT_GRAY_CLOUD,
    HEADING_TEAL,
    OLIVE_GREEN,
    BANANA_YELLOW,
} from '../utils/colors';

const defaultInputStyles = 'w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white dark:bg-gray-800 text-sm';

const farmers = [
    { name: 'M. Ndolo', ward: 'Kalawa', crop: 'Avocado', trees: 34, group: 'Wote Elite Coop', cert: 'GAP' },
    { name: 'A. Kioko', ward: 'Mavindini', crop: 'Mango', trees: 70, group: 'Nzauni Aggregators', cert: '-' },
    { name: 'J. Mutua', ward: 'Wote', crop: 'Avocado', trees: 52, group: 'Wote Elite Coop', cert: 'Organic' },
    { name: 'C. Wanjiru', ward: 'Kalawa', crop: 'Mango', trees: 120, group: 'Mavindini Growers', cert: '-' },
];

const MapsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-red dark:text-white">Mapped Farmer Coverage</h1>
                <p className={`text-lg text-[${TEXT_SECONDARY}] dark:text-gray-300 mt-2 max-w-2xl mx-auto`}>
                    Explore mango and avocado farmers across the ESH region by crop, location, and production scale.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4">
                    <div className="bg-white dark:bg-[#3A3A3A] p-4 rounded-lg shadow-md sticky top-24">
                        <h3 className={`text-lg font-semibold text-[${HEADING_TEAL}] dark:text-white mb-4 flex items-center`}>
                            <Filter size={18} className="mr-2" /> Filters
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className={`block text-sm font-medium text-[${TEXT_SECONDARY}] mb-2`}>Crop</label>
                                <select className={defaultInputStyles}>
                                    <option>All</option>
                                    <option>Mango</option>
                                    <option>Avocado</option>
                                </select>
                            </div>
                            <div>
                                <label className={`block text-sm font-medium text-[${TEXT_SECONDARY}] mb-2`}>Sub-county</label>
                                <select className={defaultInputStyles}>
                                    <option>All</option>
                                    <option>Kalawa</option>
                                    <option>Wote</option>
                                    <option>Mavindini</option>
                                </select>
                            </div>
                            <div>
                                <label className={`block text-sm font-medium text-[${TEXT_SECONDARY}] mb-2`}>Certification</label>
                                <div className="space-y-1">
                                    <label className="flex items-center">
                                        <input type="checkbox" className={`mr-2 text-[${DEEP_TEAL}]`} />
                                        GlobalG.A.P
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className={`mr-2 text-[${DEEP_TEAL}]`} />
                                        Organic
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className={`block text-sm font-medium text-[${TEXT_SECONDARY}] mb-2`}>Farmer Group</label>
                                <select className={defaultInputStyles}>
                                    <option>All</option>
                                    <option>Wote Elite Coop</option>
                                    <option>Nzauni Aggregators</option>
                                    <option>Mavindini Growers</option>
                                </select>
                            </div>
                        </div>

                        <p className={`text-xs text-center mt-4 text-[${TEXT_SECONDARY}]`}>
                            Showing 527 mapped farmers in 3 sub-counties
                        </p>
                    </div>
                </aside>

                {/* Map & Data Section */}
                <main className="w-full lg:w-3/4">
                    <div className={`bg-[${LIGHT_GRAY_CLOUD}] dark:bg-gray-800 h-96 lg:h-[500px] rounded-lg shadow-lg relative overflow-hidden`}>
                        <img
                            src="https://images.pexels.com/photos/1586345/pexels-photo-1586345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Map placeholder"
                            className="w-full h-full object-cover opacity-20"
                        />

                        {/* Overlay labels */}
                        <div className="absolute top-1/4 left-1/3">
                            <div className="flex items-center gap-2 bg-black/60 text-white p-2 rounded-lg shadow-lg">
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: OLIVE_GREEN }}></span>
                                <span>218 farmers - Kathonzweni</span>
                            </div>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4">
                            <div className="flex items-center gap-2 bg-black/60 text-white p-2 rounded-lg shadow-lg">
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: BANANA_YELLOW }}></span>
                                <span>104 farmers - Kitise</span>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-3 rounded-lg text-sm shadow-md">
                            <h4 className="font-bold mb-2">Legend</h4>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: BANANA_YELLOW }}></div> Mango Farmers
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: OLIVE_GREEN }}></div> Avocado Farmers
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-4 h-4 rounded-full border-2 border-blue-500"></div> Certified Group
                            </div>
                        </div>
                    </div>

                    {/* Farmer Table */}
                    <div className="mt-8">
                        <h3 className={`text-xl font-semibold mb-4 text-[${HEADING_TEAL}] dark:text-white`}>Farmer Snapshot</h3>
                        <div className="overflow-x-auto bg-white dark:bg-[#3A3A3A] rounded-lg shadow-md">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase text-gray-500 dark:text-gray-300">
                                    <tr>
                                        <th className="px-6 py-3">Farmer Name</th>
                                        <th className="px-6 py-3">Ward</th>
                                        <th className="px-6 py-3">Crop</th>
                                        <th className="px-6 py-3">Trees</th>
                                        <th className="px-6 py-3">Group</th>
                                        <th className="px-6 py-3">Certification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {farmers.map((f) => (
                                        <tr key={f.name} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/50">
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{f.name}</td>
                                            <td className="px-6 py-4">{f.ward}</td>
                                            <td className="px-6 py-4">{f.crop}</td>
                                            <td className="px-6 py-4">{f.trees}</td>
                                            <td className="px-6 py-4">{f.group}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${f.cert !== '-' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/70 dark:text-blue-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300'}`}>
                                                    {f.cert}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-lg text-sm border border-blue-200 dark:border-blue-500/30">
                        <p><span className="font-bold">Note:</span> This feature will be powered by KIAMIS data where available. In counties without GIS layers, ESH extension teams will gradually map all producers to enable better planning and traceability.</p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MapsPage;
