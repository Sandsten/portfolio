import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';
// import TopBar from './components/TopBar';
import HomePage from './pages/homePage';
import APITest from './Testing/APITest';
import CreateAccout from './Testing/CreateAccount';
import projects from './pages/projects';
import projectPage from './pages/projectPage';
import cv from './pages/cv';
import blog from './pages/blog';

import { autoSignIn } from './redux/actions/userActions';

import { DESKTOP_XS } from './constants/sizes';

import './styles/index.scss';

// Main container for the whole website
const MainContainer = styled.div`
  display: block;
  /* Set height of website to 100% of screen height */
  /* height: 100vh; */

  @media (min-width: ${DESKTOP_XS}) {
    display: grid;
    grid-template-areas: 'sidebar main';
    grid-template-columns: 250px 1fr;
  }
`;

class App extends React.Component {
  componentDidMount() {
    this.props.autoSignIn();
  }

  render() {
    return (
      <MainContainer>
        <BrowserRouter>
          {/* // https://reacttraining.com/react-router/web/api/Switch */}
          {/* Render the sidebar on all pages */}
          <Route path="/" component={Sidebar} />
          <Switch>
            {/* <Route path="/" component={TopBar} /> */}
            {/* Matching works by checking if the string assigned to path exits in the url string path in the browser <Switch> makes sure that we only render the first match! */}
            <Route path="/" exact component={HomePage} />
            <Route path="/test" exact component={APITest} />
            <Route path="/admin-login" component={CreateAccout} />
            <Route path="/cv" component={cv} />
            <Route path="/projects/:name" component={projectPage} />
            <Route path="/projects" component={projects} />
            <Route path="/blog" component={blog} />
            <Route
              render={() => {
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </MainContainer>
    );
  }
}

export default connect(
  null,
  { autoSignIn }
)(App);
