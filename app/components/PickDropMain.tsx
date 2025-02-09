"use client";

import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";

const citiesInPakistan = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Faisalabad",
  "Rawalpindi",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Hyderabad",
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
    <div className="flex flex-row items-center justify-evenly gap-10 ">
      <div className="flex flex-row gap-6 p-6 rounded-lg ">
        <div className="w-[582px] h-[132px] pl-[64px] bg-white rounded-[10px] flex flex-col p-4 gap-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="option1"
              checked
              readOnly
              className="text-blue-500 focus:ring-blue-500"
            />
            <div className="flex flex-row">
              <h2 className="font-semibold text-gray-800">Pick - Up</h2>
            </div>
          </div>

          <div className="flex flex-row justify-evenly gap-[24px] items-center w-[486px] h-[48px]">
            {/* Location Input */}
            <div className="flex flex-col gap-[6px] w-[126px] h-[48px]">
              <h1 className="text-[16px] font-bold">Location</h1>
              <input
                type="text"
                list="cities"
                value={pickUpLocation}
                onChange={(e) => setPickUpLocation(e.target.value)}
                placeholder="Select your city"
                className="w-[126px] h-[25px] p-2 placeholder:text-[12px] focus:outline-none focus:ring focus:ring-blue-200"
              />
              <datalist id="cities">
                {citiesInPakistan.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>

            {/* Date Selector with Placeholder */}
            <div className="flex flex-col gap-[6px] w-[126px] h-[48px]">
              <h1 className="text-[16px] font-bold">Date</h1>
              <input
                type="text"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                placeholder="Select your date"
                className="w-[126px] h-[25px] p-2 text-gray-500 placeholder:text-[12px] focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Time Selector with Placeholder */}
            <div className="flex flex-col gap-[6px] w-[126px] h-[48px]">
              <h1 className="text-[16px] font-bold">Time</h1>
              <input
                type="text"
                value={pickUpTime}
                onChange={(e) => setPickUpTime(e.target.value)}
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                placeholder="Select your time"
                className="w-[126px] h-[25px] p-2 text-gray-500 placeholder:text-[12px] focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
        </div>

        {/* Arrow Button */}
        <div className="w-[56px] h-[56px] mt-8 bg-blue-500 p-4 rounded-[10px]">
          <div
            onClick={handleSwap}
            className="flex justify-center items-center rounded-[10px] cursor-pointer hover:bg-blue-600 transition"
          >
            <ArrowUpDown className="text-white" />
          </div>
        </div>

        {/* Drop-Off Section */}
        <div className="w-[582px] h-[132px] pl-[64px] bg-white rounded-[10px] flex flex-col p-4 gap-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="option2"
              checked
              readOnly
              className="text-blue-500 focus:ring-blue-500"
            />
            <div className="flex flex-row">
              <h2 className="font-semibold text-gray-800">Drop-Off Section</h2>
            </div>
          </div>

          <div className="flex flex-row justify-evenly gap-[24px] items-center w-[486px] h-[48px]">
            {/* Location Input */}
            <div className="flex flex-col gap-[6px] w-[126px] h-[48px]">
              <h1 className="text-[16px] font-bold">Location</h1>
              <input
                type="text"
                list="cities"
                value={dropOffLocation}
                onChange={(e) => setDropOffLocation(e.target.value)}
                placeholder="Select your city"
                className="w-[126px] h-[25px] p-2 placeholder:text-[12px] focus:outline-none focus:ring focus:ring-blue-200"
              />
              <datalist id="cities">
                {citiesInPakistan.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>

            {/* Date Selector with Placeholder */}
            <div className="flex flex-col gap-[6px] w-[126px] h-[48px]">
              <h1 className="text-[16px] font-bold">Date</h1>
              <input
                type="text"
                value={dropOffDate}
                onChange={(e) => setDropOffDate(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                placeholder="Select your date"
                className="w-[126px] h-[25px] p-2 text-gray-500 placeholder:text-[12px] focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Time Selector with Placeholder */}
            <div className="flex flex-col gap-[6px] w-[126px] h-[48px]">
              <h1 className="text-[16px] font-bold">Time</h1>
              <input
                type="text"
                value={dropOffTime}
                onChange={(e) => setDropOffTime(e.target.value)}
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                placeholder="Select your time"
                className="w-[126px] h-[25px] p-2 text-gray-500 placeholder:text-[12px] focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropoff;
