import { transferReduser } from '../redusers/transferReduser';
import { ticketsReduser } from '../redusers/ticketsReduser';
import { errorReduser } from '../redusers/errorReduser';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import { thunk } from 'redux-thunk';

const chengeFilterMiddleWare = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(chengeFilterMiddleWare, thunk));

const redusers = combineReducers({
  transferReduser,
  ticketsReduser,
  errorReduser,
});

export const store = createStore(redusers, enhancer);
