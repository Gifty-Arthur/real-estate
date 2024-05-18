import React from "react";
import logo from "../../assets/Images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlay,
} from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-primary h-[48rem] rounded-[24px] p-20">
      <div className="flex items-center">
        <img className="w-[12rem] h-[3rem]" src={logo} alt="" />
      </div>
      <div className="flex justify-end -mt-6 space-x-16">
        <h2 className="text-white text-[19px] font-medium font-roboto">
          Follow Us
        </h2>
        <div className="flex gap-4 mt-2 wrap">
          <FaFacebookF className="text-white " />
          <FaTwitter className="text-white" />
          <FaInstagram className="text-white" />
          <FaLinkedinIn className="text-white" />
        </div>
      </div>

      <hr className="w-full mt-10 border-1 opacity-[10%]" />
      {/* subscribe */}
      <div className="flex mt-40 space-x-40 wrap">
        <div className="flex-col">
          <h3 className="text-white mt-4 text-[19px] opacity-[47%]">
            Subscribe
          </h3>
          <div className="flex mt-8 space-x-44 wrap">
            <p className="text-white text-[15px] font-roboto">Your e-mail</p>
            <button className="bg-black bg-opacity-[.8] rounded-full w-[7rem] h-[2rem] flexgit justify-center items-center  ">
              <p className="text-white">Send</p>
              <IoIosArrowRoundForward className="text-white" />
            </button>
          </div>
          <hr className="w-[23rem] opacity-[8%] mt-4" />
          <p className="text-white font-roboto text-[15px] mt-10">
            Subscribe to our newsletter to receive our weekly feed.
          </p>
        </div>
        <div className="text-white text-[15px] text-roboto flex-col mt-4 space-y-2">
          <h3 className="text-white text-[19px] opacity-[47%]">Discover</h3>
          <h3>Miami</h3>
          <h3>New York</h3>
          <h3>Chicago</h3>
          <h3>Florida</h3>
          <h3>Los Angeles</h3>
          <h3>San Diego</h3>
        </div>

        {/* Quick Links */}
        <div className="text-white text-[15px] text-roboto flex-col mt-4 space-y-2">
          <h3 className="text-white text-[19px] opacity-[47%]">Quick Links</h3>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>FAQ's</h3>
          <h3>Blog</h3>
          <h3>Pricing Plans</h3>
          <h3>Privacy Policy</h3>
          <h3>Terms & Conditions</h3>
          {/* Contact */}
        </div>
        <div className="text-white text-[15px] text-roboto flex-col mt-4 space-y-4">
          <h3 className="text-white text-[19px] opacity-[47%]">Contact Us</h3>
          <h3>hi@justhome.com</h3>
          <h3>(123) 456-7890</h3>
        </div>
        {/* Address */}
        <div className="text-white text-[15px] text-roboto flex-col mt-4 space-y-4">
          <h3 className="text-white text-[19px] opacity-[47%]">Our Address</h3>
          <h3>99 Fifth Avenue, 3rd Floor</h3>
          <h3>San Francisco, CA 1980</h3>
        </div>
        {/* App */}
        <div className="text-white text-[15px] text-roboto flex-col mt-4 space-y-4">
          <h3 className="text-white text-[19px] opacity-[47%]">Get the app</h3>
          <div className="flex flex-col gap-4">
            {/* button */}
            <button className="rounded-[12px] w-[13rem] h-[63px] bg-white bg-opacity-[.07]  ">
              <FaApple className="text-white w-[19px] h-[24px] mt-2 ml-6" />

              <div className="flex justify-center -mt-8">
                <span className=" font-regular font-roboto text-[13px]">
                  Download on the <br />
                  <p className="text-[16px] font-medium font-roboto">
                    Apple Store
                  </p>
                </span>{" "}
              </div>
            </button>
            {/* btn2 */}
            <button className="rounded-[12px] w-[13rem] h-[63px] bg-white bg-opacity-[.07]  ">
              <FaGooglePlay className="text-white w-[19px] h-[24px] mt-2 ml-6" />

              <div className="flex justify-center -mt-8">
                <span className="font-regular font-roboto text-[13px]">
                  Get in on <br />
                  <p className="text-[16px] font-medium font-roboto">
                    Google Play
                  </p>
                </span>{" "}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
