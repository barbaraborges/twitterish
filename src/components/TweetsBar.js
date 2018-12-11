import React, {Component, Fragment} from 'react';
import '../css/TweetsBar.css';

class TweetsBar extends Component {
    render(){
        return(
            <Fragment>
                <div className="tweetsBar__container contentBox">
                    <h1 className="tweetsBar__header">What's up?</h1>
                    <hr/>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default TweetsBar;