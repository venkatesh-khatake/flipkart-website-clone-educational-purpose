import { useParams } from "react-router-dom";
import TvApp from "../../JsonFiles/tvAppliances.json";

import React from 'react'

const TvAppDetails = () => {
  const { id } = useParams();
  const tv = TvApp.find((m) => m.id.toString() === id);

  if (!tv) {
    return <h2>Appliances not found</h2>;
  }
  return (
    <div className="details">
      <img src={tv.image} alt={tv.brand} />

      <div className="text-details">
        <h2>
          {tv.brand} <br /> {tv.model}     
        </h2>
        <p>Type : {tv.type}</p>
        <p>Features : {tv.features.join( " | ")}</p>
        <p>Size : {tv.size_inches} inch</p>
        <p>Price : ₹{tv.price_inr}</p>
        <div className="btns">
        <button><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        <button><i class="fa-solid fa-bolt-lightning"></i> Buy Now</button>
      </div>
      </div>
      
    </div>
  )
}

export default TvAppDetails












// import React from 'react';
// import { useParams } from 'react-router-dom';
// import appliances from '../../JsonFiles/tvAppliances.json'; // adjust path if needed

// const TvAppDetails = () => {
//   const { id } = useParams();
//   const product = appliances.find(item => item.id === parseInt(id));

//   if (!product) {
//     return <h2 className="text-center text-red-600 mt-10">Product not found</h2>;
//   }

//   return (
//     <div className="tvAppDetails border rounded-2xl shadow-lg p-4 max-w-lg mx-auto mt-10">
//       {/* Product Image */}
//       <img 
//         src={product.image} 
//         alt={product.model} 
//         className="w-full h-72 object-contain mb-4 rounded-lg"
//       />

//       {/* Brand & Model */}
//       <h2 className="text-2xl font-bold mb-1">{product.brand}</h2>
//       <h3 className="text-gray-600 mb-2">{product.model}</h3>

//       {/* Price */}
//       <p className="text-xl font-semibold text-green-700 mb-3">
//         ₹{product.price_inr.toLocaleString('en-IN')}
//       </p>

//       {/* Features List */}
//       <h4 className="font-semibold mt-4 mb-2">Features:</h4>
//       <ul className="list-disc pl-5 space-y-1 text-gray-700">
//         {product.features && product.features.map((feature, index) => (
//           <li key={index}>{feature}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TvAppDetails;
