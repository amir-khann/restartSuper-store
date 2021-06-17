import React from "react";
import UseApp from "./../hooks/app";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { toggleCart } = UseApp();
  return (
    <div className="navbar">
      <nav>
        <h1 className="logo">Super Store</h1>
        <div className="icon" onClick={() => toggleCart()}>
          <FiShoppingCart size="2em" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
