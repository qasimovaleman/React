import React from "react";
import "./index.css";
const PrimaryButon = (props) => {
  return (
    <button
      className={
        props.bg === "blue" ? "pink blue" : "pink"
      }
    >

        {props.btnTextContent}
    </button>
  );
};

export default PrimaryButon;
