import React from "react";
import Card from "../Card/Card";
import './Display.css'


function Display ({ type , articles }) {

    
      const buildDisplayArray = (arr) => {
          return arr.map(art => {
              return(
                  <Card
                  title={art.title}
                  byline={art.byline}
                  key={(arr.length ++ )}
                  section={art.section}
                  />
              )
          })
      }

      const checkType = (arr) => {
        console.log(type)
        if (type === 'home') {
         return buildDisplayArray(arr)
        } else {
         let choice =  arr.filter(art => art.section === type)
         return buildDisplayArray(choice)
     }
     }
     const displayArticles = checkType(articles)
  

    
        return (
            <>
            {displayArticles.length ? displayArticles : <p>Sorry, no top stories in this section.</p>}
            </>
        )
    
}

export default Display;