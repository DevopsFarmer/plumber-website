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
];

const ReviewSection = () => {
  return (
    <section className="p-6 sm:p-8 bg-white items-center">
      <h2 
      className="text-4xl sm:text-4xl font-bold text-[#3E180E] mb-6">Reviews</h2>
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
    </section>
  );
};

export default ReviewSection;
