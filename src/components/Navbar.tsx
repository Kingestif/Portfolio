import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar flex justify-between items-center text-xl max-sm:text-base">
      {/* Logo */}
      <a href="#hero" className="text-[#6C63FF] text-3xl font-medium max-sm:text-xl">Portfolio</a>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-5 text-white/80">
        <a href="#hero" className="hover:text-[#6C63FF] duration-300">Home</a>
        <a href="#experience" className="hover:text-[#6C63FF] duration-300">Experience</a>
        <a href="#projects" className="hover:text-[#6C63FF] duration-300">Projects</a>
        <a href="#contact" className="hover:text-[#6C63FF] duration-300">Contacts</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-5 bg-gray-800/95 rounded-lg flex flex-col gap-4 p-5 text-white/80 sm:hidden">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-[#6C63FF]">Home</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#6C63FF]">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#6C63FF]">Contacts</a>
        </div>
      )}
    </div>
  );
}
