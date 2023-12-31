import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <>
      <nav className="relative z-40 bg-white">
        <div className="px-6 py-4 md:px-10 md:mx-auto lg:px-40">
          <div className="text-black flex items-center justify-between">
            <div>
              <NavLink to="/">
                <img className="" src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div id="photosnap-nav">
              <ul className="hidden md:flex md:justify-end md:items-center text-white nav-text gap-10 md:gap-9">
                <NavLink
                  to="/stories"
                  className="hover:opacity-[0.3] transition duration-300"
                >
                  STORIES
                </NavLink>
                <NavLink
                  to="/features"
                  className="hover:opacity-[0.3] transition duration-300"
                >
                  FEATURES
                </NavLink>
                <NavLink
                  to="/pricing"
                  className="hover:opacity-[0.3] transition duration-300"
                >
                  PRICING
                </NavLink>
              </ul>
            </div>
            <div className="hidden md:block">
              <button className="black-btn">
                <span>Get an invite</span>
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
