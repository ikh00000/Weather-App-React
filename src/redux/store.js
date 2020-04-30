import {createStore} from 'redux';
import rootReduser from './rootReducer';
import logger from 'redux-logger'
import {applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;

