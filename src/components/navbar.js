import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full p-4 bg-transparent z-20">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="logo text-3xl md:text-4xl font-bold">LOGO</div>

        {/* Hamburger Icon for mobile */}
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-lg">
          <li><a href="#home" className="hover:text-blue-500 transition">HOME</a></li>
          <li><a href="#service" className="hover:text-blue-500 transition">SERVICE</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition">ABOUT</a></li>
          {/* For Enquiry on large screens */}
          <div className="text-lg text-right">
            <p className="font-semibold">For Enquiry</p>
            <p>+91 9380854679 , +91 9380854679</p>
          </div>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-200 p-4 rounded-lg">
          <ul className="space-y-4 font-semibold text-lg">
            <li><a href="#home" className="hover:text-blue-500 transition">HOME</a></li>
            <li><a href="#service" className="hover:text-blue-500 transition">SERVICE</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">ABOUT</a></li>
            {/* For Enquiry on mobile screens */}
            <div className="text-lg text-center">
              <p className="font-semibold">For Enquiry</p>
              <p>+91 9380854679 , +91 9380854679</p>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
