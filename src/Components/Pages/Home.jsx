import React from "react";
import background from "../../assets/Images/background.png";
import { AiOutlineSearch } from "react-icons/ai";
const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="mt-6"></div>
        <button
          className=" w-[210px] h-[40px] text-white border 
          border-white  rounded-full hover:bg-customColor font-light text-[13px] "
        >
          LET US GUIDE YOUR HOME
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
  );
};

export default Home;
