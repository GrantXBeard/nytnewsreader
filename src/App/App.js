import React, {Component} from 'react'
import './App.css';
import Header from '../Header/Header'
import Display from '../Display/Display';
import getArticles from "../apiCall";


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
    this.getData(this.state.type)
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
            <Header getType={this.getType}/>
            {!this.state.isLoading && <Display type={this.state.type} articles={this.state.articles} />}
          </main>
          
        );
  }
}

export default App;
