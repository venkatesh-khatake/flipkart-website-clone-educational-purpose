import React from "react";

const HomeKitchenCard = ({ name, image, price }) => {
  return (
    <div className="productCard">
      <img
        src={image}
        alt={name}
        className=""
      />
      <h3 className="">{name}</h3>
      <p className="">
        ₹{price.toLocaleString("en-IN")}
      </p>
    </div>
  );
};

export default HomeKitchenCard;
