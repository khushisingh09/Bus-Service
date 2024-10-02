// src/navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent text-black z-20">
      {/* Left Section: Logo and Menu */}
      <div className="flex items-center space-x-12">
        <div className="logo text-4xl font-bold">LOGO</div> 
        <ul className="flex space-x-6 font-semibold text-lg">
          <li><a href="#home" className="hover:text-blue-500 transition">HOME</a></li>
          <li><a href="#service" className="hover:text-blue-500 transition">SERVICE</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition">ABOUT</a></li>
        </ul>
      </div>

      {/* Right Section: Contact Info */}
      <div className="contact-info text-right text-lg">
        <p className="font-semibold">For Enquiry</p>
        <p>+91 9380854679 , +91 9380854679</p>
      </div>
    </nav>
  );
};

export default Navbar;
