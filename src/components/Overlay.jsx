import React from "react";
import UseApp from "./../hooks/app";

import { IoMdClose } from "react-icons/io";

const overlay = () => {
  const {
    toggleCart,
    showCartMenu,
    cartList,
    addToCart,
    subToCart,
    deleteCartItem,
  } = UseApp();
  console.log(cartList);

  return (
    <div className={`overlay ${showCartMenu ? "show" : "hide"}`}>
      <div className="icons" onClick={() => toggleCart()}>
        <IoMdClose size="3em" />
      </div>

      <div className="overlaydata">
        <h1>Cart</h1>
        <div className="line"></div>

        {cartList.length !== 0 ? (
          <div>
            <div className="content">
              {cartList.map((item) => (
                <div key={item.id}>
                  <div className="products">
                    <p>
                      {item.qty}X{item.title}
                    </p>
                    <div className="btndiv">
                      <span onClick={() => addToCart(item)}>+</span>
                      {item.qty === 1 ? (
                        <span onClick={() => deleteCartItem(item.id)}>X</span>
                      ) : (
                        <span onClick={() => subToCart(item)}>-</span>
                      )}
                    </div>
                    <p>${item.price * item.qty}</p>
                  </div>
                  <div className="line"></div>
                </div>
              ))}

              <div className="total">
                <h2>Total</h2>
                <h2>
                  $
                  {cartList.reduce(
                    (acc, item) => acc + item.price * item.qty,
                    0
                  )}
                </h2>
              </div>
            </div>
            <div className="btn">
              <button>Cheackout</button>
            </div>
          </div>
        ) : (
          <h1>No Items in the cart</h1>
        )}
      </div>
    </div>
  );
};

export default overlay;
