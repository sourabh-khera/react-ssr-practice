import { createStore, applyMiddleware } from 'redux';
import userReducer from '../reducer';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import middlewares from '../middleware';

const configureStore = (initialState = {}) => {
  return createStore(
    userReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}

export default configureStore;