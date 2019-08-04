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

const StyledSidebar = styled.div`
  grid-area: sidebar;
  padding: 10px;
  height: auto;
  position: sticky;
  top: 0;
  background-color: ${p => (p.theme === 'LIGHT' ? BASE2_SATURATED : BASE03)};
  /* color: ${p => (p.theme === 'LIGHT' ? 'black' : BASE1)}; */

  @media (min-width: ${DESKTOP_XS}) {
    height: 100vh;
    padding: 20px;
  }
`;

const Name = styled.div`
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

const Sidebar = props => {
  const [urlPath, setUrlPath] = useState(null);
  const theme = useSelector(state => state.appSettings.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    setUrlPath(props.location.pathname);
  });

  console.log(theme);

  return (
    <StyledSidebar theme={theme}>
      <Name>Staffan Sandberg</Name>
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
    </StyledSidebar>
  );
};

export default Sidebar;
