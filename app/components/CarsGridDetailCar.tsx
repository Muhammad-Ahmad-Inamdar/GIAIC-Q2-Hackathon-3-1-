"use client";
import React, { useEffect, useState } from "react";
import { get12Cars, get_12_16Cars } from "@/lib/fetchCar";
import CartStructureDynamic1 from "./CartStructureDynamic1";

interface Car {
  _id: string;
  name: string;
  type: string;
  imageUrl: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
}

const CarsGridMainPage = () => {
  const [initialCars, setInitialCars] = useState<Car[]>([]);
  const [extraCars, setExtraCars] = useState<Car[]>([]);
  const [visibleCars, setVisibleCars] = useState(6);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await get12Cars();
      setInitialCars(data);
      const extraData = await get_12_16Cars();
      setExtraCars(extraData);
    };
    fetchCars();
  }, []);

  const allCars = [...initialCars, ...extraCars];

  const handleShowMore = () => {
    if (showMore) {
      setVisibleCars(6); // Reset to initial
    } else {
      setVisibleCars((prev) => Math.min(prev + 3, allCars.length));
    }
    setShowMore(!showMore);
  };

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Cars Grid and Button Wrapper */}
      <div className="flex flex-col gap-4 w-full max-w-[1200px]">
        {/* Cars grid */}
        <div
          className="grid gap-6 grid-cols-1 
            sm:grid-cols-2 lg:grid-cols-3 w-full"
        >
          {allCars.slice(0, visibleCars).map((car) => (
            <CartStructureDynamic1
              key={car._id}
              carName={car.name}
              carType={car.type}
              imageUrl={car.imageUrl}
              fuelType={car.fuelCapacity}
              transmission={car.transmission}
              seatingCapacity={car.seatingCapacity}
              pricePerDay={car.pricePerDay} carId={""}            />
          ))}
        </div>

        {/* "Show More Cars" button */}
        {visibleCars < allCars.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleShowMore}
              className="bg-[#3563E9] h-[44px] rounded-lg px-6 cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
            >
              <h1 className="font-[500] text-white text-[16px]">
                {showMore ? "Show Less Cars" : "Show More Cars"}
              </h1>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsGridMainPage;
