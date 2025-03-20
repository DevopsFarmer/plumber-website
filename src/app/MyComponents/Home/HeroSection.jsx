"use client";

import Button from "../Home/botton";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row h-screen p-12">
      <div className="flex-1 flex flex-col justify-center space-y-4 h-1/2 md:h-full">
        <h1 className="text-3xl font-bold">Hi, I am Lorem Ipsum.</h1>
        <p className="text-lg text-gray-700">
          "I'm a full-stack web developer with a focus on building responsive and
          user-friendly web applications. This portfolio highlights my proficiency
          in front-end technologies like React and back-end frameworks like Node.js."
        </p>
        <Button text="Resume" />
      </div>
      <div className="flex-1 h-1/2 md:h-full flex items-center justify-center">
        <div className="w-full h-full bg-gray-800"> </div>
      </div>
    </section>
  );
}