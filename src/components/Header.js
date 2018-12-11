import React, {Component, Fragment} from 'react';
import '../css/Header.css'

class Header extends Component {
    render() {
        return(
            <Fragment>
                <header className="header__container">
                <nav>
                    <ul className="navBar__menu">
                        <li className="navBar__menuItem navBar__mobileMenu"><i class="fa fa-bars" aria-hidden="true"></i></li>
                        <li className="navBar__menuItem navBar__greetings">Hello, {this.props.username}!</li>
                        <li className="navBar__menuItem navBar__title">Twitterish</li>
                        <li className="navBar__menuItem"><a href="/">Home</a></li>
                        <li className="navBar__menuItem"><a href="">Login</a></li>
                    </ul>
                </nav>
                </header>
            </Fragment>
        );
    }
    
} 

export default Header;