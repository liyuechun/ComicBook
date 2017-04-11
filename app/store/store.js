import { combineReducers,createStore,applyMiddleware } from 'redux';

import reducers from '../reducers';

import thunk from 'redux-thunk';

let composeReducers = combineReducers(reducers);

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(composeReducers);

module.exports = store;