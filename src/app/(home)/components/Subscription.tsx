export default function Subscription () {
  return (
    <section className="bg-[#FBC8B3] grid lg:grid-cols-2 grid-cols-1 w-full divide-x-1 divide-black" id="subscription">
      {/* Primera División */}
      <div className="flex flex-col items-center justify-bottom pt-10 pr-10 pl-10">
        <h1 className="text-center text-5xl font-bold mt-20">
          Suscribete & ahorra
        </h1>
        <p className="text-center mt-6">
          El café de más alta calidad por parte de nuestra red local de productores,
          tostado a la perfección y enviado directo a tu casa en cualquier horario
        </p>

        <div className="flex flex-col w-3/4 mt-10">
          <ul className="flex flex-col space-y-5">
            <li className="font-bold flex gap-10 items-center">
              <span className="outlined-text text-3xl">01</span>
              Escoge tu café
            </li>
            <hr className="bg-black w-full mt-2" />
            <li className="font-bold flex gap-8 items-center">
              <span className="outlined-text text-3xl">02</span>
              Selecciona la frecuencia de envío
            </li>
            <hr className="bg-black w-full mt-2" />
            <li className="font-bold flex gap-7 items-center">
              <span className="outlined-text text-3xl">03</span>
              Disfruta!
            </li>
          </ul>
        </div>

        {/* <button className="subscription-button mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            />
          </svg>
          <span className="text">EMPEZAR UNA SUBSCRIPCION</span>
          <span className="circle" />
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            />
          </svg>
        </button> */}

        <hr className="bg-black w-full mt-15" />

        {/* Carrusel */}
        <div className="relative w-full max-w-3xl overflow-hidden">
          <div className="flex animate-scroll">
            {[
              {
                img: 'drawings/coffee-beans-drawing.webp',
                alt: 'Coffee Beans Drawing',
                text: 'Cambia tu café cuando sea',
              },
              {
                img: 'drawings/calendar.png',
                alt: 'Calendar',
                text: 'Cambia el tiempo y fechas de envío',
              },
              {
                img: 'drawings/x.png',
                alt: 'X Mark',
                text: 'Cancela en cualquier momento',
              },
              {
                img: 'drawings/truck.png',
                alt: 'Truck',
                text: 'Envio gratis arriba de 600 MXN',
              },
            ].map((slide, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center gap-4 p-10 w-80">
                <img
                  src={`images/${slide.img}`}
                  alt={slide.alt}
                  className="w-1/4"
                />
                <p className="text-1xl w-full">{slide.text}</p>
              </div>
            ))}
            {/* Repetir slides para looping */}
            {Array(4)
              .fill(0)
              .map((_, idx) => {
                const slide = [
                  {
                    img: 'drawings/coffee-beans-drawing.webp',
                    alt: 'Coffee Beans Drawing',
                    text: 'Cambia tu café cuando sea',
                  },
                  {
                    img: 'drawings/calendar.png',
                    alt: 'Calendar',
                    text: 'Cambia el tiempo y fechas de envío',
                  },
                  {
                    img: 'drawings/x.png',
                    alt: 'X Mark',
                    text: 'Cancela en cualquier momento',
                  },
                  {
                    img: 'drawings/truck.png',
                    alt: 'Truck',
                    text: 'Envio gratis arriba de 600 MXN',
                  },
                ][idx];
                return (
                  <div key={`rep-${idx}`} className="flex-shrink-0 flex items-center gap-4 p-10 w-80">
                    <img
                      src={`images/${slide.img}`}
                      alt={slide.alt}
                      className="w-1/4"
                    />
                    <p className="text-1xl">{slide.text}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Segunda División */}
      <div className="flex flex-col items-center p-10 justify-center">
        <img
          src="images/coffee-boxing.webp"
          alt="Coffee Boxing"
          className="w-3/4 h-100 object-cover object-center"
        />
        <p className="self-start mt-5 font-light text-left uppercase">
          Dos bolsas de 340 gramos Counter Culture
        </p>
        <h3 className="self-start mt-4 font-bold text-left text-3xl overflow-hidden">
          Subscripción de Counter Culture - Dos Bolsas
        </h3>
        <hr className="bg-black w-full mt-5" />
        <p className="mt-5 font-light">
          Acompáñanos en una experiencia que destaca la naturaleza estacional del café. Disfruta de una variedad
          cambiante de cafés escogidos con esmero de parte de nuestros productores de confianza.
        </p>
        <hr className="bg-black w-full mt-5" />
        {/* <button className="subscription-button mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            />
          </svg>
          <span className="text">SUBSCRIBIRSE AHORA</span>
          <span className="circle" />
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            />
          </svg>
        </button> */}
      </div>
    </section>
  );
}