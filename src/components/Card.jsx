import React from "react";
import UseApp from "./../hooks/app";

const Card = ({ product }) => {
  const { addToCart } = UseApp();

  return (
    <div className="card">
      <h1>{product.title}</h1>
      <div className="image">
        <img src={product.url} alt="logo" />
      </div>
      <div className="footer">
        <button onClick={() => addToCart(product)}>add +</button>
        <h1>${product.price}</h1>
      </div>
    </div>
  );
};

export default Card;
