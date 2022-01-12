import React, { Component } from "react";
import Board from './tictacto';

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <p>
          React Project 2
        </p>
        <Board />
      </div>
    );
  }   
}

export default App;
