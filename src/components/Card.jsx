import React from "react";
import UseApp from "./../hooks/app";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { addToCart, deleteProduct } = UseApp();
  console.log(product.id);
  return (
    <div className="card" href="productDetail">
      <Link to={`productDetail/:${product.id}`}>
        <div className="header">
          <h1>{product.title}</h1>
          <div onClick={() => deleteProduct(product)}>
            <AiOutlineDelete size="2em" />
          </div>
        </div>
        <Link to={`productDetail/:${product.id}`}></Link>
        <div className="image">
          <img src={product.url} alt="logo" />
        </div>
      </Link>
      <div className="footer">
        <button onClick={() => addToCart(product)}>add +</button>
        <h1>${product.price}</h1>
      </div>
    </div>
  );
};

export default Card;
