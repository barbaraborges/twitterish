import React, {Component} from 'react';
import '../css/Page.css';
import '../css/Login.css';
import Layout from '../components/Layout';
import { throws } from 'assert';

class Login extends Component {

    login = (event) => {
        event.preventDefault();
        console.log(this.inputUsername)
        console.log(this.inputPassword)

        const loginData = {
            username: this.inputUsername.value,
            password : this.inputPassword.value
        }

        fetch('http://test.com', {
            method: 'POST',
            body: JSON.stringify(loginData)
        })
        .then( data => console.log(data))
        // .then((response) => {
        //     if(!response.ok)
        //         throw response;
        //     return response.json();
        // })
        .then((JSONresponse) => {
            localStorage.setItem('TOKEN', "thisIsAToken");
            this.props.history.push('/');
        })
        // .catch((error) => {
        //     error.json().then(
        //         (error) => console.log(error)
        //     )
        // })
    }

    render(){
        return( 
                <Layout>
                    <div className="content-centered-page">
                        <div className="login__container">
                            <h1 className="login__title">Login</h1>
                            <form type="POST" onSubmit={ this.login }>
                                <label className="login__label" htmlFor="username">Username</label>
                                <input ref={ (inputUsername) => this.inputUsername = inputUsername } className="login__input" name="username" type="text" />
                                <label className="login__label" htmlFor="password">Password</label>
                                <input ref={ (inputPassword) => this.inputPassword = inputPassword } className="login__input" name="password" type="password" />
                                <button className="login__submit-button" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </Layout>
            );

    }
}

export default Login;