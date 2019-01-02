import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'

const reducer = function (state = { count: 0 }, action) {
  if (action.type === 'ADD_COUNT') {
    return {
      count: state.count + 1
    }
  }
  if (action.type === 'REDUCE_COUNT') {
    return {
      count: state.count - 1
    }
  }
  return state
}

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'))
