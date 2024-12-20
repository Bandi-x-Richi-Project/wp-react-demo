import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import SideBarMain from "../components/SideBarMain";

const BaseLayout: React.FC = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <SideBarMain visible={showSideBar} onHide={() => setShowSideBar(false)} />
      <div
        className={`flex-grow transition-all duration-300 ${
          showSideBar ? "ml-72" : "ml-0"
        }`}
      >
        <NavBar onShow={setShowSideBar} />
        <main className="mx-4 py-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default BaseLayout;
