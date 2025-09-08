import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import NavBtn from "../../assets/icon-hamburger.svg";
import MobileNav from "../NavBar/MobileNav";

const Header = () => {
  const [isStart, setIsStart] = useState(false);

  return (
    <div className="flex flex-col mx-8 md:mx-20">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <img src={Logo} alt="Logo" />

        {/* Mobile Menu Button (only opens menu) */}
        <button
          onClick={() => setIsStart(true)}
          aria-expanded={isStart}
          aria-controls="mobile-nav"
          aria-label="Open navigation menu"
          // className="md:hidden"
          className={`${isStart ? "hidden" : "md:hidden"}`}
        >
          <img src={NavBtn} alt="menu toggle" className="w-6 h-6" />
        </button>

        {/* Desktop Nav Links */}
        <ul className="links md:flex items-center gap-10 hidden mx-auto">
          <li className="hover:text-gray-600">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-gray-600">
            <a href="#">Product</a>
          </li>
          <li className="hover:text-gray-600">
            <a href="#">About Us</a>
          </li>
          <li className="hover:text-gray-600">
            <a href="#">Careers</a>
          </li>
          <li className="hover:text-gray-600">
            <a href="#">Community</a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="header-cta bg-orange text-white px-6 py-2 rounded-full text-sm hidden lg:block">
          Get Started
        </button>
      </div>

      {/* Mobile Nav */}
      {isStart && <MobileNav onClose={() => setIsStart(false)} />}
    </div>
  );
};

export default Header;
