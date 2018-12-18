import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import App from './pages/App';
import About from './pages/About';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <Fragment>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ App } exact />
                <Route path="/about" component={ About } exact />
                <Route path="/login" component={ Login } exact />
                <Route path="*" component={ PageNotFound }/>
            </Switch>
        </BrowserRouter>
    </Fragment>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
