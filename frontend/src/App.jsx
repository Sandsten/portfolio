import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import Sidebar from './Components/Sidebar';
import HomePage from './Content/RootPages/homePage';
import APITest from './Admin/APITest';
import Admin from './Admin/Admin';
import projects from './Content/RootPages/projectsPage';
import projectPage from './Content/Projects/projectPage';
import blogPage from './Content/RootPages/blogPage';
import threeShaders from './Content/Projects/threeShaders';
import tutorialsPage from './Content/RootPages/tutorialsPage';
import guitarPage from './Content/RootPages/guitarPage';

// import { autoSignIn } from './redux/actions/userActions';
import { setTheme } from './Redux/slices/siteConfigSlice';

import { DESKTOP_XS } from './Constants/sizes';

import mastersThesis from './Content/Projects/mastersThesis';
import { HealthyGamerGlossaryToAnki } from './Content/Blogposts/healthyGamerGlossaryToAnkiPage';

// Main container for the whole website
const MainContainer = styled.div`
	display: grid;
	
	grid-template-areas:
		'sidebar'
		'main'
	;
	/* Make the menu at the top take up 90px and the main content the rest */
	grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;

	/* vh: Relative to 1% of the height of the viewport* */
	/* The webpage should always stretch the entire viewport */
  /* IMPORTANT: Only set 100vh here! All content placed inside will inherit automatically*/
	height: 100vh;

	background-color: ${(p) => (p.theme.colors.BACKGROUND)};
	color: ${(p) => (p.theme.colors.TEXT)};

	/* Place the menu to the left when the screen is wide enough */
	@media (min-width: ${DESKTOP_XS}) {
		grid-template-areas: 'sidebar main';
		grid-template-columns: 200px 1fr;
		grid-template-rows: 1fr;
	}
`;

const App = () => {
  const themeColors = useSelector((state) => state.config.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    var storedTheme = localStorage.getItem('theme');
    if (!storedTheme) storedTheme = 'dark';
    dispatch(setTheme({ storedTheme }));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', themeColors.NAME);
  });

  return (
    <ThemeProvider theme={{ colors: themeColors }}> {/*Pass the theme down to all components*/}
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
            <Route path="/projects/masters-thesis" component={mastersThesis} />
            <Route path="/projects/:name" component={projectPage} />
            <Route path="/projects" component={projects} />
            {/* <Route path="/blogposts/:name" component={blogpostPage} /> */}
            {/* <Route path="/blogposts" component={blog} /> */}
            <Route path="/shaders" component={threeShaders} />
            <Route path="/tutorials" component={tutorialsPage} />
            <Route path="/posts/healthy-gamer-glossary-to-anki" component={HealthyGamerGlossaryToAnki} />
            <Route path="/posts" component={blogPage} />
            <Route path="/guitar" component={guitarPage} />
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
