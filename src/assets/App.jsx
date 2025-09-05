import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import PosterScroll from './components/PosterScroll'
import CardList from './components/CardList'
import FlightBooking from './components/FlightBooking'

// electronics
import Monitors from '/assets/monitors.webp';
import Projector from '/assets/projector.webp';
import Speaker from '/assets/speaker.webp';
import watch from '/assets/watch.webp';
import cam from '/assets/cam.webp';
import buds from '/assets/buds.webp';
import Printers from '/assets/printers.webp';

//

import MultiCardList from './components/MultiCardList';

import Batman from '/assets/batman.webp';
import Pens from '/assets/pens.webp';
import Bicycle from '/assets/bicycle.webp';
import Remote from '/assets/remoteControltoy.webp';
import DryFruits from '/assets/dryFruits.webp';
import Coffee from '/assets/coffee.webp';
import Soft from '/assets/softtoys.webp';





function App() {

  const electronics = [
  {name:"Monitors", image:Monitors, price : 6999},
  {name:"Projector", image:Projector, price : 6999},
  {name:"Speaker", image:Speaker, price : 6999},
  {name:"Watch", image:watch, price : 6999},
  {name:"Camera", image:cam, price : 6999},
  {name:"Buds", image:buds, price : 6999},
  {name:"Printers", image:Printers, price : 6999},
  ];


  const data2 = [
    {name : "Best of Action Toys", image : Batman, price : "Up to 70% off"},
    {name : "Top Selling Stationary", image : Pens, price : "From ₹49"},
    {name : "Remote Control Toys", image : Remote, price : "Up to 80% off"},
    {name : "Geared Cycles", image : Bicycle, price : "up to 70% off"},
    {name : "Coffee Powder", image : Coffee, price : "Up to 75% off"},
    {name : "Dry Fruits", image : DryFruits, price : "Up to 75% off"},
    {name : "Soft Toys", image : Soft, price : "Up to 75% off"},

  ]

  return (
    <>
      <Header/>
      <CategoryList/>
      <PosterScroll/>
      <div className="container">
        <CardList title={"Best of Electronics"} data = {electronics}/>
        <FlightBooking/>
      </div>

      <MultiCardList title = {"Beauty, Food, Toys & more"} data = {data2}/>
    </>
  )
}

export default App
