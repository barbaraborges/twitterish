import React, {Component, Fragment} from 'react';
import '../css/Tweet.css';

class Tweet extends Component {

    render() {
        return (
            <Fragment>
                <div className="tweet__container">
                    <div className="tweet__authorPic">
                        <img src={ this.props.authorPic }/>
                    </div>
                    <div className="tweet__contentContainer">
                        <div className="tweet__body">
                            <div className="tweet__authorName">{ this.props.author }</div>
                            <div className="tweet__text">
                                { this.props.content }
                            </div>
                        </div>
                        <div className="tweet__footer">
                            <div className="tweet__info">
                                <button className="tweet__likeButton"><i class="fas fa-heart"></i></button>  0 Likes
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Tweet;