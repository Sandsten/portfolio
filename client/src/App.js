import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import APITest from './APITest';
import Red from './Red';

import './index.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={APITest} />
        <Route path="/red" component={Red} />
      </Router>
    );
  }
}

export default App;
