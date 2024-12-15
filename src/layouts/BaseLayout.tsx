import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const BaseLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="mx-5 py-6">
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
