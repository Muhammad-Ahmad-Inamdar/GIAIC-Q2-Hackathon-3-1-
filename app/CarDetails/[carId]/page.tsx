// app/CarDetails/[carId]/page.tsx
import { getCarDetails } from '@/lib/fetchCar';
import CarDetailContent from './CarDetailContent';

export default async function CarDetailPage({
  params
}: {
  params: { carId: string }
}) {
  const carDetails = await getCarDetails(params.carId);

  return <CarDetailContent carDetails={carDetails} carId={params.carId} />;
}