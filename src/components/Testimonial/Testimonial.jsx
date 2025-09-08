import React from "react";
import Slider from "./Slider-Cards"
import bg from '../../assets/bg-simplify-section-desktop.svg'
import bgMobile from "../../assets/bg-simplify-section-mobile.svg";

const Testimonial = () => {


  return (
    <div className="flex flex-col gap-16 mt-12">
      <div className="title mx-auto w-fit">
        <h2 className="text text-4xl font-semibold">What they've said</h2>
      </div>

      <div className="w-3/4 m-auto">
        <div className="">
          <Slider />
        </div>
      </div>
      <button className="bg-orange text-white font-semibold py-4 w-fit mx-auto px-12 rounded-full shadow-lg shadow-orange-600/50">
        Get Started
      </button>

      <div className="bg-orange text-white flex flex-col items-center gap-12 p-12 text-center justify-around md:flex-row relative">
        <img src={bg} alt="" className="absolute hidden md:block -top-30 -right-30" />
        <img src={bgMobile} alt="" className="absolute left-0" />
        <h2 className="text-4xl font-semibold md:w-[400px] text-left">
          Simplify how your team works today.
        </h2>
        <button className="bg-white text-orange-500 px-12 py-3 rounded-full font-semibold shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};


export default Testimonial;
