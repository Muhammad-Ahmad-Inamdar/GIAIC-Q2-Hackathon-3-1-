'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import StripePayment from './StripPayment';

export default function CarRentPaymentForm({ carPrice, carName }: { carPrice: number; carName: string }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    townCity: '',
    pickUpLocation: '',
    pickUpTime: '',
    dropOffLocation: '',
    dropOffTime: '',
    date: '',
    confirmation: false,
    newsletter: false,
  });
  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.confirmation) {
      setShowPayment(true);
    } else {
      alert('Please confirm the booking information.');
    }
  };

  if (showPayment) {
    return <StripePayment carPrice={carPrice} onSuccess={() => router.push(`/thank-you?userName=${encodeURIComponent(formData.name)}&carName=${encodeURIComponent(carName)}`)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Billing Info Section */}
      <div className="w-full mb-8 p-6 rounded-[10px] bg-white shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="font-[700] text-[20px]">Billing Info</h1>
            <p className="font-[500] text-[14px] text-[#90A3BF]">Please enter your billing info</p>
          </div>
          <p className="font-[500] text-[14px] text-[#90A3BF]">Step 1 of 4</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label className="font-[600] text-[16px] text-[#1A202C]">Name</label>
            <div className="w-full h-[56px] rounded-[10px] bg-gray-100 flex items-center">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full ml-2 pl-2 bg-transparent placeholder:text-[14px] placeholder:font-[500] placeholder:text-[rgba(144,163,191,1)]"
                required
              />
            </div>
          </div>

          {/* Phone Number Input */}
          <div className="flex flex-col gap-2">
            <label className="font-[600] text-[16px] text-[#1A202C]">Phone Number</label>
            <div className="w-full h-[56px] rounded-[10px] bg-gray-100 flex items-center">
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full ml-2 pl-2 bg-transparent placeholder:text-[14px] placeholder:font-[500] placeholder:text-[rgba(144,163,191,1)]"
                required
              />
            </div>
          </div>

          {/* Address Input */}
          <div className="flex flex-col gap-2">
            <label className="font-[600] text-[16px] text-[#1A202C]">Address</label>
            <div className="w-full h-[56px] rounded-[10px] bg-gray-100 flex items-center">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full ml-2 pl-2 bg-transparent placeholder:text-[14px] placeholder:font-[500] placeholder:text-[rgba(144,163,191,1)]"
                required
              />
            </div>
          </div>

          {/* Town/City Input */}
          <div className="flex flex-col gap-2">
            <label className="font-[600] text-[16px] text-[#1A202C]">Town / City</label>
            <div className="w-full h-[56px] rounded-[10px] bg-gray-100 flex items-center">
              <input
                type="text"
                name="townCity"
                placeholder="Town or city"
                value={formData.townCity}
                onChange={handleChange}
                className="w-full ml-2 pl-2 bg-transparent placeholder:text-[14px] placeholder:font-[500] placeholder:text-[rgba(144,163,191,1)]"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rental Info Section */}
      <div className="w-full mb-8 p-6 rounded-[10px] bg-white shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="font-[700] text-[20px]">Rental Info</h1>
            <p className="font-[500] text-[14px] text-[rgba(144,163,191,1)]">Please select your rental date</p>
          </div>
          <p className="font-[500] text-[14px] text-[rgba(144,163,191,1)]">Step 2 of 4</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pick-Up Location */}
          <div className="flex flex-col gap-2">
            <label className="font-[600] text-[16px] text-[#1A202C]">Pick-Up Location</label>
            <div className="w-full h-[56px] rounded-[10px] bg-gray-100 flex items-center">
              <input
                type="text"
                name="pickUpLocation"
                placeholder="Select your city"
                value={formData.pickUpLocation}
                onChange={handleChange}
                className="w-full ml-2 pl-2 bg-transparent placeholder:text-[14px] placeholder:font-[500] placeholder:text-[rgba(144,163,191,1)]"
                required
              />
              <ChevronDown className="mr-2 text-[rgba(144,163,191,1)]" />
            </div>
          </div>

          {/* Drop-Off Location */}
          <div className="flex flex-col gap-2">
            <label className="font-[600] text-[16px] text-[#1A202C]">Drop-Off Location</label>
            <div className="w-full h-[56px] rounded-[10px] bg-gray-100 flex items-center">
              <input
                type="text"
                name="dropOffLocation"
                placeholder="Select your city"
                value={formData.dropOffLocation}
                onChange={handleChange}
                className="w-full ml-2 pl-2 bg-transparent placeholder:text-[14px] placeholder:font-[500] placeholder:text-[rgba(144,163,191,1)]"
                required
              />
              <ChevronDown className="mr-2 text-[rgba(144,163,191,1)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Section */}
      <div className="w-full mb-8 p-6 rounded-[10px] bg-white shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="font-[700] text-[20px]">Confirmation</h1>
            <p className="font-[500] text-[14px] text-[rgba(144,163,191,1)]">Finalize your booking</p>
          </div>
          <p className="font-[500] text-[14px] text-[rgba(144,163,191,1)]">Step 4 of 4</p>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="confirmation"
              checked={formData.confirmation}
              onChange={handleChange}
              className="h-4 w-4"
              required
            />
            <span>I confirm that the above information is correct</span>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </form>
  );
}