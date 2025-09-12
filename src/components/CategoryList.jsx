import React from 'react'
import './CategoryList.css';
import Category from './Category';

import { Link } from "react-router-dom";

import minutes from '../assets/minutes.webp';
import topOffers from '../assets/topOffers.webp';
import mobiles from '../assets/mobiles.webp';
import tv from '../assets/tv.webp';
import electronics from '../assets/electronics.webp';
import fashion from '../assets/fashion.webp';
import homeKitchen from '../assets/homeKitchen.webp';
import toys from '../assets/toys.webp';
import furniture from '../assets/furniture.webp';
import flightbook from '../assets/flightbook.webp';
import grocery from '../assets/grocery.webp';


const CategoryList = () => {
  return (
    
    <div className="categoryList">
  <Category image={minutes} name="Minutes" />
  <Category image={topOffers} name="Top Offers" />
  <Category image={mobiles} name="Mobiles" link ="/mobiles" />
  <Category image={tv} name="TVs & Appliances"  link = "/tv"/>
  <Category image={electronics} name="Electronics" />
  <Category image={fashion} name="Fashion"  link="/fashion"/>
  <Category image={homeKitchen} name="Homes & Kitchen"  link="/home-kitchen"/>
  <Category image={toys} name="Beauty & Toys" />
  <Category image={furniture} name="Furniture" />
  <Category image={flightbook} name="Flight Bookings" />
  <Category image={grocery} name="Grocery" />
</div>

  )
}

export default CategoryList;
