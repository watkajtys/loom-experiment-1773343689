import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isValid } = useAuth();

  if (!isValid) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
