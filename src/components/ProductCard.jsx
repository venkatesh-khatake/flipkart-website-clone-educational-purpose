import React from "react";
import "./ProductCard.css";

const ProductCard = ({image, name, price}) => {
  return (
    <div className="productCard">
      <img
      src={image}
        alt=""
      />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
