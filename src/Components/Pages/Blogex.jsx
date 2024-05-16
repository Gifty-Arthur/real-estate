import React from "react";
import prop1 from "../../assets/Images/prop1.png";

const Blogex = () => {
  return (
    <div className="bg-[#F6F8FA] h-[62rem] flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="">
          <h1 className="font-medium text-primary text-[40px] p-2 text-roboto">
            Best Properties
          </h1>
          <p className="text-center ml-6 font-roboto text-regular text-[17px] text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="grid justify-start mt-12">
        <div>
          <img className="" src={prop1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blogex;
