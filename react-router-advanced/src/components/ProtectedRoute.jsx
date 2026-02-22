import { Navigate } from 'react-router-dom';

// Define the useAuth hook to manage authentication state
const useAuth = () => {
  const user = localStorage.getItem('auth') === 'true';
  return { isAuthenticated: user };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, redirect to the home page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;