import { Navigate } from 'react-router-dom';

const useAuth = () => {
  const user = localStorage.getItem('auth') === 'true';
  return { isAuthenticated: user };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;