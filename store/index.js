import constants from '@Conf/constants';

import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';

import middlewares from './middlewares';
import rootReducer from './reducer';

let composeEnhancers;

if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const makeStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

export const wrapper = createWrapper(makeStore, { debug: constants.IS_DEV });
