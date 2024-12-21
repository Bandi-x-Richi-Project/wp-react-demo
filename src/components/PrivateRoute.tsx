import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { Outlet, useNavigate } from "react-router-dom";
import { validateToken } from "../api/authApi";

const PrivateRoute = () => {
  const { token, logOut, checkAuth, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // Check for authentication state on mount
    const checkAuthentication = async () => {
      checkAuth(); // Restore auth state from session or localStorage

      if (!token) {
        navigate("/login");
        return;
      }

      // Validate token if it exists
      const isValid = await validateToken();
      if (!isValid) {
        console.warn("Token is invalid, logging out...");
        logOut(); // Clear auth state
        navigate("/login");
      }
    };

    checkAuthentication();
  }, [token, checkAuth, logOut, navigate]);

  // Delay rendering until authentication is checked
  if (!isAuthenticated || !token) {
    return null; // Optionally show a loading spinner here
  }

  return <Outlet />; // Render protected content
};

export default PrivateRoute;