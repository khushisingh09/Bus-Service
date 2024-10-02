// src/App.js
import React, { useState } from 'react';
import Navbar from './navbar';
import { FaBus, FaCalendarAlt, FaUser } from 'react-icons/fa'; // 

function Hero() {
  const BackgroundImage = "/assets/image2.jpg";

  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState('1 adult');
  const [busType, setBusType] = useState('Executive Bus');

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Navbar />

      {/* The search card positioned at the bottom of the image */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-white p-6 rounded-lg shadow-lg z-30">
        <h2 className="text-2xl font-bold mb-4">Find your bus & Travel</h2>
        <div className="grid grid-cols-4 gap-6">
          {/* From */}
          <div className="flex flex-col relative">
            <label className="font-semibold mb-2">From</label>
            <FaBus className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              type="text"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              placeholder="Enter departure location"
              className="p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* To */}
          <div className="flex flex-col relative">
            <label className="font-semibold mb-2">To</label>
            <FaBus className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              placeholder="Enter destination"
              className="p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Departure */}
          <div className="flex flex-col relative">
            <label className="font-semibold mb-2">Departure</label>
            <FaCalendarAlt className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Passengers */}
          <div className="flex flex-col relative">
            <label className="font-semibold mb-2">Passengers</label>
            <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              type="text"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Select passengers"
            />
          </div>
        </div>

        {/* Filters and Search Button */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <span className="font-bold">Filters:</span>
            <button
              className={`p-2 border rounded-lg transition ${busType === 'Economy Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setBusType('Economy Bus')}
            >
              Economy Bus
            </button>
            <button
              className={`p-2 border rounded-lg transition ${busType === 'Executive Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setBusType('Executive Bus')}
            >
              Executive Bus
            </button>
            <button
              className={`p-2 border rounded-lg transition ${busType === 'Luxury Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setBusType('Luxury Bus')}
            >
              Luxury Bus
            </button>
            <button
              className={`p-2 border rounded-lg transition ${busType === 'Sleeper Bus' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setBusType('Sleeper Bus')}
            >
              Sleeper Bus
            </button>
          </div>

          <button className="p-3 bg-blue-500 text-white rounded-lg flex items-center">
            Search <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
