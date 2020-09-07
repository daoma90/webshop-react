import React, { useState, useEffect } from "react";

export default function Reviews({ productId }) {
  const [reviews, setReviews] = useState({});

  function fetchReviews() {
    fetch(
      `https://mock-data-api.firebaseio.com/e-commerce/reviews/${productId}.json`
    )
      .then((result) => result.json())
      .then((item) => {
        setReviews(item);
      });
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  if (reviews === null) {
    return (
      <div className="review">
        <h3 className="review__header">Reviews</h3>
        <p className="review__empty">There are no reviews for this product</p>
      </div>
    );
  } else {
    return (
      <div className="review">
        <p className="review__header">Reviews</p>

        {Object.entries(reviews).map((item) => {
          return (
            <div className="review__wrapper">
              <p className="review__title">{item[1].title}</p>
              <p className="review__desc">{item[1].description}</p>
              <div className="review__rating-wrapper">
                <p className="review__rating-rate">{item[1].rating}/5</p>
              </div>
              <div className="review__author">
                <p className="review__name">{item[1].author.name}</p>
                <p className="review__date">{item[1].date}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
