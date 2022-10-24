import { configureStore } from '@reduxjs/toolkit';
import {counterT1 } from '../goldPrice/reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

//combineRedducers to incorporate T2

const persistConfig = {
  key: 'root',
  storage,  //storage engine,localStorage,sessionStorage,etc
}

const persistedReducer = persistReducer(persistConfig, counterT1)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
export const persistor = persistStore(store);