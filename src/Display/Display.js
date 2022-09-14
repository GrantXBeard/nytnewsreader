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
        this.getData()
    }

    getData = () => {
        this.setState({isLoading: true})
        getArticles(this.state.type)
        .then((data) => {
            let articleArr = this.buildDisplayArray(data.results)
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

    buildDisplayArray = (arr) => {
        return arr.map(art => {
            return(
                <Card
                title={art.title}
                byline={art.byline}
                key={art.updated_date} 
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