import React from "react";
import UseApp from "./../hooks/app";
import { AiOutlineDelete } from "react-icons/ai";

const Card = ({ product }) => {
  const { addToCart, deleteProduct } = UseApp();

  return (
    <div className="card">
      <div className="header">
        <h1>{product.title}</h1>
        <div onClick={() => deleteProduct(product)}>
          <AiOutlineDelete size="2em" />
        </div>
      </div>
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
