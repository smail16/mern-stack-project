import { configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { cartReducer } from "./cartSlice/cartSlice"

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)


















// import { applyMiddleware, compose, createStore } from 'redux'
// import thunk from 'redux-thunk'

// import rootReducer from './rootReducer'

// // eslint-disable-next-line no-underscore-dangle
// const devtools =
//   typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
//     ? (a) => a
//     : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = createStore(rootReducer, compose(applyMiddleware(thunk), devtools))

// export default store
