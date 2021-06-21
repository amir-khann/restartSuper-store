import React, { useState } from "react";
import UseApp from "./../hooks/app";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { toggleCart, setSearch, search } = UseApp();

  return (
    <div className="navbar">
      <nav>
        <h1 className="logo">Super Store</h1>
        <form action="">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="icon" onClick={() => toggleCart()}>
          <FiShoppingCart size="2em" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
