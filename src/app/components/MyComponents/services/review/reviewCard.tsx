import React from "react";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  avatar: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, rating, avatar }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto border border-red-200 pb-12">
      {/* Star Rating */}
      <div className="flex justify-center my-2">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="text-yellow-500 text-lg sm:text-xl">⭐</span>
        ))}
      </div>

      {/* Review Content */}
      <p className="text-gray-700 text-sm sm:text-base text-center">{review}</p>

      {/* Reviewer Info */}
      <div className="flex flex-col items-center mt-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-300"
        />
      </div>

      {/* Name Section (Full Width, Bottom Positioned) */}
      <h3 className="absolute bottom-0 left-0 w-full text-lg font-semibold text-white px-4 py-2 text-center bg-gradient-to-r from-[#76200F] to-[#A53C27] rounded-b-lg">
        {name}
      </h3>
    </div>
  );
};

export default ReviewCard;
