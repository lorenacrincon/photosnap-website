import React from "react";
import logo from "/assets/shared/desktop/logo-white.svg";
import SocialMediaIcons from "./social_media/SocialMediaIcons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-pure-black flex flex-col py-14 px-16 gap-24 md:flex-row md:px-10 md:py-16 md:gap-0 lg:px-40 lg:justify-between">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 lg:gap-32">
          <div className="flex flex-wrap justify-center gap-6 md:gap-0 lg:flex-col lg:justify-between">
            <img className="w-[170px]" src={logo} alt="Logo" />
            <div className="md:hidden lg:block">
              <SocialMediaIcons />
            </div>
          </div>
          <div className="flex flex-col items-center tracking-widest text-[12px] gap-4 md:flex-row md:gap-10 lg:gap-5 lg:flex-col lg:items-start">
            <Link
              to="/"
              className="text-white hover:opacity-[0.3] transition duration-300"
            >
              HOME
            </Link>
            <Link
              to="/stories"
              className="text-white hover:opacity-[0.3] transition duration-300"
            >
              STORIES
            </Link>
            <Link
              to="#"
              className="text-white hover:opacity-[0.3] transition duration-300"
            >
              FEATURES
            </Link>
            <Link
              to="#"
              className="text-white hover:opacity-[0.3] transition duration-300"
            >
              PRICING
            </Link>
          </div>
          <div className="hidden md:block md:pt-12 lg:hidden">
            <SocialMediaIcons />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:justify-end lg:flex-col lg:justify-between">
          <button className="flex flex-wrap gap-4 white-btn hover:underline self-start lg:self-end">
            <span className="self-center ">GET AN INVITE</span>
            <svg
              className="self-center"
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="14"
            >
              <g fill="none" fillRule="evenodd" stroke="#FFFFFF">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </button>
          <span className="text-white text-sm opacity-50 self-end">
            Copyright 2019. All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
