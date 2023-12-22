import React from "react";
import PrimaryButon from "../../components/button";
import "./index.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
         <PrimaryButon btnTextContent={"Header Btn"}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
