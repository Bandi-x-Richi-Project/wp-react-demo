import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { checkAuth, isAuthenticated } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // If the user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Render the protected content
};

export default PrivateRoute;
