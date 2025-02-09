

export interface CarTypes {
    fuelType: string;
    _id: string; // Unique identifier
    name: string; // Car name
    brand: string; // Brand of the car
    type: string; // Car type (e.g., Sport, Sedan, etc.)
    fuelCapacity: string; // Fuel or battery capacity
    transmission: string; // Type of transmission
    seatingCapacity: string; // Number of seats
    pricePerDay: string; // Rental price per day
    originalPrice: string; // Original price
    tags: string[]; // Array of tags
    imageUrl: string; // Added imageUrl property
    image: {
      asset: {
        _ref: string; // Reference to the image asset
        _type: string; // Type of the asset
      };
    }; // Image object with a reference to the asset
  }
  