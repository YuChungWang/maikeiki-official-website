import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const configureStore = (initialState = {}) => {
  const middleware = [thunk];
  const devToolsExtension = window.devToolsExtension
    ? window.devToolsExtension()
    : f => f;
  const enhancer = compose(applyMiddleware(...middleware), devToolsExtension);

  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
