import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { state, dispatch } = useCart();
  const totalItems = state.items.reduce((s, i) => s + i.qty, 0);
  const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative cursor-pointer">
          <ShoppingCart className="text-white" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-xs text-white rounded-full px-[6px]">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full max-w-sm flex flex-col">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        {/* lista de ítems */}
        <div className="flex-1 overflow-y-auto space-y-6 py-4">
          {state.items.map(p => (
            <div key={p.id} className="flex gap-4">
              <img src={p.image} className="w-16 h-16 object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm">${p.price} × {p.qty}</p>
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: p.id })}
                className="text-red-600"
              >
                ✕
              </button>
            </div>
          ))}

          {state.items.length === 0 && (
            <p className="text-center text-gray-500">Tu carrito está vacío</p>
          )}
        </div>

        {/* subtotal + checkout */}
        <div className="border-t pt-4">
          <div className="flex justify-between font-bold mb-4">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button
            disabled={state.items.length === 0}
            className="w-full bg-black text-white py-3 rounded disabled:opacity-40"
          >
            CHECKOUT
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
