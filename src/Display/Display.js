import React, { Component } from "react";
import Card from "../Card/Card";
import './Display.css'
import getArticles from "../apiCall";

class Display extends Component {
    constructor({ type }) {
        super()
        this.state = {
            articles: [],
            error: '',
            isLoading: false,
            type: type
          }
    }
    
    componentDidMount = () => {
        this.getData(this.state.type)
    }

    componentDidUpdate = (prev) => {
        if (this.state.type !== 'home') {
            console.log(this.state.type)
        }
    }

    getData = () => {
        this.setState({isLoading: true})
        getArticles(this.state.type)
        .then((data) => {
            let articleArr = this.getType(data.results)
            this.setState({
                articles: articleArr,
                isLoading: false
            })
        })
        .catch((err) => {
            this.setState({error: err.message})
            console.log(err)
        });
    }

    getType = (articles) => {
        if (this.state.type === 'home') {
         return this.buildDisplayArray(articles)
        } else {
         let choice =  articles.filter(art => art.section === this.state.type)
         return this.buildDisplayArray(choice)
     }
     }

    buildDisplayArray = (arr) => {
        return arr.map(art => {
            return(
                <Card
                title={art.title}
                byline={art.byline}
                key={art.updated_date}
                section={art.section}
                />
            )
        })
    }

    render() {
        return (
            <>
            {this.state.articles.length && this.state.articles}
            </>
        )
    }
}

export default Display;