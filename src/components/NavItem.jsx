const NavItem = ({ onClick, icon, label }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center w-20 h-16 text-[#6C757D] dark:text-gray-300 hover:text-[#1C5D57] dark:hover:text-[#A4C3A2] transition-colors"
  >
    <div className="text-xl">{icon}</div>
    <span className="text-xs mt-1 font-medium">{label}</span>
  </button>
);
