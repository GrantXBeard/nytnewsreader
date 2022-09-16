import React from "react";
import './Article.css';

function Article({path, currentStory}) {
    console.log(currentStory.multimedia[0].url)
    return(
        <section className="articles-single">
        <h2>{currentStory.title}</h2>
        <p>{currentStory.byline}</p>
        <p>story from the <b>{currentStory.section}</b> section</p>
        <p>{currentStory.abstract}</p>
        <a href={currentStory.url}>View full article</a>
        <img src={currentStory.multimedia[0].url}/>
        <p>ⓒ{currentStory.multimedia[0].copyright}</p>
        </section>
    )
}

export default Article;