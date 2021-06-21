import React from "react";
import Main from "../components/Main";
import Overlay from "../components/Overlay";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <NavLink className="navbar-item" activeClassName="is-active" to="/form">
        <button className="addNewProduct">+</button>
      </NavLink>

      <Overlay />
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
