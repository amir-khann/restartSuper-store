import React, { useState, useEffect } from "react";
import Card from "./Card";
import UseApp from "./../hooks/app";

const Main = () => {
  const { products, search, showfilter } = UseApp();
  const [filterItem, setfilteredItem] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState([]);

  useEffect(() => {
    setfilteredItem(
      products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  useEffect(() => {
    setFilterByPrice(
      products.filter((item) => item.price > 1 && item.price < 100)
    );
  }, [search, products]);

  return (
    <div className="main">
      <div className="cards">
        {showfilter
          ? filterByPrice.map((product, index) => (
              <Card product={product} key={index} />
            ))
          : filterItem.map((product, index) => (
              <Card product={product} key={index} />
            ))}
      </div>
    </div>
  );
};

export default Main;
