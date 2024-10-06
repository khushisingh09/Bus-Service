import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          
          {/* Contact Info Section */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo 
              nemo ut debitis dignissimos pariatur officiis, fuga velit iste.
            </p>
            <p className="text-gray-800 mb-2 text-base sm:text-lg">
              <strong>Phone:</strong> +91 9380854679
            </p>
            <p className="text-gray-800 mb-4 text-base sm:text-lg">
              <strong>Email:</strong> support@ecommerce
            </p>
            <h4 className="text-lg font-bold mb-2">Get In Touch</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 text-3xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-600 text-3xl" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-700 text-3xl" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-xl sm:text-2xl hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 text-xl sm:text-2xl hover:text-gray-800">Service</a></li>
              <li><a href="#" className="text-gray-600 text-xl sm:text-2xl hover:text-gray-800">About</a></li>
            </ul>
          </div>

          {/* Bus Service Company Section */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Bus Service Company</h3>
            <p className="text-gray-600 text-base sm:text-lg">
              Your one-stop solution for luxurious and comfortable bus rides.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
