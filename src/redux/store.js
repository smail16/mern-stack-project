import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

// eslint-disable-next-line no-underscore-dangle
const devtools =
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
    ? (a) => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devtools))

export default store
