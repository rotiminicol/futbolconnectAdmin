import React from 'react';
import { 
  Bell, 
  Search, 
  Settings, 
  User,
  Menu,
  X
} from 'lucide-react';

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ 
  collapsed, 
  setCollapsed, 
  title,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  return (
    <header className={`fixed top-0 right-0 z-10 ${collapsed ? 'lg:ml-20' : 'lg:ml-64'} transition-all duration-300 ease-in-out bg-white border-b border-gray-200 w-full lg:w-[calc(100%-theme(spacing.64))]`}>
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md lg:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-xl font-semibold text-gray-800 ml-2">{title}</h1>
        </div>

        <div className="hidden md:flex items-center rounded-md bg-gray-100 px-3 py-1.5 w-64">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm flex-1"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Settings size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <User size={16} />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden md:inline-block">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;