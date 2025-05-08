'use client';
import { createContext, useContext, useReducer, useEffect } from "react";

type Item = { id: string; name: string; price: number; image?: string; qty: number };
type State = { items: Item[] };

type Action =
  | { type: "ADD"; payload: Item }          // suma 1 o agrega nuevo
  | { type: "REMOVE"; payload: string }     // borra por id
  | { type: "CLEAR" };

const CartContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const i = state.items.findIndex(p => p.id === action.payload.id);
      if (i > -1) {
        const items = [...state.items];
        items[i].qty += action.payload.qty;
        return { items };
      }
      return { items: [...state.items, action.payload] };
    }
    case "REMOVE":
      return { items: state.items.filter(p => p.id !== action.payload) };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] }, init => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : init;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
};
