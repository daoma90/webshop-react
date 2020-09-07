import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function TotalPrice() {
  const [cartItems, setCartItems] = useContext(CartContext);

  let itemTotal = 0;

  cartItems.forEach((item) => {
    itemTotal += item.qty * item.price;
  });

  return parseInt(itemTotal);
}
