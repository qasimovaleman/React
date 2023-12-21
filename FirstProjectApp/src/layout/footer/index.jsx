import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./index.css";
function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="divTop">
              <div className="iconText">
                <div className="iconDiv">
                  <CiLocationOn className="icon"/>
                </div>
                <p>Possoges of Lorem ipsum available</p>
              </div>
              <div  className="iconText">
                <div  className="iconDiv">
                  <IoCall className="icon"/>
                </div>
                <p>Call:+012334567890</p>
              </div>
              <div  className="iconText">
                <div  className="iconDiv">
                  <MdEmail className="icon"/>
                </div>
                <p>demo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
