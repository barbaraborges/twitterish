import React, { Component } from 'react';
import Header from './Header';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header username="Binha"/>
      </div>
    );
  }
}

export default App;
