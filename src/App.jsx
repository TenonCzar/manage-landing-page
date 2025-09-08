import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MidSect from "./components/MidSect/MidSect";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import bgTop from "./assets/bg-tablet-pattern.svg";

const App = () => {
  return (
    <div className="mt-10">
      <div className="absolute -right-20 -top-12 -z-10">
        <img src={bgTop} alt="" className="w-[32rem]" />
      </div>
      <div className="absolute -left-60 -bottom-[42em] -z-10">
        <img src={bgTop} alt="" className="w-[32rem]" />
      </div>
      <Header />
      <Hero />
      <MidSect />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
