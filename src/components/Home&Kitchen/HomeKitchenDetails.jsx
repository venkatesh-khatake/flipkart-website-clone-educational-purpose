import React from "react";
import { useParams } from "react-router-dom";
import Kitchen from "../../JsonFiles/Kitchen.json"; // adjust path if needed
// import "./HomeKitchenDetails.css";

const HomeKitchenDetails = () => {
  const { id } = useParams();
  const product = Kitchen.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="details">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="" />

      <div className="text-details">
        {/* Brand & Name */}
        <h2>{product.brand} <br /> {product.name}</h2>

        {/* Features */}
        <p>Features: {product.features.join(" | ")}</p>

        {/* Price */}
        <p className="">
          Price: ₹{product.price_inr.toLocaleString("en-IN")}
        </p>

        {/* Action Buttons */}
        <div className="btns">
          <button>
            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
          <button>
            <i className="fa-solid fa-bolt-lightning"></i> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeKitchenDetails;
