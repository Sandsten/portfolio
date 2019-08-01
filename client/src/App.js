import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import HomePage from './Testing/HomePage';
import APITest from './Testing/APITest';
import CreateAccout from './Testing/CreateAccount';
import projects from './pages/projects';
import Red from './Testing/Red';

import './styles/index.scss';

// Main container for the whole website
const MainContainer = styled.div`
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 250px 1fr;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Router>
          {/* Render the sidebar on all pages */}
          <Route path="/" component={Sidebar} />
          {/* <Route path="/" component={TopBar} /> */}
          <Route path="/" exact component={HomePage} />
          <Route path="/test" exact component={APITest} />
          <Route path="/create-account" component={CreateAccout} />
          <Route path="/red" component={Red} />
          <Route path="/projects" component={projects} />
        </Router>
      </MainContainer>
    );
  }
}

export default App;
