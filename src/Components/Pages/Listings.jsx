import React from "react";
import img1 from "../../assets/Images/div1.png";
import img2 from "../../assets/Images/div2.png";
import img3 from "../../assets/Images/div3.png";
import { CiLocationOn } from "react-icons/ci";
import { FaBed, FaBath, FaRegSquare } from "react-icons/fa6";

function Listings() {
  return (
    <div className="bg-[#F6F8FA] h-[62rem] flex flex-col justify-center">
      <div className="container ">
        <div className="">
          <h1 className="text-center font-roboto text-medium text-[40px] text-primary">
            Homes For You
          </h1>
          <p className="text-center font-roboto text-regular text-[17px] text-primary">
            Based on your view history
          </p>
        </div>

        {/* House List */}
        {/* img1 */}
        <div className="flex gap-5 ">
          <div className="rounded-2xl  h-[28rem] w-1/3 p-2  hover:bg-customColor  bg-stroke">
            <div className="relative">
              <img className="rounded-2xl h-[296px] w-full" src={img1} alt="" />
              <button className="absolute top-0 left-3 bg-tertiary text-white w-20 h-8 rounded-full mt-4 text-medium text-[13px] font-roboto ">
                FOR SALE
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-[19px] font-roboto text-primary ">
                  Skyper pool Apartment
                </h4>
                <h4 className="text-semiBold text-roboto text-[21px] text-secondary">
                  $280,000
                </h4>
              </div>
              <div className="flex items-center">
                <CiLocationOn className="mr-2" />
                <span className="">1020 Bloomingdale Ave</span>
              </div>
              <div className="flex items-center gap-2 mt-2 font-roboto text-regular text-primary">
                <FaBed />
                <span>Beds</span>
                <FaBath className="flex gap-2 ml-6" />
                <span>Baths</span>
                <FaRegSquare className="flex gap-2 ml-6" />
                <span>450 sqft</span>
              </div>
            </div>
          </div>

          {/* img2 */}
          <div className="bg-stroke h-[28rem] w-1/3 p-2 hover:bg-customColor rounded-2xl  ">
            <div className="relative">
              <img
                className="rounded-[16px] h-[296px] object-cover"
                src={img2}
                alt=""
              />
              <button className="absolute top-0 left-3 bg-tertiary text-white w-20 h-8 rounded-full mt-4 text-medium text-[13px] font-roboto ">
                FOR RENT
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-[19px] font-roboto text-primary ">
                  North Dillard Street
                </h4>
                <h4 className="text-semiBold text-roboto text-[21px] text-secondary">
                  $250/month
                </h4>
              </div>
              <div className="flex items-center">
                <CiLocationOn className="mr-2" />
                <span className="">4330 Bell Shoals Rd</span>
              </div>
              <div className="flex items-center gap-2 mt-2 font-roboto text-regular text-primary">
                <FaBed />
                <span>Beds</span>
                <FaBath className="flex gap-2 ml-6" />
                <span>Baths</span>
                <FaRegSquare className="flex gap-2 ml-6" />
                <span>400 sqft</span>
              </div>
            </div>
          </div>

          {/* img3 */}
          <div className=" h-[28rem] w-1/3 p-2 hover:bg-customColor rounded-2xl  bg-stroke">
            <div className="relative">
              <img
                className="rounded-[16px] h-[296px] object-cover"
                src={img3}
                alt=""
              />
              <button className="absolute top-0 left-3 bg-tertiary text-white w-20 h-8 rounded-full mt-4 text-medium text-[13px] font-roboto ">
                FOR RENT
              </button>
              <div className="relative">
                <button className=" absolute top-0 right-3 bg-tertiary text-primary w-20 h-8 rounded-full mt-4 text-medium text-[13px] font-roboto ">
                  FEATURED
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-[19px] font-roboto text-primary ">
                  Eaton Garth Penthouse
                </h4>
                <h4 className="text-semiBold text-roboto text-[21px] text-secondary">
                  $180,000
                </h4>
              </div>
              <div className="flex items-center">
                <CiLocationOn className="mr-2" />
                <span className="">7722 18th Ave, Brooklyn</span>
              </div>
              <div className="flex items-center gap-2 mt-2 font-roboto text-regular text-primary">
                <FaBed />
                <span>Beds</span>
                <FaBath className="flex gap-2 ml-6" />
                <span>Baths</span>
                <FaRegSquare className="flex gap-2 ml-6" />
                <span>450 sqft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listings;
