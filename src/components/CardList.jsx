import React from 'react'
import './CardList.css';
import Card from './Card';



const CardList = ({title, data}) => {
  return (
    <div className='cardList' >
     
     <div className="title">
        <h2>{title}</h2>
     </div>

     <div className="cards">
          
       {
         data.map((item)=>(
            <Card image={item.image} pName={item.name} pPrice={item.price}/> 
        ))
       }
     </div>

    </div>
  )
}

export default CardList
