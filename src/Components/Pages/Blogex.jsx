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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                </div>
                <div className="mt-8 text-white text-[15px] text-regular text-roboto">
                  <p>
                    Explore our wide variety of properties <br />
                    to find your dream home today
                  </p>
                </div>
                <button className="bg-white rounded-full w-[51px] h-[51px] mt-10 absolute right-4 flex items-center justify-center transform -translate-x-1/2">
                  <IoIosArrowRoundForward />
                </button>
              </div>

              <img className="w-[48%]" src={prop4} alt="" />
              <div className=" text-primary">
                <button>hi</button>
              </div>
            </div>
          </div>
          <div className="relative w-1/2 ">
            <img className="vfd" src={prop2} alt="" />
            <button className="absolute top-0 left-5 bg-tertiary text-white w-20 h-8 rounded-full mt-4 text-medium text-[13px] font-roboto ">
              FOR SALE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogex;
