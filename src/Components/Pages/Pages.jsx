import React from "react";
import h11 from "../../assets/Images/h11.png";
import h12 from "../../assets/Images/h12.png";
import { FaArrowRight } from "react-icons/fa";

const Pages = () => {
  return (
    <div className="bg-tertiary h-[71rem]  mx-4 rounded-2xl m-10 flex flex-col justify-center">
      <div className="">
        <div className="flex items-center justify-center space-x-20">
          <div className="relative ">
            <img className="" src={h11} alt="" />
            <img
              className="absolute top-0 left-6  w-[15rem] h-[6rem]  mt-6 "
              src={h12}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-white text-[40px] font-medium font-roboto ml-4">
              Local expertise for <br /> luxury homes
            </h1>
            <p className="text-white text-[20px] mt-6 font-regular font-roboto ml-0 ">
              Pellentesque egestas elementum egestas faucibus sem. Velit nunc
              egestas ut
              <br />
              morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris
              nulla ac
              <br />
              dictum ut mauris non.
            </p>
            <button className="bg-customColor rounded-xl w-[10rem] h-[3rem]  flex items-center justify-center ml-4 mt-4">
              Learn More
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex items-center gap-2 space-x-6">
            {[1, 2, 3, 4]?.map((item) => (
              <div className="mt-10">
                <h1 className="text-[40px] ml-10 after:font-roboto font-medium text-customColor">
                  $18M
                </h1>
                <p className="text-white text-regular font-roboto text-[15px]">
                  Owned from properties transactions
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-center mt-12">
          <div className="mt-10">
            <h1 className="text-[40px] ml-10 after:font-roboto font-medium text-customColor">
              $18M
            </h1>
            <p className="text-white text-regular font-roboto text-[15px]">
              Owned from properties transactions
            </p>
          </div>
          <div className="mt-10 ">
            <h1 className="text-[40px] ml-10 after:font-roboto font-medium text-customColor">
              26K
            </h1>
            <p className="text-white text-regular font-roboto text-[15px]">
              Properties for Buy
            </p>
          </div>
          <div className="mt-10 ml-10 ">
            <h1 className="text-[40px] ml-10 after:font-roboto font-medium text-customColor">
              15K
            </h1>
            <p className="text-white text-regular font-roboto text-[15px]">
              Properties for Sell
            </p>
          </div>
          <div className="mt-10 ml-10 ">
            <h1 className="text-[40px] ml-10 after:font-roboto font-medium text-customColor">
              800
            </h1>
            <p className="text-white text-regular font-roboto text-[15px]">
              Daily completed transactions
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Pages;
