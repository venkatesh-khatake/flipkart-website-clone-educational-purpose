import React from 'react'
import './ProductList.css';
import Mobiles from '../JsonFiles/Mobiles.json';
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className='productList'>
      
       {
        Mobiles.map((mobile) => (
          <Link to={`/mobiles/${mobile.id}`} key={mobile.id} style={{ textDecoration:"none", color:"black"}}>
            <ProductCard 
              name={mobile.brand} 
              image={mobile.image} 
              price={mobile.price_inr} 
            />
          </Link>
        ))
       }
    </div>
  )
}

export default ProductList
