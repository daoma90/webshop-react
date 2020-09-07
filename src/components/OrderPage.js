import React, { useContext, useRef } from "react";
import { CartContext } from "../contexts/CartContext";
import ShowQuantity from "./ShowQuantity";
import TotalPrice from "./TotalPrice";
import { Link } from "react-router-dom";

export default function OrderPage() {
  const [cartItems, setCartItems] = useContext(CartContext);

  const postURL =
    "https://mock-data-api.firebaseio.com/e-commerce/orders/David.json";

  const firstName = useRef();
  const lastName = useRef();
  const adress = useRef();
  const zip = useRef();
  const city = useRef();

  function postOrder() {
    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      adress: adress.current.value,
      zip: zip.current.value,
      city: city.current.value,
      products: cartItems,
      total: <TotalPrice />,
    };

    fetch(postURL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then(() => setCartItems([]));
  }

  return (
    <div className="order-page">
      <div className="order-input">
        <h2 className="order-input__header">Shipping info</h2>
        <div className="order-input__name">
          <input
            type="text"
            className="order-input__first-name"
            placeholder="First Name"
            ref={firstName}
          ></input>
          <input
            type="text"
            className="order-input__last-name"
            placeholder="Last Name"
            ref={lastName}
          ></input>
        </div>
        <input
          type="text"
          className="order-input__adress"
          placeholder="Adress"
          ref={adress}
        ></input>
        <div className="order-input__zip-city">
          <input
            type="text"
            className="order-input__zip"
            placeholder="Zip"
            ref={zip}
          ></input>
          <input
            type="text"
            className="order-input__city"
            placeholder="City"
            ref={city}
          ></input>
        </div>
        <Link
          className="order-input__submit"
          onClick={postOrder}
          to={{ pathname: "/" }}
        >
          ORDER
        </Link>
      </div>
      <div className="order-info">
        <h2>Order</h2>
        <div className="order-products">
          {Object.entries(cartItems).map((item) => {
            return (
              <div className="order-item">
                <div className="order-item__info">
                  <div className="order-item__title-qty">
                    <h4 className="order-item__title">{item[1].name}&nbsp;</h4>

                    <p className="order-item__qty"> x {item[1].qty}&nbsp;</p>
                    <p className="order-item__price"> á {item[1].price} ;-</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="total-price">TOTAL: {<TotalPrice />} ;-</p>
      </div>
    </div>
  );
}
