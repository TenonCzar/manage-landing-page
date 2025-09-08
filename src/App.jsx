import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MidSect from "./components/MidSect/MidSect";
import Testimonial from "./components/Testimonial/Testimonial";

const App = () => {
  return (
    <div className="my-10 ">
      <Header />
      <Hero />
      <MidSect />
      <Testimonial />
    </div>
  );
};

export default App;
