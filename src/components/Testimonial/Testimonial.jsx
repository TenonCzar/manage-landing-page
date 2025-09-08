import React from "react";
import Slider from "./Slider-Cards"

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
    </div>
  );
};


export default Testimonial;
