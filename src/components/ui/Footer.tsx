"use client";
import React, { useState } from 'react';

export default function Footer () {
  return (
      <footer className="bg-[#000F8F] w-full p-8 lg:pl-20 lg:pr-20 text-white">
        <h1 className="font-bold text-center text-2xl w-full mb-5">LA TAZA</h1>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 w-full gap-10">
          {/* Newsletter */}
          <div className="flex items-center justify-center lg:col-span-2 md:col-span-2 text-center lg:text-left">
            <div className="w-full">
              <h2 className="font-bold text-4xl">Interesado para más?</h2>
              <p className="font-extralight mt-2 text-xs antialiased">
                Obtén vista anticipada de nuevos elementos del menú, invitaciones a clases y promociones.
              </p>
              <form method="post" className="mt-4">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu correo"
                  className="p-3 w-full border rounded-full placeholder-white placeholder:font-extralight placeholder:text-sm"
                />
                <button type="submit" className="email-button mt-2">
                  SUSCRIBIRSE
                </button>
              </form>
              <div className="flex items-center justify-center lg:justify-start w-full mt-15 space-x-5">
                {[
                  { src: 'social-media/instagram-logo.webp', alt: 'Instagram Logo' },
                  { src: 'social-media/facebook-logo.webp',  alt: 'Facebook Logo'  },
                  { src: 'social-media/twitter-logo.webp',   alt: 'Twitter Logo'   },
                  { src: 'social-media/youtube-logo.webp',   alt: 'YouTube Logo'   },
                ].map((icon) => (
                  <img
                    key={icon.alt}
                    src={`images/${icon.src}`}
                    alt={icon.alt}
                    className="w-11"
                  />
                ))}
              </div>
            </div>
          </div>
    
          {/* Link Sections */}
          <div className="flex flex-col mt-10 text-center lg:text-left text-white">
            <span className="font-bold mb-2">TIENDA</span>
            <a href="/shop">Café</a>
            <a href="#subscription">Subscripciones</a>
            <a href="#subscription">Subscripciones Regaladas</a>
          </div>
    
          <div className="flex flex-col mt-10 text-center lg:text-left text-white">
            <span className="font-bold mb-2">NOSOTROS</span>
            <a href="/about">Nosotros</a>
            <a href="/about">Blog</a>
            <a href="#">Centros de Entrenamiento</a>
            <a href="#">Reportes de Transparencia</a>
            <a href="#">Carreras</a>
            <a href="#">Eventos</a>
          </div>
    
          <div id="contact" className="flex flex-col mt-10 text-center lg:text-left text-white">
            <span className="font-bold mb-2">CONTÁCTANOS</span>
            <a href="tel:+529986537586">+52 998 653 7586</a>
            <a href="mailto:mail@lataza.com">mail@lataza.com</a>
          </div>
    
          <div className="flex flex-col mt-10 text-center lg:text-left text-white">
            <span className="font-bold mb-2">MAYOREO</span>
            <a href="#">Login Empresas</a>
            <a href="#">Regalos Corporativos</a>
            <a href="#">Convertirse en Socio</a>
          </div>
        </div>
    
        {/* Bottom Links */}
        <div className="flex flex-col items-center justify-center mt-10">
          <ul className="flex font-extralight text-white">
            <li className="border-r border-white px-4">Políticas de Privacidad</li>
            <li className="border-r border-white px-4">Términos y Condiciones</li>
            <li className="px-4">© La Taza 2025</li>
          </ul>
        </div>
      </footer>
  );
}