// src/components/NavBar.tsx
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { IoMenu } from "react-icons/io5";
import { useState, useRef } from "react";
import { Avatar } from "primereact/avatar";
import { Dialog } from "primereact/dialog";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import SideBarMain from "./SideBarMain";
import { OverlayPanel } from "primereact/overlaypanel";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { setToken, user, setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    navigate("/login");
    setShowModal(false);
  };

  const opRef = useRef<OverlayPanel>(null);

  return (
    <>
      <SideBarMain visible={showSideBar} onHide={() => setShowSideBar(false)} />

      <nav className="top-0 z-50 h-[24px]">
        <div className="flex mx-auto my-4 ">
          <div className="flex w-5/6 px-2 m-2 text-lg font-bold h-auto items-center">
            <Button
              icon={<IoMenu />}
              onClick={() => setShowSideBar(true)}
              className="text-gray-600 text-2xl p-2 w-1 h-1"
              text
            />
            <span className="text-gray-600 items-center">
              E-Commerce Dashboard
            </span>
          </div>
          <div className="w-1/6 px-2 mx-2 h-fit">
            <Link
              to="/"
              className="flex justify-end align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              onClick={(e) => {
                opRef.current?.toggle(e);
              }}
            >
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
              />
            </Link>
            {/* Overlay Panel for Logout */}
            <OverlayPanel ref={opRef} showCloseIcon>
              <div className="flex flex-col">
                <p>{user?.name}</p>
                <Button
                  label="Logout"
                  icon="pi pi-sign-out"
                  className="p-button-text"
                  onClick={() => setShowModal(true)}
                />
              </div>
            </OverlayPanel>
          </div>
        </div>
      </nav>

      {/* Confirmation Dialog for Logout */}
      <Dialog
        header="Confirm Logout"
        visible={showModal}
        style={{ width: "300px" }}
        onHide={() => setShowModal(false)}
      >
        <div className="flex justify-center">
          <p>Are you sure you want to log out?</p>
        </div>
        <div className="flex justify-around">
          <Button
            label="Cancel"
            icon="pi pi-times"
            onClick={() => setShowModal(false)}
            className="p-button-text"
          />
          <Button
            label="Logout"
            icon="pi pi-check"
            onClick={handleLogout}
            autoFocus
          />
        </div>
      </Dialog>
    </>
  );
};

export default NavBar;
