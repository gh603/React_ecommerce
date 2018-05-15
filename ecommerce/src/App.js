import React, { Component } from 'react';

import Aux from './hoc/Aux'; 
class App extends Component {
  render() {
    return (
      <Aux>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Aux>
    );
  }
}

export default App;
