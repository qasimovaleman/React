import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">GWP-Code</div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
