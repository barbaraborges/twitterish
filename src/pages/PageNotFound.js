import React, {Component} from 'react';
import '../css/Page.css';

class PageNotFound extends Component {

    render(){
        return( <div className="page__info">
                    <div className="page__content">
                        <h1>404</h1>
                        Page Not Found
                    </div>
                </div>);

    }
}

export default PageNotFound;