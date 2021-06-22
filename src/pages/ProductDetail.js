import React from "react";
import ProductDetails from "../components/ProductDetail";
const ProductDetail = (props) => {
  return (
    <div>
      <ProductDetails {...props} />
    </div>
  );
};

export default ProductDetail;
