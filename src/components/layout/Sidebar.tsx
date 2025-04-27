import React, { useState } from 'react';
import { 
  LayoutDashboard,
  Users,
  CalendarDays, 
  FileText,
  Shield,
  Settings,
  Activity,
  Image,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { MenuItem } from '../../types';

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: 'LayoutDashboard', path: '/' },
  { title: 'Users', icon: 'Users', path: '/users', badge: 3 },
  { title: 'Matches', icon: 'CalendarDays', path: '/matches' },
  { title: 'Content', icon: 'FileText', path: '/content' },
  { title: 'Teams', icon: 'Shield', path: '/teams' },
  { title: 'Activity Logs', icon: 'Activity', path: '/activity' },
  { title: 'Media', icon: 'Image', path: '/media' },
  { title: 'Settings', icon: 'Settings', path: '/settings' },
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'LayoutDashboard': return <LayoutDashboard size={20} />;
    case 'Users': return <Users size={20} />;
    case 'CalendarDays': return <CalendarDays size={20} />;
    case 'FileText': return <FileText size={20} />;
    case 'Shield': return <Shield size={20} />;
    case 'Settings': return <Settings size={20} />;
    case 'Activity': return <Activity size={20} />;
    case 'Image': return <Image size={20} />;
    default: return <LayoutDashboard size={20} />;
  }
};

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div 
      className={`${
        collapsed ? 'w-20' : 'w-64'
      } bg-gray-900 text-white h-screen fixed left-0 top-0 transition-all duration-300 ease-in-out z-20`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <Shield size={24} className="text-green-500" />
            <span className="font-bold text-lg">FootballAdmin</span>
          </div>
        )}
        {collapsed && <Shield size={24} className="mx-auto text-green-500" />}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-1 rounded-md hover:bg-gray-800 text-gray-400"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className="py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.title}>
              <button
                onClick={() => setActiveItem(item.title)}
                className={`w-full flex items-center ${
                  collapsed ? 'justify-center' : 'justify-between'
                } px-4 py-3 text-sm ${
                  activeItem === item.title
                    ? 'bg-gray-800 text-white border-l-4 border-green-500'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-3">{getIconComponent(item.icon)}</span>
                  {!collapsed && <span>{item.title}</span>}
                </div>
                {!collapsed && item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="absolute bottom-0 w-full border-t border-gray-800 p-4">
        <button className={`flex items-center ${collapsed ? 'justify-center w-full' : 'space-x-3'} text-gray-400 hover:text-white`}>
          <LogOut size={20} />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;