"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <header className="flex justify-between items-center p-6 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo Image */}
      <img 
        src="/aboutImg/image 195.png" 
        alt="Logo" 
        className="w-24 h-24 object-contain rounded-lg"
      />

      {/* Navigation */}
      <nav className="flex gap-6">
        <a href="home" className="text-black dark:text-white">HOME</a>
        <a href="about" className="text-black dark:text-white">ABOUT</a>
        <a href="services" className="text-black dark:text-white">SERVICES</a>
        <a href="contact" className="text-black dark:text-white">CONTACT</a>
      </nav>

      {/* Dark Mode Toggle Button */}
      <button 
        onClick={toggleDarkMode} 
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800 dark:text-gray-100" />}
      </button>
    </header>
  );
}
