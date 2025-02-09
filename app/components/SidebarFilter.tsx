"use client";
import { useState } from "react";
import { CarTypes } from "@/types/carsTypes";

interface SidebarFilterProps {
  cars: CarTypes[];
  onFilter: (filteredCars: CarTypes[]) => void;
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({ cars, onFilter }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSeating, setSelectedSeating] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Extract unique values properly
  const allTypes = Array.from(new Set(cars.map(car => car.type)));
  const allSeating = Array.from(new Set(cars.map(car => car.seatingCapacity)));

  const handleTypeChange = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(newTypes);
    applyFilters(newTypes, selectedSeating, priceRange);
  };

  const handleSeatingChange = (seating: string) => {
    const newSeating = selectedSeating.includes(seating)
      ? selectedSeating.filter(s => s !== seating)
      : [...selectedSeating, seating];
    setSelectedSeating(newSeating);
    applyFilters(selectedTypes, newSeating, priceRange);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    applyFilters(selectedTypes, selectedSeating, range);
  };

  const applyFilters = (
    types: string[],
    seating: string[],
    priceRange: [number, number]
  ) => {
    const filtered = cars.filter(car => {
      const matchesType = types.length === 0 || types.includes(car.type);
      const matchesSeating = seating.length === 0 || seating.includes(car.seatingCapacity);
      const price = parseFloat(car.pricePerDay.replace(/[^0-9.]/g, ""));
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

      return matchesType && matchesSeating && matchesPrice;
    });

    onFilter(filtered);
  };

  return (
    <div className="w-64 p-4 bg-[#F6F7F9]">
      {/* Type Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Type</h3>
        {allTypes.map(type => (
          <label key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>

      {/* Seating Capacity Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Seating Capacity</h3>
        {allSeating.map(seating => (
          <label key={seating} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedSeating.includes(seating)}
              onChange={() => handleSeatingChange(seating)}
              className="mr-2"
            />
            {seating}
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Price Range ($)</h3>
        <div className="flex gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={e => handlePriceChange([Number(e.target.value), priceRange[1]])}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            value={priceRange[1]}
            onChange={e => handlePriceChange([priceRange[0], Number(e.target.value)])}
            className="w-1/2 p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
