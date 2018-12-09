import React, {Component} from 'react';
import '../css/Header.css'

class Header extends Component {
    render() {
        return(
            <header className="header__container">
            <nav>
                <ul className="navBar__menu">
                    <li className="navBar__menuItem greetings">Hello, {this.props.username}!</li>
                    <li className="navBar__menuItem title">Twitterish</li>
                    <li className="navBar__menuItem"><a href="/">Home</a></li>
                    <li className="navBar__menuItem"><a href="">Login</a></li>
                </ul>
            </nav>
            </header>
        );
    }
    
} 

export default Header;