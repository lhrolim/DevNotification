import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import history from './history'
import rootReducer from './reducers/index'

const middleware = routerMiddleware(history)
export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(middleware, thunk))
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
