import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function ShowQuantity({ index }) {
  const [cartItems, setCartItems] = useContext(CartContext);

  return <p className="qty">{cartItems[index].qty}</p>;
}
