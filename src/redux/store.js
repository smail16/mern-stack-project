import { applyMiddleware, compose, createStore } from 'redux'
// import { userReducer } from "./reducers/reducerUser"
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { storeReducer } from './Slice/Slice'
import reducer from './reducer'
// defaults to localStorage for web
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

// import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit'
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistReducer,
//   persistStore,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import thunk from 'redux-thunk'

// import { storeReducer } from './Slice/Slice'
// import rootReducer from './rootReducer'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// // Create an array of middleware, including Redux Thunk
// const middleware = [thunk]

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(middleware),
//   // Add the Redux DevTools extension
//   devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// })

// export const persistor = persistStore(store)
