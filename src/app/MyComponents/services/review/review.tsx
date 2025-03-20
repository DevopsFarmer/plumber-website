import ReviewCard from "./reviewCard";
const reviews = [
  {
    id: 1,
    name: "Rajesh K.",
    review: "The customer service is excellent. Their plumbers in Nagpur are knowledgeable and professional, and prices are fair. I trust them. I had called another local plumbing company in Nagpur who came and took pictures, but I never heard from them again. I assume they were not up to the task. Thank you Service On Wheel for exceeding my expectations. I encourage everyone...don’t waste your time, start with the best. they provide professional plumber services in Nagpur...",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 9,
    name: "Rajesh K.",
    review: "The customer service is excellent. Their plumbers in Nagpur are knowledgeable and professional, and prices are fair. I trust them. I had called another local plumbing company in Nagpur who came and took pictures, but I never heard from them again. I assume they were not up to the task. Thank you Service On Wheel for exceeding my expectations. I encourage everyone...don’t waste your time, start with the best. they provide professional plumber services in Nagpur...",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 8,
    name: "Rajesh K.",
    review: "The customer service is excellent. Their plumbers in Nagpur are knowledgeable and professional, and prices are fair. I trust them. I had called another local plumbing company in Nagpur who came and took pictures, but I never heard from them again. I assume they were not up to the task. Thank you Service On Wheel for exceeding my expectations. I encourage everyone...don’t waste your time, start with the best. they provide professional plumber services in Nagpur...",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 7,
    name: "Rajesh K.",
    review: "The customer service is excellent. Their plumbers in Nagpur are knowledgeable and professional, and prices are fair. I trust them. I had called another local plumbing company in Nagpur who came and took pictures, but I never heard from them again. I assume they were not up to the task. Thank you Service On Wheel for exceeding my expectations. I encourage everyone...don’t waste your time, start with the best. they provide professional plumber services in Nagpur...",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  
];

const ReviewSection = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
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
