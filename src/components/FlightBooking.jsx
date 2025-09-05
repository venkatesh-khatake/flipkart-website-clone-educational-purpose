import React from "react";
import './FlightBooking.css'
import FlightPoster from "/assets/flightBookingPoster.webp";

const FlightBooking = () => {
  return (
    <div className="flightBooking"  >
      <img
        src={FlightPoster}
        alt=""
      />
    </div>
  );
};

export default FlightBooking;
