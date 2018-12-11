import React, {Component, Fragment} from 'react';
import '../css/SideBar.css';

class SideBar extends Component {

    render(){
        return(
            <div className="sideBar contentBox">
                <h2 className="sideBar__header">Your stuff</h2>
                <hr/>
                {this.props.followers} followers<br/>
                {this.props.following} following<br/>
            </div>
        );
    };
}

export default SideBar;