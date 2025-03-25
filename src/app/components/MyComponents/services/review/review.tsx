import ReviewCard from "../review/reviewCard";

const reviews = [
  {
    id: 1,
    name: "Rajesh K.",
    review: "The customer service is excellent. Their plumbers in Nagpur are knowledgeable and professional, and prices are fair...",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 9,
    name: "Suresh P.",
    review: "They did a fantastic job with my plumbing needs. Very professional and efficient!",
    rating: 4,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 8,
    name: "Anita R.",
    review: "Affordable prices and great service! Highly recommend their services in Nagpur.",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 7,
    name: "Vikram S.",
    review: "Best plumbing service in town. Quick response and professional team.",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 9,
    name: "Suresh P.",
    review: "They did a fantastic job with my plumbing needs. Very professional and efficient!",
    rating: 4,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 8,
    name: "Anita R.",
    review: "Affordable prices and great service! Highly recommend their services in Nagpur.",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },

];

const ReviewSection = () => {
  return (
    <section
  className="relative p-6 md:px-20 sm:p-8 bg-[#F9F7E9] items-center"
>
  <div className="container px-6 flex items-center gap-4 mt-6 mb-6">
    <h2 className="text-3xl font-bold text-[#3E180E] whitespace-nowrap">
      Reviews
    </h2>
    <div className="bg-[#D46A34] flex-grow h-[0.5px]"></div>
  </div>

  <div className="container pt-10 pb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {reviews.map((review) => (
      <ReviewCard
        key={review.id}
        name={review.name}
        review={review.review}
        rating={review.rating}
        avatar={review.avatar}
      />
    ))}
  </div>

  {/* <div className="absolute bottom-0 left-0 w-full">
    <svg
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#802614", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#A43C28", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad1)"
        fillOpacity="0.85"
        d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>
  </div> */}
</section>

  );
};

export default ReviewSection;
