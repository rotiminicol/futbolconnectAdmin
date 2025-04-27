import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile sidebar */}
      <div className={`
        fixed top-0 left-0 w-64 h-screen bg-gray-900 z-30 lg:hidden transform transition-transform duration-300
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar collapsed={false} setCollapsed={setCollapsed} />
      </div>
      
      <Header 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        title={title}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main 
        className={`
          pt-16 transition-all duration-300 ease-in-out
          ${collapsed ? 'lg:ml-20' : 'lg:ml-64'}
        `}
      >
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
};

export default Layout;