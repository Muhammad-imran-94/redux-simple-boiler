import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allReducers from './reducers'
import { createStore } from 'redux';
import { Provider } from "react-redux";
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// store --> Global store

// Actions --> describe what you want to do (actions for what u want to do)
//--- Actions calls reducers and reducers cahnge the global state ----

// Reducer --> Bassically describe how your actions transforms state into update state
//--- Reducers calls the actions

// Dispatch ---> use to send actions to reducers from childs