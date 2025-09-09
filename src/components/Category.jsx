import React from 'react'
import './Category.css';
import { Link } from 'react-router-dom';

const Category = ({image, name, link}) => {
  return (
    <div className='category'>
      <Link to={link} style={{ textDecoration: "none", color: "black" }}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      </Link>

    </div>
  )
}

export default Category
