import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { IoMenu } from "react-icons/io5";
import { useState, useRef, FC, useEffect } from "react";
import { Avatar } from "primereact/avatar";
import { Dialog } from "primereact/dialog";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { OverlayPanel } from "primereact/overlaypanel";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  onShow: (open: boolean) => void;
}

const langs = [
  { name: "🇬🇧", value: "en" },
  { name: "🇭🇺", value: "hu" },
];

const NavBar: FC<NavBarProps> = ({ onShow }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const { logOut, user } = useAuthStore();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const opRef = useRef<OverlayPanel>(null);

  const handleLogout = () => {
    logOut();
    navigate("/login");
    setShowModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="top-0 z-50 h-[40px] md:h-[24px]">
        <div className="flex flex-wrap mx-auto my-2">
          <div className="flex w-full">
            <div className="flex w-6/12 md:w-9/12 px-2 md:ml-3 m-2 text-lg font-bold h-auto items-center">
              <Button
                icon={<IoMenu size={22} />}
                onClick={() => onShow(true)}
                className="text-gray-600 p-2 w-auto h-auto hover:bg-gray-200 rounded-lg flex items-center justify-center"
                text
              />
              <span className="ml-3 text-gray-500 hidden md:inline">
                {t("eCommerce")}
              </span>
            </div>
            <div className="w-6/12 md:w-3/12 px-2 mx-2 h-fit flex justify-end items-center ">
              {/* Language Icon - Main Clickable Icon */}

              <div
                className="text-xl mr-2 cursor-pointer"
                onClick={() =>
                  i18n.changeLanguage(
                    langs.find((l) => l.value !== i18n.language)?.value
                  )
                }
              >
                {langs.find((l) => l.value !== i18n.language)?.name}
              </div>

              {/* Overlay Panel for Logout */}
              <Link
                to="#"
                className="flex justify-end align-items-center cursor-pointer p-3 gap-2"
                onClick={(e) => {
                  opRef.current?.toggle(e);
                }}
              >
                <Avatar
                  image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                  shape="circle"
                />
              </Link>
              <OverlayPanel
                ref={opRef}
                showCloseIcon={windowWidth >= 1024 ? true : false}
                closeOnEscape
              >
                <div className="flex flex-col items-center">
                  <p className="text-bg">{user?.name}</p>
                  <hr className="my-3 w-full border-top-1 border-none surface-border" />
                  <Button
                    label={t("logout")}
                    size="small"
                    severity="success"
                    icon="pi pi-sign-out"
                    className="p-0"
                    text
                    onClick={() => setShowModal(true)}
                  />
                </div>
              </OverlayPanel>
            </div>
          </div>
          <div className="w-full ml-3">
            <span className="ml-2 text-gray-500 font-bold w-full md:hidden">
              {t("eCommerce")}
            </span>
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
          <p> {t("logoutConfirm")}</p>
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
