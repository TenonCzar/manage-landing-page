import React from 'react'
import Illustration from "../../assets/illustration-intro.svg"
const Hero = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row-reverse  px-10 md:px-20 mt-12 justify-between items-center md:items-start w-full">
      <img
        src={Illustration}
        alt="illustration"
        className="md:w-[50%] w-[400px]"
      />

      <div className="writeup flex flex-col text-center items-center gap-3 md:text-left md:items-start w-[300px]">
        <h2 className="text-4xl font-bold">
          Bring everyone together to build better products.
        </h2>
        <p className="md:text-sm md:w-[280px] text-gray-500">
          Manage makes it simple for software teams to plan day-to-day task
          while keeping the larger team goals in view.
        </p>

        <button className="cta-hero bg-orange text-white px-8 py-3 rounded-full font-semibold text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero
