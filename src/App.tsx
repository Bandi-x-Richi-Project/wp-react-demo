import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import BaseLayout from "./layouts/BaseLayout";

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
          </Route>
        </Route>

        {/* Catch-all redirect for unknown paths */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
