import React, { useState } from "react";

interface HeaderProps {
  logoURL: string;
}

const Header: React.FC<HeaderProps> = ({ logoURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/*
      <div className="relative bg-[#E6D1C6] p-8">
      </div> */}
      {/* Header principal */}
      {/*
      <div className="relative bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white py-12 shadow-lg">
        <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
          {/* Logo */}

      {/* Nom de l'entreprise */}

      {/*
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Du Sol Au Plafond
          </h1>
          */}

      {/* Phrase d'accroche */}

      {/*
          <p className="text-lg md:text-2xl text-gray-100 mt-4 italic">
            Du sol au plafond, un travail d’artisan.
          </p>
        </div>
      </div> 
      */}

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between">
          {/* Logo à gauche */}
          <img
            src={logoURL}
            alt="Logo de l'entreprise"
            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg mb-4 md:mb-0 -ml-2"
          />{" "}
          {/* Phrase centrée horizontalement */}
          <p className="text-lg md:text-2xl text-nav-text italic mb-4 md:mb-0 md:mr-auto text-center md:text-left">
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
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isOpen && (
          <ul className="md:hidden bg-white shadow-inner px-4 py-2 space-y-2 text-gray-800 font-medium">
            <li>
              <a
                href="#about"
                className="block hover:text-sky-600 transition-colors"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="block hover:text-sky-600 transition-colors"
              >
                Galerie
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-sky-600 transition-colors"
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
