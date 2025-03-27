"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface StepCardProps {
  image: string;
  title: string;
  highlightedText: string;
  description: string;
  reverse?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  image,
  title,
  highlightedText,
  description,
  reverse,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-6 p-6 rounded-lg`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src={image} alt={title} className="rounded-lg shadow-2xl" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full md:w-1/2 text-center md:text-left mx-10"
      >
        <h3 className="text-3xl text-black font-semibold">
          {title}{" "}
          <span className="bg-[#D46A34] text-center text-white px-2 py-1 rounded">
            {highlightedText}
          </span>
        </h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default StepCard;
