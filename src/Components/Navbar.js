import React from "react";

export default function Navbar(props) {
    return(
        <div className="header">
            {/* <img src={`../images/${props.image}`} alt="earth-glob" className="logo-icon" /> */}
            {/* <img src={require(`${props.image}`)} alt="earth-glob" className="logo-icon" /> */}
            <img src={props.imageName} alt="earth-glob" className="logo-icon" />
            <h3 className="logo-title">{props.title}</h3>
        </div>
    )
}