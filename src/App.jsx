import React from 'react'
import './App.css'
import Header from './components/Header.jsx';
import CategoryList from './components/CategoryList.jsx'
import PosterScroll from './components/PosterScroll.jsx';
import CardList from './components/CardList'
import FlightBooking from './components/FlightBooking'


// electronics
import Monitors from './assets/monitors.webp';
import Projector from './assets/projector.webp';
import Speaker from './assets/speaker.webp';
import watch from './assets/watch.webp';
import cam from './assets/cam.webp';
import buds from './assets/buds.webp';
import Printers from './assets/printers.webp';


const App = () => {

  const electronics = [
  {name:"Monitors", image:Monitors, price : 6999},
  {name:"Projector", image:Projector, price : 6999},
  {name:"Speaker", image:Speaker, price : 6999},
  {name:"Watch", image:watch, price : 6999},
  {name:"Camera", image:cam, price : 6999},
  {name:"Buds", image:buds, price : 6999},
  {name:"Printers", image:Printers, price : 6999},
  ];

  return (
    <div>
      <Header/>
      <CategoryList/>
      <PosterScroll/>
      <div className="container">
        <CardList title={"Best of Electronics"} data = {electronics}/>
        <FlightBooking/>
      </div>

    </div>
  )
}

export default App
