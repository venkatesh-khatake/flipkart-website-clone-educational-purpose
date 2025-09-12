import React from "react";
// import "./FashionList.css";
import FashionCard from "./FashionCard";
import { Link } from "react-router-dom";

const FashionList = ({ data }) => {
  return (
    <div className="productList">
      {data.map((item) => (
        <Link
          to={`/fashion/${item.id}`}
          key={item.id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <FashionCard
            name={`${item.brand} ${item.model}`}
            image={item.image}
            price={item.price_inr}
          />
        </Link>
      ))}
    </div>
  );
};

export default FashionList;
