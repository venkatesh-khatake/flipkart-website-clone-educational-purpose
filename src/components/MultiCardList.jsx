import React from 'react'
import './MultiCardList.css';
import Card from './Card';

const MultiCardList = ({title, data}) => {
  return (
    <div className='multicardList'>
     
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

export default MultiCardList
