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
import store from '../../configureStore'
import { auth0Redirected } from '../../devnotification/core/authentication/action'
import { connect } from 'react-redux'
import history from '../../history';

class AuthRedirectPage extends React.Component {

  componentDidMount() {
    store.dispatch(auth0Redirected());
  }

  componentDidUpdate() {
    const { auth0Redirected,idToken } = this.props.authState;
    if (auth0Redirected){
      history.push("/");
    }
  }

  render() {

    return (
      <div></div>
    );
  }

}


function mapStateToProps(state) {
  const {authState} = state;

  return {
    authState
  }
}


export default connect(mapStateToProps)(AuthRedirectPage);

