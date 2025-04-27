export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'coach' | 'player';
  teamId?: string;
  avatar?: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface Team {
  id: string;
  name: string;
  logo?: string;
  coach: string;
  players: number;
  division: string;
  wins: number;
  losses: number;
  draws: number;
}

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  location: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'canceled';
}

export interface Stat {
  label: string;
  value: number;
  change: number;
  icon: string;
}

export interface MenuItem {
  title: string;
  icon: string;
  path: string;
  badge?: number;
}