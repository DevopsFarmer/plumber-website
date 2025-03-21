"use client";

export default function Footer() {
  return (
    <footer className="bg-[#FCF8E8] flex justify-between items-center p-6">
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-3">
        <img 
          src="/aboutImg/image 195.png" // Update this path as per your actual image location
          alt="Company Logo" 
          className="w-24 h-24 object-contain"
        />
        <div>
          <h2 className="text-[#3E180E] font-bold text-lg">
            Central Territory Plumbing Pty Ltd
          </h2>
          <p className="text-[#3E180E] text-sm">
            Plumbing solutions in the Territory
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-[#3E180E] text-sm">
        Copyright (C) 2025
      </p>
    </footer>
  );
}