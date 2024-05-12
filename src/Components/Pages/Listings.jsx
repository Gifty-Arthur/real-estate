import React from "react";
import img1 from "../../assets/Images/div1.png";
import img2 from "../../assets/Images/div2.png";
import img3 from "../../assets/Images/div3.png";

function Listings() {
  return (
    <div>
      <div className="mt-10">
        <h1
          className="text-center font-roboto 
        text-medium text-[40px] text-primary"
        >
          Homes For You
        </h1>
        <p
          className="text-center font-roboto text-regular 
        text-[17px] text-primary"
        >
          Based on your view history
        </p>
      </div>
      <div className="flex gap-2 justify-center rounded-full mt-10">
        <img
          src={img1}
          alt=""
          className="rounded-[16px] w-[425px] h-[296px] "
        />

        <img
          src={img2}
          alt=""
          className="rounded-[16px] w-[425px] h-[296px] "
        />
        <img src={img3} alt="" className="rounded-[16px] w-[425px] h-[296px]" />
      </div>
    </div>
  );
}

export default Listings;
