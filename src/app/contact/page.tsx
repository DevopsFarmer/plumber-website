"use client";

import { motion } from "framer-motion";
import ContactForm from "./Contactpage";

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white py-12 mt-20 px-6 lg:px-24"
    >
      {/* Header Section */}
      <section className="text-center mb-12">
        <div className="flex items-center w-full gap-4">
          {/* Left Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#D46A34] flex-grow h-[2px] origin-left"
          ></motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl font-bold text-[#3E180E] text-center whitespace-nowrap"
          >
            Get in Touch?
          </motion.h2>

          {/* Right Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#D46A34] flex-grow h-[2px] origin-right"
          ></motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[#3F170F] mt-4 max-w-2xl mx-auto"
        >
          Get in touch with us for reliable plumbing services in Alice Springs.
          Whether it’s repairs, installations, or maintenance, our experienced
          team is here to help.
        </motion.p>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="contactImg\vecteezy_plumbing-services-banner-or-advertising-poster-template-with_25754781 1.png"
            alt="Plumbing Service"
            className="max-w-md w-full"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.main>
  );
}
