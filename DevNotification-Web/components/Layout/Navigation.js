/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import { logout } from '../../core/authentication/actions'
import store from '../../core/store'
import { connect } from 'react-redux'

function onClickHandler(event) {
  store.dispatch(logout());
  event.preventDefault();
}

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }



  render() {

    const {authState} = this.props;

    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className="mdl-navigation__link" to="/">Home</Link>
        <img src={authState.profile.picture} style={{"height" : "50%"}} />
        <Link className="mdl-navigation__link" to="/" onClick={onClickHandler}>Logout</Link>
      </nav>
    );
  }

}

function mapStateToProps(state) {
  const {authState} = state;

  return {
    authState
  }
}


export default connect(mapStateToProps)(Navigation);
