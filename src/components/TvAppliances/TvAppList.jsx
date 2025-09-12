import React from 'react';
import './TvAppList.css';
import ProductCard from '../ProductCard';
import { Link } from "react-router-dom";

const TvAppList = ({ data }) => {
  return (
    <div className='tvAppList'>
      {
        data.map((item) => (
          <Link 
            to={`/tv/${item.id}`} 
            key={item.id} 
            style={{ textDecoration: "none", color: "black" }}
          >
            <ProductCard 
              name={item.brand} 
              image={item.image} 
              price={item.price_inr} 
            />
          </Link>
        ))
      }
    </div>
  );
};

export default TvAppList;




