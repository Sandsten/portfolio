import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BASE02, BASE2, BASE03, GREEN, ORANGE, YELLOW, CYAN } from '../constants/colors';

const StyledSidebar = styled.div`
  grid-area: sidebar;
  padding: 20px;
  background-color: ${BASE2};
`;

const Name = styled.div`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: ${GREEN};
`;

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  font-size: 1.2em;
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

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Name>Staffan Sandberg</Name>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/tutorials">Tutorials</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledSidebar>
  );
};

export default Sidebar;
