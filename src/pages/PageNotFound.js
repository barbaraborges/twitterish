import React, {Component} from 'react';
import '../css/Page.css';
import Layout from '../components/Layout';

class PageNotFound extends Component {

    render(){
        return( 
            <Layout>
                <div className="content-centered-page page__info">
                    <div className="page__content">
                        <h1>404</h1>
                        Page Not Found
                    </div>
                </div>
            </Layout>
            );

    }
}

export default PageNotFound;