import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Avatar } from "primereact/avatar";
import SideBarMain from "./SideBarContent";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <SideBarMain visible={visible} onHide={() => setVisible(false)} />
      <nav className="top-0 z-50 h-[24px]">
        <div className="flex mx-auto my-4 ">
          <div className="flex w-5/6 px-2 m-2 text-lg font-bold h-auto items-center">
            <Button
              icon={<IoMenu />}
              onClick={() => setVisible(true)}
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
            >
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
