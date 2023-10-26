import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

function MobileNav() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleClose = () => {
    setMobileNav(false);
  };
  return (
    <>
      <motion.button
        initial="hide"
        animate={mobileNav ? "show" : "hide"}
        onClick={toggleMobileNav}
        className="flex flex-col space-y-1 absolute right-6 top-[21px] z-40 md:hidden"
      >
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: 45,
              y: 6,
            },
          }}
          className="w-5 bg-black h-[1px] block "
        ></motion.span>
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: -45,
              y: 1,
            },
          }}
          className="w-5 bg-black h-[1px] block "
        ></motion.span>
      </motion.button>
      {mobileNav && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-20"
          onClick={handleClose}
        ></div>
      )}
      <nav className="absolute w-full z-30 top-10 left-0" id="mobile-nav">
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                className="md:hidden nav-text flex bg-white py-12 text-center justify-center"
                key="mobile-nav"
                variants={{
                  hide: {
                    y: "-100%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      staggerChildren: 0.1,
                    },
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      when: "beforeChildren",
                      staggerChildren: 0.1,
                      duration: 0.4,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
              >
                <div className="w-full px-8">
                  <motion.ul
                    variants={{
                      hide: {
                        y: "10%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="list-none grid gap-5"
                  >
                    <li>
                      <NavLink
                        to="/stories"
                        className="px-6"
                        onClick={handleClose}
                      >
                        STORIES
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/features"
                        className="px-6"
                        onClick={handleClose}
                      >
                        FEATURES
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/pricing"
                        className="px-6"
                        onClick={handleClose}
                      >
                        PRICING
                      </NavLink>
                    </li>
                    <motion.hr />
                    <motion.button className="black-btn w-full px-8">
                      GET AN INVITE
                    </motion.button>
                  </motion.ul>
                </div>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default MobileNav;
