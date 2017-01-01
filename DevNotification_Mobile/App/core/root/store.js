/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

/** Authentication module */
import authSubscriber from '../auth/subscriber';
import authState from '../auth/reducer';
import routeState from '../navigation/nav_reducer';
import createLogger from 'redux-logger';

const logger = createLogger();

const combinedReducers = combineReducers({
    routeState,
    authState
})


// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware,logger));
store.subscribe(authSubscriber);

export default store;