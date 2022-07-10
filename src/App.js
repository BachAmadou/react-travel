import React from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import earth from "./images/earth.png";
import fuji from "./images/fuji.jpg";
import house from "./images/house.jpg";

export default function App() {
  return(
    <div className="app-wrapper">
      <Navbar 
        imageName={earth}
        title="My travel journey"
        />
        
      <Cards 
        imageName={fuji}
      />
     
    </div>
  )
}
