import React from "react";

export default function Cards(props) {
    return(
        <div className="cards-wrapper">
            <div className="cards-item-1">
                <img src={props.imageName} alt="mount-fuji" className="card-img" />
                <span className="card-title">Japon</span>
                <span className="card-map">View on Google Maps</span>
                <h2 className="card-h2">Mount Fuji</h2>
                <h2 className="card-date">12 Jan, 2021 - 24 Jan, 2021</h2>
                <p className="card-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>

            {/* <div className="cards-item-2">
                <img src={props.imageName} alt="house" className="card-img" />
                <span className="card-title">AUSTRALIA</span>
                <span className="card-map">View on Google Maps</span>
                <h2 className="card-h2">Sydney Opera House</h2>
                <h2 className="card-date">27 May, 2021 - 8 Jun, 2021</h2>
                <p className="card-text">The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.</p>
            </div> */}
        </div>
    )
}