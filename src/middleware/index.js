import thunkMiddleware from 'redux-thunk';

const logger = (store) => (next) => (action) => {
  console.log('Middleware dispatching',action)
  const result = next(action);
  console.log('next state-', store.getState());
  return result;
}

const middlewares = [logger, thunkMiddleware];

export default middlewares;