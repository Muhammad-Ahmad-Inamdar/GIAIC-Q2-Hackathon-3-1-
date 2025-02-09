// app/CarDetails/[carId]/CarDetailContent.tsx
'use client';

import Image from "next/image";
import { Heart } from 'lucide-react';
import Link from 'next/link';
import ReviewsSection from '@/app/components/Comments';
import CarGridCarDetails from '@/app/components/CarsGridCarDetails';

interface CarDetails {
  imageUrl: string;
  name: string;
  type: string;
  transmission: string;
  seatingCapacity: string;
  fuelCapacity: string;
  pricePerDay: string;
}

const CarDetailContent = ({
  carDetails,
  carId
}: {
  carDetails: CarDetails;
  carId: string;
}) => {
  if (!carDetails) {
    return <div>Car not found!</div>;
  }

  return (
    (<div className="bg-[#F6F7F9] min-h-[2300px] h-full flex flex-row relative">
      {/* Blue Background Section */}
      <div className="">
      <div className="absolute left-[342px] top-[32px] w-[492px] h-[360px] rounded-[10px] bg-gradient-to-r from-[#3563E9] to-[#3563E980]">
                      <div className="flex flex-col relative overflow-visible ">
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute left-[425px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute left-[334px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute left-[243px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute left-[152px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute left-[61px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute left-[-30px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
      
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[120px] left-[380px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[120px] left-[289px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[120px] left-[198px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[120px] left-[107px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[120px] left-[16px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
      
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[240px] left-[-29px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[240px] left-[62px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[240px] left-[153px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[240px] left-[244px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[240px] left-[335px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                          <Image
                            src={'/Rectangle2.svg'}
                            alt="ellipse"
                            width={75}
                            height={120}
                            className="absolute top-[240px] left-[426px]"
                            style={{
                              maxWidth: "100%",
                              height: "auto"
                            }} />
                      
                      <Image
                        src={carDetails.imageUrl}
                        alt={carDetails.name}
                        width={320}
                        height={135}
                        className="absolute top-[234px] left-[172px] fill-inherit"
                        style={{
                          maxWidth: "100%",
                          height: "auto"
                        }} />
                      </div>

                      <div className="w-[284px] h-[224px] ml-8 mt-8 flex flex-col gap-4">
                    <div className="h-[96px]">
                        <h1 className="font-[600] text-white text-[32px]">Easy way to rent a car at a low price</h1>
                    </div>
                    <div className="h-[48px]">
                        <p className="font-[500] text-white text-[16px]">
                            Providing cheap car rental services and safe and comfortable facilities.
                        </p>
                    </div>
                    <div>
                        <button className="w-[120px] h-[44px] bg-[#54A6FF] rounded-sm cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
                            <h2 className="text-white font-[500] text-[16px]">Rental Car</h2>
                        </button>
                    </div>
                </div>


                   
                  </div>

                  <div className="absolute w-[462px] h-[508px] top-[32px] left-[860px] rounded-[10px] border-2">
                <div className="relative w-[220px] h-[72px] top-[24px] left-[24px] gap-[8px]">
                    <h1 className="font-[700] text-[28px]">{carDetails.name}</h1>
                    <Image
                      src={'/Reviews.svg'}
                      alt="Reviews"
                      width={220}
                      height={240}
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                </div>
                <div className="absolute w-[24px] h-[24px] top-[24px] left-[414px]">
                    <Heart className="fill-[#ED3F3F] text-[#ED3F3F]" />
                </div>
                <div className="absolute w-[420px] h-[120px] top-[128px] left-[24px]">
                    <h2 className="font-[400] text-[20px] leading-10 text-wrap text-[#596780]">
                       This model has become the embodiment of {carDetails.type}&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.
                    </h2>
                </div>
                <div className="flex flex-row w-[444px] h-[72px] absolute top-[300px] left-[8px] gap-[36px]">
                <div className="w-[200px] h-[72px] gap-[16px] p-2 ">
                <ul className='flex flex-row justify-around items-center gap-[20px]' >
                  <li className='text-[#90A3BF] font-normal text-center text-[20px]'>Car Type</li>
                  <li className='text-[#596780] font-[600] text-center text-[20px]'>{carDetails.type}</li>
                </ul>
                <ul className='flex flex-row justify-around items-center gap-[28px]'>
                  <li className='text-[#90A3BF] font-normal text-center text-[20px]'>Steering</li>
                  <li className='text-[#596780] font-[600] text-center text-[20px]'>{carDetails.transmission}</li>
                </ul>
                </div>
                <div className="w-[200px] h-[72px] gap-[20px] p-2">
                <ul className='flex flex-row justify-between items-center gap-[20px]'>
                  
                  <li className='text-[#90A3BF] font-normal text-center text-[20px]'>Capacity</li>
                  <li className='text-[#596780] font-[600] text-center text-[20px]'>{carDetails.seatingCapacity}</li>
                </ul>
                <ul className='flex flex-row items-center gap-[64px]'>
                  <li className='text-[#90A3BF] font-normal text-center text-[20px]'>Fuel</li>
                  <li className='text-[#596780] font-[600] text-center text-[20px]'>{carDetails.fuelCapacity}</li>
                </ul>
                </div>
                
                </div>
                <div className="w-[116px] h-[44px] absolute top-[420px] left-[328px]">
                <Link href={`/Car_Rent_Payment/${carId}`}>
                <button className="bg-[#3563E9] w-[116px] h-[44px] rounded-s pl-5 pr-5 cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
                        <h1 className="font-[500] text-white text-[16px]">Rent Now</h1>
                    </button>
                    </Link>
                </div>
                    <div className='w-[200px] h-[56px] absolute top-[420px] left-[24px] flex p-2 flex-col '>
                      <h1 className='font-bold text-[28px]'>{carDetails.pricePerDay}</h1>
                    </div>
            </div>
        
        {/* ... (keep all your existing JSX structure here) */}
        <div>
            
        </div>
        <Image
          src={carDetails.imageUrl}
          alt={carDetails.name}
          width={148}
          height={124}
          className="absolute top-[440px] left-[342px] fill-inherit  "
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
         <Image
           src={'/View 2.svg'}
           alt="view2"
           width={148}
           height={124}
           className="absolute top-[416px] left-[514px] rounded-[10px] border-[4px] border-blue-700 cursor-pointer"
           style={{
             maxWidth: "100%",
             height: "auto"
           }} />
        <Image
          src={'/View 3.svg'}
          alt="view3"
          width={148}
          height={124}
          className="absolute top-[416px] left-[682px] rounded-[8px] border-[4px] border-blue-700 cursor-pointer"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />

      </div>
      {/* ... (keep all other existing JSX structure) */}
      <div className="absolute flex flex-col gap-14 w-[1016px] h-min top-[562px] left-[132px] rounded-[10px] p-4">
        <ReviewsSection />
      </div>
      <CarGridCarDetails />
    </div>)
  );
};

export default CarDetailContent;