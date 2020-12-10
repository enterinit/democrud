import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { hotdogs } from './reducer';
import { reducerget } from './reducer';
import thunk from 'redux-thunk';
const middlewares = [logger, thunk];
let rootreducer = combineReducers({ reducerget, hotdogs, form: formReducer });
export let store = createStore(
  rootreducer,
  { hotdogs: {} },
  compose(applyMiddleware(...middlewares), /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/)
);
