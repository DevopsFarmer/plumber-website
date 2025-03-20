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
      <nav className="flex  gap-6">
        <a href="home" className="text-[#3E180E] dark:text-[#3E180E]">HOME</a>
        <a href="about" className="text-[#3E180E] dark:text-[#3E180E]">ABOUT</a>
        <a href="services" className="text-[#3E180E] dark:text-[#3E180E]">SERVICES</a>
        <a href="contact" className="text-[#3E180E] dark:text-[#3E180E]">CONTACT</a>
      </nav>
    </header>
  );
}
