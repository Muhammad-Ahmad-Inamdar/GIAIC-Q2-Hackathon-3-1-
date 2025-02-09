"use client";

import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";

const citiesInPakistan = [
  "Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi",
  "Multan", "Peshawar", "Quetta", "Sialkot", "Hyderabad"
];

const PickupDropoff = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");

  const handleSwap = () => {
    setPickUpLocation(dropOffLocation);
    setDropOffLocation(pickUpLocation);
    setPickUpDate(dropOffDate);
    setDropOffDate(pickUpDate);
    setPickUpTime(dropOffTime);
    setDropOffTime(pickUpTime);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Pick-Up Section */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-[48%]">
        <div className="flex items-center gap-2 mb-4">
          <input type="radio" checked readOnly className="text-blue-500" />
          <h2 className="font-semibold text-gray-800">Pick-Up</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-bold mb-1">Location</label>
            <input type="text" list="cities" value={pickUpLocation} onChange={(e) => setPickUpLocation(e.target.value)} placeholder="Select city" className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200" />
            <datalist id="cities">
              {citiesInPakistan.map((city) => (<option key={city} value={city} />))}
            </datalist>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Date</label>
            <input type="text" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (!e.target.value ? (e.target.type = "text") : null)} placeholder="Select date" className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Time</label>
            <input type="text" value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)} onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (!e.target.value ? (e.target.type = "text") : null)} placeholder="Select time" className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200" />
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <button
        onClick={handleSwap}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition z-10"
      >
        <ArrowUpDown size={20} />
      </button>

      {/* Drop-Off Section */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-[48%]">
        <div className="flex items-center gap-2 mb-4">
          <input type="radio" checked readOnly className="text-blue-500" />
          <h2 className="font-semibold text-gray-800">Drop-Off</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-bold mb-1">Location</label>
            <input type="text" list="cities" value={dropOffLocation} onChange={(e) => setDropOffLocation(e.target.value)} placeholder="Select city" className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200" />
            <datalist id="cities">
              {citiesInPakistan.map((city) => (<option key={city} value={city} />))}
            </datalist>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Date</label>
            <input type="text" value={dropOffDate} onChange={(e) => setDropOffDate(e.target.value)} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (!e.target.value ? (e.target.type = "text") : null)} placeholder="Select date" className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Time</label>
            <input type="text" value={dropOffTime} onChange={(e) => setDropOffTime(e.target.value)} onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (!e.target.value ? (e.target.type = "text") : null)} placeholder="Select time" className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropoff;
