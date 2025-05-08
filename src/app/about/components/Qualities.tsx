export default function Qualities () {
  return (
    <section className="grid lg:grid-cols-3 grid-cols-1 border-b-2">
      <div className="flex flex-col items-center justify-center p-5 lg:p-10">
        <img src="images/drawings/magnifying-glass.webp" alt="MagniFying Glass" className="w-1/4"/>
        <h1 className="text-2xl lg:text-3xl font-bold">CALIDAD</h1>
        <p className="text-center mt-5 font-light">Nosotros ponemos el estandár para los mejores cafés al impulsar la innovación en cada paso de la cadena de suministro.</p>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <img src="images/drawings/coffee-plant-vertical.webp" alt="Coffee Plant Vertical" className="w-1/4"/>
        <h1 className="text-2xl lg:text-3xl font-bold mt-1">SUSTENTABILIDAD</h1>
        <p className="text-center mt-5 font-light">Nosotros tomamos accion para invertir en el medio ambiente y en la gente por medio de la colaboración, comunicación y transparencia.</p>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <img src="images/drawings/books.webp" alt="Books" className="w-1/4"/>
        <h1 className="text-2xl lg:text-3xl font-bold">EDUCACIÓN</h1>
        <p className="text-center mt-5 font-light">Nosotros cultivamos e intercambiamos el conocimiento para darle poder a la gente y crear experiencias en tu taza extraordinarias</p>
      </div>
    </section>
  );
}