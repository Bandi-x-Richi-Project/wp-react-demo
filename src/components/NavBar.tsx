// src/components/NavBar.tsx
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { IoMenu } from "react-icons/io5";
import { useState, useRef, FC } from "react";
import { Avatar } from "primereact/avatar";
import { Dialog } from "primereact/dialog";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { OverlayPanel } from "primereact/overlaypanel";

interface NavBarProps {
  onShow: (open: boolean) => void;
}

const NavBar: FC<NavBarProps> = ({ onShow }) => {
  const [showModal, setShowModal] = useState(false);
  const { logOut, user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
    setShowModal(false);
  };

  const opRef = useRef<OverlayPanel>(null);

  return (
    <>
      <nav className="top-0 z-50 h-[24px]">
        <div className="flex mx-auto my-2 ">
          <div className="flex w-11/12 px-2 ml-3 m-2 text-lg font-bold h-auto items-center">
            <Button
              icon={<IoMenu size={22} />}
              onClick={() => onShow(true)}
              className="text-gray-600 p-2 w-auto h-auto hover:bg-gray-200 rounded-lg flex items-center justify-center"
              text
            />
            <span className="ml-2 text-gray-600">E-Commerce Dashboard</span>
          </div>
          <div className="w-1/12 px-2 mx-2 h-fit justify-center flex">
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
            <OverlayPanel ref={opRef} showCloseIcon closeOnEscape>
              <div className="flex flex-col items-center">
                <p className="text-bg">{user?.name}</p>
                <hr className="my-3 w-full border-top-1 border-none surface-border" />
                <Button
                  label="Logout"
                  icon="pi pi-sign-out"
                  className="p-0"
                  text
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
