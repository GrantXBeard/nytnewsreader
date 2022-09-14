import React, {useState, useEffect, Component} from 'react'
import './App.css';
import Header from '../Header/Header'
import Display from '../Display/Display';
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
