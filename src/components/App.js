import React, { Component, Fragment } from 'react';
import Header from './Header';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header username="Binha"/>
      </Fragment>
    );
  }
}

export default App;
