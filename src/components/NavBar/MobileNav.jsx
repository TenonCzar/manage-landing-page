import React from "react";
import CloseBtn from "../../assets/icon-close.svg";
const MobileNav = ({ onClose }) => {
  return (
    <div className="bg-black h-[100vh] pt-14 top-0 fixed left-0 w-[100vw] z-10">
      {/* Mobile Menu Button */}
      <button
        onClick={onClose}
        aria-controls="mobile-nav"
        aria-label="Toggle navigation menu"
        className="md:hidden bg-amber-500 pr-8 float-right"
      >
        <img
          src={CloseBtn}
          alt="menu toggle"
          className="w-6 h-6"
        />
      </button>
      <div className="shadow-md bg-white w-[80%] rounded mx-auto mt-10 px-12 py-6 items-center text-center font-semibold flex flex-col gap-6">
        <a href="#" className="hover:text-gray-600">
          Pricing
        </a>
        <a href="#" className="hover:text-gray-600">
          Product
        </a>
        <a href="#" className="hover:text-gray-600">
          About Us
        </a>
        <a href="#" className="hover:text-gray-600">
          Careers
        </a>
        <a href="#" className="hover:text-gray-600">
          Community
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
