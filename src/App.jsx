import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MidSect from "./components/MidSect/MidSect";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="mt-10 ">
      <Header />
      <Hero />
      <MidSect />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
