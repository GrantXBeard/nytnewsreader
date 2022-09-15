import React, {useState, useEffect, Component} from 'react'
import './App.css';
import Header from '../Header/Header'
import Display from '../Display/Display';
import { Route, Link } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      type: 'home'
    }
  }

  getType = (type) => {
    // console.log(type)
    this.setState({type: type})
    console.log(this.state.type)
  }

  render() {
    return (
          <main>
            <Header getType={this.getType}/>
            <Display type={this.state.type} />
          </main>
          
        );
  }
}

export default App;
