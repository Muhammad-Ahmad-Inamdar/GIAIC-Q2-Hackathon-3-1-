'use client'; // Mark as Client Component

import { Protect, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { getCarDetails } from '@/lib/fetchCar';
import { Loader2 } from 'lucide-react';
import CarRentPaymentForm from "@/app/components/CarRentPaymentForm";

interface CarDetails {
  name: string;
  pricePerDay: string;
  imageUrl: string;
}

const CarRentalPage = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();
  const pathname = usePathname();
  const carId = pathname?.split("/")[2];

  const [carDetails, setCarDetails] = useState<CarDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!carId) return;

    const fetchCar = async () => {
      setLoading(true);
      try {
        const data = await getCarDetails(carId);
        setCarDetails(data);
      } catch (err) {
        console.error("Error fetching car details:", err);
        setError("Failed to fetch car details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [carId]);

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!isSignedIn) {
    localStorage.setItem('redirectPath', pathname);
    router.push('/Sign_In');
    return null;
  }

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!carDetails) return <div className="text-white">Car not found!</div>;

  const num1 = Math.floor(Math.random() * 5 + 1) * 5;
  const extractNumber = (str: string) => parseFloat(str.replace(/[^0-9.]/g, ""));
  const carPrice = extractNumber(carDetails.pricePerDay) + num1;

  return (
    (<Protect>
      <div className="h-[2240px] w-[1440px] flex flex-row gap-8 bg-[rgba(246,247,249,1)]">
        <div className="h-[2176px] w-[852px] mt-8 ml-8 gap-8 flex flex-col">
          <CarRentPaymentForm carPrice={carPrice} carName={carDetails.name} />
        </div>

        <div className="w-[492px] h-[750px] rounded-[10px] mt-8 mr-8 relative bg-white p-6">
          <h1 className="font-bold text-xl">Rental Summary</h1>
          <p className="text-sm text-gray-500">
            Prices may change depending on the length of the rental and the price of your rental car.
          </p>

          <div className="mt-6 bg-blue-600 h-[100px] w-[188px] rounded-[8px]"></div>
          <Image
            src={carDetails.imageUrl}
            alt="car"
            width={178}
            height={135}
            className="rounded-xl mt-4 absolute top-[110px] left-[30px]"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <h1 className="text-2xl font-bold mt-4">{carDetails.name}</h1>

          <div className="border-t my-4 border-gray-300"></div>

          <div className="flex justify-between text-gray-500">
            <h2>Subtotal</h2>
            <h2>${carDetails.pricePerDay}</h2>
          </div>
          <div className="flex justify-between text-gray-500 mt-2">
            <h2>Tax</h2>
            <h2>${num1}</h2>
          </div>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Apply promo code"
              className="w-full p-2 border rounded-md text-gray-500"
            />
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md">
              Apply now
            </button>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">Total Rental Price</h2>
              <p className="text-sm text-gray-500">
                Overall price includes rental discount
              </p>
            </div>
            <h1 className="text-3xl font-bold">${carPrice}</h1>
          </div>
        </div>
      </div>
    </Protect>)
  );
};

export default CarRentalPage;
