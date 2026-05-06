import { createContext, useContext, useState, ReactNode } from "react";
import type { Role, Dish } from "./mock-data";

export type CartItem = { dish: Dish; qty: number };

type AppCtx = {
  role: Role;
  setRole: (r: Role) => void;
  cart: CartItem[];
  addToCart: (d: Dish) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const Ctx = createContext<AppCtx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("buyer");
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (d: Dish) =>
    setCart((c) => {
      const ex = c.find((i) => i.dish.id === d.id);
      if (ex) return c.map((i) => (i.dish.id === d.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { dish: d, qty: 1 }];
    });
  const updateQty = (id: string, qty: number) =>
    setCart((c) => c.map((i) => (i.dish.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const removeItem = (id: string) => setCart((c) => c.filter((i) => i.dish.id !== id));
  const clearCart = () => setCart([]);

  return (
    <Ctx.Provider value={{ role, setRole, cart, addToCart, updateQty, removeItem, clearCart }}>
      {children}
    </Ctx.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
};