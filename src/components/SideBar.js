import React, {Component, Fragment} from 'react';
import '../css/SideBar.css';

class SideBar extends Component {

    render(){
        return(
            <div class="sideBar">
                <div className="contentBox">
                    <h2 className="sideBar__header">Your stuff</h2>
                    <hr/>
                    {this.props.followers} followers<br/>
                    {this.props.following} following<br/>
                </div>

                <div className="contentBox">
                    <h2 className="sideBar__header">Close to you</h2>
                    <hr/>
                    <ul>
                        <li><a href="/">#elenao</a></li>
                        <li><a href="/">#elenaodenovo</a></li>
                        <li><a href="/">#hashtag</a></li>
                    </ul> 
                </div>

                <div className="contentBox">
                    <h2 className="sideBar__header">Around the world</h2>
                    <hr/>
                    <ul>
                        <li><a href="/">#nothim</a></li>
                        <li><a href="/">#metoo</a></li>
                        <li><a href="/">#blacklivesmatter</a></li>
                    </ul> 
                </div>
            </div>
        );
    };
}

export default SideBar;