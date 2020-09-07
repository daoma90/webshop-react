import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

export default function ProductCard({ id, product }) {
  return (
    <div className="product" key={id}>
      <div className="product-wrapper">
        <Link className="product__link" to={`/products/${id}`}>
          <div className="product__img-wrapper">
            <img
              className="product__img"
              src={product.images[0].src.small}
            ></img>
          </div>
        </Link>
        <div className="product__info-wrapper">
          <h3 className="product__info-title">{product.name}</h3>
          <p className="product__info-desc">
            {product.description.slice(0, 60) + "..."}
          </p>
          <p className="product__info-price">{product.price} ;-</p>
        </div>
        <AddToCart product={product} stock={product.stock} />
      </div>
    </div>
  );
}
