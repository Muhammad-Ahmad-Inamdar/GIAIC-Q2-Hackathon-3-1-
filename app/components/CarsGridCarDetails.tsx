"use client";
import { useEffect, useState } from "react";
import CarCard from "./CartStructureDynamic2";
import SidebarFilter from "./SidebarFilter";
import { CarTypes } from '@/types/carsTypes';
import { getPopularCars, getRecentCars } from "@/lib/fetchCar";
import Link from "next/link";

const CarsShowcase = () => {
  const [popularCars, setPopularCars] = useState<CarTypes[]>([]);
  const [recentCars, setRecentCars] = useState<CarTypes[]>([]);
  const [filteredPopular, setFilteredPopular] = useState<CarTypes[]>([]);
  const [filteredRecent, setFilteredRecent] = useState<CarTypes[]>([]);

  useEffect(() => {
    const loadCars = async () => {
      const popular = await getPopularCars();
      const recent = await getRecentCars();
      setPopularCars(popular);
      setRecentCars(recent);
      setFilteredPopular(popular);
      setFilteredRecent(recent);
    };
    loadCars();
  }, []);

  const handleFilter = (filtered: CarTypes[]) => {
    const popularIds = new Set(popularCars.map(c => c._id));
    const recentIds = new Set(recentCars.map(c => c._id));
    
    setFilteredPopular(filtered.filter(c => popularIds.has(c._id)));
    setFilteredRecent(filtered.filter(c => recentIds.has(c._id)));
  };

  return (
    <div className="w-full max-w-[1216px] flex flex-col items-center p-1">
      <div className="flex w-full gap-4">
        <SidebarFilter 
          cars={[...popularCars, ...recentCars]} 
          onFilter={handleFilter} 
        />

        {/* Main Content */}
        <div className="flex-1">
          {/* Popular Cars Section */}
          <div className="w-full max-w-[1216px] h-[44px] justify-between flex flex-row items-center p-2 mb-1 mt-1 relative top-[1250px] right-[100px]">
            <h1 className="text-[#90A3BF] text-[16px] font-semibold">Popular Cars</h1>
            <h1 className="text-[#3563E9] text-[16px] font-semibold cursor-pointer">
              <Link href={'/SomePages'}>View All</Link>
            </h1>
          </div>
          <div className="w-full max-w-[1200px] mt-2 p-1 absolute top-[1320px] left-[110px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
              {filteredPopular.map((car) => (
                <CarCard
                  key={car._id}
                  carId={car._id}
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
          </div>

          {/* Recent Cars Section */}
          <div className="w-full max-w-[1216px] h-[44px] flex justify-between flex-row items-center p-2 mb-1 mt-1 relative top-[1720px] right-[100px]">
            <h1 className="text-[#90A3BF] text-[16px] font-semibold">Recent Cars</h1>
            <h1 className="text-[#3563E9] text-[16px] font-semibold cursor-pointer">
              <Link href={'/SomePages'}>View All</Link>
            </h1>
          </div>
          <div className="w-full max-w-[1200px] mt-2 p-1 absolute top-[1850px] left-[110px]">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRecent.map((car) => (
                <CarCard
                  key={car._id}
                  carId={car._id}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsShowcase;