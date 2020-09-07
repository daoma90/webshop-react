import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";
import AddToCart from "./AddToCart";

export default function ProductDetail(props) {
  const productId = props.match.params.id;

  let [product, setProduct] = useState("");

  function fetchProduct() {
    fetch(
      `https://mock-data-api.firebaseio.com/e-commerce/products/${productId}.json`
    )
      .then((result) => result.json())
      .then((item) => {
        setProduct(item);
        console.log(item);
      });
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  function renderDetail() {
    if (product === "") {
      return <div></div>;
    } else {
      return (
        <div className="detail">
          <div className="detail__img-wrapper">
            <img
              className="detail__img"
              src={product.images[0].src.small}
            ></img>
          </div>
          <div className="detail-info">
            <h1 className="detail-info__title">{product.name}</h1>
            <p className="detail-info__desc">{product.description}</p>
            <div className="detail-info__price-stock">
              <p className="detail-info__price">{product.price} ;-</p>
              <p className="detail-info__stock">Stock: {product.stock}</p>
            </div>
            <div className="detail-info__rating">
              Rating: ({product.rating})
            </div>
          </div>
          <AddToCart product={product} stock={product.stock} />
          <div className="detail-reviews">
            <Reviews productId={productId} />
          </div>
        </div>
      );
    }
  }

  return renderDetail();
}
