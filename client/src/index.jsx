import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';

import newStore from './redux-toolkit/store';

import App from './App';

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  window.document.querySelector('#root')
);
