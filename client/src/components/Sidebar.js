import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BLACK } from '../constants/colors';

const StyledSidebar = styled.div`
  grid-area: sidebar;
  padding: 20px;
  height: 100vh;
  background-color: #e1e0dd;
`;

const Name = styled.div`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  font-size: 1.2em;
  text-decoration: none;
  color: ${BLACK};

  :hover {
    text-decoration: underline;
  }
`;

export default function Sidebar() {
  console.log(window.innerHeight);

  return (
    <StyledSidebar height={window.innerHeight}>
      <Name>Staffan Sandberg</Name>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/tutorials">Tutorials</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledSidebar>
  );
}
