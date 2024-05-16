import React from "react";
import { FaComputer, FaMoneyBillTrendUp, FaPerson } from "react-icons/fa6";
import { ImHome } from "react-icons/im";

const Blog = () => {
  return (
    <div className="bg-customColor h-[40rem] mx-4 rounded-2xl flex flex-col justify-center">
      <div className="container">
        <div className="rounded-[24px] justify-center">
          <div className="top-0 flex justify-center pt-30">
            <h1 className=" text-[40px] font-medium font-roboto  ">
              Why Choose Us
            </h1>
          </div>
          <p className="flex justify-center text-regular text-[17px] text-primary">
            owning a home offers stability, security, and a sense of pride
          </p>
          <div className="flex p-2 mt-12">
            <div className="flex flex-col items-center w-1/4 ">
              <ImHome className="w-[50px] h-[50px]" />
              <h2 className="font-medium font-roboto text-primary text-[19px] mt-6">
                {" "}
                Find your future home
              </h2>
              <div className="flex items-center">
                <span className="text-[15px] text-regular font-roboto mt-4 text-center">
                  We help you find <span className="inline-block">home</span> by
                  offering a
                  <br /> a smart real estate experience
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/4 ">
              <FaPerson className="w-[50px] h-[50px]" />
              <h2 className="font-medium font-roboto text-primary text-[19px] mt-6">
                {" "}
                Experienced agents
              </h2>
              <div className="flex items-center">
                <span className="text-[15px] text-regular font-roboto mt-4 text-center">
                  Find an experienced agent{" "}
                  <span className="inline-block">who</span> by knows your
                  <br /> market best
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center w-1/4 ">
              <FaMoneyBillTrendUp className="w-[50px] h-[50px]" />

              <h2 className="font-medium font-roboto text-primary text-[19px] mt-6">
                {" "}
                Buy or rent homes
              </h2>
              <div className="flex items-center">
                <span className="text-[15px] text-regular font-roboto mt-4 text-center">
                  Millions of houses and{" "}
                  <span className="inline-block">apartments</span> in your
                  <br /> favourite cities
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/4 ">
              <FaComputer className="w-[50px] h-[50px]" />
              <h2 className="font-medium font-roboto text-primary text-[19px] mt-6">
                {" "}
                List your own property
              </h2>
              <div className="flex items-center">
                <span className="text-[15px] text-regular font-roboto mt-4 text-center">
                  Sign up now and sell <span className="inline-block">or </span>{" "}
                  rent your own
                  <br /> properties
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
