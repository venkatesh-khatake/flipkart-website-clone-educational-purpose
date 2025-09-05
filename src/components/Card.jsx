import React from 'react'
import './Card.css';
const card = ({image, pName, pPrice}) => {
  return (
    <div className='card'>
      <img src={image} alt="" />
      <h4>{pName}</h4>
      <h5>From ₹{pPrice}</h5>
    </div>
  )
}

export default card
