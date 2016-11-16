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
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };



  componentDidMount() {

    // Initiating our Auth0Lock
    const lock = new Auth0Lock('oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho', 'plg.auth0.com', {
      container: 'root',
      auth: {
        redirectUrl: 'http://localhost:3000/loginredirectcbk',
        responseType: 'code',
        params: {
          scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
        }
      }
    });

    lock.show();



    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }

}

export default HomePage;
