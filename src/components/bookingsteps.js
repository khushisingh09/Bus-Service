import React from 'react';
import { FaMapMarkerAlt, FaBusAlt, FaClipboardCheck, FaEye } from 'react-icons/fa'; // Similar icons to what you have shown

const BookingSteps = () => {
  return (
    <div className="container mx-auto mt-16 px-4 text-center">
      {/* Title and Subtitle */}
      <h1 className="text-5xl font-bold mb-6">You Can Book Your Desired Bus In Four Steps</h1>
      <p className="text-2xl text-blue-600 font-semibold mb-10">
        Experience Comfort and Convenience with Top-notch Bus Transport Services in Jharkhand - Your Ultimate Solution for Hassle-free Commuting!
      </p>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Step 1 */}
        <div className="text-center">
          <div className="text-3xl text-green-500 font-bold mb-4">01</div>
          <FaMapMarkerAlt className="mx-auto text-blue-500 text-7xl mb-6" />
          <p className="text-xl font-semibold">Date & Location</p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="text-3xl text-green-500 font-bold mb-4">02</div>
          <FaBusAlt className="mx-auto text-blue-500 text-7xl mb-6" />
          <p className="text-xl font-semibold">Choose a Bus</p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="text-3xl text-green-500 font-bold mb-4">03</div>
          <FaClipboardCheck className="mx-auto text-blue-500 text-7xl mb-6" />
          <p className="text-xl font-semibold">Make a Booking</p>
        </div>

        {/* Step 4 */}
        <div className="text-center">
          <div className="text-3xl text-green-500 font-bold mb-4">04</div>
          <FaEye className="mx-auto text-blue-500 text-7xl mb-6" />
          <p className="text-xl font-semibold">Enjoy Your Ride!</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
