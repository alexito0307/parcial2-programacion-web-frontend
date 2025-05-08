'use client';
import { useCart } from "@/context/CartContext";

interface CoffeeCardProps {
  id: string;
  name: string;
  notas: string;
  roast: string;
  precio: string;
  bgColor?: string;
  image?: string;
  characteristic?: string;
}

export default function CoffeeCard({ id, name, notas, roast, precio, bgColor, image, characteristic }: CoffeeCardProps) {
  const { dispatch } = useCart();
  return (
    <div className="flex flex-col items-start justify-center border w-full p-5">
      <div className="flex items-center justify-center w-full h-58" style={{ backgroundColor:  bgColor }}>
        <img
          src={image}
          alt="Coffee Image"
          className="h-full"
        />
      </div>
      <div className="flex-1 w-full text-start">
        <br />
        <p className="text-xs uppercase tracking-widest font-semibold">{characteristic}</p>
        <br />
        <div className="grid grid-cols-5 items-baseline justify-between w-full">
          <h1 className="font-bold text-2xl col-span-4">
            {name}
          </h1>
          <h1 className="font-bold text-2xl text-end">${precio}</h1>
        </div>
        
        <br />
        <p className="font-light italic">{notas}</p>
        <br />
        <p className="font-light text-sm">{roast}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full"> 
        <img
          src="images/5-star-rating.png"
          alt="5 Star Rating"
          className="w-1/4"
        />
        <button 
          className="shadow-button mb-8 font-bold" 
          onClick={() =>
            dispatch({
              type: "ADD",
              payload: {
                id,
                name,
                price: Number(precio),
                image,
                qty: 1,
              },
            })
          }
        >
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  )
}
