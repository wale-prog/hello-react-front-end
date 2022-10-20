import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/index';
import { fetchGreeting } from './redux/GreetingSlice';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchGreeting());
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
