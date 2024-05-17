import React from "react";
import prop1 from "../../assets/Images/prop1.png";
import prop2 from "../../assets/Images/prop2.png";
import prop3 from "../../assets/Images/prop3.png";
import prop4 from "../../assets/Images/prop4.png";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaBed, FaBath, FaRegSquare } from "react-icons/fa6";

const Blogex = () => {
  return (
    <div className="bg-[#F6F8FA] h-[62rem] flex flex-col justify-center">
      <div className="container">
        <div className="flex justify-center p-10">
          <div>
            <h1 className="text-center font-roboto text-medium text-[40px] text-primary">
              Best Properties
            </h1>
            <p className="text-center font-roboto text-regular text-[17px] text-primary">
              Prime properties feature prime locations, modern amenities,
              spacious layouts, and stunning views.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-wrap w-1/2">
            <div className="w-full">
              <div className="relative">
                {/* styling for prop1 */}
                <img className="" src={prop1} alt="" />
                <button className="absolute flex items-center justify-center w-16 h-8 mt-4 text-white transform -translate-y-1/2 rounded-full bg-opacity-[.38] top-1/2 right-3 bg-primary">
                  <IoIosArrowForward />
                </button>

                <button className="absolute flex items-center justify-center w-16 h-8 mt-4 text-white transform -translate-y-1/2 rounded-full bg-opacity-[.38] top-1/2 left-3 bg-primary">
                  <IoIosArrowBack />
                </button>
              </div>
            </div>

            {/* black image */}
            <div className="relative flex justify-between">
              <img className="w-[48%]" src={prop3} alt="" />
              <div className="absolute top-0 p-8 mt-4 left-3">
                <h1 className="text-4xl text-white text-medium font-roboto">
                  280+
                </h1>
                <div className="text-white text-[19px] text-roboto">
                  <p>Properties</p>

                  <p className="text-[12px] text-regular font-roboto mt-4 ">
                    Explore our wide variety of properties <br />
                    to find your dream home today
                  </p>
                </div>

                <div className="mt-6">
                  <button className="bg-white rounded-full w-[51px] h-[51px] absolute transform mt-4 -translate-x-1/2 left-1/2 flex items-center justify-center ml-16">
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
              {/* prop4 styling */}

              <div className="relative w-[48%]">
                <img className="" src={prop4} alt="" />
                <button className="absolute flex items-center justify-center w-[68px] h-[68px] rounded-full bg-opacity-[.38]  bg-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                  <IoPlayOutline />
                </button>
              </div>
            </div>
          </div>

          {/* prop2 stylying */}
          <div className="relative w-1/2 ">
            <img className="" src={prop2} alt="" />
            <div className="absolute top-0 flex left-3 gap-x-2">
              <button className=" bg-tertiary text-white w-20 h-8 rounded-full mt-4 text-medium text-[13px] font-roboto ">
                FOR SALE
              </button>
              <div>
                <button className="bg-customColor text-primary w-20 h-8 rounded-full mt-4 text-medium text-[13px] font-roboto ">
                  FEATURED
                </button>
              </div>
            </div>

            <div className="absolute bottom-0 p-10 ">
              <div className="flex items-center mb-2 ">
                <h4 className="font-medium text-[26px] font-roboto text-white ">
                  Villa One Hyde Park
                </h4>
              </div>
              <div className="flex items-center gap-2 ">
                <CiLocationOn className="text-white" />
                <span className="text-white">2050 Bloomingdale Ave</span>
              </div>
              <div className="flex items-center mt-2 gap-14 ">
                <h1 className="text-white -font-semiBold text-[21px]">
                  $120,000
                </h1>
                <div className="flex items-center gap-2 mt-2 text-white font-roboto text-regular">
                  <FaBed />
                  <span>4</span>
                  <FaBath className="flex gap-2 ml-6" />
                  <span>2</span>
                  <FaRegSquare className="flex gap-2 ml-6" />
                  <span>350 sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogex;
