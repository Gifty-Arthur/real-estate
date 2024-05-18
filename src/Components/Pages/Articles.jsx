import React from "react";
import art1 from "../../assets/Images/art1.png";
import art2 from "../../assets/Images/art2.png";
import art3 from "../../assets/Images/art3.png";
import art4 from "../../assets/Images/art4.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Articles = () => {
  return (
    <div className="bg-[#F9F9F9] h-[53rem]  mx-4 rounded-2xl m-10 flex flex-col justify-center">
      <div className="container">
        <div className="flex justify-center">
          <h1 className="text-[40px] font-medium font-roboto ">
            Recent Articles & News
          </h1>
        </div>
        <p className="flex justify-center mt-4 font-roboto text-[17px] ">
          The real estate market in 2024 is characterized by significant shifts
          and trends.
        </p>
      </div>

      <div className="relative flex justify-center gap-10 mt-8 wrap ">
        <div className="rounded-md  bg-[#E9E9E9]  hover:bg-customColor ">
          <img className="rounded-[16px] object-cover" src={art1} alt="" />
          <div>
            <p className="font-roboto text-[15px] flex mt-4 justify-center">
              Apartment . March 19, 2024
            </p>
            <div className="flex items-center justify-center">
              <span className="text-[15px] font-medium font-roboto mt-4 text-center">
                Housing Markets That{" "}
                <span className="inline-block">Changed</span>
                <br /> the Most This Week
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 font-medium text-[15px] ">
              <p>Read More </p>
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>

        {/* img 2 */}
        <div className="rounded-md bg-[#E9E9E9]  hover:bg-customColor ">
          <img className="rounded-[16px] object-cover" src={art3} alt="" />
          <div>
            <p className="font-roboto text-[15px] flex mt-4 justify-center">
              Apartment . March 19, 2024
            </p>
            <div className="flex items-center justify-center">
              <span className="text-[15px] font-medium font-roboto mt-4 text-center">
                Read Unveils the Best{" "}
                <span className="inline-block">Canadian</span>
                <br />
                Cities for Biking
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 font-medium text-[15px] ">
              <p>Read More </p>
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>

        {/* img 3 */}
        <div className="rounded-md bg-[#E9E9E9] w-[20rem] h-[24rem] hover:bg-customColor ">
          <img className="rounded-[16px] object-cover" src={art2} alt="" />
          <div>
            <p className="font-roboto text-[15px] flex mt-4 justify-center">
              Office . March 19, 2024
            </p>
            <div className="flex items-center justify-center">
              <span className="text-[15px] font-medium font-roboto mt-4 text-center">
                10 Walkable Cities{" "}
                <span className="inline-block">Where You Can</span>
                <br />
                Live Affordably
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 font-medium text-[15px] ">
              <p>Read More </p>
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>

        {/* img4  */}
        <div className="rounded-md bg-[#E9E9E9] w-[20rem] h-[24rem] hover:bg-customColor ">
          <img className="rounded-[16px] object-cover" src={art4} alt="" />
          <div>
            <p className="font-roboto text-[15px] flex mt-4 justify-center">
              Office . March 19, 2024
            </p>
            <div className="flex items-center justify-center">
              <span className="text-[15px] font-medium font-roboto mt-4 text-center">
                New Apartment Nice{" "}
                <span className="inline-block">in the Best</span>
                <br />
                Canadian Cities
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 font-medium text-[15px] ">
              <p>Read More </p>
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
