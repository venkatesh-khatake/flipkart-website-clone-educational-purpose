import React from "react";
// import "./FashionCard.css";

const FashionCard = ({ name, image, price }) => {
  return (
    <div className="productCard">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-contain mb-3 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-green-700 font-medium">₹{price.toLocaleString("en-IN")}</p>
    </div>
  );
};

export default FashionCard;
