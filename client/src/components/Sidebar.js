import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { BASE00, BASE2, BASE03, ORANGE, BASE0, BASE1, BASE2_SATURATED, BLUE, YELLOW } from '../constants/colors';
import { DESKTOP_XS } from '../constants/sizes';
import { setTheme, toggleTheme } from '../redux/actions/appSettingsActions';

const StyledSidebar = styled.div`
  grid-area: sidebar;
  padding: 10px;
  height: auto;
  position: sticky; /*Important that the parent has the correct height for this to work properly*/
  top: 0;
  background-color: ${p => (p.theme === 'LIGHT' ? BASE2_SATURATED : BASE03)};
  z-index: 100;

  display: grid;
  grid-template-areas: 'name options' 'nav options';
  grid-template-columns: 1fr auto;

  @media (min-width: ${DESKTOP_XS}) {
    height: 100vh;
    padding: 20px;
    display: block;
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

const ThemeButton = ({ className, width = 24, height = 24, handleClick }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      onClick={handleClick}
    >
      <defs>
        <path id="a" d="M0 0h24v24H0V0z" />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
      <path
        d="M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z"
        clipPath="url(#b)"
      />
    </svg>
  );
};

const StyledThemeButton = styled(ThemeButton)`
  grid-area: options;
  fill: ${p => (p.theme === 'LIGHT' ? BASE03 : BASE2_SATURATED)};

  :hover {
    cursor: pointer;
    fill: ${p => (p.theme === 'LIGHT' ? 'black' : YELLOW)};
  }

  @media (min-width: ${DESKTOP_XS}) {
    position: absolute;
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

  // This is equivalent to componentDidMount
  useEffect(() => {
    var storedTheme = localStorage.getItem('theme');
    if (!storedTheme) storedTheme = 'LIGHT';
    dispatch(setTheme(storedTheme));
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
      <StyledThemeButton theme={theme} width="50" height="50" handleClick={handleThemeToggle} />
    </StyledSidebar>
  );
};

export default Sidebar;
