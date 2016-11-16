/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import history from '../../core/history';

class HomePage extends React.Component {


  componentDidMount() {


  }

  render() {

    const auth0 = new Auth0({
      domain: 'plg.auth0.com',
      clientID: 'oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho',
      responseType: 'token' // also 'id_token' and 'code' (default)
    });
    
    var token = auth0.parseHash(history.getCurrentLocation().hash);

    if (token && token.idToken) {
      //response from auth0 --> user has just finished authenticating
      auth0.getProfile(token.idToken, function (error, profile) {
        if (error) {
          // Handle error
          return;
        }

        localStorage.setItem("idToken", token.idToken);
        localStorage.setItem("profile", JSON.stringify(profile));

        // Update DOM
      });
    }

    return (
      <Layout className={s.content}>
        <div />
      </Layout>
    );
  }

}

export default HomePage;
