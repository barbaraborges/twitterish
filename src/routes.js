import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './pages/App';
import About from './pages/About';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound'

function isUserLogged() {
    return localStorage.getItem('TOKEN') !== null ? true : false;
}

class Routes extends Component {

    render() {
        return(
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute path="/" component={ App } exact />
                        <Route path="/about" component={ About } exact />
                        <Route path="/login" component={ Login } exact />
                        <Route path="*" component={ PageNotFound }/>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

class PrivateRoute extends Component {
    render() {
        const Component = this.props.component;
        const props = this.props;
        if(isUserLogged()){
            return(<Route render={() => <Component {...props}/>} />);
        }
        else {
            return <Redirect to="/login" />
        }
    }
}

export default Routes;