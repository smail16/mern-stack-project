
import thunk from "redux-thunk"
import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from './rootReducer'


const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devtools))



export default store