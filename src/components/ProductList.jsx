import React from 'react'
import './ProductList.css';
import Mobiles from '../JsonFiles/Mobiles.json';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className='productList'>
       {
        Mobiles.map((mobile)=>{

            return <ProductCard name = {mobile.brand} image = {mobile.image} price = {mobile.price_inr}></ProductCard>
        })
       }
    </div>
  )
}

export default ProductList
