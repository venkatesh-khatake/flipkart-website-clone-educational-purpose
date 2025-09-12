import React from "react";
import { useParams } from "react-router-dom";
import fashionData from "../../JsonFiles/Fashion.json"; // adjust path if needed
import "./FashionDetails.css"

const FashionDetails = () => {
  const { id } = useParams();
  const product = fashionData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="">Product not found</h2>;
  }

  return (
    <div className="details">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.model}
        className=""
      />

     <div className="text-details">
         {/* Brand & Model */}
      <h2 className="">{product.brand} {product.model}</h2>

      
      

      {/* Sizes */}
      <p>Size : {product.size.join(", ")}</p>

      {/* Color */}
      <p>Color : {product.color}</p>

      {/* Features */}
    
      <p>Features : {product.features.join(" | ")}</p>
      <p className="">
        Price : ₹{product.price_inr.toLocaleString("en-IN")}
      </p>
        <div className="btns">
        <button><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        <button><i class="fa-solid fa-bolt-lightning"></i> Buy Now</button>
      </div>
     </div>
    
    </div>
  );
};

export default FashionDetails;
