// import React from "react";
// import { HashRouter, Route, Routes } from "react-router-dom";
// import DashboardLayout from "./layout/DashboardLayout";
// import AdminDashboard from "./pages/AdminDashboard";
// import MeterManagement from "./pages/MeterManagement";
// import UserManagement from "./pages/UserManagement";
// import AlertAndNotification from "./pages/AlertAndNotification";
// import Archive from "./pages/Archive";
// import BillingAndPayment from "./pages/BillingAndPayment";
// import Chat from "./pages/Chat";
// import EnergyConsumption from "./pages/EnergyConsumption";
// import Invoice from "./pages/Invoice";
// import Onboarding from "./pages/Onboarding";
// import Roles from "./pages/Roles";
// import SupportAndLogs from "./pages/SupportAndLogs";
// import RecentAndHistoricalData from "./components/energyConsumption/RecentAndHistoricalData";
// import UserDashboard from "./pages/UserDashboard";
// import PrivateRoute from "./service/ProtectedRoute";
// import UsageHistory from './pages/UsageHistory'
// import AccountSettings from "./pages/AccountSetting";
// import SignUpForm from './components/user/SignUpForm'
// import SignIn from './components/user/LoginForm';

// const App = () => {

//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/customer-register" element={<SignUpForm />} />


//         <Route element={<PrivateRoute allowedRoles={['admin']} />}>
//           <Route path="/admin" element={<DashboardLayout />}>
//             <Route path='/admin-dashbaord' element={<AdminDashboard />} />
//             <Route path="user-management/:id"  element={<UserManagement />} />
//             <Route path="meter-management/:id" element={<MeterManagement />} />
//             <Route path="roles/:id" element={<Roles />} />
//             <Route path="supportandlogs/:id" element={<SupportAndLogs />} />
//             <Route path="onboarding/:id" element={<Onboarding />} />
//           </Route>
//         </Route>

//         <Route element={<PrivateRoute allowedRoles={['user']} />}>
//           <Route path='/user' element={<DashboardLayout />} >
//             <Route path='dashboard/:id' element={<UserDashboard />} />
//             <Route path='usage-history/:id' element={<UsageHistory />} />
//             <Route path='account-setting/:id' element={<AccountSettings />} />
//             <Route path="alert-notification/:id"element={<AlertAndNotification />}/>
//             <Route path="archive/:id" element={<Archive />} />
//             <Route path="billingandpayment/:id" element={<BillingAndPayment />} />
//             <Route path="chat/:id" element={<Chat />} />

//             <Route path="energyConsumption/:id">
//               <Route path="" index element={<EnergyConsumption />} />
//               <Route path="recenthistoricaldata" element={<RecentAndHistoricalData />} />
//             </Route>

//             <Route path="invoice/:id" element={<Invoice />} />
//           </Route>
//         </Route>
//       </Routes>
//     </HashRouter>
//   );
// };

// export default App;


import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import PrivateRoute from "./service/ProtectedRoute";

// Lazy-loaded components
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const MeterManagement = lazy(() => import("./pages/MeterManagement"));
const UserManagement = lazy(() => import("./pages/UserManagement"));
const AlertAndNotification = lazy(() => import("./pages/AlertAndNotification"));
const Archive = lazy(() => import("./pages/Archive"));
const BillingAndPayment = lazy(() => import("./pages/BillingAndPayment"));
const Chat = lazy(() => import("./pages/Chat"));
const EnergyConsumption = lazy(() => import("./pages/EnergyConsumption"));
const Invoice = lazy(() => import("./pages/Invoice"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const Roles = lazy(() => import("./pages/Roles"));
const SupportAndLogs = lazy(() => import("./pages/SupportAndLogs"));
const RecentAndHistoricalData = lazy(() => import("./components/energyConsumption/RecentAndHistoricalData"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const UsageHistory = lazy(() => import('./pages/UsageHistory'));
const AccountSettings = lazy(() => import("./pages/AccountSetting"));
const SignUpForm = lazy(() => import('./components/user/SignUpForm'));
const SignIn = lazy(() => import('./components/user/LoginForm'));
const AdminMeterList = lazy(() => import("./pages/AdminMeterList"));
const AdminUserList = lazy(() => import("./pages/AdminUserList"));
const FaultyOffline = lazy(() => import('./pages/FaultyOffline'));


// You can replace this with a Spinner or Skeleton
const Loader = () => <div>Loading...</div>;

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/customer-register" element={<SignUpForm />} />

          {/* <Route element={<PrivateRoute allowedRoles={['superadmin']} />}>
            <Route path='/super-admin' element={<DashboardLayout />}>
              <Route path=":id" element={<SuperAdminPanel />} />
              <Route path="meter-usage/:meterId" element={<DailyMeterDataUsageHistory />} />
               <Route path="/admin/rechargehistory/:meterid" element = {<AdminRechargeHistory/>}/> }
              <Route path="recharge-history/:meterId" element={<SuperAdminRechargeHistory />} />
            </Route>
          </Route> */}
          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<DashboardLayout />}>
            
              <Route path="dashboard/:id" element={<AdminDashboard />} />
              <Route path='meters-list' element={<AdminMeterList />} />
              <Route path='user-list' element={<AdminUserList />} />
              <Route path='offline-meters' element={<FaultyOffline />} />
              <Route path='faulty-meters' element={<FaultyOffline />} />
              {/* <Route path='due-users' element={<AdminMeterList/>} />
              <Route path='due-balance' element={<AdminMeterList/>} /> */}
              <Route path="dashboard/:id" element={<AdminDashboard />} />
              <Route path="user-management/:id" element={<UserManagement />} />
              <Route path="meter-management/:id" element={<MeterManagement />} />
              <Route path="roles/:id" element={<Roles />} />
              <Route path="supportandlogs/:id" element={<SupportAndLogs />} />
              <Route path="onboarding/:id" element={<Onboarding />} />
                   <Route
            path="alertandnotification"
            element={<AlertAndNotification />}
          />
              <Route path="invoice" element={<Invoice />} />
            </Route>
          </Route>

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={['user']} />}>
            <Route path="/user" element={<DashboardLayout />}>
              <Route path="dashboard/:id" element={<UserDashboard />} />
              <Route path="usage-history/:id" element={<UsageHistory />} />
              <Route path="account-setting/:id" element={<AccountSettings />} />
              <Route path="alert-notification/:id" element={<AlertAndNotification />} />
              <Route path="archive/:id" element={<Archive />} />
              <Route path="billingandpayment/:id" element={<BillingAndPayment />} />
              <Route path="chat/:id" element={<Chat />} />
              <Route path="invoice/:id" element={<Invoice />} />

              <Route path="energyConsumption/:id">
                <Route index element={<EnergyConsumption />} />
                <Route path="recenthistoricaldata" element={<RecentAndHistoricalData />} />
              </Route>
            </Route>
          </Route>

          {/* Future SuperAdmin Route Structure */}
          {/* 
          <Route element={<PrivateRoute allowedRoles={['superadmin']} />}>
            <Route path="/superadmin" element={<DashboardLayout />}>
              <Route path="..." element={<SuperAdminDashboard />} />
            </Route>
          </Route> 
          */}
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
