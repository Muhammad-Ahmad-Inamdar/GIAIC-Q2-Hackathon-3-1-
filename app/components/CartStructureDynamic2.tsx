import { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CarCard = ({
  carId,
  carName,
  carType,
  imageUrl,
  fuelType,
  transmission,
  seatingCapacity,
  pricePerDay,
}: {
  carId: string;
  carName: string;
  carType: string;
  imageUrl: string;
  fuelType: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  return (
    (<div className="w-[317px] h-[400px] rounded-[10px] bg-white relative shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
      {/* Top Section */}
      <div className="p-4">
        <div className="mb-4">
          <h1 className="font-[700] text-[20px]">{carName}</h1>
          <p className="font-[700] text-[14px] text-[#90A3BF]">{carType}</p>
        </div>

        {/* Heart Icon */}
        <div
          className="absolute top-[24px] right-[24px] cursor-pointer"
          onClick={toggleHeart}
        >
          <Heart className={isLiked ? "fill-[#ED3F3F] text-[#ED3F3F]" : "text-[#90A3BF]"} />
        </div>

        {/* Car Image */}
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt={carName}
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
            <p className="text-[14px] font-[500] text-[#90A3BF]">{fuelType}</p>
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
            <p className="text-[14px] font-[500] text-[#90A3BF]">{transmission}</p>
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
            <p className="text-[14px] font-[500] text-[#90A3BF]">{seatingCapacity} People</p>
          </div>
        </div>
      </div>
      {/* Price and Button Section */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-[20px] font-[500]">{pricePerDay}</h1>
          <p className="text-[16px] font-[700] text-slate-400"></p>
        </div>

        {/* Link with dynamic URL */}
        <Link href={`/CarDetails/${carId}`}>
          <button className="bg-[#3563E9] w-[116px] h-[44px] rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
            <h1 className="font-[500] text-white text-[16px]">Rent Now</h1>
          </button>
        </Link>
      </div>
    </div>)
  );
};

export default CarCard;
