import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function AddToCart({ product, stock }) {
  const [cartItems, setCartItems] = useContext(CartContext);

  function addToCart() {
    let isInCart = false;

    if (cartItems.length > 0) {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === product.id) {
          isInCart = true;
        }
      }
    }

    if (isInCart) {
      alert("The product is already in the cart");
    } else {
      product.qty = 1;
      setCartItems((cartItems) => [...cartItems, product]);
    }
  }

  return (
    <button className="addToCart" onClick={addToCart}>
      Add to cart
    </button>
  );
}
