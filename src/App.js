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
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [theme, setTheme] = useState('light');
  const [currentOffer, setCurrentOffer] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [user, setUser] = useState(null);

  const handleNavigation = useCallback((page, data = null) => {
    setCurrentPage(page);
    if (page === 'offerDetail') setCurrentOffer(data);
    if (page === 'articleDetail') setCurrentArticle(data);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData); 
    setCurrentPage('dashboard'); 
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const protectedPages = ['dashboard', 'maps', 'priceData', 'newsAndInsights', 'knowledgeHub', 'sourcingHub', 'support', 'addOffer', 'offerDetail', 'articleDetail', 'profile'];
  const isProtectedPage = protectedPages.includes(currentPage);
  const shouldShowPage = !isProtectedPage || (isProtectedPage && user);

  const pages = {
    login: <LoginPage onNavigate={handleNavigation} onLogin={handleLogin} />,
    register: <RegisterPage onNavigate={handleNavigation} />,
    dashboard: <DashboardPage onNavigate={handleNavigation} />,
    maps: <MapsPage />,
    priceData: <MarketPrices />,
    newsAndInsights: <NewsAndInsightsPage onNavigate={handleNavigation} />,
    knowledgeHub: <KnowledgeHubPage onNavigate={handleNavigation} />,
    sourcingHub: <SourcingHubPage onNavigate={handleNavigation} />,
    support: <SupportPage user={user} />,
    addOffer: <AddOfferPage onNavigate={handleNavigation} user={user} />,
    offerDetail: <OfferDetailPage offer={currentOffer} onBack={() => handleNavigation('sourcingHub')} />,
    articleDetail: <ArticleDetailPage article={currentArticle} onBack={() => handleNavigation('knowledgeHub')} />,
    profile: <ProfilePage user={user} onNavigate={handleNavigation} />,
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-[#F9F9F9] text-[#1F1F1F]'}`}>
      {!(currentPage === 'login' || currentPage === 'register') && (
        <Navbar
          user={user}
          onNavigate={handleNavigation}
          onSignOut={handleLogout}
          authInstance={null}
          toggleTheme={toggleTheme}
          currentTheme={theme}
          userId={user ? user.id : null}
        />
      )}

      <main className="flex-grow">
        {shouldShowPage ? (
          pages[currentPage] || <DashboardPage onNavigate={handleNavigation} />
        ) : (
          pages['login']
        )}
      </main>

      {!(currentPage === 'login' || currentPage === 'register') && <Footer />}
    </div>
  );
}

export default App;
