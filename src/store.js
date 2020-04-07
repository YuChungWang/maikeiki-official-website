import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const configureStore = (initialState = {}) => {
  const middleware = [thunk];
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;
  const enhancer = compose(applyMiddleware(...middleware), devToolsExtension);

  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
