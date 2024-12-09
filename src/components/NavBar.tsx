import React from "react";
import { Link } from "react-router-dom";
import { RiMovieLine } from "react-icons/ri";
import { BiHomeAlt2 } from "react-icons/bi";

function NavBar() {
  return (
    <nav className="shadow-lg bg-blue-100 sticky top-0 z-50 h-[44px]">
      <div className="flex mx-auto">
        <div className="w-5/6 px-2 m-2">
          <RiMovieLine className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            Richi's sandbox
          </Link>
        </div>
        <div className="w-1/6 px-2 mx-2">
          <Link to="/" className="items-center">
            <BiHomeAlt2 className="h-10" size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
