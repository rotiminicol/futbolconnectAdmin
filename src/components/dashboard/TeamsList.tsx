import React from 'react';
import { Team } from '../../types';
import { ChevronRight, Shield } from 'lucide-react';

interface TeamsListProps {
  teams: Team[];
}

const TeamsList: React.FC<TeamsListProps> = ({ teams }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="font-medium text-gray-700">Teams</h3>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">View all</button>
      </div>
      <div className="divide-y divide-gray-100">
        {teams.map((team) => (
          <div key={team.id} className="px-5 py-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  {team.logo ? (
                    <img src={team.logo} alt={team.name} className="w-full h-full object-cover" />
                  ) : (
                    <Shield size={20} className="text-gray-500" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{team.name}</div>
                  <div className="text-xs text-gray-500">{team.players} players · {team.division}</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm font-medium mr-2 hidden md:block">
                  <span className="text-green-600">{team.wins}W</span>-
                  <span className="text-red-600">{team.losses}L</span>-
                  <span className="text-gray-600">{team.draws}D</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsList;