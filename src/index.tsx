import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux';
import App from './App';
import { Global } from '@emotion/react';
import reset from './components/style/reset';
import global from './components/style/global';
import reportWebVitals from './reportWebVitals';

const store = legacy_createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={[reset, global]} />
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
