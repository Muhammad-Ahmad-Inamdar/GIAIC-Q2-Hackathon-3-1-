'use client'
import React from "react";
import { CarTypes } from "@/types/carsTypes";
import Image from "next/image";
import Link from "next/link";

interface CarListingProps {
  cars: CarTypes[]; // Add type for cars propgit remote set-url origin https://github.com/Muhammad-Ahmad-Inamdar/GIAIC-Q2-Hackathon-3-1-.git
}

const CarListing: React.FC<CarListingProps> = ({ cars }) => {
  // Handle case when no cars are available
  if (!cars || cars.length === 0) {
    return <div>No cars available at the moment.</div>;
  }

  return (
    (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div key={car._id} className="w-[317px] h-[400px] rounded-[10px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
          {/* Top Section */}
          <div className="p-4">
            {/* Car Name and Type */}
            <div className="mb-4">
              <h1 className="font-[700] text-[20px]">{car.name}</h1>
              <p className="font-[700] text-[14px] text-[#90A3BF]">{car.type}</p>
            </div>

            {/* Car Image */}
            <div className="flex justify-center">
              <Image
                // Fallback image
                src={car.imageUrl || '/default-car-image.jpg'}
                alt={car.name}
                width={272}
                height={84}
                className="object-contain"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>

          {/* Details Section */}
          <div className="p-4 flex flex-col gap-2">
            <div className="flex justify-around">
              <div className="flex items-center gap-2">
                <Image
                  src="/gas-station.svg"
                  alt="fuel"
                  width={24}
                  height={24}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <p className="text-[14px] font-[500] text-[#90A3BF]">{car.fuelCapacity} L</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/steering.png"
                  alt="steering"
                  width={24}
                  height={24}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <p className="text-[14px] font-[500] text-[#90A3BF]">{car.transmission}</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/people.png"
                  alt="people"
                  width={24}
                  height={24}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <p className="text-[14px] font-[500] text-[#90A3BF]">{car.seatingCapacity} People</p>
              </div>
            </div>
          </div>

          {/* Price and Rent Now Button */}
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-[20px] font-[500]">{car.pricePerDay}</h1>
              <p className="text-[16px] font-[700] text-slate-400"></p>
            </div>

            {/* Rent Now Button with Link */}
            <Link href={`/CarDetails/${car._id}`}>
              <button className="bg-[#3563E9] w-[116px] h-[44px] rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
                <h1 className="font-[500] text-white text-[16px]">Rent Now</h1>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>)
  );
};

export default CarListing;
