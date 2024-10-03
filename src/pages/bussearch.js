import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QRCode } from "react-qr-code";

const BusSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null); // State for selected bus
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage the dialog visibility
  const navigate = useNavigate();

  const dummyBusData = [
    {
      id: 1,
      image:
        "https://as2.ftcdn.net/v2/jpg/02/74/99/29/1000_F_274992961_aklI4qAuW1ooECcDKUKMTR1sSPFb1SVR.jpg",
      operator: "VOLVO 220 SUPER DELUXE",
      type: "AC Seater / Sleeper",
      phone: "+91 9380854679",
      departureTime: "6:10",
      arrivalTime: "20:10",
      from: "Gaya",
      to: "Ranchi",
      oldPrice: 1800,
      newPrice: 1500,
      date: "14 Aug 2024",
    },
    {
      id: 2,
      image:
        "https://as2.ftcdn.net/v2/jpg/02/74/99/29/1000_F_274992961_aklI4qAuW1ooECcDKUKMTR1sSPFb1SVR.jpg",
      operator: "VOLVO 220 SUPER DELUXE",
      type: "AC Seater / Sleeper",
      phone: "+91 9380854679",
      departureTime: "6:10",
      arrivalTime: "20:10",
      from: "Gaya",
      to: "Ranchi",
      oldPrice: 1800,
      newPrice: 1500,
      date: "14 Aug 2024",
    },
    {
      id: 3,
      image:
        "https://as2.ftcdn.net/v2/jpg/02/74/99/29/1000_F_274992961_aklI4qAuW1ooECcDKUKMTR1sSPFb1SVR.jpg",
      operator: "VOLVO 220 SUPER DELUXE",
      type: "AC Seater / Sleeper",
      phone: "+91 9380854679",
      departureTime: "6:10",
      arrivalTime: "20:10",
      from: "Gaya",
      to: "Ranchi",
      oldPrice: 1800,
      newPrice: 1500,
      date: "14 Aug 2024",
    },
    {
      id: 4,
      image:
        "https://as2.ftcdn.net/v2/jpg/02/74/99/29/1000_F_274992961_aklI4qAuW1ooECcDKUKMTR1sSPFb1SVR.jpg",
      operator: "VOLVO 220 SUPER DELUXE",
      type: "AC Seater / Sleeper",
      phone: "+91 9380854679",
      departureTime: "6:10",
      arrivalTime: "20:10",
      from: "Gaya",
      to: "Ranchi",
      oldPrice: 1800,
      newPrice: 1500,
      date: "14 Aug 2024",
    },
    // {
    //   id: 5,
    //   image:
    //     "https://as2.ftcdn.net/v2/jpg/02/74/99/29/1000_F_274992961_aklI4qAuW1ooECcDKUKMTR1sSPFb1SVR.jpg",
    //   operator: "VOLVO 220 SUPER DELUXE",
    //   type: "AC Seater / Sleeper",
    //   phone: "+91 9380854679",
    //   departureTime: "6:10",
    //   arrivalTime: "20:10",
    //   from: "Gaya",
    //   to: "Ranchi",
    //   oldPrice: 1800,
    //   newPrice: 1500,
    //   date: "14 Aug 2024",
    // },
    // {
    //   id: 6,
    //   image:
    //     "https://as2.ftcdn.net/v2/jpg/02/74/99/29/1000_F_274992961_aklI4qAuW1ooECcDKUKMTR1sSPFb1SVR.jpg",
    //   operator: "VOLVO 220 SUPER DELUXE",
    //   type: "AC Seater / Sleeper",
    //   phone: "+91 9380854679",
    //   departureTime: "6:10",
    //   arrivalTime: "20:10",
    //   from: "Gaya",
    //   to: "Ranchi",
    //   oldPrice: 1800,
    //   newPrice: 1500,
    //   date: "14 Aug 2024",
    // },


    // Add more dummy data as needed
  ];

  const handleSearch = () => {
    const results = dummyBusData.filter(
      (bus) =>
        bus.from.toLowerCase() === from.toLowerCase() &&
        bus.to.toLowerCase() === to.toLowerCase()
    );
    setSearchResults(results);
  };

  const goBack = () => {
    navigate(-1);
  };

  const calculateDuration = (departureTime, arrivalTime) => {
    const [depHours, depMinutes] = departureTime.split(":").map(Number);
    const [arrHours, arrMinutes] = arrivalTime.split(":").map(Number);
    let durationHours = arrHours - depHours;
    let durationMinutes = arrMinutes - depMinutes;

    if (durationMinutes < 0) {
      durationMinutes += 60;
      durationHours--;
    }

    return `${durationHours}h ${durationMinutes}m`;
  };

  const handleBookClick = (bus) => {
    setSelectedBus(bus); // Set the selected bus details
    setIsDialogOpen(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog
    setTimeout(() => setSelectedBus(null), 300); // Clear selected bus after animation
  };

  return (
    <div className="container mx-auto p-4">
      {/* Back button */}
      <button onClick={goBack} className="mb-4 flex items-center">
        {/* Back button icon */}
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Back
      </button>

      {/* Header Section */}
      <div className="bg-blue-500 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center space-x-4">
          <div className="w-1/4 relative">
            <label className="block text-white font-bold mb-1">From</label>
            <input
              type="text"
              placeholder="From"
              className="w-full p-2 pr-10 rounded-lg"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="w-1/4 relative">
            <label className="block text-white font-bold mb-1">To</label>
            <input
              type="text"
              placeholder="To"
              className="w-full p-2 pr-10 rounded-lg"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="w-1/4 relative">
            <label className="block text-white font-bold mb-1">Departure</label>
            <input
              type="date"
              className="w-full p-2 rounded-lg"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg self-end"
          >
            Search
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div className="text-2xl font-bold mb-4">
        {from} ➔ {to}
      </div>

      <div className="grid gap-2">
        {searchResults.length > 0 ? (
          searchResults.map((bus) => (
            <div
              key={bus.id}
              className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-lg"
              style={{ height: "180px" }}
            >
              {/* Bus Image */}
              <img
                src={bus.image}
                alt={bus.operator}
                className="w-full md:w-1/4 object-cover"
              />
              {/* Bus Details */}
              <div className="flex justify-between p-4 w-full space-x-4">
                <div className="w-1/3">
                  <h2 className="font-bold text-xl">{bus.operator}</h2>
                  <p className="text-gray-500">{bus.type}</p>
                  <p className="text-gray-500">Phone: {bus.phone}</p>
                  <p className="text-gray-500">{bus.date}</p>
                </div>
                <div className="w-1/3 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    {/* Departure and Arrival Section */}
                    <div className="text-center">
                      <p className="text-gray-600 text-lg">
                        {bus.departureTime}
                      </p>
                      <p className="text-gray-500">{bus.from}</p>
                    </div>
                    <div className="relative w-1/2 mx-2">
                      <hr className="border-gray-300" />
                      <span className="absolute bg-white px-2 text-sm text-gray-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {calculateDuration(bus.departureTime, bus.arrivalTime)}
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-lg">{bus.arrivalTime}</p>
                      <p className="text-gray-500">{bus.to}</p>
                    </div>
                  </div>
                </div>
                {/* Price and Booking Section */}
                <div className="w-1/3 flex flex-col justify-between items-end">
                  <div className="text-right">
                    <h3 className="font-bold text-xl">Price</h3>
                    <p className="line-through text-gray-500">₹{bus.oldPrice}</p>
                    <p className="text-red-500 font-bold text-2xl">
                      ₹{bus.newPrice}
                    </p>
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => handleBookClick(bus)} // Handle button click
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No buses found for the selected route.</p>
        )}
      </div>

      {/* Sliding Dialog Box for Booking */}

      {selectedBus && (
  <div
    className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center transition-all duration-300 ${
      isDialogOpen ? "opacity-100" : "opacity-0"
    }`}
  >
    <div
      className={`bg-white p-4 rounded-lg shadow-lg w-2/5 transition-transform duration-300 transform ${
        isDialogOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ height: '100vh', overflowY: 'hidden' }}  // Ensure no scroll and 100vh content
    >
      <div className="relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl bg-red-200 p-2 rounded-full z-10"  // Larger size and highlight, positioned over the image
          onClick={handleCloseDialog}
        >
          &times;
        </button>

        {/* Bus Image */}
        <img
          src={selectedBus.image}
          alt={selectedBus.operator}
          className="w-full h-64 object-cover mb-4 rounded"  // Ensure the full image fits within the set size, border left
        />

        {/* Bus Details */}
        <h2 className="font-bold text-xl mb-1">{selectedBus.operator}</h2>
        <p className="text-gray-500 text-sm">{selectedBus.type}</p>
        <p className="text-gray-500 text-sm">Phone: {selectedBus.phone}</p>

        {/* Timings */}
        <div className="flex justify-between items-center my-6">
          <div className="text-center">
            <p className="font-bold text-lg">{selectedBus.departureTime}</p>  {/* Bold and larger font */}
            <p className="text-gray-700 text-md font-bold">{selectedBus.from}</p> {/* Bold location */}
          </div>

          <div className="relative w-1/2 mx-2">
            <hr className="border-gray-300" />
            <span className="absolute bg-white px-2 text-xs font-bold text-gray-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {calculateDuration(selectedBus.departureTime, selectedBus.arrivalTime)} {/* Journey duration */}
            </span>
          </div>

          <div className="text-center">
            <p className="font-bold text-lg">{selectedBus.arrivalTime}</p> {/* Bold and larger font */}
            <p className="text-gray-700 text-md font-bold">{selectedBus.to}</p> {/* Bold location */}
          </div>
        </div>

        {/* Price and Confirmation Button (Swap Position and Align) */}
        <div className="flex justify-between items-center mb-4">
        <div className="text-right">
            <h3 className="font-bold text-lg">
              Price: <span className="text-red-500">₹{selectedBus.newPrice}</span>
            </h3>
            <p className="line-through text-gray-500 text-sm">
              ₹{selectedBus.oldPrice}
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Confirm Booking
          </button>
          
        </div>

        {/* Bus Route Card */}
        <div className="border rounded-lg p-3 mb-3 bg-gray-100 text-sm">
          <h3 className="font-bold text-sm mb-2">Bus Route</h3>
          <p>Gaya --- Musatpura --- Dobhi --- Chouparan --- Barhi --- Hazaribagh</p>
        </div>

        {/* Ticket Booking, QR Code, and Any Query Alignment */}
        <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-100 mb-2">
          {/* Left: Ticket Booking Info */}
          <div className="flex flex-col">
            <h3 className="font-bold text-sm  mb-2">For Ticket Booking Call Now</h3>
            <p className="text-sm font-bold">+91 9380854679, +91 9380854679</p>
          </div>

          {/* Center: QR Code */}
          <div>
            <QRCode
              value={`Bus: ${selectedBus.operator}, Phone: ${selectedBus.phone}, Route: ${selectedBus.from} to ${selectedBus.to}`}
              size={80}
            />
          </div>

          {/* Right: Any Query Info */}
          <div className="ml-4">
            <p className="font-bold text-sm">Any Query</p>
            <p className="text-sm">Email: support@busticket</p>
          </div>
        </div>

      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default BusSearch;
