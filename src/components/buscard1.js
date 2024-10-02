import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons for arrows

const BusCard = ({ image, busName, startTime, endTime, from, to, busType, seats, price, journeyHours }) => {
  return (
    <div className="p-4">
      {/* Outer div to create the container effect */}
      <div className="min-w-[400px] max-w-md rounded overflow-hidden shadow-lg border bg-white transform transition duration-500 hover:scale-105 hover:shadow-xl">
        
        {/* Bus image with border and rounded corners */}
        <div className="p-4">
          <img className="w-full h-48 object-cover border-2 border-gray-300 rounded-lg" src={image} alt={busName} />
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{busName}</div>

          {/* Time and Journey Section */}
          <div className="flex justify-between items-center text-gray-600 mb-2">
            <div className="font-bold">{startTime}</div>
            <div className="relative flex-grow mx-4">
              <div className="flex items-center justify-center relative">
                <hr className="border-gray-300 w-full" />
                <span className="absolute bg-white px-2 text-sm text-gray-600">{journeyHours}</span>
              </div>
            </div>
            <div className="font-bold">{endTime}</div>
          </div>

          {/* From and To */}
          <div className="flex justify-between text-gray-600 mb-4">
            <span className="font-bold">{from}</span>
            <span className="font-bold">{to}</span>
          </div>

          {/* Bus Type, Empty Seats, and Price aligned on same level */}
          <div className="flex justify-between items-center mb-4">
            <div>
              {/* Same font size for Bus Type and Empty Seats */}
              <div className="text-gray-700 text-base">{busType}</div>
              <div className="text-gray-700 text-base">{seats} Empty Seats</div>
            </div>
            {/* Price with increased font size */}
            <div className="font-bold text-blue-600 text-2xl">₹{price}</div>
          </div>
        </div>

        {/* Book Tickets Button with more padding and margin */}
        <div className="px-6 pb-4">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg">
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

const BusService = () => {
  const scrollContainerRef = useRef(null);

  // Scroll Functionality for left/right buttons
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Koderma Bus Service</h1>
      </div>

      {/* Scrollable Bus Cards Section */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 top-1/2 z-50 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full p-3 shadow-md hover:bg-gray-200"
          onClick={scrollLeft}
        >
          <FaArrowLeft />
        </button>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-6 py-4"
        >
          <BusCard
            image="https://as2.ftcdn.net/v2/jpg/02/74/99/29/1000_F_274992961_aklI4qAuW1ooECcDKUKMTR1sSPFb1SVR.jpg"
            busName="Volvo 9600 intercity luxury bus"
            startTime="6:10"
            endTime="20:10"
            from="Gaya"
            to="Ranchi"
            busType="Luxury AC Bus"
            seats="25"
            price="1500"
            journeyHours="12h"
          />
          <BusCard
            image="https://as2.ftcdn.net/v2/jpg/00/63/06/85/1000_F_63068553_HaLWgrJNDXkHxATbq19tHGcneSkhYyof.jpg"
            busName="Volvo 9600 intercity luxury bus"
            startTime="6:10"
            endTime="20:10"
            from="Gaya"
            to="Ranchi"
            busType="Luxury AC Bus"
            seats="25"
            price="1500"
            journeyHours="12h"
          />
          <BusCard
            image="https://as1.ftcdn.net/v2/jpg/01/62/85/86/1000_F_162858614_bnLyl4K5g6eHww6O6eVg7eMGzBGOulwM.jpg"
            busName="Volvo 9600 intercity luxury bus"
            startTime="6:10"
            endTime="20:10"
            from="Gaya"
            to="Ranchi"
            busType="Luxury AC Bus"
            seats="25"
            price="1500"
            journeyHours="12h"
          />
          <BusCard
            image="https://as2.ftcdn.net/v2/jpg/02/74/99/29/1000_F_274992961_aklI4qAuW1ooECcDKUKMTR1sSPFb1SVR.jpg"
            busName="Volvo 9600 intercity luxury bus"
            startTime="6:10"
            endTime="20:10"
            from="Gaya"
            to="Ranchi"
            busType="Luxury AC Bus"
            seats="25"
            price="1500"
            journeyHours="12h"
          />
          <BusCard
            image="https://as2.ftcdn.net/v2/jpg/00/63/06/85/1000_F_63068553_HaLWgrJNDXkHxATbq19tHGcneSkhYyof.jpg"
            busName="Volvo 9600 intercity luxury bus"
            startTime="6:10"
            endTime="20:10"
            from="Gaya"
            to="Ranchi"
            busType="Luxury AC Bus"
            seats="25"
            price="1500"
            journeyHours="12h"
          />
          <BusCard
            image="https://as1.ftcdn.net/v2/jpg/01/62/85/86/1000_F_162858614_bnLyl4K5g6eHww6O6eVg7eMGzBGOulwM.jpg"
            busName="Volvo 9600 intercity luxury bus"
            startTime="6:10"
            endTime="20:10"
            from="Gaya"
            to="Ranchi"
            busType="Luxury AC Bus"
            seats="25"
            price="1500"
            journeyHours="12h"
          />
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full p-3 shadow-md hover:bg-gray-200"
          onClick={scrollRight}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BusService;
