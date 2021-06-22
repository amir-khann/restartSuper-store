import React, { useState } from "react";
import UseApp from "./../hooks/app";
import { FiShoppingCart } from "react-icons/fi";
import { BiFilter } from "react-icons/bi";

import "jquery/dist/jquery.min.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button } from "bootstrap";

const Navbar = () => {
  const { toggleCart, setSearch, search, setShowfiter, showfilter, filterFun } =
    UseApp();

  return (
    <div className="navbar1">
      <div className="nav1">
        <h1 className="logo">Super Store</h1>
        <div className="form">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary  ml-3"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <BiFilter size="2em" />
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    filter By price
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <button
                    className="btn btn-success m-3"
                    data-dismiss="modal"
                    onClick={() => filterFun(0, 100)}
                  >
                    0 to 100
                  </button>
                  <button
                    className="btn btn-success m-3"
                    data-dismiss="modal"
                    onClick={() => filterFun(0, 100)}
                  >
                    100 to 200
                  </button>
                  <button
                    className="btn btn-success m-3"
                    data-dismiss="modal"
                    onClick={() => filterFun(100, 200)}
                  >
                    200 to 300
                  </button>
                  <button
                    className="btn btn-success m-3"
                    data-dismiss="modal"
                    onClick={() => filterFun(200, 300)}
                  >
                    300 to 400
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="icon" onClick={() => toggleCart()}>
          <FiShoppingCart size="2em" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
