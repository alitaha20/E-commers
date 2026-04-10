import { useContext } from "react";
import { cartContext } from "./CartContextProvider";

export function useCart() {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("useCart لازم يتستخدم جوه CartContextProvider");
  }

  return context;
}