import React, { useState } from 'react';
import Navbar from './navbar';
import { useNavigate } from "react-router-dom";

function Hero() {
  const BackgroundImage = "/assets/image2.jpg";
  const navigate = useNavigate();
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState('1 adult');
  const [busType, setBusType] = useState('Executive Bus');

  const handleClick = () => {
    navigate("/bussearch");
  };

  return (
    <div className="relative">
      {/* Background image container */}
      <div className="bg-cover bg-center min-h-[40vh] md:min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <Navbar />
      </div>

      {/* Search card below the image for mobile and over the image for larger screens */}
      <div className="relative w-full max-w-7xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg mt-4 md:absolute md:bottom-2 md:left-1/2 md:transform md:-translate-x-1/2 md:w-full z-30">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">Find your bus & Travel</h2>
        
        {/* Grid layout for inputs, adjusted for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* From */}
          <div className="flex flex-col relative">
            <label className="font-semibold mb-1 md:mb-2 text-sm md:text-base">From</label>
            <input
              type="text"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              placeholder="Enter departure location"
              className="p-2 md:p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
          </div>

          {/* To */}
          <div className="flex flex-col relative">
            <label className="font-semibold mb-1 md:mb-2 text-sm md:text-base">To</label>
            <input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              placeholder="Enter destination"
              className="p-2 md:p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
          </div>

          {/* Departure */}
          <div className="flex flex-col relative">
            <label className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Departure</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="p-2 md:p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
          </div>

          {/* Passengers */}
          <div className="flex flex-col relative">
            <label className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Passengers</label>
            <input
              type="text"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="p-2 md:p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Select passengers"
            />
          </div>
        </div>

        {/* Filters and Search Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-3 sm:space-y-0">
          {/* Filters section */}
          <div className="flex flex-wrap items-center space-x-3 md:space-x-4">
            <span className="font-bold text-sm md:text-base">Filters:</span>
            <button
              className={`p-2 md:p-3 border rounded-lg transition text-sm md:text-base ${busType === 'Economy Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setBusType('Economy Bus')}
            >
              Economy Bus
            </button>
            <button
              className={`p-2 md:p-3 border rounded-lg transition text-sm md:text-base ${busType === 'Executive Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setBusType('Executive Bus')}
            >
              Executive Bus
            </button>
            <button
              className={`p-2 md:p-3 border rounded-lg transition text-sm md:text-base ${busType === 'Luxury Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setBusType('Luxury Bus')}
            >
              Luxury Bus
            </button>
            <button
              className={`p-2 md:p-3 border rounded-lg transition text-sm md:text-base ${busType === 'Sleeper Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setBusType('Sleeper Bus')}
            >
              Sleeper Bus
            </button>
          </div>

          {/* Search button */}
          <button className="p-2 md:p-3 bg-blue-500 text-white rounded-lg flex items-center text-sm md:text-base" onClick={handleClick}>
            Search <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
