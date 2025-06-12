const NavItemMobile = ({ onClick, icon, label }) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center text-[#6C757D] dark:text-gray-300 hover:text-[#1C5D57] dark:hover:text-[#A4C3A2] p-1 rounded-md text-xs font-medium transition-colors flex-shrink-0 w-24"
    >
        {icon}
        <span className="mt-1">{label}</span>
    </button>
);
