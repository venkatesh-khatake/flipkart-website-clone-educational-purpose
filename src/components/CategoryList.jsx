import React from 'react'
import './CategoryList.css';
import Category from './Category';

import minutes from '/assets/minutes.webp';
import topOffers from '/assets/topOffers.webp';
import mobiles from '/assets/mobiles.webp';
import tv from '/assets/tv.webp';
import electronics from '/assets/electronics.webp';
import fashion from '/assets/fashion.webp';
import homeKitchen from '/assets/homeKitchen.webp';
import toys from '/assets/toys.webp';
import furniture from '/assets/furniture.webp';
import flightbook from '/assets/flightbook.webp';
import grocery from '/assets/grocery.webp';


const CategoryList = () => {
  return (
    // <div className='categoryList'>
    //   <Category image={"${import.meta.env.BASE_URL}minutes.webp"} name= "Minutes"/>
    //   <Category image={"${import.meta.env.BASE_URL}topOffers.webp"} name= "Top Offers"/>
    //   <Category image={"${import.meta.env.BASE_URL}mobiles.webp"} name= "Mobiles & Tablets"/>
    //   <Category image={"${import.meta.env.BASE_URL}tv.webp"} name= "TVs & Appliances"/>
    //   <Category image={"${import.meta.env.BASE_URL}electronics.webp"} name= "Electronics"/>
    //   <Category image={"${import.meta.env.BASE_URL}fashion.webp"} name= "Fashion"/>
    //   <Category image={"${import.meta.env.BASE_URL}homeKitchen.webp"} name= "Homes & Kitechen"/>
    //   <Category image={"${import.meta.env.BASE_URL}toys.webp"} name= "Beauty & Toys"/>
    //   <Category image={"${import.meta.env.BASE_URL}furniture.webp"} name= "Furniture"/>
    //   <Category image={"${import.meta.env.BASE_URL}flightbook.webp"} name= "Flight Bookings"/>
    //   <Category image={"${import.meta.env.BASE_URL}grocery.webp"} name= "Grocery"/>
    // </div>

    <div className="categoryList">
  <Category image={minutes} name="Minutes" />
  <Category image={topOffers} name="Top Offers" />
  <Category image={mobiles} name="Mobiles" />
  <Category image={tv} name="TVs & Appliances" />
  <Category image={electronics} name="Electronics" />
  <Category image={fashion} name="Fashion" />
  <Category image={homeKitchen} name="Homes & Kitchen" />
  <Category image={toys} name="Beauty & Toys" />
  <Category image={furniture} name="Furniture" />
  <Category image={flightbook} name="Flight Bookings" />
  <Category image={grocery} name="Grocery" />
</div>

  )
}

export default CategoryList;
