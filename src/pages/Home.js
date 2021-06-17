import React from "react";
import Main from "../components/Main";
import Overlay from "../components/Overlay";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Overlay />
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
