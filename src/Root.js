import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

export default ({ children, initState = {} }) => {
  const store = createStore(
    reducers,
    initState,
    applyMiddleware(async, stateValidator));

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};