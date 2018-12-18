import React, {Component, Fragment} from 'react';
import '../css/TweetsBar.css';
import NewTweet from './NewTweet';
import Tweet from './Tweet';

class TweetsBar extends Component {
    constructor() {
        super();
        this.state = {
            newTweet: '',
            oldTweets: []
        }

        this.addTweet = this.addTweet.bind(this);
        this.renderTweets = this.renderTweets.bind(this);
    }

    addTweet(event) {
        event.preventDefault();

        const newTweet = this.state.newTweet;
        const oldTweets = this.state.oldTweets;

        if(newTweet) {
            this.setState({
                oldTweets: [ newTweet, ...oldTweets ],
                newTweet: ''
            });
        }
    }

    renderTweets = (tweet, index) => { return ( <Fragment key={ index }>
                                                    <hr/>
                                                    <Tweet content={ tweet }  />
                                                </Fragment>
                                            )};

    render(){

        let tweetsList;

        if (this.state.oldTweets.length > 0) { 
            tweetsList = this.state.oldTweets.map(
                this.renderTweets
            ); 
        }

        else tweetsList = ( <div className="tweet__container">
                                <div className="tweet__info">No tweets yet!</div>
                            </div>);

        return(
            <Fragment>
                <div className="tweetsBar__container contentBox">
                    <h1 className="tweetsBar__header">What's up?</h1>
                    <hr/>
                    
                    {/* Equivalent to NewTweet */}

                    <span className={`tweet__charCounter ${ this.state.newTweet.length > 140 ? 'tweet__charCounter--invalid' : ''}`}>{ this.state.newTweet.length }/140 characters</span>
                    <form type="POST" onSubmit={ this.addTweet }>
                        <textarea className="tweet__input" rows="4" 
                            placeholder="Spread the word!"
                            value={ this.state.newTweet } 
                            onChange={ (event) => this.setState({ newTweet: event.target.value }) }
                            onInput={ (event) => this.setState({ newTweet: event.target.value })}/>
                        <button className="tweet__button"
                                disabled={ this.state.newTweet.length > 140 }
                                type="submit">Post</button>
                    </form>

                    {/* End equivalence to NewTweet */}
                    
                    { tweetsList }
            
                </div>
            </Fragment>
        );
    }
}

export default TweetsBar;