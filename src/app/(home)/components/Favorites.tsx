export default function Favorites () {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-stretch justify-center w-full">
      {/* Nescafé Taster's Choice Gourmet Roast */}
      <div className="flex flex-col items-center justify-center border w-full text-center">
        <div className="bg-[#A9AE36] flex items-center justify-center w-full">
          <img
            src="images/product-images/tasters-choice.png"
            alt="Taster's Choice"
            className="w-1/2"
          />
        </div>
        <div className="flex-1 text-center">
          <br />
          <h1 className="font-bold text-2xl">
            Nescafé Taster's Choice Gourmet Roast
          </h1>
          <br />
          <p className="font-light italic">afrutadas-duranzo</p>
          <br />
          <p className="font-light text-sm">MOLIENDA MEDIA</p>
        </div>
        <img
          src="images/4-star-rating.png"
          alt="4 Star Rating"
          className="w-1/4"
        />
        <a href="/shop" className="justify-center items-center flex w-80">
          <button className="shadow-button mb-8 font-bold" role="button">
            COMPRAR
          </button>
        </a>
      </div>

      {/* Juan Valdez Sierra Nevada */}
      <div className="flex flex-col items-center justify-center border w-full text-center">
        <div className="bg-[#A893DE] flex items-center justify-center w-full">
          <img
            src="images/product-images/juan-valdez-sierra-nevada.png"
            alt="Juan Valdez Sierra Nevada"
            className="w-1/2"
          />
        </div>
        <div className="flex-1 text-center">
          <br />
          <h1 className="font-bold text-2xl">Juan Valdez Sierra Nevada</h1>
          <br />
          <p className="font-light italic">
            chocolate negro-caramelo-nuez tostada
          </p>
          <br />
          <p className="font-light text-sm">MOLIENDA MEDIA</p>
        </div>
        <img
          src="images/5-star-rating.png"
          alt="5 Star Rating"
          className="w-1/4"
        />
        <a href="/shop" className="justify-center items-center flex w-80">
          <button className="shadow-button mb-8 font-bold" role="button">
            COMPRAR
          </button>
        </a>
      </div>

      {/* Café Garat Gourmet */}
      <div className="flex flex-col items-center justify-center border w-full text-center">
        <div className="bg-[#A1CAF1] flex items-center justify-center w-full">
          <img
            src="images/product-images/cafe-garat-molido.png"
            alt="Café Garat Gourmet"
            className="w-1/2"
          />
        </div>
        <div className="flex-1 text-center">
          <br />
          <h1 className="font-bold text-2xl">Café Garat Gourmet</h1>
          <br />
          <p className="font-light italic">chocolate-caramelo</p>
          <br />
          <p className="font-light text-sm">MOLIENDA MEDIA</p>
        </div>
        <img
          src="images/5-star-rating.png"
          alt="5 Star Rating"
          className="w-1/4"
        />
        <a href="/shop" className="justify-center items-center flex w-80">
          <button className="shadow-button mb-8 font-bold" role="button">
            COMPRAR
          </button>
        </a>
      </div>

      {/* Café Garat Avellana */}
      <div className="flex flex-col items-center justify-center border w-full text-center">
        <div className="bg-[#D8C3B1] flex items-center justify-center w-full">
          <img
            src="images/product-images/garat-avellana.png"
            alt="Café Garat Avellana"
            className="w-1/2"
          />
        </div>
        <div className="flex-1 text-center">
          <br />
          <h1 className="font-bold text-2xl">Café Garat Avellana</h1>
          <br />
          <p className="font-light italic">avellana</p>
          <br />
          <p className="font-light text-sm">MOLIENDA MEDIA</p>
        </div>
        <img
          src="images/5-star-rating.png"
          alt="5 Star Rating"
          className="w-1/4"
        />
        <a href="/shop" className="justify-center items-center flex w-80">
          <button className="shadow-button mb-8 font-bold" role="button">
            COMPRAR
          </button>
        </a>
      </div>
    </section>
  );
}