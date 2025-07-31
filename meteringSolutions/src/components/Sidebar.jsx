
// import {
//   FaFileInvoiceDollar,
//   FaLifeRing,
//   FaBolt,
//   FaUserPlus,
//   FaTachometerAlt,
//   FaUser,
//   FaBell,
//   FaUsers,
//   FaCalculator,
//   FaComments,
//   FaArchive,
//   FaCog,
//   FaChartBar,
//   FaCreditCard,
//   FaHistory,
//   FaHeadset,
//   FaSignOutAlt,
//   FaChevronDown,
//   FaChevronRight
// } from 'react-icons/fa';
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useDispatch,useSelector } from 'react-redux';
// import { selectUserEmail, selectUserId, selectUserRole } from '../redux/slice/authSlice';


// const lognInUserId = useSelector(selectUserId);
// const lognInUserRole = useSelector(selectUserRole);

// // Menu configuration functions that accept user ID
// const getAdminFavoriteItems = () => [
//   { name: "Billing & Payments", path: "/billingandpayment", icon: FaFileInvoiceDollar, color: "text-emerald-500" },
//   { name: "Support & Logs", path: "/supportandlogs", icon: FaLifeRing, color: "text-blue-500" },
//   { name: "Energy Consumption", path: "/energyConsumption", icon: FaBolt, color: "text-yellow-500" },
//   { name: "Onboarding", path: "/onboarding", icon: FaUserPlus, color: "text-purple-500" }
// ];

// const getAdminMainMenuItems = (userId) => [
//   { name: "Dashboard", path: "/", icon: FaTachometerAlt, color: "text-blue-600" },
//   { name: "User Dashboard", path: `/user-dashboard/${userId}`, icon: FaUser, color: "text-indigo-500" },
//   { name: "Alerts & Notifications", path: "/alertandnotification", icon: FaBell, color: "text-red-500" },
//   { name: "User Management", path: "/admin/user-management", icon: FaUsers, color: "text-green-500" },
//   { name: "Meter Management", path: "/admin/meter-management", icon: FaCalculator, color: "text-orange-500" },
//   { name: "Chat", path: "/chat", icon: FaComments, color: "text-cyan-500" },
//   { name: "Invoice", path: "/invoice", icon: FaFileInvoiceDollar, color: "text-pink-500" },
//   { name: "Archive", path: "/archive", icon: FaArchive, color: "text-gray-500" },
//   { name: "System Settings", path: "/system-settings", icon: FaCog, color: "text-gray-600" },
//   { name: "Analytics", path: "/analytics", icon: FaChartBar, color: "text-purple-600" }
// ];

// const getUserFavoriteItems = () => [
//   { name: "Account Recharge", path: "/rechage-meter", icon: FaCreditCard, color: "text-emerald-500" },
//   { name: "Usage History", path: "/usage-history", icon: FaHistory, color: "text-blue-500" },
//   { name: "Energy Consumption", path: "/energyConsumption", icon: FaBolt, color: "text-yellow-500" },
//   { name: "Support", path: "/support", icon: FaHeadset, color: "text-purple-500" }
// ];

// const getUserMainMenuItems = (userId) => [
//   { name: "Dashboard", path: `/user/dashboard/${userId}`, icon: FaTachometerAlt, color: "text-blue-600" },
//   { name: "Usage History", path: "/usage-history", icon: FaHistory, color: "text-indigo-500" },
//   { name: "Account Recharge", path: "/rechage-meter", icon: FaCreditCard, color: "text-green-500" },
//   { name: "Reports", path: "/reports", icon: FaChartBar, color: "text-orange-500" },
//   { name: "Account Settings", path: "/account-setting", icon: FaCog, color: "text-gray-500" },
//   { name: "Support", path: "/support", icon: FaHeadset, color: "text-cyan-500" },
//   { name: "Notifications", path: "/notifications", icon: FaBell, color: "text-red-500" }
// ];

// // Main function to get menu items based on user role
// export const getMenuItemsByRole = (role = null) => {
  
//   switch (lognInUserRole) {
//     case 'admin':
//     case 'superadmin':
//       return {
//         favoriteItems: getAdminFavoriteItems(),
//         mainMenuItems: getAdminMainMenuItems(lognInUserId),
//         role: lognInUserRole,
//         id: lognInUserId
//       };

//     case 'user':
//     default:
//       return {
//         favoriteItems: getUserFavoriteItems(),
//         mainMenuItems: getUserMainMenuItems(lognInUserId),
//         role: lognInUserRole,
//         id: lognInUserId
//       };
//   }
// };

// // Hook for React components
// export const useMenuItems = () => {
//   const [menuConfig, setMenuConfig] = React.useState(() => getMenuItemsByRole());

//   React.useEffect(() => {
//     const config = getMenuItemsByRole();
//     setMenuConfig(config);
//   }, []);

//   return menuConfig;
// };

// // Settings items (common for both admin and user)
// const getSettingsItems = () => [
//   { name: "Profile Settings", path: "/profile-settings", icon: FaUser, color: "text-gray-600" },
//   { name: "Preferences", path: "/preferences", icon: FaCog, color: "text-gray-600" }
// ];

// // Section Header Component
// const SectionHeader = ({ title, isExpanded, onToggle, count }) => (
//   <div
//     className="flex items-center justify-between py-2 px-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
//     onClick={onToggle}
//   >
//     <div className="flex items-center space-x-2">
//       <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{title}</span>
//       <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">{count}</span>
//     </div>
//     {isExpanded ? (
//       <FaChevronDown className="text-gray-400 text-xs" />
//     ) : (
//       <FaChevronRight className="text-gray-400 text-xs" />
//     )}
//   </div>
// );

// // MenuItem Component
// const MenuItem = ({ item, isActive }) => (
//   <NavLink to={item.path} className={`block ${isActive ? 'relative' : ''}`}>
//     {({ isActive: navIsActive }) => (
//       <div className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${navIsActive
//         ? 'bg-blue-50 shadow-md border-l-4 border-blue-500'
//         : 'hover:bg-gray-50 hover:shadow-md'
//         }`}>
//         <div className={`p-2 rounded-lg transition-colors ${navIsActive
//           ? 'bg-blue-100'
//           : 'bg-gray-100 group-hover:bg-gray-200'
//           }`}>
//           <item.icon className={`${navIsActive ? 'text-blue-600' : item.color} group-hover:scale-110 transition-transform`} size={16} />
//         </div>
//         <span className={`font-medium text-xs transition-colors ${navIsActive
//           ? 'text-blue-600 font-semibold'
//           : 'text-gray-700 group-hover:text-gray-900'
//           }`}>
//           {item.name}
//         </span>
//         {navIsActive && (
//           <div className="absolute right-3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//         )}
//       </div>
//     )}
//   </NavLink>
// );

// // Main Sidebar Component
// const Sidebar = () => {
//   const { favoriteItems, mainMenuItems, role, id } = useMenuItems();
//   const settingsItems = getSettingsItems();

//   const [expandedSections, setExpandedSections] = React.useState({
//     favorites: true,
//     mainMenu: true,
//     settings: false
//   });

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   return (
//     <aside className="w-full h-full bg-white shadow-xl border-r border-gray-100">
//       <div className="px-6 py-4 h-full flex flex-col">
//         {/* User Profile Section */}
//         <div className="mb-8">
//           <div className="relative">
//             <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 mx-auto flex items-center justify-center shadow-lg">
//               <FaUser className="text-white text-2xl" />
//             </div>
//             <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-sm"></div>
//           </div>
//           <div className="text-center mt-4">
//             <h3 className="font-bold text-gray-800">Welcome Back</h3>
//             <p className="text-xs text-gray-500 capitalize">{role} Dashboard</p>
//             <p className="text-xs text-gray-400 mt-1">ID: {id}</p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 space-y-6 px-3 overflow-y-scroll w-full">
//           {/* Favorites Section */}
//           <div>
//             <SectionHeader
//               title="Favorites"
//               isExpanded={expandedSections.favorites}
//               onToggle={() => toggleSection('favorites')}
//               count={favoriteItems.length}
//             />
//             {expandedSections.favorites && (
//               <div className="space-y-2">
//                 {favoriteItems.map((item, index) => (
//                   <MenuItem key={index} item={item} />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Main Menu Section */}
//           <div>
//             <SectionHeader
//               title="Main Menu"
//               isExpanded={expandedSections.mainMenu}
//               onToggle={() => toggleSection('mainMenu')}
//               count={mainMenuItems.length}
//             />
//             {expandedSections.mainMenu && (
//               <div className="space-y-2">
//                 {mainMenuItems.map((item, index) => (
//                   <MenuItem key={index} item={item} />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Settings Section */}
//           <div>
//             <SectionHeader
//               title="Settings"
//               isExpanded={expandedSections.settings}
//               onToggle={() => toggleSection('settings')}
//               count={settingsItems.length}
//             />
//             {expandedSections.settings && (
//               <div className="space-y-2">
//                 {settingsItems.map((item, index) => (
//                   <MenuItem key={index} item={item} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Logout Section */}
//         <div className="pt-6 border-t border-gray-100">
//           <NavLink
//             to="/logout"
//             className="flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 hover:shadow-md transition-all duration-200 group"
//           >
//             <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors">
//               <FaSignOutAlt className="text-red-500 group-hover:text-red-600" size={16} />
//             </div>
//             <span className="font-medium text-xs text-red-500 group-hover:text-red-600 transition-colors">
//               Log Out
//             </span>
//           </NavLink>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFileInvoiceDollar, FaLifeRing, FaBolt, FaUserPlus, FaTachometerAlt, FaUser, FaBell, FaUsers, FaCalculator, FaComments, FaArchive, FaCog, FaChartBar, FaCreditCard, FaHistory, FaHeadset, FaSignOutAlt, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../redux/slice/authSlice';

const getAdminFavoriteItems = (userId) => [
  { name: "Billing & Payments", path: "/billing-payment", icon: FaFileInvoiceDollar, color: "text-emerald-500" },
  { name: "Support & Logs", path: "/supportandlogs", icon: FaLifeRing, color: "text-blue-500" },
  { name: "Energy Consumption", path: "/energyConsumption", icon: FaBolt, color: "text-yellow-500" },
  { name: "Onboarding", path: "/onboarding", icon: FaUserPlus, color: "text-purple-500" }
];

const getAdminMainMenuItems = (userId) => [
  { name: "Dashboard", path: `/admin/dashboard/${userId}`, icon: FaTachometerAlt, color: "text-blue-600" },
  // { name: "Alerts & Notifications", path: `/alert-and-notification/${userId}`, icon: FaBell, color: "text-red-500" },
      { name: "Alerts & Notifications", path: "/alertandnotification", icon: FaBell, color: "text-red-500" },
  { name: "User Management", path: `/admin/user-management/${userId}`, icon: FaUsers, color: "text-green-500" },
  { name: "Meter Management", path: `/admin/meter-management/${userId}`, icon: FaCalculator, color: "text-orange-500" },
  { name: "Chat", path: "/chat", icon: FaComments, color: "text-cyan-500" },
  { name: "Invoice", path: "/invoice", icon: FaFileInvoiceDollar, color: "text-pink-500" },
  { name: "Archive", path: "/archive", icon: FaArchive, color: "text-gray-500" },
  { name: "System Settings", path: `/system-settings/${userId}`, icon: FaCog, color: "text-gray-600" },
  { name: "Analytics", path: `/analytics/${userId}`, icon: FaChartBar, color: "text-purple-600" }
];

const getUserFavoriteItems = (userId) => [
  { name: "Account Recharge", path: `/rechage-meter/${userId}`, icon: FaCreditCard, color: "text-emerald-500" },
  { name: "Usage History", path: "/usage-history", icon: FaHistory, color: "text-blue-500" },
  { name: "Energy Consumption", path: "/energyConsumption", icon: FaBolt, color: "text-yellow-500" },
  { name: "Support", path: "/support", icon: FaHeadset, color: "text-purple-500" }
];

const getUserMainMenuItems = (userId) => [
  { name: "Dashboard", path: `/user/dashboard/${userId}`, icon: FaTachometerAlt, color: "text-blue-600" },
  { name: "Usage History", path: "/usage-history", icon: FaHistory, color: "text-indigo-500" },
  { name: "Account Recharge", path: "/rechage-meter", icon: FaCreditCard, color: "text-green-500" },
  { name: "Reports", path: "/reports", icon: FaChartBar, color: "text-orange-500" },
  { name: "Account Settings", path: "/account-setting", icon: FaCog, color: "text-gray-500" },
  { name: "Support", path: "/support", icon: FaHeadset, color: "text-cyan-500" },
  { name: "Chat", path: "/chat", icon: FaComments, color: "text-cyan-500" },
  { name: "Invoice", path: "/invoice", icon: FaFileInvoiceDollar, color: "text-pink-500" },
  { name: "Notifications", path: "/notifications", icon: FaBell, color: "text-red-500" }
];

const getSettingsItems = () => [
  { name: "Profile Settings", path: "/profile-settings", icon: FaUser, color: "text-gray-600" },
  { name: "Preferences", path: "/preferences", icon: FaCog, color: "text-gray-600" }
];

const SectionHeader = ({ title, isExpanded, onToggle, count }) => (
  <div className="flex items-center justify-between py-2 px-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors" onClick={onToggle}>
    <div className="flex items-center space-x-2">
      <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{title}</span>
      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">{count}</span>
    </div>
    {isExpanded ? <FaChevronDown className="text-gray-400 text-xs" /> : <FaChevronRight className="text-gray-400 text-xs" />}
  </div>
);

const MenuItem = ({ item }) => (
  <NavLink to={item.path} className={`block`}>
    {({ isActive }) => (
      <div className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${isActive ? 'bg-blue-50 shadow-md border-l-4 border-blue-500' : 'hover:bg-gray-50 hover:shadow-md'}`}>
        <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
          <item.icon className={`${isActive ? 'text-blue-600' : item.color} group-hover:scale-110 transition-transform`} size={16} />
        </div>
        <span className={`font-medium text-xs transition-colors ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 group-hover:text-gray-900'}`}>{item.name}</span>
        {isActive && <div className="absolute right-3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>}
      </div>
    )}
  </NavLink>
);

const Sidebar = () => {
  const role = useSelector(selectUserRole);
  const id = useSelector(selectUserId);

  const favoriteItems = role === 'admin' || role === 'superadmin' ? getAdminFavoriteItems(id) : getUserFavoriteItems(id);
  const mainMenuItems = role === 'admin' || role === 'superadmin' ? getAdminMainMenuItems(id) : getUserMainMenuItems(id);
  const settingsItems = getSettingsItems();

  const [expandedSections, setExpandedSections] = React.useState({ favorites: true, mainMenu: true, settings: false });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="w-full h-full bg-white shadow-xl border-r border-gray-100">
      <div className="px-6 py-4 h-full flex flex-col">
        <div className="mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 mx-auto flex items-center justify-center shadow-lg">
              <FaUser className="text-white text-2xl" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-sm"></div>
          </div>
          <div className="text-center mt-4">
            <h3 className="font-bold text-gray-800">Welcome Back</h3>
            <p className="text-xs text-gray-500 capitalize">{role} Dashboard</p>
            <p className="text-xs text-gray-400 mt-1">ID: {id}</p>
          </div>
        </div>

        <nav className="flex-1 space-y-6 px-2 overflow-y-scroll w-full">
          <div>
            <SectionHeader title="Favorites" isExpanded={expandedSections.favorites} onToggle={() => toggleSection('favorites')} count={favoriteItems.length} />
            {expandedSections.favorites && favoriteItems.map((item, index) => <MenuItem key={index} item={item} />)}
          </div>

          <div>
            <SectionHeader title="Main Menu" isExpanded={expandedSections.mainMenu} onToggle={() => toggleSection('mainMenu')} count={mainMenuItems.length} />
            {expandedSections.mainMenu && mainMenuItems.map((item, index) => <MenuItem key={index} item={item} />)}
          </div>

          <div>
            <SectionHeader title="Settings" isExpanded={expandedSections.settings} onToggle={() => toggleSection('settings')} count={settingsItems.length} />
            {expandedSections.settings && settingsItems.map((item, index) => <MenuItem key={index} item={item} />)}
          </div>
        </nav>

        <div className="pt-6 border-t border-gray-100">
          <NavLink to="/logout" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 hover:shadow-md transition-all duration-200 group">
            <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors">
              <FaSignOutAlt className="text-red-500 group-hover:text-red-600" size={16} />
            </div>
            <span className="font-medium text-xs text-red-500 group-hover:text-red-600 transition-colors">Log Out</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
