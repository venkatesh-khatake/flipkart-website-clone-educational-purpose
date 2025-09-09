import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div 
    style={{ textAlign: "center", marginTop: "50px", display:"flex", flexDirection:"column",
        alignItems:"center", 
        justifyContent:"center",
        width:"100%",
        height:"100vh",
        backgroundColor:"aliceblue",
        overflowY:"hidden"
        
     }}>
      <h1>404</h1>
      <h2>Oops! Page not found 😿</h2>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
