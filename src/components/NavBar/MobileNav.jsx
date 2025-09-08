import React from "react";

const MobileNav = () => {
  return (
    <div className="bg-black/30 h-[90vh] hidden">
      <div className="shadow-md bg-white w-[80%] rounded mx-auto px-12 py-6 items-center text-center font-semibold flex flex-col gap-6">
        <a href="#" className="hover:text-gray-600">Pricing</a>
        <a href="#" className="hover:text-gray-600">Product</a>
        <a href="#" className="hover:text-gray-600">About Us</a>
        <a href="#" className="hover:text-gray-600">Careers</a>
        <a href="#" className="hover:text-gray-600">Community</a>
      </div>
    </div>
  );
};

export default MobileNav;
