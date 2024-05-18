import React from "react";
import { IoStarSharp } from "react-icons/io5";
import test from "../../assets/Images/test.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pageex = () => {
  return (
    <div className=" bg-[#E1E1E1] h-[36rem]  mx-4 rounded-2xl m-10 flex flex-col justify-center">
      <div className="container flex wrap space-x-80">
        {/* Left */}
        <div className="">
          <h1 className="font-medium  text-[40px] font-roboto  ">
            What our customers are <br /> saying to us?
          </h1>
          <p className="text-[16px] font-regular font-roboto">
            {" "}
            Various versions have evolved over the years, sometimes by <br />{" "}
            accident, sometimes on purpose injected humor and the like{" "}
          </p>
          <div className="flex flex-wrap space-x-20">
            <div>
              <h2 className="font-medium font-roboto text-[26px] mt-4">10m+</h2>
              <p className="text-[15px] font-roboto">Happy People</p>
            </div>
            <div>
              <h2 className="font-medium font-roboto text-[26px] mt-4">4.88</h2>
              <p className="text-[15px] font-roboto">Overall rating</p>
              <div className="flex space-x-1 wrap text-customColor ">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
            </div>
          </div>
        </div>
        {/* Right  */}
        <div className="">
          <div className="flex wrap">
            <img src={test} alt="" />

            <div className="mt-4 ml-4 ">
              <h2 className="font-medium font-roboto">Cameron Williamson</h2>
              <p className="text-[15px] font-roboto">Designer</p>
            </div>
          </div>
          <p className="mt-10 font-medium font-roboto text-[19px]">
            Searches for multiplexes, property comparisons, and the loan <br />{" "}
            estimator. Works great. Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et
            <br />
            dores.
            <br />{" "}
          </p>

          <div className="flex gap-6 wrap">
            <div className="bg-white rounded-[40px] w-[60px] h-[40px] flex items-center justify-center">
              <IoIosArrowBack />
            </div>
            <div className="bg-white rounded-[40px] w-[60px] h-[40px] flex items-center justify-center">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageex;
