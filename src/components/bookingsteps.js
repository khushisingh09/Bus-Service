import React from 'react';
import { FaMapMarkerAlt, FaBusAlt, FaClipboardCheck, FaEye } from 'react-icons/fa';

const BookingSteps = () => {
  return (
    <div className="container mx-auto mt-10 px-4 text-center">
      {/* Title and Subtitle */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-6">
        You Can Book Your Desired Bus In Four Steps
      </h1>
      <p className="text-lg sm:text-2xl text-blue-600 font-semibold mb-10">
        Experience Comfort and Convenience with Top-notch Bus Transport Services in Jharkhand - Your Ultimate Solution for Hassle-free Commuting!
      </p>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        {/* Step 1 */}
        <div className="text-center">
          <div className="text-2xl sm:text-3xl text-green-500 font-bold mb-4">01</div>
          <FaMapMarkerAlt className="mx-auto text-blue-500 text-5xl sm:text-7xl mb-6" />
          <p className="text-lg sm:text-xl font-semibold">Date & Location</p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="text-2xl sm:text-3xl text-green-500 font-bold mb-4">02</div>
          <FaBusAlt className="mx-auto text-blue-500 text-5xl sm:text-7xl mb-6" />
          <p className="text-lg sm:text-xl font-semibold">Choose a Bus</p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="text-2xl sm:text-3xl text-green-500 font-bold mb-4">03</div>
          <FaClipboardCheck className="mx-auto text-blue-500 text-5xl sm:text-7xl mb-6" />
          <p className="text-lg sm:text-xl font-semibold">Make a Booking</p>
        </div>

        {/* Step 4 */}
        <div className="text-center">
          <div className="text-2xl sm:text-3xl text-green-500 font-bold mb-4">04</div>
          <FaEye className="mx-auto text-blue-500 text-5xl sm:text-7xl mb-6" />
          <p className="text-lg sm:text-xl font-semibold">Enjoy Your Ride!</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
