import React from "react";
import UseApp from "./../hooks/app";

import { IoMdClose } from "react-icons/io";

const overlay = () => {
  const { toggleCart, showCartMenu } = UseApp();
  return (
    <div className={`overlay ${showCartMenu ? "show" : "hide"}`}>
      <div className="icons" onClick={() => toggleCart()}>
        <IoMdClose size="3em" />
      </div>

      <div className="overlaydata">
        <h1>Cart</h1>
        <div className="line"></div>
        <div className="content">
          <div className="products">
            <p>products name</p>
            <p>products price</p>
          </div>
          <div className="line"></div>
          <div className="total">
            <h2>Total</h2>
            <h2>total price</h2>
          </div>
        </div>
        <div className="btn">
          <button>Cheackout</button>
        </div>
      </div>
    </div>
  );
};

export default overlay;
