import React, { useState } from 'react';
import { CarTypes } from '@/types/carsTypes';

interface CarCategoryProps {
  cars: CarTypes[];
  setFilteredCars: (cars: CarTypes[]) => void;
}

const CarCategory = ({ cars, setFilteredCars }: CarCategoryProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(1000); // Default max price

  // Handle car type filter
  const handleTypeChange = (type: string) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type) // Remove type if already selected
      : [...selectedTypes, type]; // Add type if not selected
    setSelectedTypes(updatedTypes);
    applyFilters(updatedTypes, selectedCapacities, priceRange);
  };

  // Handle seating capacity filter
  const handleCapacityChange = (capacity: string) => {
    const updatedCapacities = selectedCapacities.includes(capacity)
      ? selectedCapacities.filter((c) => c !== capacity) // Remove capacity if already selected
      : [...selectedCapacities, capacity]; // Add capacity if not selected
    setSelectedCapacities(updatedCapacities);
    applyFilters(selectedTypes, updatedCapacities, priceRange);
  };

  // Handle price range filter
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(event.target.value, 10);
    setPriceRange(newPrice);
    applyFilters(selectedTypes, selectedCapacities, newPrice);
  };

  // Apply all filters
  const applyFilters = (types: string[], capacities: string[], price: number) => {
    let filtered = cars;

    // Filter by car type
    if (types.length > 0) {
      filtered = filtered.filter((car) => types.includes(car.type));
    }

    // Filter by seating capacity
    if (capacities.length > 0) {
      filtered = filtered.filter((car) => capacities.includes(car.seatingCapacity));
    }

    // Filter by price range
    filtered = filtered.filter((car) => {
      const carPrice = parseFloat(car.pricePerDay.replace('$', '').replace('/day', ''));
      return carPrice <= price;
    });

    setFilteredCars(filtered);
  };

  return (
    <div className="w-full max-w-xs p-4 bg-white shadow-md rounded-md">
      {/* TYPE Section */}
      <div className="mb-6">
        <h2 className="text-[12px] font-semibold text-[#90A3BF] uppercase mb-4">Type</h2>
        <div className=" flex flex-col gap-[24px]">
          {['SUV', 'Sport', 'Sedan', 'Hatchback', 'Gasoline', 'Hybrid', 'Electric'].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-[20px] font-bold text-[#90A3BF]">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* CAPACITY Section */}
      <div className="mb-6 mt-20">
        <h2 className="text-[12px] font-semibold text-[#90A3BF] uppercase mb-4">Capacity</h2>
        <div className="flex flex-col gap-[24px]">
          {['2 People', '4 People', '5 People', '6 People', '7 People', '8 People'].map((capacity) => (
            <label key={capacity} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCapacities.includes(capacity)}
                onChange={() => handleCapacityChange(capacity)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-[20px] font-bold text-[#90A3BF]">{capacity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* PRICE Section */}
      <div className='mt-20'>
        <h2 className="text-[12px] font-semibold text-[#90A3BF] uppercase mb-4">Price</h2>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={handlePriceChange}
            className="w-full h-2 bg-[#3563E9] rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-[#3563E9]"
          />
          <p className="text-[20px] font-bold text-[#596780]">Max. ${priceRange}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCategory;


