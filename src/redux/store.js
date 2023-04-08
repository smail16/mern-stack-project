/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const devtools =
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
    ? (a) => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devtools))

export default store
