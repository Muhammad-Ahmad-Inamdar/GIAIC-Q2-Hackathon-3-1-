'use client';

import { useState, useEffect } from 'react';
import { CarTypes } from '@/types/carsTypes';
import { getAllCars } from '@/lib/fetchCar';
import CarListing from '../components/CarListing';
import CarCategory from '../components/CarCategory';
import { useSearch } from '@/context/SearchContext';
import PickupDropoff from '../components/PickDropForAllPages';

const SomePage = () => {
  const [cars, setCars] = useState<CarTypes[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // Added dynamic sorting

  const { searchQuery } = useSearch();

  // Fetch cars on component mount
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars: CarTypes[] = await getAllCars();
        setCars(fetchedCars);
        setFilteredCars(fetchedCars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Filter cars based on search query
  useEffect(() => {
    const filtered = cars.filter((car) =>
      car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCars(filtered);
  }, [searchQuery, cars]);

  // Sort cars based on price
  const sortCarsByPrice = (order: 'asc' | 'desc') => {
    const sortedCars = [...filteredCars].sort((a, b) => {
      const priceA = parseFloat(a.pricePerDay.replace('$', '').replace('/day', ''));
      const priceB = parseFloat(b.pricePerDay.replace('$', '').replace('/day', ''));
      return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    setFilteredCars(sortedCars);
  };

  // Update sorted cars when sortOrder changes
  useEffect(() => {
    sortCarsByPrice(sortOrder);
  }, [sortOrder]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4">
        <CarCategory cars={cars} setFilteredCars={setFilteredCars} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {/* Pickup & Dropoff Component */}
        <div className="mb-6">
          <PickupDropoff />
        </div>

        {/* Sorting Dropdown */}
        <div className="mb-4 flex justify-end">
          <label className="mr-2 text-gray-700">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="border rounded px-2 py-1"
          >
            <option value="asc">Lowest to Highest</option>
            <option value="desc">Highest to Lowest</option>
          </select>
        </div>

        {/* Display Cars or Loading State */}
        {loading ? (
          <p>Loading cars...</p>
        ) : filteredCars.length > 0 ? (
          <CarListing cars={filteredCars} />
        ) : (
          <p>No cars available.</p>
        )}
      </div>
    </div>
  );
};

export default SomePage;
