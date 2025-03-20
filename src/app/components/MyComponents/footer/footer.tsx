"use client";

export default function footer() {
  return (
    <footer className="bg-[#FCF8E8] flex justify-between items-center p-6">
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-3">
        <img 
          src="/aboutImg/logo.png" // Update this path as per your actual image location
          alt="Company Logo" 
          className="w-24 h-24 object-contain"
        />
        <div>
          <h2 className="text-brown-700 font-bold text-lg">
            Central Territory Plumbing Pty Ltd
          </h2>
          <p className="text-brown-600 text-sm">
            Plumbing solutions in the Territory
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-brown-700 text-sm">
        Copyright (C) 2025
      </p>
    </footer>
  );
}
