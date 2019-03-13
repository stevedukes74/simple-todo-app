import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import { todosReducer } from './utils/reducers';

const store = createStore(
  todosReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(logger)
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
