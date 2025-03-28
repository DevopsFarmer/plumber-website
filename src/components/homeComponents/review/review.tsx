"use client";

import { motion } from "framer-motion";
import ReviewCard from "./reviewCard";

const reviews = [
  {
    id: 1,
    name: "Kenton Smith",
    review:
      "Twice I have had a serious plumbing leaks that needed quick attention. They have shuffled their work load around and provided prompt service and got the job done each time. Thanks for being so helpful.",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 2,
    name: "Jason Pearls",
    review:
      "The team is professional, and their service is top-notch. They are prompt and efficient in fixing plumbing issues. Their expertise and attention to detail ensure a job well done. Came through for me when I really needed the job done :-)",
    rating: 4,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 3,
    name: "Ashton Polar",
    review:
      "We were very impressed with the quick service and professional service. Would recommend them. Definitely use them again. Great guys, easy to deal with even though they're so busy.",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 4,
    name: "Newman Polis",
    review:
      "What awesome service from the plumber they sent out, he took no short cuts, was timely fixed everything very professional job and he was happy well done SDA great job definitely be using you again.",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 5,
    name: "Ves James",
    review:
      "Had water/sewer backup at work today. Viper, and specifically Oswald arrived promptly and began working immediately. Amazing Service! Not only was he professional, but had everything up and running in no time at all. Five star service!!!",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
  {
    id: 6,
    name: "Charles Ruth",
    review:
      "I highly recommend them. I called for a clogged drain. He came same day, had great communication, and charged fairly. You can tell he's a hard worker and honest. He is skilled, honest, personable, communicative, and fair in his rates.",
    rating: 5,
    avatar: "/serviceImg/service/Ellipse 22.png",
  },
];

const ReviewSection = () => {
  return (
    <section className="relative p-6 md:px-20 sm:p-8 bg-[#F9F7E9] items-center overflow-hidden">
      {/* Section Title with Animation */}
      <motion.div
        className="container px-6 flex items-center gap-4 mt-6 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-[#3E180E] whitespace-nowrap">
          Reviews
        </h2>
        <div className="bg-[#D46A34] flex-grow h-[0.5px]"></div>
      </motion.div>

      {/* Animated Review Cards */}
      <div className="container pt-10 pb-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {reviews.map((review, index) => (
          <motion.div
            key={`${review.id}-${index}`}
            className={`${index % 3 === 1 ? "mt-[30px]" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ReviewCard {...review} />
          </motion.div>
        ))}
      </div>

      {/* Decorative SVG Background */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="40%" style={{ stopColor: "#802614", stopOpacity: 1 }} />
              <stop offset="60%" style={{ stopColor: "#A43C28", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            fillOpacity="0.85"
            d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ReviewSection;
