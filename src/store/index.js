import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { itemReducer } from '../reducers/itemReducer';

const reducers = combineReducers({
  itemReducer,
});

const initalState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
