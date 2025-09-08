import React from "react";
import Logo from "../../assets/logo.svg";
import NavBtn from "../../assets/icon-hamburger.svg";
import MobileNav from "../NavBar/MobileNav";

const Header = () => {
  return (
    <div className="flex flex-col mx-8 md:mx-20">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="" />

        <div className="nav flex flex-col">
          <img src={NavBtn} alt="" className="flex md:hidden" />

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
        </div>

        <button className="header-cta bg-orange text-white px-6 py-2 rounded-full text-sm hidden lg:block">
          Get Started
        </button>
      </div>
      <MobileNav />
    </div>
  );
};

export default Header;
