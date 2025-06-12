import React, { useState, useEffect, useCallback } from 'react';
import DashboardPage from './pages/DashboardPage';
import MapsPage from './pages/MapsPage';
import MarketPrices from './pages/MarketPrices';
import NewsAndInsightsPage from './pages/NewsAndInsightsPage';
import KnowledgeHubPage from './pages/KnowledgeHubPage';
import SourcingHubPage from './pages/SourcingHubPage';
import SupportPage from './pages/SupportPage';
import AddOfferPage from './pages/AddOfferPage';
import OfferDetailPage from './pages/OfferDetailPage';
import ArticleDetailPage from './pages/ArticalDetailPage';
import ProfilePage from './pages/ProfilePage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [theme, setTheme] = useState('light');
  const [currentOffer, setCurrentOffer] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);

  const handleNavigation = useCallback((page, data = null) => {
    setCurrentPage(page);
    if (page === 'offerDetail') setCurrentOffer(data);
    if (page === 'articleDetail') setCurrentArticle(data);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const pages = {
    dashboard: <DashboardPage onNavigate={handleNavigation} />,
    maps: <MapsPage />,
    priceData: <MarketPrices />,
    newsAndInsights: <NewsAndInsightsPage onNavigate={handleNavigation} />,
    knowledgeHub: <KnowledgeHubPage onNavigate={handleNavigation} />,
    sourcingHub: <SourcingHubPage onNavigate={handleNavigation} />,
    support: <SupportPage user={null} />,
    addOffer: <AddOfferPage onNavigate={handleNavigation} user={null} />,
    offerDetail: <OfferDetailPage offer={currentOffer} onBack={() => handleNavigation('sourcingHub')} />,
    articleDetail: <ArticleDetailPage article={currentArticle} onBack={() => handleNavigation('knowledgeHub')} />,
    profile: <ProfilePage user={null} onNavigate={handleNavigation} />
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-[#F9F9F9] text-[#1F1F1F]'}`}>
      <Navbar
        user={{ name: 'User', role: 'tester' }} //change this to dynamically display the name of the real user
        onNavigate={handleNavigation}
        onSignOut={() => { }}
        authInstance={null}
        toggleTheme={toggleTheme}
        currentTheme={theme}
        userId={'test-user'}
      />
      <main className="flex-grow">
        {pages[currentPage] || <DashboardPage onNavigate={handleNavigation} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
