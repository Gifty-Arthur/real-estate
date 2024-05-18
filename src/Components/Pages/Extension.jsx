import React from "react";
import list from "../../assets/Images/list.png";

const Extension = () => {
  return (
    <div className="bg-[#F9F9F] h-[20rem]  mx-4 rounded-2xl m-10 flex flex-col justify-center">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="text-[17px] font-roboto font-regular">
            Thousands of world's leading companies trust Space
          </h2>
        </div>
        <div className="p-4 mt-12">
          <img src={list} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Extension;
