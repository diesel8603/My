import React from "react";

const Navbar = () => (
  <nav className="fixed w-full flex justify-between items-center p-4 bg-gray-800 z-50 shadow-md">
    <h1 className="text-lg font-bold">İbrahim Bulut</h1>
    <ul className="flex gap-4 text-sm sm:text-base">
      <li><a href="#hero" className="hover:text-blue-400">Ana Sayfa</a></li>
      <li><a href="#about" className="hover:text-blue-400">Hakkımda</a></li>
      <li><a href="#projects" className="hover:text-blue-400">Projeler</a></li>
      <li><a href="#contact" className="hover:text-blue-400">İletişim</a></li>
    </ul>
  </nav>
);

export default Navbar;
