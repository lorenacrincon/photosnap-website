import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <>
      <nav className="relative z-40 bg-white">
        <div className="px-6 py-4 lg:px-0 md:max-w-4xl xl:max-w-6xl md:mx-auto">
          <div className="text-black flex items-center justify-between">
            <div>
              <NavLink to="#">
                <img className="" src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div>
              <ul className="hidden md:flex md:justify-end md:items-center text-white nav-text gap-10 md:gap-9">
                <NavLink to="#" className="hover-underline-animation">
                  STORIES
                </NavLink>
                <NavLink to="#" className="hover-underline-animation">
                  FEATURES
                </NavLink>
                <NavLink to="#" className="hover-underline-animation">
                  PRICING
                </NavLink>
              </ul>
            </div>
            <div>
              <button className="hidden md:block black-btn">
                GET AN INVITE
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileNav />
    </>
  );
}

export default Navbar;
