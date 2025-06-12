import React from 'react';
import { TrendingUp, AlertTriangle, Package } from 'lucide-react';

const featuredArticle = {
    title: "W24 Avocado Report: Prices Hold Firm Despite Early Harvest Pressure",
    author: "MyESH Market Desk",
    date: "June 10, 2025",
    summary:
        "This week’s avocado trade saw stable pricing at KES 92/kg FOB Mombasa. Exporters report strong Gulf interest. However, rain-related delays are expected in Wote and Kitise. Fruit fly pressure remains high in Mavindini.",
    tags: ["Fresh Avocado", "Export Market", "Makueni"],
    image:
        "https://images.pexels.com/photos/5753907/pexels-photo-5753907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const mainArticles = [
    {
        type: "Market Outlook",
        icon: <TrendingUp size={20} className="text-blue-500" />,
        title: "2025 Mango Exports: Kenya Faces Ecuador Price Pressure",
        summary: "Kenya’s mango pricing is now under scrutiny as Ecuador floods EU markets with lower-priced fruit.",
        author: "Trade Desk",
        image: "https://images.pexels.com/photos/7657967/pexels-photo-7657967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["Logistics", "Avocado", "EU Compliance"],
    },
    {
        type: "Phytosanitary Alert",
        icon: <AlertTriangle size={20} className="text-red-500" />,
        title: "EU Tightens Fruit Fly Rules for Avocados",
        summary: "Exporters must comply with new cold-treatment rules from July 1 to avoid shipment rejections.",
        author: "Compliance Dept.",
        image: "https://images.pexels.com/photos/8580726/pexels-photo-8580726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["Pest Alert", "Mango", "Farmer Advisory"],
    },
    {
        type: "Logistics Insight",
        icon: <Package size={20} className="text-purple-500" />,
        title: "Packhouses Running at 72% Capacity – Should We Worry?",
        summary: "New data from Keitt and Vert shows idle days due to scattered supply, impacting overall efficiency.",
        author: "Data Team",
        image: "https://images.pexels.com/photos/8185629/pexels-photo-8185629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["Logistics", "Packhouse", "Data"],
    },
];

const sidebarContent = {
    events: { title: "County mango stakeholder forum – June 28, Kalawa", date: "June 28, 2025" },
    policy: "MoALF review on GAP certification subsidies opens June 15",
    fromTheField: {
        title: "Youth agent Ndunge shares 3 tips on sorting mangoes by hand",
        author: "Ndunge K.",
    },
    photo: {
        src: "https://images.pexels.com/photos/5874591/pexels-photo-5874591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Harvest day in Kathonzweni."
    },
};

const marketPrices = [
    { commodity: "Avocado", grade: "Grade 1, FOB", price: 92, trend: 'up', change: 3.2 },
    { commodity: "Mango", grade: "Kent, Grade A", price: 55, trend: 'down', change: -3.5 },
    { commodity: "Mango", grade: "Ngowe, Grade B", price: 32, trend: 'stable', change: 0 },
];


const NewsAndInsightsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
            <div className="mb-12">
                <h1 className="text-3xl font-bold">News & Insights</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Stay informed on market shifts, export requirements, farmer advisories, and more.
                </p>
            </div>

            {/* Featured Article */}
            <div className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <img src={featuredArticle.image} className="w-full h-64 object-cover rounded-md mb-4" alt="Featured" />
                <h2 className="text-2xl font-bold mb-1">{featuredArticle.title}</h2>
                <p className="text-sm text-gray-500 mb-2">By {featuredArticle.author} • {featuredArticle.date}</p>
                <p className="mb-2">{featuredArticle.summary}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {featuredArticle.tags.map(tag => (
                        <span key={tag} className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Live Market Prices */}
            <div className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Live Market Prices</h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Last updated: June 9, 2025</span>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    {marketPrices.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2a2a2a]"
                        >
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.grade}</p>
                            <p className="font-bold text-lg text-gray-800 dark:text-white">{item.commodity}</p>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-2xl font-semibold text-teal-600">KES {item.price}</p>
                                <p
                                    className={`text-sm font-medium ${item.trend === 'up'
                                        ? 'text-green-500'
                                        : item.trend === 'down'
                                            ? 'text-red-500'
                                            : 'text-gray-500 dark:text-gray-400'
                                        }`}
                                >
                                    {item.trend === 'up'
                                        ? '▲'
                                        : item.trend === 'down'
                                            ? '▼'
                                            : '–'}{' '}
                                    {item.change}%
                                </p>
                            </div>
                            <p className="text-xs text-right text-gray-400 mt-1">YoY Change</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Main Articles */}
            <div className="space-y-6 mb-12">
                {mainArticles.map((article, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col md:flex-row gap-4">
                        <img src={article.image} alt={article.title} className="w-full md:w-1/3 h-48 object-cover rounded-md" />
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">{article.icon}<span className="text-sm font-medium">{article.type}</span></div>
                            <h3 className="text-lg font-bold mb-1">{article.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{article.summary}</p>
                            <p className="text-xs text-gray-400">By {article.author}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {article.tags.map((tag, i) => (
                                    <span key={i} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar Below */}
            <div className="flex justify-start mt-12">
                <aside className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6 max-w-lg w-full">
                    <div>
                        <h4 className="font-bold text-lg mb-1">Upcoming Event</h4>
                        <p className="text-sm">{sidebarContent.events.title}</p>
                        <p className="text-xs text-gray-500">{sidebarContent.events.date}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Policy Update</h4>
                        <p className="text-sm">{sidebarContent.policy}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">From the Field</h4>
                        <p className="text-sm">{sidebarContent.fromTheField.title}</p>
                        <p className="text-xs text-gray-500">By {sidebarContent.fromTheField.author}</p>
                    </div>
                    <div>
                        <img
                            src={sidebarContent.photo.src}
                            className="w-full h-40 object-cover rounded-md"
                            alt="Sidebar Photo"
                        />
                        <p className="text-xs text-center mt-2 text-gray-500">
                            {sidebarContent.photo.caption}
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default NewsAndInsightsPage;
