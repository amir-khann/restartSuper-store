import React, { createContext, useState } from "react";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [showfilter, setShowfiter] = useState(false);
  const [search, setSearch] = useState("");
  const [filterByPrice, setFilterByPrice] = useState([]);
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

  const deleteProduct = (product) => {
    const newlistOfproduct = products.filter((val) => val.id !== product.id);
    setProducts(newlistOfproduct);
    localStorage.setItem("products", JSON.stringify(newlistOfproduct));
  };

  function filterFun(low, heigh) {
    const imaginary = products;
    const newProduct = imaginary.filter(
      (item) => item.price > low && item.price < heigh
    );
    setFilterByPrice(newProduct);
  }

  const exposed = {
    showCartMenu,
    toggleCart,
    deleteCartItem,
    addToCart,
    subToCart,
    setProducts,
    products,
    cartList,
    search,
    setSearch,
    deleteProduct,
    showfilter,
    setShowfiter,
    setFilterByPrice,
    filterByPrice,
    filterFun,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default AppContext;
