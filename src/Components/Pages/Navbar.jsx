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
      <nav className=" md:px-8 p-4 max-w-screen-2xl mx-auto fixed top-0 right-0 left-0">
        <div className="flex items-start justify-between px-4 py-4 font-roboto">
          <div className="flex space-x-20 items-center font-medium">
            <a href="/" text-2xl font-semibold>
              <img src={logo} alt="" />
            </a>

            <ul className=" md:flex space-x-6 hidden text">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="flex items-center hover:text-blue-300

                 justify-between text-white text-sm "
                >
                  {link}
                  <IoMdArrowDropdown className="mr-1" />
                </a>
              ))}
            </ul>
          </div>

          {/* Add Property  and the contact*/}
          <div className="md:flex space-x-6 items-center">
            <a href="/" className="text-white mx-px flex items-center">
              <IoCallOutline className="w-[20px] h-[20px] hover:text-customColor" />

              <span my-class="relative top-[-2px] text-sm font-roboto">
                +6868588666
              </span>
              <CgProfile className="ml-4 h-[40px] w-[40px] hover:text-customColor" />
            </a>
            <button
              className=" w-[148px] h-[42px] text-white border 
            border-white font-medium rounded-full hover:bg-customColor "
            >
              Add Property
            </button>
          </div>

          {/* menu button only* display on mobile*/}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none text-lg
          focus:text-gray-300"
            >
              {isMenuOpen ? (
                <HiMiniXMark className="w-6 h-6 test-customColor" />
              ) : (
                <IoMdMenu className="w-6 h-6 text-colorCustom text-lg" />
              )}
            </button>
          </div>
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
            className="flex items-center hover:text-blue-300

             justify-between text-white text-sm "
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
