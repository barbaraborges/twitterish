import React, {Component, Fragment} from 'react';
import Header from './Header';
import '../css/Page.css'

class Layout extends Component {

    render(){
        return(
            <Fragment>
                <Header username="Binha"/>
                {this.props.children}
            </Fragment>
        );
    }
}

export default Layout;