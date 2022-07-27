import React from "react";
import { useEffect, useState } from "react";



const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-2" href="#">
            MS e-shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Electronics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Mobiles
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Fashion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>

              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
