import React from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  Users,
  CalendarDays,
  Shield,
  Eye
} from 'lucide-react';
import { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'users':
      return <Users className="text-blue-500" size={24} />;
    case 'calendar':
      return <CalendarDays className="text-purple-500" size={24} />;
    case 'shield':
      return <Shield className="text-green-500" size={24} />;
    case 'eye':
      return <Eye className="text-orange-500" size={24} />;
    default:
      return <Users className="text-blue-500" size={24} />;
  }
};

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-gray-50">{getIcon(stat.icon)}</div>
        <div className={`text-xs font-medium flex items-center space-x-1 ${
          stat.change > 0 ? 'text-green-500' : 'text-red-500'
        }`}>
          {stat.change > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{Math.abs(stat.change)}%</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
        <div className="text-sm text-gray-500">{stat.label}</div>
      </div>
    </div>
  );
};

export default StatCard;