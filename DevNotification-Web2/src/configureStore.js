import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import history from './history'
import rootReducer from './reducers/index'
import { createLogger } from 'redux-logger'



const middleware = routerMiddleware(history)
const logger = createLogger();

/* export default function configureStore() { */
const store = createStore(rootReducer, applyMiddleware(middleware, thunk, logger))

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}

export default store;

// }
