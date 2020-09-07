import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import TotalPrice from "./TotalPrice";
import ShowQuantity from "./ShowQuantity";

export default function Cart() {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement("#root");

  return (
    <div className="navbar__cart-modal">
      <div
        className="navbar__cart-btn"
        onClick={() => setModalIsOpen(true)}
      ></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "#3a393991",
          },
        }}
      >
        <div className="cart">
          <h2 className="cart__header">Shopping cart</h2>
          <div className="cart__wrapper">
            {Object.entries(cartItems).map((item) => {
              const index = cartItems.findIndex(
                (product) => product.id == item[1].id
              );
              function qtyUp() {
                let newCartItems = [...cartItems];
                if (newCartItems[index].stock > newCartItems[index].qty) {
                  newCartItems[index].qty += 1;
                  setCartItems(newCartItems);
                } else {
                  alert("Not enough stock");
                }
              }
              function qtyDown() {
                let newCartItems = [...cartItems];
                if (newCartItems[index].qty > 0) {
                  newCartItems[index].qty -= 1;
                  setCartItems(newCartItems);
                }
              }
              return (
                <div className="cart-product">
                  <div className="cart-product__img-wrapper">
                    <img
                      className="cart-product__img"
                      src={item[1].images[0].src.small}
                    ></img>
                  </div>
                  <div className="cart-product__info">
                    <h4 className="cart-item__title">{item[1].name}</h4>
                    <div className="cart-item__qty-price">
                      <div className="cart-item__qty-wrapper">
                        <button onClick={qtyDown} className="cart-item__qty">
                          &lt;
                        </button>
                        <ShowQuantity index={index} />
                        <button onClick={qtyUp} className="cart-item__qty">
                          &gt;
                        </button>
                      </div>
                      <p className="cart-item__price">{item[1].price} ;-</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="total-price">TOTAL: {<TotalPrice />} ;-</p>
          <Link className="cart__order" to="/order">
            <button
              onClick={() => setModalIsOpen(false)}
              className="cart__order-btn"
            >
              ORDER
            </button>
          </Link>
          <button
            onClick={() => {
              setCartItems([]);
            }}
            className="cart__clear-btn"
          >
            CLEAR CART
          </button>
          <button onClick={() => setModalIsOpen(false)} className="cart__close">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
