import React from "react";
import Card from "./Card";
import UseApp from "./../hooks/app";

const Main = () => {
  const { products } = UseApp();

  return (
    <div className="main">
      <div className="cards">
        {products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
