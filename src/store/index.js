import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import middleware from '../middleware';

export const configureStore = (initialState={}) => {
  createStore(
    initialState,
    reducer,
    compose(applyMiddleware(...middleware))  
  )
}
