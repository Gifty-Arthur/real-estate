import React from "react";
import background from "../../assets/Images/background.png";
import { AiOutlineSearch } from "react-icons/ai";
const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <div className="container flex justify-center mt-14">
          <button className="  hover:bg-customColor text-white text-[15px] font-roboto font-medium  w-[210px] h-[40px] bg-white rounded-[50px] bg-opacity-[.0] border-2">
            Add Property
          </button>
        </div>
        <div className="text-4xl text-white font-roboto mt-7">
          <h1 className="font-medium text-center">
            Discover a place you'll <br /> love to live
          </h1>
          <div className="text-[17px] flex gap-10 justify-center font-regular mt-4">
            <div className="underline">Sale</div>
            <div className="">Rent</div>
          </div>
        </div>
        {/* search bar */}
        <form className="w-[440px] relative flex justify-center mt-4">
          <div className="relative ">
            <input
              type="search"
              placeholder="Enter Name, Keyword"
              className="w-[652px] placeholder-bg-primary font-roboto
            p-4 pl-12 rounded-full bg-white font-regular justify-center "
            />
            <button
              className="translate-x-[-5px] absolute right-0 top-1
            p-4 bg-customColor rounded-full "
            >
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
