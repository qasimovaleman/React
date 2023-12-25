import React from "react";
import PrimaryButon from "../../components/button";
import "./index.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <h3 className="thisFooter">This is Footer</h3>
          <PrimaryButon btnTextContent={"Footer Btn"} bg={"blue"}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
