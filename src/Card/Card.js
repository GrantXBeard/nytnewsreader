import React from "react";
import './Card.css';

function Card({ title, byline}) {
    return(
        <>
            <h3>{title}</h3>
            <p>{byline}</p>
        </>
    )   
}

export default Card;