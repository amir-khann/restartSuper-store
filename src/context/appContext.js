import React, { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([
    {
      title: "amir khan",
      id: 1,
      price: 10,
      qty: 1,
      url: "https://images.unsplash.com/photo-1623877783711-38bc9740ed4a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "person",
      id: 2,
      price: 20,
      qty: 1,
      url: "https://images.unsplash.com/photo-1623873823750-ceaf6a0ae730?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "books",
      id: 3,
      price: 30,
      qty: 1,
      url: "https://images.unsplash.com/photo-1623916799434-114e844becc2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "mackbook",
      id: 4,
      price: 40,
      qty: 1,
      url: "https://images.unsplash.com/photo-1623910994874-ec52179c9862?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "amir khan",
      id: 5,
      price: 50,
      qty: 1,
      url: "https://images.unsplash.com/photo-1623904492371-ffa09c010f92?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "amir khan",
      id: 6,
      price: 60,
      qty: 1,
      url: "https://images.unsplash.com/photo-1622495805962-d93109c8def4?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  const toggleCart = () => {
    setShowCartMenu(!showCartMenu);
  };

  const addToCart = (product) => {
    const alreadyInCart = cartList.find((cart) => cart.id === product.id);

    if (alreadyInCart) {
      alreadyInCart.qty = alreadyInCart.qty + 1;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, product]);
    }
  };

  const subToCart = (product) => {
    const alreadyInCart = cartList.find((cart) => cart.id === product.id);

    if (alreadyInCart) {
      alreadyInCart.qty = alreadyInCart.qty - 1;
      setCartList([...cartList]);
    } else {
      const newList = cartList.filter((item) => item.id === product.id);
      setCartList([...cartList, newList]);
    }
  };

  const deleteCartItem = (id) => {
    const amir = cartList.filter((e) => e.id !== id);
    setCartList(amir);
  };

  const exposed = {
    showCartMenu,
    toggleCart,
    deleteCartItem,
    addToCart,
    subToCart,
    products,
    cartList,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default AppContext;
