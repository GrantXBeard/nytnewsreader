import React from "react";
import Card from "../Card/Card";
import './Display.css'


function Display ({ type , articles, getCurrentStory }) {

    
      const buildDisplayArray = (arr) => {
          return arr.map(art => {
              return(
                  <Card
                  title={art.title}
                  byline={art.byline}
                  key={(arr.length ++ )}
                  section={art.section}
                  getCurrentStory={getCurrentStory}
                  />
              )
          })
      }

      const checkType = (arr) => {
        if (type === 'home') {
         return buildDisplayArray(arr)
        } else {
         let choice =  arr.filter(art => art.section === type)
         return buildDisplayArray(choice)
     }
     }
     const displayArticles = checkType(articles)
  
    
        return (
            <section className="articles-display">
            {displayArticles.length ? displayArticles : <p>Sorry, there are no top stories in this section.</p>}
            </section>
        )
    
}

export default Display;