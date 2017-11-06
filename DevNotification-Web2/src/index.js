import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './configureStore'
import authSubscriber from './core/authentication/subscriber'

import App from './App'

// store.subscribe(() => console.log('state', store.getState()));

store.subscribe(authSubscriber);

const Component = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

let render = () => {
  ReactDOM.render(<Component />, document.getElementById('root'))
}
render()
if (module.hot) {
  module.hot.accept(Component => {
    render()
  })
}
