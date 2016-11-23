/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import reducer from '../core/authentication/reducer'

import { INIT_LOGIN, AUTH_DENIED, LOGOUT, INIT_PROFILE, AUTH0_REDIRECTED } from '../core/authentication/actionconstants'

describe('authentication store suite', () => {

  it('test reducer, initial state', () => {
    const result = reducer(undefined, {});
    expect(result).to.deep.equal({ authenticated: false });
  });
  

  it('test reducer, applying init login', () => {
    const result = reducer({ authenticated: false }, { type: INIT_LOGIN });
    expect(result).to.deep.equal({ authenticated: false, showLock: true });
  });


  it('test reducer, auth denied', () => {
    const result = reducer({ authenticated: false }, { type: AUTH_DENIED });
    expect(result).to.deep.equal({ authenticated: false, authenticationDenied: true });
  });

  it('test reducer: logout', () => {
    const result = reducer({ authenticated: true }, { type: LOGOUT });
    expect(result).to.deep.equal({ authenticated: false, logout: true });
  });

  it('test reducer: logout', () => {
    const result = reducer({ authenticated: true }, { type: AUTH0_REDIRECTED, idToken: 'xxx' });
    expect(result).to.deep.equal({ authenticated: true, idToken: 'xxx', auth0Redirected: true });
  });

});
