import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Alex Stanton",
    position: "CEO at Bukalapak",
    comment:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "21 July 2022",
    rating: 4,
    image: "/Review1.jpg", // Add profile images in your public folder
  },
  {
    name: "Skylar Dias",
    position: "CEO at Amazon",
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "20 July 2022",
    rating: 4,
    image: "/Review2.jpg",
  },
  {
    name: "John Doe",
    position: "CEO at Google",
    comment:
      "Great app! I've never had such a smooth experience with car rentals before. The service is outstanding, and the prices are reasonable.",
    date: "19 July 2022",
    rating: 5,
    image: "/profile.png",
  },
  {
    name: "Jane Smith",
    position: "CEO at Microsoft",
    comment:
      "The variety of cars is amazing, and the service team is super helpful. I would highly recommend this to anyone looking for reliable car rental options.",
    date: "18 July 2022",
    rating: 5,
    image: "/car.svg",
  },
];

export default function ReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  return (
    <div className="p-6 rounded-lg mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Reviews</h2>
        <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
          {reviews.length}
        </span>
      </div>

      <div className="space-y-6 ">
        {reviews.slice(0, visibleCount).map((review, index) => (
          <div
            key={index}
            className="flex items-start gap-4 pb-4"
          >
          {/* Updated Profile Image */}
          <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={review.image}
                alt={review.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Review Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500">{review.position}</p>
              <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
            </div>

            {/* Review Meta */}
            <div className="text-right">
              <p className="text-sm text-gray-400">{review.date}</p>
              <div className="flex justify-end gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`${
                      starIndex < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < reviews.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="text-blue-600 hover:underline text-sm font-semibold"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
}
