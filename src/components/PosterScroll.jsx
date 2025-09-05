import React, { useEffect, useState } from 'react'
import './PosterScroll.css';

import Poster1 from '../assets/poster1.webp';
import Poster2 from '../assets/poster2.webp';
import Poster3 from '../assets/poster3.webp';




const PosterScroll = () => {
    const images = [Poster1,Poster2,Poster3];
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev + 1) % images.length)
        },3000);

        return () => clearInterval(interval);
    },[images.length])
  return (
    <div className='poster-scroll slider-container'>
      <img key = {index} src={images[index]} alt=""  className='fade-image'/>
    </div>
  )
}

export default PosterScroll
