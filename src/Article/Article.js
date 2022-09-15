import React from "react";
import './Article.css';

function Article({path, currentStory}) {
    console.log(currentStory.multimedia[0].url)
    return(
        <section>
        <h2>{currentStory.title}</h2>
        <p>{currentStory.byline}</p>
        <p>{currentStory.section}</p>
        <p>{currentStory.abstract}</p>
        <p>{currentStory.url}</p>
        <img src={currentStory.multimedia[0].url}/>
        <p>{currentStory.multimedia[0].copyright}</p>
        </section>
    )
}

export default Article;