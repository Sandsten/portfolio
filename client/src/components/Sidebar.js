import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { BASE02, BASE2, BASE03, GREEN, ORANGE, YELLOW, CYAN, BASE0, BASE1, BASE2_SATURATED } from '../constants/colors';
import { DESKTOP_XS } from '../constants/sizes';

const StyledSidebar = styled.div`
  grid-area: sidebar;
  padding: 10px;
  height: auto;
  background-color: ${BASE2_SATURATED};
  position: sticky;
  top: 0;

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
  color: ${BASE03};

  :hover {
    text-decoration: underline;
  }

  :focus {
    color: ${CYAN};
  }
`;

const SidebarLink = styled(StyledLink)`
  /* Keep the button highlighted when de-focused or page refreshes */
  ${props =>
    props.path === props.to &&
    css`
      color: ${CYAN};
    `}

  @media (min-width: ${DESKTOP_XS}) {
    display: block;
    margin-bottom: 20px;
  }
`;

const Sidebar = props => {
  const [urlPath, setUrlPath] = useState(null);

  useEffect(() => {
    setUrlPath(props.location.pathname);
  });

  return (
    <StyledSidebar>
      <Name>Staffan Sandberg</Name>
      <SidebarLink path={urlPath} to="/">
        About
      </SidebarLink>
      <SidebarLink path={urlPath} to="/projects">
        Projects
      </SidebarLink>
      <SidebarLink path={urlPath} to="/cv">
        CV
      </SidebarLink>
      <SidebarLink path={urlPath} to="/blog">
        Blog
      </SidebarLink>
    </StyledSidebar>
  );
};

export default Sidebar;
