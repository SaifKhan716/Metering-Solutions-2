import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserRole } from '../redux/slice/authSlice';


const PrivateRoute = ({ allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  if (loading) return null;
  const isAuthenticated = !!user;
  const userRole = user?.role;

  if (!isAuthenticated) return <Navigate to="/" replace />;
  if (!allowedRoles.includes(userRole)) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default PrivateRoute;
