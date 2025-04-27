import React from 'react';
import Layout from '../components/layout/Layout';
import StatCard from '../components/dashboard/StatCard';
import TeamsList from '../components/dashboard/TeamsList';
import RecentMatches from '../components/dashboard/RecentMatches';
import RecentActivity from '../components/dashboard/RecentActivity';
import { Stat, Team, Match } from '../types';

const stats: Stat[] = [
  { label: 'Total Users', value: 2478, change: 12, icon: 'users' },
  { label: 'Upcoming Matches', value: 16, change: 24, icon: 'calendar' },
  { label: 'Active Teams', value: 36, change: 8, icon: 'shield' },
  { label: 'Page Views', value: 12582, change: -5, icon: 'eye' },
];

const teams: Team[] = [
  { 
    id: '1', 
    name: 'Lions FC', 
    logo: 'https://images.pexels.com/photos/985246/pexels-photo-985246.jpeg?auto=compress&cs=tinysrgb&h=350',
    coach: 'John Smith', 
    players: 24, 
    division: 'Premier',
    wins: 8,
    losses: 2,
    draws: 1
  },
  { 
    id: '2', 
    name: 'Eagles United', 
    logo: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&h=350',
    coach: 'Sarah Johnson', 
    players: 22, 
    division: 'Premier',
    wins: 7,
    losses: 3,
    draws: 2
  },
  { 
    id: '3', 
    name: 'Titans SC', 
    logo: 'https://images.pexels.com/photos/5850875/pexels-photo-5850875.jpeg?auto=compress&cs=tinysrgb&h=350',
    coach: 'Mike Taylor', 
    players: 20, 
    division: 'Division 1',
    wins: 9,
    losses: 1,
    draws: 1
  },
  { 
    id: '4', 
    name: 'Warriors FC', 
    coach: 'Lisa Brown', 
    players: 23, 
    division: 'Division 1',
    wins: 6,
    losses: 3,
    draws: 3
  },
];

const matches: Match[] = [
  {
    id: '1',
    homeTeam: 'Lions FC',
    awayTeam: 'Eagles United',
    homeScore: 2,
    awayScore: 1,
    date: '2025-04-10T14:00:00Z',
    location: 'Lions Stadium',
    status: 'completed'
  },
  {
    id: '2',
    homeTeam: 'Titans SC',
    awayTeam: 'Warriors FC',
    homeScore: 0,
    awayScore: 0,
    date: '2025-04-15T18:30:00Z',
    location: 'Titans Arena',
    status: 'in-progress'
  },
  {
    id: '3',
    homeTeam: 'Eagles United',
    awayTeam: 'Warriors FC',
    date: '2025-04-22T15:00:00Z',
    location: 'Eagles Field',
    status: 'scheduled'
  },
];

const activities = [
  {
    id: '1',
    user: 'Admin',
    action: 'added a new player to',
    target: 'Lions FC',
    time: '15 minutes ago',
    type: 'user'
  },
  {
    id: '2',
    user: 'Sarah Johnson',
    action: 'scheduled a new match between',
    target: 'Eagles United and Titans SC',
    time: '2 hours ago',
    type: 'match'
  },
  {
    id: '3',
    user: 'Admin',
    action: 'updated the team information for',
    target: 'Warriors FC',
    time: '4 hours ago',
    type: 'team'
  },
  {
    id: '4',
    user: 'Mike Taylor',
    action: 'published a new announcement for',
    target: 'Titans SC',
    time: 'Yesterday at 5:30 PM',
    type: 'content'
  },
  {
    id: '5',
    user: 'Admin',
    action: 'deleted a canceled match between',
    target: 'Lions FC and Warriors FC',
    time: 'Yesterday at 2:15 PM',
    type: 'delete'
  },
];

const Dashboard: React.FC = () => {
  return (
    <Layout title="Dashboard">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin</h1>
        <p className="text-gray-600">Here's what's happening with your football platform today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <RecentMatches matches={matches} />
        </div>
        <div>
          <RecentActivity activities={activities} />
        </div>
      </div>
      
      <div>
        <TeamsList teams={teams} />
      </div>
    </Layout>
  );
};

export default Dashboard;