import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import {ApiProvider} from './components/api-context';

import Api from './services/api';
import ErrorBoundary from './components/error-boundary';

const api = new Api();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ApiProvider value={api}>
          <App />
        </ApiProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
