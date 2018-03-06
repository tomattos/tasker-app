import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';

import taskerApp from './reducers';
import rootSaga from './sagas/sagas';

import App from './components/App';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  taskerApp,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);