import React from "react";
import { Link } from "react-router-dom";
import HomeKitchenCard from "./HomeKitchenCard";

const HomeKitchenList = ({ data }) => {
  return (
    <div className="productList">
      {data.map((item) => (
        <Link
          to={`/home-kitchen/${item.id}`}
          key={item.id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <HomeKitchenCard
            name={`${item.brand} ${item.name}`}
            image={item.image}
            price={item.price_inr}
          />
        </Link>
      ))}
    </div>
  );
};

export default HomeKitchenList;
