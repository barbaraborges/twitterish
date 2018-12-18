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
                <span className={`tweet__charCounter ${ this.state.newTweet.length > 140 ? 'tweet__charCounter--invalid' : ''}`}>{ this.state.newTweet.length }/140 characters</span>
                <form type="POST" action="">
                    <textarea className="tweet__input" rows="4" 
                        placeholder="Spread the word!"
                        value={ this.state.newTweet } 
                        onChange={ (event) => this.setState({ newTweet: event.target.value }) }
                        onInput={ (event) => this.setState({ newTweet: event.target.value })}/>
                    <button className="tweet__button"
                            disabled={ this.state.newTweet.length > 140 }
                            onClick={ () => this.props.setState({ oldTweets: [this.state.newTweet]}) }>Post</button>
                </form>
            </Fragment>
        );
    }
}

export default NewTweet;