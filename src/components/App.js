import React, { Component, Fragment } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import TweetsBar from './TweetsBar';
import NewTweet from './NewTweet';
import Tweet from './Tweet';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header username="Binha"/>
        <div class="contentContainer">
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
