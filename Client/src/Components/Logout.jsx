import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Store/auth';

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/login" />;
};

export default Logout;
