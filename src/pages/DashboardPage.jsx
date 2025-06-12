import React from 'react';
import Section from '../components/Section';

const HeroSection = () => (
  <div
    className="relative h-80 bg-cover bg-center text-white"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/1400249/pexels-photo-1400249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    }}
  >
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to MyESH</h1>
        <p className="mt-2 text-lg">Your Farm. Your Market. Your Export Supply Hub.</p>
        <button className="mt-6 py-2 px-6 bg-[#1C5D57] hover:bg-teal-600 rounded-full text-white font-semibold transition-colors">
          See What's New
        </button>
      </div>
    </div>
  </div>
);

const MarketPrices = () => {
  const prices = [
    { commodity: "Fresh Avocado (Grade 1)", location: "FOB Mombasa", price: 92, change: 3.2, trend: 'up' },
    { commodity: "Mango (Kent, Grade A)", location: "Packhouse – Wote", price: 55, change: -3.5, trend: 'down' },
    { commodity: "Mango (Ngowe, Grade B)", location: "Farmgate – Mavindini", price: 32, change: 0, trend: 'stable' },
  ];

  return (
    <Section title="Latest Market Prices">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prices.map((item) => (
          <div
            key={item.commodity}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm text-[#6C757D]">{item.location}</p>
            <p className="text-lg font-bold my-1 text-[#1F1F1F] dark:text-white">{item.commodity}</p>
            <div className="flex items-baseline gap-4 mt-2">
              <p className="text-3xl font-bold text-[#1C5D57]">KES {item.price}</p>
              <p
                className={`text-md font-semibold ${item.trend === 'up'
                    ? 'text-green-500'
                    : item.trend === 'down'
                      ? 'text-[#CE6D63]'
                      : 'text-[#6C757D]'
                  }`}
              >
                {item.trend === 'up' ? '▲' : item.trend === 'down' ? '▼' : ''} {item.change}%
              </p>
            </div>
            <p className="text-xs text-right text-gray-400">YoY Change</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ExporterSourcingOffers = ({ onNavigate }) => {
  const offer = {
    company: "Iviani Exporters Ltd.",
    seeking: "Seeking 10T of Grade 1 Hass Avocados for July",
    image:
      "https://images.pexels.com/photos/5544043/pexels-photo-5544043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <Section title="Exporter Sourcing Offers">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-center gap-6">
        <img
          src={offer.image}
          className="w-32 h-32 object-cover rounded-lg hidden sm:block"
          alt="Avocados"
        />
        <div className="flex-grow">
          <p className="font-bold text-lg text-[#1F1F1F] dark:text-white">{offer.company}</p>
          <p className="text-[#6C757D] mt-1">{offer.seeking}</p>
        </div>
        <button
          onClick={() => onNavigate('sourcingHub')}
          className="self-end text-sm font-medium text-[#1C5D57] hover:text-teal-700 dark:text-teal-300"
        >
          View All Offers →
        </button>
      </div>
    </Section>
  );
};

const WeeklyUpdate = ({ onNavigate }) => {
  const article = {
    title: "Why Fruit Fly Season Hit Early in 2025",
    image:
      "https://images.pexels.com/photos/8570228/pexels-photo-8570228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <Section title="Weekly Update">
      <div
        onClick={() => onNavigate('newsAndInsights')}
        className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 space-y-3 cursor-pointer"
      >
        <img src={article.image} className="w-full h-32 object-cover rounded-lg" alt="Update" />
        <p className="font-bold text-lg text-[#1F1F1F] dark:text-white">{article.title}</p>
      </div>
    </Section>
  );
};

const KnowledgeHubHighlights = ({ onNavigate }) => {
  const highlights = [
    {
      title: "Harvesting Tips",
      subtitle: "How to Manage Post-Harvest Rot",
      image: "https://images.pexels.com/photos/8580728/pexels-photo-8580728.jpeg",
    },
    {
      title: "Certified Seedlings",
      subtitle: "A Guide to Quality Seed Selection",
      image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",
    },
    {
      title: "Safety",
      subtitle: "Best Practices for Pesticide Use",
      image: "https://images.pexels.com/photos/5920768/pexels-photo-5920768.jpeg",
    },
  ];

  return (
    <Section
      title="Knowledge Hub"
      cta={{ label: "Visit Knowledge Hub", onClick: () => onNavigate('knowledgeHub') }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item) => (
          <div
            key={item.title}
            onClick={() => onNavigate('knowledgeHub')}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group cursor-pointer border border-gray-200 dark:border-gray-700"
          >
            <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <p className="font-bold text-sm text-[#1C5D57]">{item.title}</p>
              <p className="font-semibold text-lg mt-1 text-[#1F1F1F] dark:text-white group-hover:text-[#1C5D57] transition-colors">
                {item.subtitle}
              </p>
              <p className="text-sm mt-2 text-[#1C5D57] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const DashboardPage = ({ onNavigate }) => {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="container mx-auto px-4 space-y-8 py-8">
        <MarketPrices />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ExporterSourcingOffers onNavigate={onNavigate} />
          </div>
          <div>
            <WeeklyUpdate onNavigate={onNavigate} />
          </div>
        </div>
        <KnowledgeHubHighlights onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default DashboardPage;
