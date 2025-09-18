import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Copyright */}
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; 2025 Lamour Nicolas – Du Sol Au Plafond
        </p>
        {/* Liens légaux */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-amber-400 text-sm">
          <Link to="/mentions-legales" className="hover:underline">
            Mentions légales
          </Link>
          <a href="/#contact" className="hover:underline">
            Contact
          </a>{" "}
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
