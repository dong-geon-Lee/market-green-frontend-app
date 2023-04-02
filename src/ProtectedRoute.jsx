import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isAdmin }) => {
  const isAuthenticated = useSelector((state) => state.user.user?.accessToken);
  const isAdminUser = useSelector((state) => state.user.user?.isAdmin);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (isAdmin && !isAdminUser) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
