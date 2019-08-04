import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import {
  BASE02,
  BASE2,
  BASE03,
  GREEN,
  ORANGE,
  YELLOW,
  CYAN,
  BLUE,
  BASE0,
  BASE1,
  BASE2_SATURATED,
  BASE3
} from '../constants/colors';
import { DESKTOP_XS } from '../constants/sizes';

import { setTheme, toggleTheme } from '../redux/actions/appSettingsActions';

const StyledSidebar = styled.div`
  grid-area: sidebar;
  padding: 10px;
  height: auto;
  position: sticky;
  top: 0;
  background-color: ${p => (p.theme === 'LIGHT' ? BASE2_SATURATED : BASE03)};
  z-index: 100;
  /* color: ${p => (p.theme === 'LIGHT' ? 'black' : BASE1)}; */

  display: grid;
  grid-template-areas: "name options" "nav options";
  grid-template-columns: 1fr auto;

  @media (min-width: ${DESKTOP_XS}) {
    height: 100vh;
    padding: 20px;
    display: block;
    /* grid-template-areas: "name"  "nav" "options";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto; */
  }
`;

const Name = styled.div`
  grid-area: name;
  font-size: 1.7em;
  margin-bottom: 5px;
  color: ${ORANGE};

  @media (min-width: ${DESKTOP_XS}) {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.2em;
  margin-bottom: 5px;
  margin-right: 20px;
  text-decoration: none;
  outline: none;
  color: ${p => (p.theme === 'LIGHT' ? BASE03 : BASE2)};

  :hover {
    text-decoration: underline;
  }
`;

const SidebarLink = styled(StyledLink)`
  /* Keep the button highlighted when de-focused or page refreshes */
  ${props =>
    props.path === props.to &&
    css`
      color: ${p => (p.theme === 'LIGHT' ? BLUE : BLUE)};
    `}

  @media (min-width: ${DESKTOP_XS}) {
    display: block;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  grid-area: options;
  width: 70px;
  height: 70px;
  border-radius: 50%;

  background-color: ${p => (p.theme === 'LIGHT' ? BASE2_SATURATED : BASE03)};
  color: ${p => (p.theme === 'LIGHT' ? BASE03 : BASE2)};

  @media (min-width: ${DESKTOP_XS}) {
    position: absolute;
    /* align-self: bottom; */
    width: 100px;
    height: 100px;
    bottom: 75px;
    left: 75px;
  }
`;

const Sidebar = props => {
  const [urlPath, setUrlPath] = useState(null);
  const theme = useSelector(state => state.appSettings.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    var storedTheme = localStorage.getItem('theme');
    if (!storedTheme) storedTheme = 'LIGHT';
    dispatch(setTheme(storedTheme));
    console.log('Called on mount!');
  }, []);

  useEffect(() => {
    setUrlPath(props.location.pathname);
    if (theme) localStorage.setItem('theme', theme);
  });

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  if (!theme) return null;

  return (
    <StyledSidebar theme={theme}>
      <Name>Staffan Sandberg</Name>
      <span>
        <SidebarLink theme={theme} path={urlPath} to="/">
          About
        </SidebarLink>
        <SidebarLink theme={theme} path={urlPath} to="/projects">
          Projects
        </SidebarLink>
        <SidebarLink theme={theme} path={urlPath} to="/cv">
          CV
        </SidebarLink>
        <SidebarLink theme={theme} path={urlPath} to="/blog">
          Blog
        </SidebarLink>
      </span>
      <Button theme={theme} onClick={handleThemeToggle}>
        {theme === 'LIGHT' ? 'Dark' : 'Light'}
      </Button>
    </StyledSidebar>
  );
};

export default Sidebar;
