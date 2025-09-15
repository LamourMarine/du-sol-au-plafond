import React, { useState } from "react";

interface HeaderProps {
  logoURL: string;
}

const Header: React.FC<HeaderProps> = ({ logoURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center md:justify-between">
          {/* Logo à gauche */}
          <img
            src={logoURL}
            alt="Logo de l'entreprise"
            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg mb-4 md:mb-0 -ml-2"
          />{" "}
          {/* Phrase centrée horizontalement */}
          <p className="text-lg md:text-2xl text-nav-text italic mb-2 md:mb-0 md:mr-auto text-center md:text-left">
            Du sol au plafond, un travail d’artisan.
          </p>
          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-12 text-gray-800 font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-amber-700 transition-colors duration-300"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-amber-700 transition-colors duration-300"
              >
                Galerie
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-amber-700 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Menu mobile (burger) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-200 focus:outline-none"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl px-6 py-4 space-y-3 text-amber-200 font-medium z-50">
            <li>
              <a
                href="#about"
                className="block hover:text-sky-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="block hover:text-sky-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Galerie
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-sky-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
