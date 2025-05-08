export default function Notices () {
  return (
    <section className="bg-[#F3F1EB] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center w-full">
      <div className="width-50 justify-center items-center flex flex-row gap-4 p-10">
        <img src="images/drawings/coffee-plant.avif" alt="Coffee Plant" className="w-1/4"/>
        <p className="text-1xl">Fuentes sustentables</p>
      </div>
      <div className="width-50 justify-center items-center flex flex-row gap-4 p-10">
        <img src="images/drawings/coffee-spoon.avif" alt="Coffee Spoon" className="w-1/4"/>
        <p>Calidad de producto</p>
      </div>
      <div className="width-50 justify-center items-center flex flex-row gap-4 p-10">
        <img src="images/drawings/b-corp-logo.avif" alt="B Corp Logo" className="w-1/4"/>
        <p>Empresa certificada</p>
      </div>
      <div className="width-50 justify-center items-center flex flex-row gap-4 p-10">
        <img src="images/drawings/coffee-bag.avif" alt="Coffee Bag" className="w-1/4"/>
        <p>Empaque biodegradable</p>
      </div>
    </section>
  );
}