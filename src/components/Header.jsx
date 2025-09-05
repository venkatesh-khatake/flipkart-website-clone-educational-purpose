import React from 'react'
import './Header.css'

import Logo from '../assets/flipkartLogo.png';


const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        {/* <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="140" height="40" title="Flipkart"></img> */}
        <img src={Logo} alt="" />
      </div>
      <div className="searchBar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Search for Products, Brands and More' />
      </div>
      <div className="dropdown">
        <i className="fa-regular fa-circle-user"></i> <span>Venkatesh</span>
      </div>
      <div className="cart">
       <i className="fa-solid fa-cart-shopping" title='Cart'></i> <span>Cart</span>
      </div>
      <div className="seller">
        <i className="fa-solid fa-shop" title='Become a Seller'></i> <span>Become a Seller</span>
      </div>
      <div className="dots">
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  )
}

export default Header
