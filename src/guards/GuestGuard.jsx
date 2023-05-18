import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const GuestGuard = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default GuestGuard;
