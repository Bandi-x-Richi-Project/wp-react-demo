// src/pages/Login.tsx
import { useEffect, useState } from "react";
import { login } from "../api/authApi";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { useRef } from "react";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { isAuthenticated, setToken } = useAuthStore();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toast = useRef<any>(null);

  // If already logged in, navigate to home page
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    try {
      const credentials = { username, password };
      const data = await login(credentials);
      setToken(data.token);
      toast.current.show({
        severity: "success",
        summary: "Login Successful",
        detail: "You are now logged in.",
        life: 3000,
      });
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Login failed, please try again.");
      toast.current.show({
        severity: "error",
        summary: "Login Failed",
        detail: "Incorrect username or password.",
        life: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Toast ref={toast} />
      <Card
        title="Login"
        className="w-full max-w-sm p-4 shadow-lg bg-white rounded-2xl"
      >
        <div className="space-y-4">
          {/* Username Field */}
          <div className="p-field">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Password Field */}
          <div className="p-field">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-md"
              feedback={false}
              toggleMask
            />
          </div>

          {/* Login Button */}
          <Button
            label="Login"
            icon="pi pi-sign-in"
            onClick={handleLogin}
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          />

          {/* Error Message */}
          {error && (
            <p className="text-center text-red-500 text-sm mt-3">{error}</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Login;
