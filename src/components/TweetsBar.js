import React, {Component, Fragment} from 'react';
import '../css/TweetsBar.css';
import NewTweet from './NewTweet';
import Tweet from './Tweet';

class TweetsBar extends Component {
    constructor() {
        super();
        this.state = {
            oldTweets: []
        }
    }

    render(){
        return(
            <Fragment>
                <div className="tweetsBar__container contentBox">
                    <h1 className="tweetsBar__header">What's up?</h1>
                    <hr/>
                    <NewTweet oldTweets={this.state.oldTweets } />

                    { this.state.oldTweets.map(
                        tweet => { return (
                            <Fragment>
                                <hr/>
                                <Tweet content={ tweet }/>
                            </Fragment>
                        ) }
                    ) }
            
                </div>
            </Fragment>
        );
    }
}

export default TweetsBar;