import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const persistConfig = {
  key: 'key',
  storage,
}
const pReducer = persistReducer(persistConfig, rootReducer)

const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const store = createStore(pReducer, composeSetup(applyMiddleware(thunk)))
const persistor = persistStore(store)
export { persistor, store }


