import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Fetch all car data
export async function getAllCars() {
  const query = groq`
    *[_type == "car"]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;

  return await client.fetch(query);
}

// Fetch car details by carId
export async function getCarDetails(carId: string) {
  const query = groq`
    *[_type == "car" && _id == $carId][0]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;

  const carDetails = await client.fetch(query, { carId });

  return carDetails;
}

// Fetch a single car by ID
export async function get1CarById(id: string) {
  const query = groq`*[_type == "car" && _id == $id][0]{
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query, { id });
}

// Fetch 12 cars set (for Main Page)
export async function get12Cars() {
  const query = groq`*[_type == "car"][0...12]{
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query);
}

// Fetch last 4 cars set (for additional)
export async function get_12_16Cars() {
  const query = groq`*[_type == "car"][12...16]{
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    "imageUrl": image.asset->url
  }`;

  

  return await client.fetch(query);
}

// Fetch 9 cars (3 from each category and 3 from the last category)
export async function get9Cars() {
  const query = groq`
    *[_type == "car" && type == "Sport"][0...3]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;

  const sportCars = await client.fetch(query);

  const sedanQuery = groq`
    *[_type == "car" && type == "Sedan"][0...3]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;
  const sedanCars = await client.fetch(sedanQuery);

  const electricQuery = groq`
    *[_type == "car" && type == "Electric"][0...3]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;
  const electricCars = await client.fetch(electricQuery);

  // Last category
  const lastCategoryQuery = groq`
    *[_type == "car"][12...15]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;
  const lastCategoryCars = await client.fetch(lastCategoryQuery);

  return [...sportCars, ...sedanCars, ...electricCars, ...lastCategoryCars];
}
// Fetch 6 cars (3 from each of 2 categories)
export async function get6Cars() {
  const query1 = groq`
    *[_type == "car" && type == "Sport"][0...3]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;
  const sportCars = await client.fetch(query1);

  const query2 = groq`
    *[_type == "car" && type == "Electric"][0...3]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;
  const electricCars = await client.fetch(query2);

  return [...sportCars, ...electricCars];
}
export async function get3Cars() {
  const query = groq`
    *[_type == "car"][0...3]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;

  return await client.fetch(query);
}

// Fetch most recent 3 cars
export async function getRecentCars() {
  const query = groq`
    *[_type == "car"] | order(_createdAt desc)[0...3] {
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;
  return await client.fetch(query);
}

// Fetch 3 most popular cars (assuming popular cars have higher bookings)
export async function getPopularCars() {
  const query = groq`
    *[_type == "car"] | order(bookings desc)[0...3] {
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url
    }
  `;
  return await client.fetch(query);
}
