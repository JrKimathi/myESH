import React, { useState } from 'react';
import { FileText, Video, BarChart2, Mic, Archive } from 'lucide-react';

const resources = [
    { title: "Guide to Growing Mangoes in Semi-Arid Areas", format: "PDF", summary: "Practical planting, spacing, and watering guide for dryland conditions.", category: "Crop Production", icon: <FileText /> },
    { title: "How to Graft Improved Avocado Varieties", format: "Video", summary: "Step-by-step tutorial on top-working and grafting.", category: "Crop Production", icon: <Video /> },
    { title: "Controlling Anthracnose in Mango Orchards", format: "Infographic", summary: "Symptoms, weather triggers, and recommended fungicides.", category: "Pest & Disease Control", icon: <BarChart2 /> },
    { title: "Using Fruit Fly Traps Effectively", format: "PDF", summary: "When and where to place traps. How to monitor infestations.", category: "Pest & Disease Control", icon: <FileText /> },
    { title: "Best Practices for Sorting and Grading Mangoes", format: "Video", summary: "Sorting for export vs. processing markets.", category: "Harvest & Post-Harvest", icon: <Video /> },
    { title: "Proper Storage of Avocados for Export", format: "PDF", summary: "Post-harvest handling and cold chain basics.", category: "Harvest & Post-Harvest", icon: <FileText /> },
    { title: "Choosing the Right Fertilizer for Avocado Trees", format: "Infographic", summary: "Nutrient needs by tree age and growth stage.", category: "Soil & Inputs", icon: <BarChart2 /> },
    { title: "Organic Pest Control Options", format: "PDF", summary: "Neem, garlic, and chili-based solutions.", category: "Soil & Inputs", icon: <FileText /> },
    { title: "GlobalG.A.P Basics for Smallholder Farmers", format: "PDF", summary: "Checklist of what farmers need to comply with.", category: "Certification", icon: <FileText /> },
    { title: "How to Prepare for an Audit Visit", format: "Audio Clip", summary: "Advice from an actual certifier.", category: "Certification", icon: <Mic /> },
    { title: "Understanding Farmgate vs. FOB Prices", format: "Video", summary: "Why mango prices differ by buyer and location.", category: "Business & Marketing", icon: <Video /> },
    { title: "Facilitation Guide: Farmer Field Day on Avocadoes", format: "PDF", summary: "For extension staff hosting demo plots.", category: "Training Videos", icon: <FileText /> },
    { title: "Youth Promoter Toolkit", format: "Zip file", summary: "Includes posters, checklists, sign-in sheets", category: "Training Videos", icon: <Archive /> },
];

const categories = Array.from(new Set(resources.map(r => r.category)));

const KnowledgeHubPage = ({ onNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    const defaultInputStyles = `w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white dark:bg-gray-800 text-sm`;

    const filteredResources = resources.filter(resource =>
        (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.summary.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterCategory === '' || resource.category === filterCategory)
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-[#0B3C49] dark:text-white">Knowledge Hub</h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Best practices and guides for mango and avocado farming.</p>
            </header>

            <div className="p-4 mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:gap-4 border border-gray-200 dark:border-gray-700">
                <div className="flex-grow relative mb-4 md:mb-0">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search articles..."
                        className={`${defaultInputStyles} pl-10`}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 12.65z" />
                        </svg>
                    </div>
                </div>
                <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className={`${defaultInputStyles} w-full md:w-auto`}>
                    <option value="">All Categories</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-lg text-teal-600">{resource.icon}</span>
                            <span className="text-xs font-semibold uppercase bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">{resource.format}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white flex-grow">{resource.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{resource.summary}</p>
                        <button onClick={() => onNavigate('knowledgeHub')} className="mt-auto bg-gray-100 dark:bg-gray-700 text-teal-600 dark:text-teal-300 hover:bg-teal-600 hover:text-white dark:hover:text-black font-semibold py-2 px-4 rounded transition-colors text-sm flex items-center justify-center gap-2">
                            View Resource
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KnowledgeHubPage;
