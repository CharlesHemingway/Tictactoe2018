import React, { Component } from 'react'
import GameForm from './containers/gameform'
import Navbar from './containers/navbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">      
        <Navbar/>
      <header className="App-header">     
        <GameForm/>
      </header>
      
      </div>
    );
  }
}

export default App;
