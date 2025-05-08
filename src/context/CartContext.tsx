'use client';

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  Dispatch,
  ReactNode,
} from 'react';

/* ---------- Tipos ---------- */
export type Item = {
  id: string;
  name: string;
  price: number;
  image?: string;
  qty: number;
};

type State = { items: Item[] };

type Action =
  | { type: 'ADD'; payload: Item }
  | { type: 'REMOVE'; payload: string }
  | { type: 'CLEAR' }
  | { type: 'HYDRATE'; payload: State }; // 👈 nuevo

/* ---------- Reducer ---------- */
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const idx = state.items.findIndex(p => p.id === action.payload.id);
      if (idx > -1) {
        const items = [...state.items];
        items[idx].qty += action.payload.qty;
        return { items };
      }
      return { items: [...state.items, action.payload] };
    }
    case 'REMOVE':
      return { items: state.items.filter(p => p.id !== action.payload) };
    case 'CLEAR':
      return { items: [] };
    case 'HYDRATE':
      return action.payload; // reemplaza todo el estado
    default:
      return state;
  }
}

/* ---------- Contexto ---------- */
const CartContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

/* ---------- Provider ---------- */
export function CartProvider({ children }: { children: ReactNode }) {
  // 1️⃣  Siempre arranca vacío
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // 2️⃣  Cargar desde localStorage DESPUÉS de hidratar
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      dispatch({ type: 'HYDRATE', payload: JSON.parse(saved) });
    }
  }, []);

  // 3️⃣  Guardar cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

/* ---------- Hook ---------- */
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
};
