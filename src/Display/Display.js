import React from "react";
import Card from "../Card/Card";
import './Display.css'

function Display({ articleData }){
    const articleCards = articleData.map(art => {
        return(
            <Card
                title={art.title}
                byline={art.byline}
                key={art.updated_date}
            />
        )
    })
    return(
        <>
            {articleCards}
        </>
    )
}

export default Display;