import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import News from './components/News'

class App extends Component {
  render() {

    const dizi = [{
      id:1,
      tittle : "react 1",
      description : "tanımlama 1"
  },
  {
      id:2,
      tittle: "react 2",
      description : "tanımlama 2"
  },
  {
      id:3,
      tittle: "react 3",
      description : "tanımlama 3"
  }
]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <News dizi={ dizi } />        
        </header>
      </div>
    );
  }
}

export default App;
