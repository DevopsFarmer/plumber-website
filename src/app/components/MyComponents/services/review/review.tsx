import React from "react";

const reviews = [
  { id: 1, name: "Kenton Smith", initial: "K", bgColor: "bg-blue-500", review: "Twice I have had a serious plumbing leak that needed quick attention...Twice I have had a serious plumbing leak that needed quick attention ", time: "2 months ago", rating: 5, borderColor: "border-orange-500" },
  { id: 2, name: "Jason Pearls", initial: "J", bgColor: "bg-pink-500", review: "The team is professional, and their service is top-notch...", time: "2 months ago", rating: 5, borderColor: "border-black" },
  { id: 3, name: "Ashton Polar", initial: "A", bgColor: "bg-purple-500", review: "We were very impressed with the quick service and professional service...", time: "2 months ago", rating: 5, borderColor: "border-orange-500" },
  { id: 4, name: "Newman Polis", initial: "N", bgColor: "bg-gray-500", review: "What awesome service from the plumber they sent out...", time: "2 months ago", rating: 5, borderColor: "border-black" },
  { id: 5, name: "Ves James", initial: "V", bgColor: "bg-orange-500", review: "Had water/sewer backup at work today...", time: "2 months ago", rating: 5, borderColor: "border-orange-500" },
  { id: 6, name: "Charles Ruth", initial: "C", bgColor: "bg-green-500", review: "I highly recommend them. I called for a clogged drain...", time: "2 months ago", rating: 5, borderColor: "border-black" },
];

const ReviewsGrid = () => {
  return (
    <section className="p-10 bg-[#FAF6EB]">
      <h2 className="text-4xl font-bold text-[#3E180E] mb-10">Reviews</h2>

      {/* 3 Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8 max-w-6xl mx-auto">
        
        {/* First Column */}
        <div className="flex flex-col gap-8">
          <ReviewCard data={reviews[0]} />
          <ReviewCard data={reviews[3]} />
        </div>

        {/* Second Column (Shifted Down) */}
        <div className="row-span-2 self-center">
          <ReviewCard data={reviews[1]} />
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-8">
          <ReviewCard data={reviews[2]} />
          <ReviewCard data={reviews[5]} />
        </div>

        {/* Extra row element for proper structure */}
        <div className="md:col-start-1 md:col-span-3 flex justify-center">
          <ReviewCard data={reviews[4]} />
        </div>
      </div>
    </section>
  );
};

// Individual Review Card Component
const ReviewCard = ({ data }) => {
  return (
    <div className={`relative bg-white p-6 rounded-lg shadow-lg border-2 ${data.borderColor}`}>
      {/* Quotation Mark */}
      <div className="absolute -top-5 left-4 text-3xl text-[#3E180E]">❝</div>

      {/* User Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 flex items-center justify-center text-white font-bold text-lg rounded-full ${data.bgColor}`}>
          {data.initial}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{data.name}</h3>
          <p className="text-sm text-gray-600">1 review</p>
        </div>
      </div>

      {/* Star Ratings */}
      <div className="flex items-center gap-1 text-yellow-500 text-xl mb-2">
        {"⭐".repeat(data.rating)}
      </div>

      {/* Review Time */}
      <p className="text-gray-500 text-sm mb-2">{data.time}</p>

      {/* Review Text */}
      <p className="text-gray-800">{data.review}</p>
    </div>
  );
};

export default ReviewsGrid;
