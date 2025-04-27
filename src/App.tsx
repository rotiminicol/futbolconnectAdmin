import React from 'react';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/Users';

function App() {
  // In a real app, this would be handled by a router
  // For simplicity, we're just showing the Dashboard by default
  return <Dashboard />;
  // To see the Users page, uncomment the following line:
  // return <UsersPage />;
}

export default App;