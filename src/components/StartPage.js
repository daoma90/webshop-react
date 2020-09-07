import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function StartPage() {
  let [productList, setProductList] = useState({});

  function fetchProducts() {
    fetch("https://mock-data-api.firebaseio.com/e-commerce/products.json")
      .then((result) => result.json())
      .then((items) => {
        setProductList(items);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="startpage__title">Products</h1>
      <div className="product-list">
        {Object.entries(productList).map((item) => {
          return <ProductCard id={item[0]} product={item[1]} />;
        })}
      </div>
    </div>
  );
}
