import React, { useEffect } from "react";
import UseApp from "./../hooks/app";
import { Link } from "react-router-dom";
const ProductDetail = ({ match }) => {
  const { products } = UseApp();

  const product = products.filter((p) => `:${p.id}` === match.params.id);

  console.log(product[0].id);
  return (
    <div className="productsDetails">
      <div className="product">
        <img src={product[0].url} alt="" />
        <h2>${product[0].price}</h2>
        <p>{product[0].description}</p>
        <Link to="/">go back</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
