import React, {Component, Fragment} from 'react';
import '../css/Tweet.css';

class Tweet extends Component {
    render() {
        return (
            <div className="tweet__container">
                <div className="tweet__authorPic"></div>
                <div className="tweet__contentContainer">
                    <h3 className="tweet__authorName">Binha</h3>
                    <div class="tweet__text">
                        Life sucks!1
                    </div>
                </div>
            </div>
        );
    }
}

export default Tweet;