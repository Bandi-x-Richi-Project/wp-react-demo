import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/dashboards/Ecommerce";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import BaseLayout from "./layouts/BaseLayout";
import Banking from "./pages/dashboards/Banking";

function App() {
  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard-banking" element={<Banking />} />
          </Route>
        </Route>

        {/* Catch-all redirect for unknown paths */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
