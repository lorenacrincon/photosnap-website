import React from "react";

function Beta() {
  return (
    <section>
      <div className="">
        <div className="beta-bg bg-no-repeat bg-cover bg-center text-pure-white px-8 py-16 relative md:px-14 md:py-16 lg:px-28 h-full">
          <div className="gradient-beta-rectangle"></div>
          <div className="relative flex flex-wrap gap-8 h-full content-between md:justify-between">
            <p className="uppercase font-bold text-[32px] tracking-widest md:leading-[48px]">
              We’re in beta.
              <br /> Get your invite
              <br /> today!
            </p>
            <button className="flex flex-wrap gap-4 white-btn hover:underline self-center">
              <span className="self-start md:self-center ">GET AN INVITE</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beta;
