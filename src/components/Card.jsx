import React from "react";

const Card = ({ product }) => {
  console.log(product);
  const image =
    "https://images.unsplash.com/photo-1550615162-30dcc978d172?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <div className="card">
      <h1>{product.title}</h1>
      <div className="image">
        <img src={product.url} alt="logo" />
      </div>
      <div className="footer">
        <button>add +</button>
        <h1>${product.price}</h1>
      </div>
    </div>
  );
};

export default Card;
