import { useParams } from "react-router-dom";
import Mobiles from "../JsonFiles/Mobiles.json";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const mobile = Mobiles.find((m) => m.id.toString() === id);

  if (!mobile) {
    return <h2>Mobile not found</h2>;
  }

  return (
    <div className="details">
      <img src={mobile.image} alt={mobile.brand} />

        <div className="text-details">
           <h2>
        {mobile.brand} {mobile.model}
      </h2>
      <p>Price: {mobile.price_inr}</p>
      <p>RAM: {mobile.ram}</p>
      <p>Storage: {mobile.storage}</p>
      <p>Chipset: {mobile.chipset}</p>
      <p>Display: {mobile.display}</p>
      <p>Battery: {mobile.battery}</p>
      <div className="btns">
        <button><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        <button><i class="fa-solid fa-bolt-lightning"></i> Buy Now</button>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
