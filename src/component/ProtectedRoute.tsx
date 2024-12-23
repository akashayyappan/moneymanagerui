import React from 'react';
import { useAuth } from '../service/useAuth';
import { Navigate } from 'react-router';

interface iProtectedRoute {
  children: React.ReactNode
}

function ProtectedRoute(props: iProtectedRoute) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/login' replace />;
  }

  return <>{props.children}</>
}

export default ProtectedRoute;
