"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
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
    </header>
  );
}
