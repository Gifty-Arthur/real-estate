import React from "react";
import prop1 from "../../assets/Images/prop1.png";
import prop2 from "../../assets/Images/prop2.png";
import prop3 from "../../assets/Images/prop3.png";
import prop4 from "../../assets/Images/prop4.png";
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
              <img className="" src={prop1} alt="" />
              <button className=" absolute  bg-customColor rounded-full w-[70px] h-[46px]">
                hi
              </button>
            </div>
            <div className="flex justify-between">
              <img className="w-[48%]" src={prop3} alt="" />

              <img className="w-[48%]" src={prop4} alt="" />
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
