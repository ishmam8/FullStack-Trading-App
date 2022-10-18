import { configureStore } from '@reduxjs/toolkit';
import {counterT1 } from '../goldPrice/reducers';

const store = configureStore({
  reducer: counterT1
})
export default store;