<<<<<<< HEAD
=======
/* eslint-disable no-underscore-dangle */
>>>>>>> 50e996c51934898a637ef38c3626e4c72ad510e1
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

<<<<<<< HEAD
// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools))
=======
const devtools =
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
    ? (a) => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devtools))
>>>>>>> 50e996c51934898a637ef38c3626e4c72ad510e1

export default store
