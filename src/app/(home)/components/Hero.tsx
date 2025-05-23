import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#F59372] flex flex-wrap w-full justify-start items-center lg:p-40 sm:p-0 overflow-hidden relative">
      <video
        className="hidden lg:block w-1/3 h-[400px] rounded-tr-[400px] overflow-hidden"
        autoPlay
        muted
        loop
      >
        <source src="/videos/coffee-making.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col max-w-screen-xl mx-auto space-y-10 items-center justify-center lg:w-1/2 sm:w-full p-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight text-center">
          Un café confiable,<br />
          <span>desde la semilla</span><br />
          <span>hasta la taza</span><br />
        </h1>
        <a href="/shop">
          <button className="arrow-button flex items-center space-x-2">
            <span className="text-stroke-2">Comprar Café</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 74 74"
              height="34"
              width="34"
            >
              <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37" />
              <path
                fill="black"
                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
              />
            </svg>
          </button>
        </a>
      </div>

      <img
        src="/images/drawings/coffee-splitter.png"
        alt="coffee splitter"
        className="absolute bottom-0 -right-20 w-xl lg:block hidden"
      />
    </section>
  );
}
