import React from "react";

export default function Cards(props) {
    return(
        <div className="cards-wrapper">
            <div className="cards-items">
                <div className="image">
                    <img src={props.imageName} alt="mount-fuji" className="card-img" />
                </div>
                <div className="text">
                    <span className="card-title">{props.cardTitle}</span>
                    <span className="card-map">{props.cardMap}</span>
                    <h2 className="card-h2">{props.cardH2}</h2>
                    <h2 className="card-date">{props.cardDate}</h2>
                    <p className="card-text">{props.cardText}</p>
                </div>
            </div>
        </div>
    )
}