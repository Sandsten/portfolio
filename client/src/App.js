import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';
// import TopBar from './components/TopBar';
import HomePage from './Testing/HomePage';
import APITest from './Testing/APITest';
import CreateAccout from './Testing/CreateAccount';
import projects from './pages/projects';
import project from './pages/project';
import Red from './Testing/Red';

import './styles/index.scss';

// Main container for the whole website
const MainContainer = styled.div`
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 250px 1fr;
  /* Set height of website to 100% of screen height */
  height: 100vh;
`;

// https://reacttraining.com/react-router/web/api/Switch

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <BrowserRouter>
          {/* Render the sidebar on all pages */}
          <Route path="/" component={Sidebar} />
          <Switch>
            {/* <Route path="/" component={TopBar} /> */}
            <Route path="/" exact component={HomePage} />
            <Route path="/test" exact component={APITest} />
            <Route path="/create-account" component={CreateAccout} />
            <Route path="/red" component={Red} />
            <Route path="/projects/:name" component={project} />
            <Route path="/projects" component={projects} />
          </Switch>
        </BrowserRouter>
      </MainContainer>
    );
  }
}

export default App;
