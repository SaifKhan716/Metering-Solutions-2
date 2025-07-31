import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Search, Bell, User, ChevronDown, Mail, Globe, Menu, Expand, UserCircle, LogOutIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/authSlice";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }
  return (
    <div className="h-full flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b border-gray-100">
      {/* Left Section - Search and Breadcrumb */}
      <div className="flex items-center space-x-6">
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Menu className="text-gray-500" size={20} />
        </button>

        {/* Breadcrumb */}
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">Overview</span>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            className="w-72 p-2.5 pl-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
            placeholder="Search anything..."
          />
          <Search className="absolute top-3.5 left-3.5 text-gray-400" size={16} />
        </div>
      </div>

      {/* Right Section - Quick Actions and User Profile */}
      <div className="flex items-center space-x-4">
        {/* Quick Actions */}
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Globe className="text-gray-500" size={18} />
          </button>

          {/* Fullscreen Toggle */}
          <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Expand className="text-gray-500" size={18} />
          </button>

          {/* Messages */}
          <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors relative">
            <Mail className="text-gray-500" size={18} />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors relative">
            <Bell className="text-gray-500" size={18} />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-200"></div>

        {/* User Profile Section */}
        <div className="relative">
          <div
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-medium">{ }</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-800">{ }</p>
              <div className="flex items-center space-x-2">
                {/* Company Logo */}
                <div className="w-3 h-3 bg-cyan-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold"></span>
                </div>
                <span className="text-xs text-gray-500">SmartLynk Metering Solutions</span>
              </div>
            </div>
            <ChevronDown className={`text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} size={16} />
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-800">Afraz Ali</p>
                <p className="text-xs text-gray-500">Administrator</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-3 h-3 bg-cyan-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SS</span>
                  </div>
                  <span className="text-xs text-gray-500">Sky Solutions</span>
                </div>
              </div>
              <div className="py-2">
                <Link to='/profile/:id' className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <UserCircle className="mr-3 text-gray-400" size={16} />
                  My Profile
                </Link>
                <Link to='' className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <Bell className="mr-3 text-gray-400" size={16} />
                  Notifications
                </Link>
                <Link onClick={() => handleLogout()} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <LogOutIcon className="mr-3 text-gray-400" size={16} />
                  logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;