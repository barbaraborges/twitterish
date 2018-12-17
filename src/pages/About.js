import React, {Component} from 'react';
import '../css/Page.css';
import Layout from '../components/Layout';

class About extends Component {

    render(){
        return( 
                <Layout>
                    <div className="page__info">
                        <div className="page__content">
                            This app was created by Barbara Borges for educational purposes.<br/>
                            All code is under the MIT lincense.<br/>
                            December, 2018.
                        </div>
                    </div>
                </Layout>
            );

    }
}

export default About;