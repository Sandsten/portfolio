import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';

import newStore from './Redux/store';

import App from './App';

import './index.css';

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  window.document.querySelector('#root')
);
