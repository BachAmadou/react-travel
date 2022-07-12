import React from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import earth from "./images/earth.png";
import fuji from "./images/fuji.jpg";
import house from "./images/house.jpg";
import water from "./images/water.jpg";

export default function App() {
  return(
    <div className="app-wrapper">
      <Navbar 
        imageName={earth}
        title="My travel journey"
        />
        
      <Cards 
        imageName={fuji}
        cardTitle="Japon"
        cardMap="View on Google Maps"
        cardH2="Mount Fuji"
        cardDate="12 Jan, 2021 - 24 Jan, 2021"
        cardText="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />

      <Cards 
        imageName={house}
        cardTitle="AUSTRALIA"
        cardMap="View on Google Maps"
        cardH2="Sydney Opera House"
        cardDate="27 May, 2021 - 8 Jun, 2021"
        cardText="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
      />
     
     <Cards 
        imageName={water}
        cardTitle="NORWAY"
        cardMap="View on Google Maps"
        cardH2="Geirangerfjord"
        cardDate="01 Oct, 2021 - 18 Nov, 2021"
        cardText="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
    </div>
  )
}
