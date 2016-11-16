import React from 'react'
import Layout from '../../components/Layout';

class IndexPage extends React.Component {


    componentDidMount() {

        // Initiating our Auth0Lock
        const lock = new Auth0Lock('oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho', 'plg.auth0.com', {
            container: 'root',
            auth: {
                redirectUrl: 'http://localhost:3000/loginredirectcbk',
                responseType: 'token',
                params: {
                    scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
                },
            }
        });
      
        lock.show();



    }

    render() {
        return (
            <div id="root" ></div>
        )
    }

}

export default IndexPage;