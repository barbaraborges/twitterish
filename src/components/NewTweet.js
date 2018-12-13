import React, {Component} from 'react';

class NewTweet extends Component {
    render(){
        return(
            <form type="POST" action="">
                <textarea class="tweet__input" placeholder="Spread the word!" rows="4" />
                <button class="tweet__button">Post</button>
            </form>
        );
    }
}

export default NewTweet;