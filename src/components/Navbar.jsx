import React, { useState } from 'react';
import {
    BarChart3, Map, TrendingUp, Rss, BookOpen,
    ShoppingCart, LifeBuoy, Moon, Sun, UserCircle
} from 'lucide-react';
import MyEshLogo from './MyEshLogo'; // Make sure this component exists
import {
    DEEP_TEAL, TEXT_SECONDARY, SOFT_SAGE
} from '../utils/colors';

const Navbar = ({ user, onNavigate, onSignOut, authInstance, toggleTheme, currentTheme, userId }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const displayName = user?.name || user?.email || "User";

    const handleSignOut = async () => {
        if (!authInstance) {
            console.error("Auth instance not available for sign out.");
            return;
        }
        try {
            await onSignOut(authInstance);
            onNavigate('login');
        } catch (error) {
            console.error("Sign out error:", error);
        }
    };

    const navLinks = [
        { page: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={20} /> },
        { page: 'maps', label: 'Maps', icon: <Map size={20} /> },
        { page: 'priceData', label: 'Price Data', icon: <TrendingUp size={20} /> },
        { page: 'newsAndInsights', label: 'News & Insights', icon: <Rss size={20} /> },
        { page: 'knowledgeHub', label: 'Knowledge Hub', icon: <BookOpen size={20} /> },
        { page: 'sourcingHub', label: 'Sourcing Hub', icon: <ShoppingCart size={20} /> },
        { page: 'support', label: 'Support', icon: <LifeBuoy size={20} /> },
    ];

    return (
        <nav className="bg-white dark:bg-[#2C2C2C] shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer" onClick={() => onNavigate('dashboard')}>
                        <MyEshLogo />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map(link => (
                            <NavItem key={link.page} onClick={() => onNavigate(link.page)} icon={link.icon} label={link.label} />
                        ))}
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center space-x-3">
                        <button onClick={toggleTheme} className={`p-2 rounded-full text-[${TEXT_SECONDARY}] dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700`}>
                            {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                        {/* User Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className={`flex items-center p-2 rounded-full text-[${TEXT_SECONDARY}] dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700`}
                            >
                                <UserCircle size={24} />
                                <span className="ml-2 hidden md:inline">{displayName}</span>
                            </button>

                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20 py-1 border border-gray-200 dark:border-gray-700">
                                    <a
                                        onClick={() => { onNavigate('profile'); setShowDropdown(false); }}
                                        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Profile
                                    </a>
                                    <a
                                        onClick={() => { handleSignOut(); setShowDropdown(false); }}
                                        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Sign Out
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden flex overflow-x-auto py-2 border-t border-gray-200 dark:border-gray-700">
                    {navLinks.map(link => (
                        <NavItemMobile key={link.page} onClick={() => onNavigate(link.page)} icon={link.icon} label={link.label} />
                    ))}
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center text-[${TEXT_SECONDARY}] dark:text-gray-300 hover:text-[${DEEP_TEAL}] dark:hover:text-[${SOFT_SAGE}] px-3 py-2 rounded-md text-sm font-medium transition-colors`}
    >
        {icon}
        <span className="ml-2">{label}</span>
    </button>
);

const NavItemMobile = ({ onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center text-[${TEXT_SECONDARY}] dark:text-gray-300 hover:text-[${DEEP_TEAL}] dark:hover:text-[${SOFT_SAGE}] p-1 rounded-md text-xs font-medium transition-colors flex-shrink-0 w-24`}
    >
        {icon}
        <span className="mt-1">{label}</span>
    </button>
);

export default Navbar;
