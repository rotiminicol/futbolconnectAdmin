import React from 'react';
import { Match } from '../../types';
import { Calendar, MapPin } from 'lucide-react';

interface RecentMatchesProps {
  matches: Match[];
}

const getStatusBadge = (status: Match['status']) => {
  switch (status) {
    case 'scheduled':
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Scheduled</span>;
    case 'in-progress':
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Live</span>;
    case 'completed':
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>;
    case 'canceled':
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Canceled</span>;
    default:
      return null;
  }
};

const RecentMatches: React.FC<RecentMatchesProps> = ({ matches }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="font-medium text-gray-700">Recent Matches</h3>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">View all</button>
      </div>
      <div className="divide-y divide-gray-100">
        {matches.map((match) => (
          <div key={match.id} className="p-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center text-xs text-gray-500 space-x-2">
                <Calendar size={14} />
                <span>{new Date(match.date).toLocaleDateString()}</span>
              </div>
              {getStatusBadge(match.status)}
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="text-center flex-1">
                <div className="font-medium">{match.homeTeam}</div>
                {match.status !== 'scheduled' && (
                  <div className="text-xl font-bold text-gray-800">{match.homeScore}</div>
                )}
              </div>
              
              <div className="mx-4 text-gray-400 font-bold">VS</div>
              
              <div className="text-center flex-1">
                <div className="font-medium">{match.awayTeam}</div>
                {match.status !== 'scheduled' && (
                  <div className="text-xl font-bold text-gray-800">{match.awayScore}</div>
                )}
              </div>
            </div>
            
            <div className="mt-3 flex items-center text-xs text-gray-500 space-x-1">
              <MapPin size={14} />
              <span>{match.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMatches;