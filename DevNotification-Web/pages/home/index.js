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
import store from '../../core/store'
import { checkAuth } from '../../core/authentication/actions'

class HomePage extends React.Component {

  componentDidMount() {
    var idToken = localStorage.getItem("idToken");
    if (idToken === "undefined") {
      localStorage.removeItem("idToken");
      idToken = null;
    }
    store.dispatch(checkAuth(idToken));
  }

  render() {

    return (
      <Layout className={s.content}>
        <div />
      </Layout>
    );
  }

}

export default HomePage;
