import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "../contexts/CartContext";

export default function LayoutSimple({ children }) {
  const [CartItems, setCartItems] = useContext(CartContext);

  /* function cartItemsQty() {
    return 
  } */

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__shop-name">
          <p className="navbar__random">
            Food and <span className="navbar__stuff">Stuff</span>
          </p>
        </div>
        <div className="navbar__home">
          <Link className="navbar__button" to="/">
            Home
          </Link>
        </div>
        <div className="navbar__cart">
          <Cart />
          <p className="navbar__cart-qty">({CartItems.length})</p>
        </div>
      </nav>
      {children}
    </div>
  );
}
