import React from "react";

const Popular = () => {
  return (
    <div className="bg-[#F9F9F]  h-[20rem]  mx-4 rounded-2xl m-10 flex flex-col justify-center">
      <div className="container ">
        <div className="flex gap-5 wrap">
          <h3 className="text-[19px] font-medium font-roboto underline">
            Real Estate
          </h3>
          <h3 className="text-[19px] font-medium font-roboto">New Homes</h3>
          <h3 className="text-[19px] font-medium font-roboto">Popular Area</h3>
          <h3 className="text-[19px] font-medium font-roboto">
            Popular Searches
          </h3>
        </div>
        <div className="flex flex-wrap mt-4 space-x-28">
          <div className="mt-4 font-roboto text-[15px] text-primary flex gap-2 flex-col">
            <h3>Real Estate NY</h3>
            <h3>Real Estate Brooklyn</h3>
            <h3>Real Estate Queens</h3>
            <h3>Real Estate The Bronx</h3>
            <h3>Real Estate Staten</h3>
            <h3>Real Estate jersey</h3>
          </div>
          <div className="mt-4 font-roboto text-[15px] text-primary flex gap-2 flex-col">
            <h3>Real Estate Norwalk</h3>
            <h3>Real Estate Downey</h3>
            <h3>Real Estate Torrance</h3>
            <h3>Real Estate Pomona </h3>
            <h3>Real Estate Glendale</h3>
            <h3>Real Estate Inglewood</h3>
          </div>

          <div className="mt-4 font-roboto text-[15px] text-primary flex gap-2 flex-col">
            <h3>Real Estate Chicago</h3>
            <h3>Real Estate Cook</h3>
            <h3>Real Estate Kane</h3>
            <h3>Real Estate Lake </h3>
            <h3>Real Estate Will</h3>
            <h3>Real Estate DuPage</h3>
          </div>

          <div className="mt-4 font-roboto text-[15px] text-primary flex gap-2 flex-col">
            <h3>Real Estate Miami</h3>
            <h3>Real Estate Calhoun</h3>
            <h3>Real Estate Charlotte</h3>
            <h3>Real Estate Citrus </h3>
            <h3>Real Estate Clay</h3>
            <h3>Real Estate Collier</h3>
          </div>

          <div className="mt-4 font-roboto text-[15px] text-primary flex gap-2 flex-col">
            <h3>Real Estate Columbia</h3>
            <h3>Real Estate DeSoto</h3>
            <h3>Real Estate Dixie</h3>
            <h3>Real Estate Duval</h3>
            <h3>Real Estate Escambia</h3>
            <h3>Real Estate Flagler</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
