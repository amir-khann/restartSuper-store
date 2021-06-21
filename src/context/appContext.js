import React, { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  console.log("context products", products);
  const toggleCart = () => {
    setShowCartMenu(!showCartMenu);
  };

  const addToCart = (product) => {
    const alreadyInCart = cartList.find((cart) => cart.id === product.id);

    if (alreadyInCart) {
      alreadyInCart.qty = alreadyInCart.qty + 1;
      localStorage.setItem("cartList", JSON.stringify([...cartList]));
      setCartList([...cartList]);
    } else {
      localStorage.setItem("cartList", JSON.stringify([...cartList, product]));
      setCartList([...cartList, product]);
    }
  };

  const subToCart = (product) => {
    const alreadyInCart = cartList.find((cart) => cart.id === product.id);

    if (alreadyInCart) {
      alreadyInCart.qty = alreadyInCart.qty - 1;
      localStorage.setItem("cartList", JSON.stringify([...cartList]));
      setCartList([...cartList]);
    } else {
      const newList = cartList.filter((item) => item.id === product.id);
      localStorage.setItem("cartList", JSON.stringify([...cartList, newList]));
      setCartList([...cartList, newList]);
    }
  };

  const deleteCartItem = (id) => {
    const amir = cartList.filter((e) => e.id !== id);
    localStorage.setItem("cartList", JSON.stringify([amir]));
    setCartList(amir);
  };

  const exposed = {
    showCartMenu,
    toggleCart,
    deleteCartItem,
    addToCart,
    subToCart,
    setProducts,
    products,
    cartList,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default AppContext;
