import React from "react";
import { ImAccessibility } from "react-icons/im";
import "./index.css";

function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <div className="divleft">
             <div className="iconDiv"> <ImAccessibility /></div>
              <h3> Electrochip</h3>
            </div>
            <div className="divRight">
              <nav>
                <ul>
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#">ABOUT</a>
                  </li>
                  <li>
                    <a href="#">SERVICE</a>
                  </li>
                  <li>
                    <a href="#">BLOG</a>
                  </li>
                  <li>
                    <a href="#">CONTACT</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
