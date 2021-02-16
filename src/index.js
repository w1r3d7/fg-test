import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import {ApiProvider} from './components/api-context';

import Api from './services/api';

const api = new Api();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider value={api}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
