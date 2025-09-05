import React from 'react'
import './Category.css';

const Category = ({image, name}) => {
  return (
    <div className='category'>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export default Category
