import React, { Component } from 'react';
import './App.css';

import SparkBar from './SparkBar.jsx';

class App extends Component {
  state = {
    points: [
      { x: '1', y: 10 },
      { x: '2', y: 30 },
      { x: '3', y: 60 },
      { x: '4', y: 110 },
      { x: '5', y: 150 },
      { x: '6', y: 120 },
      { x: '7', y: 30 },
      { x: '8', y: 140 },
      { x: '9', y: 90 }
    ]
  };
  render() {
    return (
      <div className="App">
        <div className="content">
          <SparkBar data={this.state.points} />
        </div>
      </div>
    );
  }
}

export default App;
