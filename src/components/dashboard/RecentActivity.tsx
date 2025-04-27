import React from 'react';
import { UsersRound, CalendarPlus, Edit, Shield, Trash2 } from 'lucide-react';

interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  type: 'user' | 'match' | 'content' | 'team' | 'delete';
}

interface RecentActivityProps {
  activities: Activity[];
}

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'user':
      return <div className="p-2 rounded-full bg-blue-100 text-blue-600"><UsersRound size={16} /></div>;
    case 'match':
      return <div className="p-2 rounded-full bg-purple-100 text-purple-600"><CalendarPlus size={16} /></div>;
    case 'content':
      return <div className="p-2 rounded-full bg-yellow-100 text-yellow-600"><Edit size={16} /></div>;
    case 'team':
      return <div className="p-2 rounded-full bg-green-100 text-green-600"><Shield size={16} /></div>;
    case 'delete':
      return <div className="p-2 rounded-full bg-red-100 text-red-600"><Trash2 size={16} /></div>;
    default:
      return <div className="p-2 rounded-full bg-gray-100 text-gray-600"><Edit size={16} /></div>;
  }
};

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="font-medium text-gray-700">Recent Activity</h3>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">View all</button>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              {getActivityIcon(activity.type)}
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium text-gray-900">{activity.user}</span>{' '}
                  <span className="text-gray-600">{activity.action}</span>{' '}
                  <span className="font-medium text-gray-900">{activity.target}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;