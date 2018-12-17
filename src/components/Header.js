import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import '../css/Header.css'

class Header extends Component {
    render() {
        return(
            <Fragment>
                <header className="header__container">
                <nav>
                    <ul className="navBar__menu">
                        <li className="navBar__menuItem navBar__mobileMenu"><i className="fa fa-bars" aria-hidden="true"></i></li>
                        <li className="navBar__menuItem navBar__greetings">Hello, {this.props.username}!</li>
                        <li className="navBar__menuItem navBar__title">Twitterish</li>
                        <li className="navBar__menuItem"><Link to="/">Home</Link></li>
                        <li className="navBar__menuItem"><Link to="/about">About</Link></li>
                        <li className="navBar__menuItem"><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                </header>
            </Fragment>
        );
    }
    
} 

export default Header;