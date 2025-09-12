import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import CategoryList from "./components/CategoryList.jsx";
import PosterScroll from "./components/PosterScroll.jsx";
import CardList from "./components/CardList";
import FlightBooking from "./components/FlightBooking";
import MultiCardList from "./components/MultiCardList";
import NotFound from "./components/NotFound.jsx";
import FashionList from "./components/Fashion/FashionList";
import FashionDetails from "./components/Fashion/FashionDetails";


// Json FIles
import Mobiles from "./JsonFiles/Mobiles.json";
import fashionData from "./JsonFiles/Fashion.json";
import TvAppliances from "./JsonFiles/tvAppliances.json";
import Kitchen from "./JsonFiles/Kitchen.json";


// electronics
import Monitors from "./assets/monitors.webp";
import Projector from "./assets/projector.webp";
import Speaker from "./assets/speaker.webp";
import watch from "./assets/watch.webp";
import cam from "./assets/cam.webp";
import buds from "./assets/buds.webp";
import Printers from "./assets/printers.webp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Batman from "./assets/batman.webp";
import Pens from "./assets/pens.webp";
import Bicycle from "./assets/bicycle.webp";
import Remote from "./assets/remoteControltoy.webp";
import DryFruits from "./assets/dryFruits.webp";
import Coffee from "./assets/coffee.webp";
import Soft from "./assets/softtoys.webp";
import Footer from "./components/Footer.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ProductList from "./components/ProductList.jsx";
import MobileDetail from "./components/ProductDetails.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import TvAppDetails from "./components/TvAppliances/TvAppDetails.jsx";
import TvAppList from "./components/TvAppliances/TvAppList.jsx";
import HomeKitchenList from "./components/Home&Kitchen/HomeKitchenList.jsx";
import HomeKitchenDetails from "./components/Home&Kitchen/HomeKitchenDetails.jsx";
// import { Route } from "react-router-dom";

const App = () => {
  const electronics = [
    { name: "Monitors", image: Monitors, price: 6999 },
    { name: "Projector", image: Projector, price: 6999 },
    { name: "Speaker", image: Speaker, price: 6999 },
    { name: "Watch", image: watch, price: 6999 },
    { name: "Camera", image: cam, price: 6999 },
    { name: "Buds", image: buds, price: 6999 },
    { name: "Printers", image: Printers, price: 6999 },
  ];

  const data2 = [
    { name: "Best of Action Toys", image: Batman, price: "Up to 70% off" },
    { name: "Top Selling Stationary", image: Pens, price: "From ₹49" },
    { name: "Remote Control Toys", image: Remote, price: "Up to 80% off" },
    { name: "Geared Cycles", image: Bicycle, price: "up to 70% off" },
    { name: "Coffee Powder", image: Coffee, price: "Up to 75% off" },
    { name: "Dry Fruits", image: DryFruits, price: "Up to 75% off" },
    { name: "Soft Toys", image: Soft, price: "Up to 75% off" },
  ];

  return (
    <Router basename="/flipkart-website-clone-educational-purpose">
      <Header />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <div>
              {/* <Header /> */}
              <CategoryList />
              <PosterScroll />
              <div className="container">
                <CardList title={"Best of Electronics"} data={electronics} />
                <FlightBooking />
              </div>
              <MultiCardList title={"Beauty, Food, Toys & more"} data={data2} />

              {/* <ProductList/> */}
            </div>
          }
        ></Route>

        <Route path="/mobiles" element={<ProductList data={Mobiles} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/mobiles/:id" element={<ProductDetails />}></Route>
        <Route path="/tv" element={<TvAppList data={TvAppliances} />}></Route>
        <Route path="/tv/:id" element={<TvAppDetails />} />
        <Route path="/fashion" element={<FashionList data={fashionData} />} />
        <Route path="/fashion/:id" element={<FashionDetails />} />
                <Route path="/home-kitchen" element={<HomeKitchenList data={Kitchen} />} />
        <Route path="/home-kitchen/:id" element={<HomeKitchenDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
