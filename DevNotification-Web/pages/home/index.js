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
import s from './styles.css';
import history from '../../core/history';
import store from '../../core/store'
import { checkAuth } from '../../core/authentication/actions'
import { connect } from 'react-redux'
import restService from '../../core/navigation/restService'
import Layout from '../../components/Layout';
import ProjectListContainer from '../../components/Projects/ProjectListContainer'

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {


    }

  }

  componentDidMount() {
    var idToken = localStorage.getItem("idToken");
    store.dispatch(checkAuth(idToken));
  }

  componentDidUpdate() {
    const { isAuthenticated, idToken, profile } = this.props
    if (isAuthenticated && profile) {
      //make sure to create the user at the api-side after the login suceeded
      restService.putPromise(`user/${profile.user_id}`, {
        userId: profile.user_id,
        email: profile.email
      });
    }
  }

  
  render() {


    const { isAuthenticated } = this.props;

    return (
      <div>
        {isAuthenticated && <Layout className={s.content}>
          <div >
            <ProjectListContainer/>
          </div>
        </Layout>
        }

      </div>


    );
  }

}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authState.authenticated,
    idToken: state.authState.idToken,
    profile: state.authState.profile,
  }
}


export default connect(mapStateToProps)(HomePage);
