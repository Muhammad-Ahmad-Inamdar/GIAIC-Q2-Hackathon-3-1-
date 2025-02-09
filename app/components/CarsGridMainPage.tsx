"use client";
import React, { useEffect, useState } from "react";
import { get12Cars, get_12_16Cars } from "@/lib/fetchCar";
import CartStructureDynamic from "./CartStructureDynamic";

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
  const [visibleCars, setVisibleCars] = useState(12); // Show 3 rows (4 cars per row × 3 = 12)
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
  const totalCars = allCars.length;

  // Show 4 more cars (1 row) when clicked
  const handleShowMore = () => {
    if (showMore) {
      setVisibleCars(12); // Reset to 3 rows
    } else {
      setVisibleCars(totalCars); // Show all cars (4 rows)
    }
    setShowMore(!showMore);
  };

  return (
    <div className="w-full">
      {/* Cars grid */}
      <div className="grid gap-6 cars-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {allCars.slice(0, visibleCars).map((car) => (
          <CartStructureDynamic
          carId={car._id}
            key={car._id}
            carName={car.name}
            carType={car.type}
            imageUrl={car.imageUrl}
            fuelType={car.fuelCapacity}
            transmission={car.transmission}
            seatingCapacity={car.seatingCapacity}
            pricePerDay={car.pricePerDay}
          />
        ))}
      </div>

      {/* Show button only if there are more than 12 cars */}
      {totalCars > 12 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-[#3563E9] h-[44px] rounded-s pl-5 pr-5 cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
          >
            <h1 className="font-[500] text-white text-[16px]">
              {showMore ? "Show Less Cars" : "Show More Cars"}
            </h1>
          </button>
        </div>
      )}
    </div>
  );
};

export default CarsGridMainPage;