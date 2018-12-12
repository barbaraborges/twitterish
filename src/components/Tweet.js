import React, {Component} from 'react';
import '../css/Tweet.css';

class Tweet extends Component {
    render() {
        return (
            <form type="POST" action="">
                <textarea class="tweet__input" placeholder="Spread the word!" rows="4">

                </textarea>
            </form>
        );
    }
}

export default Tweet;