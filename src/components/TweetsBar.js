import React, {Component, Fragment} from 'react';
import '../css/TweetsBar.css';
import NewTweet from './NewTweet';
import Tweet from './Tweet';

class TweetsBar extends Component {
    render(){
        return(
            <Fragment>
                <div className="tweetsBar__container contentBox">
                    <h1 className="tweetsBar__header">What's up?</h1>
                    <hr/>
                    <NewTweet />
                    <hr/>
                    <Tweet/>
                </div>
            </Fragment>
        );
    }
}

export default TweetsBar;