import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import Sidebar from './components/Sidebar';
// import TopBar from './components/TopBar';
import HomePage from './pages/homePage';
import APITest from './Admin/APITest';
import Admin from './Admin/Admin';
import projects from './pages/projectsPage';
import projectPage from './pages/projectPage';
import cv from './pages/cv';
import blog from './pages/blog';
import blogpostPage from './pages/blogpostPage';
import threeShaders from './pages/threeShaders';
import tutorialsPage from './pages/tutorialsPage';

// import { autoSignIn } from './redux/actions/userActions';
import { setTheme } from './redux-toolkit/slices/siteConfigSlice';

import { DARK_THEME, LIGHT_THEME } from './constants/colors';
import { DESKTOP_XS } from './constants/sizes';

import './styles/index.scss';

// Main container for the whole website
const MainContainer = styled.div`
	display: grid;
	
	grid-template-areas:
		'sidebar'
		'main'
	;
	/* Make the menu at the top take up 90px and the main content the rest */
	grid-template-rows: 90px 1fr;
	/* vh: Relative to 1% of the height of the viewport* */
	/* The webpage should always stretch the entire viewport */
	height: 100vh;

	background-color: ${(props) => (props.theme.main === 'LIGHT' ? LIGHT_THEME.BACKGROUND : DARK_THEME.BACKGROUND)};
	color: ${(p) => (p.theme.main === 'LIGHT' ? LIGHT_THEME.TEXT : DARK_THEME.TEXT)};

	/* Place the menu to the left when the screen is wide enough */
	@media (min-width: ${DESKTOP_XS}) {
		grid-template-areas: 'sidebar main';
		grid-template-columns: 200px 1fr;
		grid-template-rows: 1fr;
	}
`;

const App = () => {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();

  useEffect(() => {
    var storedTheme = localStorage.getItem('theme');
    if (!storedTheme) storedTheme = 'DARK';
    dispatch(setTheme({ storedTheme }));
    //dispatch(autoSignIn());
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', config.theme);
  })

  return (
    <ThemeProvider theme={{ main: config.theme }}> {/*Pass the theme down to all components*/}
      <MainContainer >
        <BrowserRouter>
          {/* // https://reacttraining.com/react-router/web/api/Switch */}
          {/* Render the sidebar on all pages */}
          <Route path="/" component={Sidebar} />
          <Switch>
            {/* <Route path="/" component={TopBar} /> */}
            {/* Matching works by checking if the string assigned to path exits in the url string path in the browser <Switch> makes sure that we only render the first match! */}
            <Route path="/" exact component={HomePage} />
            <Route path="/test" exact component={APITest} />
            <Route path="/admin" component={Admin} />
            {/* <Route path="/cv" component={cv} /> */}
            <Route path="/projects/:name" component={projectPage} />
            <Route path="/projects" component={projects} />
            {/* <Route path="/blogposts/:name" component={blogpostPage} /> */}
            {/* <Route path="/blogposts" component={blog} /> */}
            <Route path="/shaders" component={threeShaders} />
            <Route path="/tutorials" component={tutorialsPage} />
            <Route
              render={() => {
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </MainContainer>
    </ThemeProvider>
  );
};
export default App;
