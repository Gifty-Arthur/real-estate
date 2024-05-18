import React, { useState } from "react";

import logo from "../../assets/Images/logo.png";
import { IoCallOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Listings", path: "listings" },
    { link: "Members", path: "members" },
    { link: "Blog", path: "blog" },
    { link: "Page", path: "Pages" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 py-10 ">
        <div className="flex justify-around">
          <div className="">
            <img src={logo} alt="" />
          </div>

          <div className="">
            <ul className="hidden space-x-6 md:flex">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="flex items-center justify-between font-roboto text-[16px] text-white hover:text-customColor "
                >
                  {link}
                  <IoMdArrowDropdown className="mr-1" />
                </a>
              ))}
            </ul>
          </div>

          {/* Add Property  and the contact*/}

          <div className="flex gap-10">
            <div className="flex flex-wrap gap-4">
              <IoCallOutline className="w-[20px] h-[20px] text-white" />
              <p className="font-medium text-white font-roboto text-[16px]">
                +68 685 88666
              </p>
              <CgProfile className="w-[40px] h-[40px] text-white -mt-2  " />
            </div>

            <button className=" text-white text-[15px]  hover:bg-customColor font-roboto font-medium  w-[9rem] h-[2rem] bg-white rounded-[50px] bg-opacity-[.0] border-2">
              Add Property
            </button>
          </div>
        </div>

        {/* menu button only* display on mobile*/}
        <div className="hidden">
          <button
            onClick={toggleMenu}
            className="text-lg text-white focus:outline-none focus:text-gray-300"
          >
            {isMenuOpen ? (
              <HiMiniXMark className="w-6 h-6 test-customColor" />
            ) : (
              <IoMdMenu className="w-6 h-6 text-lg text-colorCustom" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`space-y-2 px-4 pt-24 pb-5 bg-customColor ${
          isMenuOpen ? "block fixed top-0 right-0 " : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            className="flex items-center justify-between text-sm text-white hover:text-blue-300 "
          >
            {link}
            <IoMdArrowDropdown className="mr-1" />
          </a>
        ))}
      </div>
    </>

    // navitems for mobile device
  );
};

export default Navbar;
