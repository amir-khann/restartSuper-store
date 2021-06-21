import React, { useState, useEffect } from "react";
import Card from "./Card";
import UseApp from "./../hooks/app";

const Main = () => {
  const { products, search } = UseApp();
  const [filterItem, setfilteredItem] = useState([]);

  useEffect(() => {
    setfilteredItem(
      products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <div className="main">
      <div className="cards">
        {filterItem.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
