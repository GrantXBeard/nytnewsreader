import React, {Component} from 'react'
import './App.css';
import Header from '../Header/Header'
import Display from '../Display/Display';
import Article from'../Article/Article'
import getArticles from "../apiCall";
import { Route, Routes } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
        this.state = {
            articles: [],
            error: '',
            isLoading: false,
            type: 'home',
            path: null,
            currentStory: null
          }
  }

  componentDidMount = () => {
    this.getData(this.state.type)
  }

  resetType = () => {
    this.setState({ type: 'home' })
  }

  getCurrentStory = (title) => {
    const current = this.state.articles.find(art => art.title === title)
    this.setState({
      currentStory: current,
      path: current.title
    })
  }

  getData = () => {
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


  getType = (type) => {
    this.setState({type: type})
  }

  render() {
    return (
          <main>
            <Header resetType={this.resetType} getType={this.getType}/>
            <Routes>
              <Route exact path='/' element={<Display getCurrentStory={this.getCurrentStory} type={this.state.type} articles={this.state.articles} />}> </Route>
              <Route path={`/${this.state.path}`} element={<Article path={this.state.path} currentStory={this.state.currentStory} />}> </Route>
            </Routes>
          </main>
          
        );
  }
}

export default App;
