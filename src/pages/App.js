import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import TweetsBar from '../components/TweetsBar';
import NewTweet from '../components/NewTweet';
import Tweet from '../components/Tweet';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header username="Binha"/>
        <div className="contentContainer">
          <SideBar followers="3" following="40" />
          <TweetsBar>
            <NewTweet/>
            <Tweet/>
          </TweetsBar>
        </div>
      </Fragment>
    );
  }
}

export default App;
