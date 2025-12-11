import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null; // or your spinner
  if (!user) return <Navigate to="/signin" replace />;
  return children;
}
