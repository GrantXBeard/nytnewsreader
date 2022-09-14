import React, {useState, useEffect, Component} from 'react'
import './App.css';
import Header from '../Header/Header'
import Display from '../Display/Display';


class App extends Component {
  constructor() {
    super()
    this.state = {
      type: 'home'
    }
  }

  render() {
    return (
          <main>
            <Header />
            <Display type={this.state.type} />
          </main>
          
        );
  }
}

export default App;
