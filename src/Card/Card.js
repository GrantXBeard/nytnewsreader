import React from "react";
import './Card.css';
import { Link } from 'react-router-dom'

function Card({ title, byline, getCurrentStory}) {
    return(
        <Link to={`/${title}`} >
        <div onClick={event => getCurrentStory(title)}>

            <h3>{title}</h3>
            <p>{byline}</p>
        </div>
        </Link>
    )   
}

export default Card;