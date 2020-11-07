import combineReducers from './reducers/reducer_index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from './middleware/logger';
import api from './middleware/api';

const initialState = {};

const middleware = [thunk,logger,api];

const store = createStore(
  combineReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
