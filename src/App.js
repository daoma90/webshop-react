import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import StartPage from "./components/StartPage";
import ProductDetail from "./components/ProductDetail";
import { CartContext } from "./contexts/CartContext";
import Cart from "./components/Cart";
import OrderPage from "./components/OrderPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function saveToLocal() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  function getFromLocal() {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      let cartFromLocal = JSON.parse(localStorage.getItem("cart"));
      setCartItems(cartFromLocal);
    }
  }

  useEffect(() => {
    getFromLocal();
  }, []);

  useEffect(() => {
    saveToLocal();
  }, [cartItems]);

  return (
    <div className="App">
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <Switch>
          <Route path="/order">
            <Layout>
              <OrderPage />
            </Layout>
          </Route>

          <Route
            path="/products/:id"
            render={(props) => {
              return (
                <Layout>
                  <ProductDetail {...props} />
                </Layout>
              );
            }}
          ></Route>

          <Route path="/">
            <Layout>
              <StartPage />
            </Layout>
          </Route>
        </Switch>
      </CartContext.Provider>
    </div>
  );
}

export default App;
