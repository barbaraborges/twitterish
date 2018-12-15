import React, {Component, Fragment} from 'react';

class NewTweet extends Component {

    constructor() {
        super();
        this.state = {
            newTweet: ''
        }
    }

    render(){
        return(
            <Fragment>
                <span className={`tweet__charCounter ${ this.state.newTweet.length > 140 ? 'tweet__charCounter--invalid' : ''}`}>0/140 characters</span>
                <form type="POST" action="">
                    <textarea className="tweet__input" placeholder="Spread the word!" rows="4" 
                        value={ this.state.newTweet } />
                    <button className="tweet__button">Post</button>
                </form>
            </Fragment>
        );
    }
}

export default NewTweet;