import { createStore, compose, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk';

import reducer from './reducers/index';

const middleware = applyMiddleware(thunk);

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer = compose;

const store = createStore(reducer, composeEnhancer(middleware));

export default store;
