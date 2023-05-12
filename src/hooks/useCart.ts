import { useContext } from "react";
import { CartContext } from "../contexts/CoffeesContext";

export function useCart() {
  const context = useContext(CartContext);
  return context;
}