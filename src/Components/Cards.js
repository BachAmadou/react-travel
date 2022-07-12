import React from "react";

export default function Cards(props) {
    return(
        <div className="cards-wrapper">
            <div className="cards-item-1">
                <img src={props.imageName} alt="mount-fuji" className="card-img" />
                <span className="card-title">{props.cardTitle}</span>
                <span className="card-map">{props.cardMap}</span>
                <h2 className="card-h2">{props.cardH2}</h2>
                <h2 className="card-date">{props.cardDate}</h2>
                <p className="card-text">{props.cardText}</p>
            </div>

            <div className="cards-item-2">
                <img src={props.imageName} alt="house" className="card-img" />
                <span className="card-title">{props.cardTitle}</span>
                <span className="card-map">{props.cardMap}</span>
                <h2 className="card-h2">{props.cardH2}</h2>
                <h2 className="card-date">{props.cardDate}</h2>
                <p className="card-text">{props.cardText}</p>
            </div>

            <div className="cards-item-3">
                <img src={props.imageName} alt="water" className="card-img" />
                <span className="card-title">{props.cardTitle}</span>
                <span className="card-map">{props.cardMap}</span>
                <h2 className="card-h2">{props.cardH2}</h2>
                <h2 className="card-date">{props.cardDate}</h2>
                <p className="card-text">{props.cardText}.</p>
            </div>
        </div>
    )
}