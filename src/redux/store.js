import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit"
import thunk from 'redux-thunk'
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
import { storeReducer } from "./Slice/Slice"



const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, storeReducer )

// Create an array of middleware, including Redux Thunk
const middleware = [thunk]

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
  // Add the Redux DevTools extension
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export const persistor = persistStore(store)