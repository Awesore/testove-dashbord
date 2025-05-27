import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { BarChart3, Users, Settings } from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Overview', path: '/', icon: BarChart3 },
    { name: 'Users', path: '/users', icon: Users },
    { name: 'Settings', path: '/settings', icon: Settings }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">Admin Dashboard</h2>
        </div>
        <nav className="mt-6">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`w-full flex items-center px-6 py-3 text-left text-sm font-medium hover:bg-gray-50 ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
