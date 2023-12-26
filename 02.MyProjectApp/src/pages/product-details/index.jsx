import React from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const {id} = useParams()
  console.log(id);
  
  return (
    <div id="product-details">
      <div className="container">
        <div className="product-details">Details Page</div>
        <button>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
