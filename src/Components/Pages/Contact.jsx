import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#FFF8F6] h-[43rem] rounded-2xl flex flex-col justify-center m-10 ">
      <div className="container">
        <div className="flex justify-center mt-8 space-x-96 wrap">
          <div>
            <h4 className="text-[30px] font-medium font-roboto">
              Become a Real Estate Agent
            </h4>
            <p className="text-[17px] font-roboto mt-2">
              we only work with the best companies around the globe
            </p>
          </div>

          <div className="mt-6 ">
            <button className="bg-customColor w-[10rem] h-[3rem] rounded-[12px]">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
