'use client'

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000F8F]">
      <div 
        className="max-w-screen-xl mx-auto px-4 py-3 
              flex flex-col md:flex-row 
              md:items-center md:justify-between"
      >
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="/" className="flex items-center space-x-2">
            <img src="images/logo.png" alt="Logo" className="w-12 h-auto invert"/>
            <h1 className="text-2xl md:text-3xl font-medium text-white font-poppins">
              LA TAZA
            </h1>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center 
                  text-white rounded-lg md:hidden 
                  hover:bg-[#1414B8] focus:outline-none focus:ring-2 focus:ring-[#1621A4]"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
              <path stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div 
          id="navbar-default"
          className={`${isOpen ? '' : 'hidden'} md:flex flex-col md:flex-row 
                md:items-center md:space-x-8 mt-2 md:mt-0
                text-white`}
        >
          <a href="/about" className="block py-2 px-3 rounded-sm hover:bg-[#1414B8] md:hover:bg-transparent md:hover:text-gray-300">
            Nosotros
          </a>
          <a href="#contact" className="block py-2 px-3 rounded-sm hover:bg-[#1414B8] md:hover:bg-transparent md:hover:text-gray-300">
            Contáctanos
          </a>
          <a href="/#favorites-section" className="block py-2 px-3 rounded-sm hover:bg-[#1414B8] md:hover:bg-transparent md:hover:text-gray-300">
            Productos Favoritos
          </a>
          <a href="/#subscription" className="block py-2 px-3 rounded-sm hover:bg-[#1414B8] md:hover:bg-transparent md:hover:text-gray-300">
            Subscripciones
          </a>
        </div>
      </div>
    </nav>
  );
}
