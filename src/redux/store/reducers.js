// @flow

import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  wallet,
  password
} from '../modules';

const config = {
  key: 'LIFTED_REDUX_STORE',
  storage
};

const appReducer = persistCombineReducers(config, {
  wallet,
  password
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}
