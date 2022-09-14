import React, {useState, useEffect, Component} from 'react'
import './App.css';
import Header from '../Header/Header'
import Display from '../Display/Display';
import sampleData from '../sample'
import getArticles from '../apiCall';

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      error: '',
      isLoading: false,
      type: 'home'
    }
  }

  componentDidMount = () => {
    this.setState({isLoading: true})
    getArticles(this.state.type)
    .then((data) => {
      this.setState({
        articles: data.results,
        isLoading: false
      })
    })
    .catch((err) => {
      this.setState({error: err.message})
      console.log(err)
    });
  }
  
  render() {
    return (
          <main>
            <Header />
            {this.state.articles ? <Display articleData={this.state.articles} /> : <h2>{this.state.error}</h2>}
          </main>
          
        );
  }
}

export default App;
