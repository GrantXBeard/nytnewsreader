import React from 'react'
import './App.css';
import Header from '../Header/Header'
import Display from '../Display/Display';
import sampleData from '../sample'

function App() {
  console.log(sampleData.results)
  return (
    <main>
      <Header />
      <Display />
    </main>
    
  );
}

export default App;
